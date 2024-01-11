import type { ComputedRef, Ref } from 'vue'
import {
  computed,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
} from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { getMatchList } from '@/api/store-game-info'
import type { HandicapType, MatchListType } from '@/interface/matchList'
import { gameInfoStore } from '@/store/gameInfo'
import { i18n } from '@/locale'
import {
  getCurrentEventName,
  getCurrentPlayName,
  getCurrentPointName,
  getCurrentStageName,
  getCurrentTeam1Name,
  getCurrentTeam2Name,
  parseTime,
  timeOffset,
} from '@/utils'
type PushType =
  | 'team_score_set'
  | 'handicap_display'
  | 'bet_item_all_lock'
  | 'point_display_on'
  | 'game_play_set_recommend'
  | 'handicap_to_live'
  | 'message_type_game_play_edit'

/**
 *@description 盘口列表的获取与处理 hook
 *@param handicap "today:今日" | "fix:早盘" | "live:滚球" | "end:赛果" | "favorite:收藏" | “hot:热门” | "串关:parlay" 盘口名称
 *@return {matchList&currentMatchList}
 **/
export default function getUniversalListHook(handicap: HandicapType) {
  const isEnd = handicap === 'end'
  // const betType: BetType = handicap === "parlay" ? "parlay" : "single";

  provide('betType', handicap === 'parlay' ? 'parlay' : 'single')

  provide('handicap', handicap)

  const { currentGameId, checkedEvenList, matchListAccIds, matchHotAccIds }
    = storeToRefs(gameInfoStore())

  const { setInitHandicap, pushOddInfo } = gameInfoStore()

  const currentDate = ref<string | number>('all')

  const router = useRouter()

  const weekDateOptions: Ref<any[]> = ref([
    {
      label: i18n.global.t('all'),
      data: 'All',
      dataValue: 'all',
      isToday: false,
    },
  ])

  if (isEnd) {
    const arr: any = []
    for (let i = 0; i < 7; i++) {
      arr.push({
        label:
          i === 6
            ? i18n.global.t('today')
            : parseTime(timeOffset(i - 6), '{a}'),
        isToday: i === 6,
        data: parseTime(timeOffset(i - 6), '{d}'),
        dataValue: dayjs()
          .subtract(6 - i, 'day')
          .startOf('date')
          .unix(),
      })
    }
    arr.reverse()
    weekDateOptions.value = [...weekDateOptions.value, ...arr]
  }
  else {
    for (let i = 0; i < 7; i++) {
      weekDateOptions.value.push({
        label:
          i === 0 ? i18n.global.t('today') : parseTime(timeOffset(i), '{a}'),
        isToday: i === 0,
        data: parseTime(timeOffset(i), '{d}'),
        dataValue: dayjs().add(i, 'day').startOf('date').unix(),
      })
    }
  }

  function changeCurrentDate(item: any) {
    currentDate.value = item.dataValue
  }

  /**
   * @description 盘口比赛列表
   * */
  const matchList: Ref<MatchListType> = ref([])

  /**
   * @description 目前展示的盘口比赛列表
   * */
  const matchListData: ComputedRef<MatchListType> = computed(() => {
    return matchList.value.filter((match) => {
      const offsetTime
        = currentDate.value === 'all'
          ? 0
          : Number(match.game_start_time) - Number(currentDate.value)
      return (
        handicap === 'hot'
        || ((currentDate.value === 'all'
          || (offsetTime < 86400 && offsetTime >= 0))
          && (+currentGameId.value === 0
            || +currentGameId.value === +match.game_type_id)
          && (checkedEvenList.value.length === 0
            || checkedEvenList.value.includes(String(match.event_id))))
      )
    })
  })

  function sortLive(a: any, b: any, c: any) {
    if (+a.category_id === +b.category_id) {
      return c
    }
    else {
      return b.category_id - a.category_id
    }
  }

  function gameTypeSort(a: any, b: any) {
    const aType = +a.game_type_id === 16 ? 3.5 : +a.game_type_id
    const bType = +b.game_type_id === 16 ? 3.5 : +b.game_type_id
    if (aType === bType) {
      return a.game_start_time - b.game_start_time
    }
    else {
      return aType - bType
    }
  }

  function sortFun(a: any, b: any) {
    if (+a.category_id === +b.category_id && +b.category_id === 3) {
      if (a.config_name && b.config_name) {
        if (a.config_name === b.config_name) {
          return gameTypeSort(a, b)
        }
        else {
          const isNumber = (v: any) => (+v).toString() === v
          const aPart = a.config_name.match(/\d+|\D+/g)
          const bPart = b.config_name.match(/\d+|\D+/g)
          let i = 0
          const len = Math.min(aPart.length, bPart.length)
          while (i < len && aPart[i] === bPart[i]) {
            i++
          }
          if (i === len) {
            return aPart.length - bPart.length
          }
          if (isNumber(aPart[i]) && isNumber(bPart[i])) {
            return aPart[i] - bPart[i]
          }
          return aPart[i].localeCompare(bPart[i])
        }
      }
      else if (a.config_name || b.config_name) {
        return a.config_name ? -1 : 1
      }
      else {
        return gameTypeSort(a, b)
      }
    }
    else {
      return a.game_start_time - b.game_start_time
    }
  }

  /**
   * @description 根据获取的数据更新比赛列表
   * @param newList MatchListType 获取的列表数据
   * */
  function toUpdateList(newList: MatchListType) {
    matchList.value = [...newList, ...matchList.value].sort(
      (a: any, b: any) => {
        if (handicap === 'live' || handicap === 'today') {
          return sortLive(a, b, sortFun(a, b))
        }
        if (isEnd) {
          return b.game_start_time - a.game_start_time
        }
        return sortLive(a, b, a.game_start_time - b.game_start_time)
      },
    )
  }

  /**
   * @description 接口是否再请求中
   * */
  const loadList = ref(false)

  /**
   * @description 获取列表的参数
   * */
  const formData = reactive({
    page: 0,
    nav_code: handicap,
  })

  const isFinish = ref(false)

  /**
   * @description 获取比赛列表数据
   * */
  function getList() {
    return new Promise((resolve) => {
      if (isFinish.value) {
        resolve(true)
        return
      }
      loadList.value = true
      const form: any = {}
      // if (isEnd) {
      //   if (+currentGameId.value) {
      //     form.type_id = +currentGameId.value
      //   }
      //   if (
      //     currentDate.value !== 'all'
      //     && typeof currentDate.value === 'number'
      //   ) {
      //     form.start_time = currentDate.value
      //     form.end_time = currentDate.value + 24 * 60 * 60 - 1
      //   }
      // }
      formData.page++
      getMatchList(Object.assign({}, formData, form))
        .then((res: any) => {
          if (+res.data.code === 1) {
            if (formData.page === 1) {
              matchList.value = []
            }
            toUpdateList(res.data.data.data)
            // 是否已经加载完该条件下的所有数据
            if (
              formData.page * 30 >= +(res.data.data.total || 0)
              || res.data.data.data.length < 30
            ) {
              // if (!isEnd && handicap !== 'hot') {
              //   proxy.mittBus.emit('toTopActiveBus')
              // }
              return (isFinish.value = true)
            }
            if (isEnd && formData.page >= 3) {
              return
            }
            getList()
          }
        })
        .catch(() => {
          formData.page--
        })
        .finally(() => {
          loadList.value = false
          resolve(true)
        })
    })
  }

  /**
   * @description 重新加载数据
   * */
  function refreshList() {
    formData.page = 0
    isFinish.value = false
    getList()
  }

  const { proxy }: any = getCurrentInstance()

  const acceptcChangePointIds = computed(() => {
    const ids: string[] = []
    matchList.value.forEach((match: any) => {
      (match.recommend_play?.team_points || []).forEach((childD: any) => {
        ids.push(String(childD.id))
      })
    })
    return [...new Set(ids)]
  })

  watch(
    () => acceptcChangePointIds.value,
    (newVal) => {
      if (handicap === 'hot') {
        matchHotAccIds.value = newVal
      }
      else {
        matchListAccIds.value = newVal
      }
    },
    { deep: true },
  )

  /**
   * @description 跳转投注详情页
   * */
  const matchDetail = (game_id: number, category_id: number) => {
    router.push({
      name: 'MatchDetail',
      query: {
        game_id,
        category_id,
        betType: handicap === 'parlay' ? 'parlay' : 'single',
      },
    })
  }

  function bet_item_all_lock(data: any) {
    const match = matchList.value.find((match) => {
      return +match.id === +data.game_id
    })
    if (
      match
      && data.action === 'play'
      && match?.recommend_play?.id
      && +data.play_id === +match?.recommend_play?.id
    ) {
      match?.recommend_play.team_points?.forEach((element: any) => {
        pushOddInfo({ point_id: element.id, status: data.status })
      })
    }
    if (
      match
      && data.action === 'match'
      && match?.recommend_play?.id
      && +data.match === match?.recommend_play?.match
    ) {
      match?.recommend_play.team_points?.forEach((element: any) => {
        pushOddInfo({ point_id: element.id, status: data.status })
      })
    }
    if (match && data.action === 'game' && match?.recommend_play?.id) {
      match?.recommend_play.team_points?.forEach((element: any) => {
        pushOddInfo({ point_id: element.id, status: data.status })
      })
    }
  }

  function handicap_display(data: any) {
    const idx = matchList.value.findIndex((match) => {
      return +match.id === +data.game_id
    })
    if (idx === -1 && !data.show) {
      return
    }
    let gameDetail: any = null
    if (data.list && data.list.id) {
      const team_name_1 = getCurrentTeam1Name(data.list)
      const team_name_2 = getCurrentTeam2Name(data.list)
      const event_name = getCurrentEventName(data.list)
      let recommend_play = data.list.recommend_play
      if (
        !Array.isArray(data.list.recommend_play)
        && data.list.recommend_play.id
      ) {
        const teamPoints = data.list.recommend_play.team_points.map(
          (teamPoint: any) => {
            return Object.assign({}, teamPoint, {
              desc: getCurrentPointName(teamPoint),
            })
          },
        )
        recommend_play = Object.assign({}, data.list.recommend_play, {
          name: getCurrentPlayName(data.list.recommend_play),
          team_points: teamPoints,
          stage_name: getCurrentStageName(data.list.recommend_play),
        })
      }
      gameDetail = Object.assign(data.list, {
        team_name_1,
        team_name_2,
        event_name,
        recommend_play,
      })
    }
    if (data.show && idx === -1) {
      toUpdateList([gameDetail])
    }
    if (!data.show && idx !== -1) {
      matchList.value.splice(idx, 1)
    }
    if (data.show && idx !== -1) {
      matchList.value.splice(idx, 1)
      toUpdateList([gameDetail])
    }
  }

  function team_score_set(data: any) {
    const idx = matchList.value.findIndex((match) => {
      return +match.id === +data.game_id
    })
    if (idx !== -1) {
      matchList.value[idx].score_1 = +data.score_1
      matchList.value[idx].score_2 = +data.score_2
    }
  }

  function point_display_on(data: any) {
    if (!data.is_hide) {
      if (
        data.play_info
        && Array.isArray(data.play_info.child_plays)
        && data.play_info.child_plays.length > 0
      ) {
        const idx = matchList.value.findIndex((match) => {
          return +match.id === +data.game_id
        })
        if (idx !== -1) {
          data.play_info.child_plays.forEach((element: any) => {
            if (element.is_recommend) {
              const teamPoints = element.team_points.map((teamPoint: any) => {
                return Object.assign({}, teamPoint, {
                  desc: getCurrentPointName(teamPoint),
                })
              })
              matchList.value[idx].recommend_play = Object.assign({}, element, {
                name: getCurrentPlayName(element),
                team_points: teamPoints,
              })
            }
          })
        }
      }
    }
    else {
      const idx = matchList.value.findIndex((match) => {
        return (
          +match.id === +data.game_id
          && match.recommend_play?.id
          && +match.recommend_play?.id === +data.play_id
        )
      })
      if (idx !== -1) {
        matchList.value[idx].recommend_play = {}
      }
    }
  }

  function game_play_set_recommend(data: any) {
    if (!+data.is_recommend) {
      const idx = matchList.value.findIndex((match) => {
        return (
          +match.id === +data.game_id
          && match.recommend_play?.id
          && +match.recommend_play?.id === +data.play_id
        )
      })
      if (idx !== -1) {
        matchList.value[idx].recommend_play = {}
      }
    }
    if (+data.is_recommend) {
      const idx = matchList.value.findIndex((match) => {
        return +match.id === +data.game_id
      })
      if (idx !== -1 && data.play_info.id) {
        const teamPoints = data.play_info.team_points.map((teamPoint: any) => {
          return Object.assign({}, teamPoint, {
            desc: getCurrentPointName(teamPoint),
          })
        })
        matchList.value[idx].recommend_play = Object.assign(
          {},
          data.play_info,
          {
            name: getCurrentPlayName(data.play_info),
            team_points: teamPoints,
            stage_name: getCurrentStageName(data.play_info),
          },
        )
      }
    }
  }

  function handicap_to_live(data: any) {
    const idx = matchList.value.findIndex((match) => {
      return +match.id === +data.game_id
    })
    if (idx !== -1) {
      matchList.value[idx].category_id = 3
      toUpdateList([])
    }
    if (handicap === 'live') {
      if (idx === -1) {
        let gameDetail: any = null
        if (data.list && data.list.id) {
          const team_name_1 = getCurrentTeam1Name(data.list)
          const team_name_2 = getCurrentTeam2Name(data.list)
          const event_name = getCurrentEventName(data.list)
          let recommend_play = data.list.recommend_play
          if (
            !Array.isArray(data.list.recommend_play)
            && data.list.recommend_play.id
          ) {
            const teamPoints = data.list.recommend_play.team_points.map(
              (teamPoint: any) => {
                return Object.assign({}, teamPoint, {
                  desc: getCurrentPointName(teamPoint),
                })
              },
            )
            recommend_play = Object.assign({}, data.list.recommend_play, {
              name: getCurrentPlayName(data.list.recommend_play),
              team_points: teamPoints,
              stage_name: getCurrentStageName(data.list.recommend_play),
            })
          }
          gameDetail = Object.assign(data.list, {
            team_name_1,
            team_name_2,
            event_name,
            recommend_play,
          })
          toUpdateList([gameDetail])
        }
      }
    }
    else if (handicap === 'fix') {
      if (idx !== -1) {
        matchList.value.splice(idx, 1)
      }
    }
  }

  function message_type_game_play_edit(data: any) {
    const idx = matchList.value.findIndex((match) => {
      return +match.id === +data.game_id
    })
    if (idx !== -1) {
      matchList.value[idx].game_start_time = data.game_start_time
      toUpdateList([])
    }
  }

  /**
   * @description 数据是否已经全部初始化（是否在游戏类型为全部是加载全部数据）
   * */
  let isInit = false

  onActivated(() => {
    if (isInit) {
      refreshList()
    }
  })

  onMounted(() => {
    /**
     * @description socket推送时触发的方法
     * @param gameId string socket推送的需要更新的赛事id
     * */
    setInitHandicap(handicap)
    proxy.mittBus.on(
      `${handicap}UpdateBus`,
      ({ pushType, data }: { pushType: PushType; data: any }) => {
        switch (pushType) {
          case 'bet_item_all_lock':
            bet_item_all_lock(data)
            break
          case 'handicap_display':
            handicap_display(data)
            break
          case 'team_score_set':
            team_score_set(data)
            break
          case 'point_display_on':
            point_display_on(data)
            break
          case 'game_play_set_recommend':
            game_play_set_recommend(data)
            break
          case 'handicap_to_live':
            handicap_to_live(data)
            break
          case 'message_type_game_play_edit':
            message_type_game_play_edit(data)
            break
        }
      },
    )
    if (!isInit) {
      getList()
      setTimeout(() => {
        isInit = true
      }, 100)
    }
  })

  onUnmounted(() => {
    proxy.mittBus.off(`${handicap}UpdateBus`)
  })

  return {
    matchList,
    currentGameId,
    matchListData,
    refreshList,
    getList,
    currentDate,
    weekDateOptions,
    changeCurrentDate,
    matchDetail,
    loadList,
    isFinish,
  }
}
