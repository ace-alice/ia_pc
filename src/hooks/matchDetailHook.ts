/* eslint-disable @typescript-eslint/no-use-before-define */
import type { Ref } from 'vue'
import {
  computed,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  provide,
  ref,
} from 'vue'
import type { MatchDetailType } from '@/interface/matchList'
import { toMatchDetailFun } from '@/api/store-game-info'
import { getCurrentPlayName, getCurrentPointName, setItemName } from '@/utils'
import { gameInfoStore } from '@/store/gameInfo'

/**
 * @description 获取比赛详情的接口参数
 * */
interface GetDetailFormType {
  game_id: number | string
  category_id: 1 | 2 | 3
}

export default function matchDetailHook() {
  const matchDetail: Ref<MatchDetailType> | Ref<any> = ref({})

  const { matchDetailAccIds, matchDetailQuery } = storeToRefs(gameInfoStore())

  /**
   * @description 获取赛事详情
   * @param form GetDetailFormType 获取比赛详情的接口参数
   * */
  function getMatchDetail(form: GetDetailFormType) {
    matchDetailAccIds.value = []
    toMatchDetailFun(form).then((res: any) => {
      if (+res.data.code === 1) {
        matchDetail.value = res.data.data
        setTimeout(() => {
          init.value = true
        }, 100)
      }
    })
  }

  const acceptcChangePointIds = computed(() => {
    if (!matchDetailQuery.value.show) {
      return []
    }
    const ids: string[] = [];
    (matchDetail.value.plays || []).forEach((boD: any) => {
      boD.child_plays.forEach((childD: any) => {
        childD.team_points.forEach((teamD: any) => {
          ids.push(String(teamD.id))
        })
      })
    })
    return [...new Set(ids)]
  })

  watch(() => acceptcChangePointIds.value, () => {
    matchDetailAccIds.value = acceptcChangePointIds.value
  }, { deep: true })

  provide('team_logo_1', computed(() => matchDetail.value.team_logo_1 || ''))

  provide('team_logo_2', computed(() => matchDetail.value.team_logo_2 || ''))

  provide('gameType', computed(() => matchDetail.value.game_type_id || 0))

  const roundList = computed(() => {
    return matchDetail.value.plays
      .filter((plays: any) => plays.child_plays.length > 0)
      .map((play: any) => {
        return setItemName(+play.bo, play.stage_name)
      })
  })

  const tabIndex = ref(0)

  const showChart = ref(false)

  const showVideo = ref(+(matchDetailQuery.value.video || 0) === 1 || false)

  function showVideoHandle() {
    showVideo.value = !showVideo.value
    if (showVideo.value) {
      showAnimate.value = false
      showChart.value = false
      showDataOfMatch.value = false
    }
  }

  const showAnimate = ref(+(matchDetailQuery.value.video || 0) === 2 || false)

  function showAnimateHandle(tag = true) {
    if (tag) {
      showAnimate.value = !showAnimate.value
    }
    else {
      showAnimate.value = false
    }
    if (showAnimate.value) {
      showVideo.value = false
      showChart.value = false
      showDataOfMatch.value = false
    }
  }

  const hasDataOfMatch = computed(() => {
    return matchDetail.value.id && matchDetail.value.is_bind_ant_before_game_info
  })

  provide('hasDataOfMatch', computed(() => hasDataOfMatch.value))

  const showDataOfMatch = ref(+(matchDetailQuery.value.video || 0) === 3 || false)

  function showDataOfMatchHandle() {
    showDataOfMatch.value = !showDataOfMatch.value
    if (showDataOfMatch.value) {
      showAnimate.value = false
      showChart.value = false
      showVideo.value = false
    }
  }

  provide(
    'showChart',
    computed(() => showChart.value),
  )

  provide(
    'showVideo',
    computed(() => showVideo.value),
  )

  provide(
    'showAnimate',
    computed(() => showAnimate.value),
  )

  provide(
    'showDataOfMatch',
    computed(() => showDataOfMatch.value),
  )

  const filterValue = ref<'all' | 'handicap' | 'over'>('all')

  provide('filterValue', computed(() => filterValue.value))

  function emitChangeFilterValue(status: 'all' | 'handicap' | 'over') {
    if (filterValue.value === status) {
      filterValue.value = 'all'
    }
    else {
      filterValue.value = status
    }
  }

  function changeChartStatus(tag: boolean) {
    showChart.value = tag
  }

  function setTabIndex(index: number) {
    tabIndex.value = index
  }

  const init = ref(false)

  const { proxy }: any = getCurrentInstance()

  const { pushOddInfo } = gameInfoStore()

  function team_score_set(data: any) {
    matchDetail.value.score_1 = data.score_1
    matchDetail.value.score_2 = data.score_2
  }

  function bet_item_all_lock(data: any) {
    if (data.action === 'play') {
      matchDetail.value.plays.forEach((matchBo: any) => {
        const playInfo = matchBo.child_plays.find((play: any) => {
          return +play.id === +data.play_id
        })
        if (playInfo) {
          playInfo.team_points.forEach((team: any) => {
            pushOddInfo({ point_id: team.id, status: data.status })
          })
        }
      })
      return
    }
    if (data.action === 'warning') {
      return
    }
    getMatchDetail({
      game_id: matchDetailQuery.value.game_id,
    } as any)
  }

  function point_display_on(data: any) {
    if (data.isAdd || !data.is_hide) {
      if (
        data.play_info
        && Array.isArray(data.play_info.child_plays)
        && data.play_info.child_plays.length > 0
      ) {
        const childPlays = data.play_info.child_plays.map((child: any) => {
          const teamPoints = child.team_points.map((teamPoint: any) => {
            return Object.assign({}, teamPoint, {
              desc: getCurrentPointName(teamPoint),
            })
          })
          return Object.assign({}, child, {
            name: getCurrentPlayName(child),
            team_points: teamPoints,
          })
        })

        const idx = matchDetail.value.plays.findIndex((playBo: any) => {
          return +playBo.bo === data.play_info.bo
        })

        if (idx === -1) {
          const indx = matchDetail.value.plays.findIndex((playBo: any) => {
            return +playBo.bo < data.play_info.bo
          })
          matchDetail.value.plays.splice(
            indx === -1 ? 0 : indx,
            0,
            Object.assign({}, data.play_info, { child_plays: childPlays }),
          )
        }
        else {
          matchDetail.value.plays[idx].child_plays = [
            ...matchDetail.value.plays[idx].child_plays,
            ...childPlays,
          ]
        }
      }
    }
    else {
      if (Array.isArray(matchDetail.value.plays)) {
        matchDetail.value.plays.forEach((element: any, index: number) => {
          if (Array.isArray(element.child_plays)) {
            element.child_plays.forEach((ele: any, idx: number) => {
              if (+ele.id === +data.play_id) {
                matchDetail.value.plays[index].child_plays.splice(idx, 1)
              }
            })
          }
        })
      }
    }
  }

  function handicap_to_live() {
    matchDetail.value.category_id = 3
  }

  function message_type_game_play_edit(data: any) {
    matchDetail.value.game_start_time = data.game_start_time
  }

  onMounted(() => {
    getMatchDetail({
      game_id: matchDetailQuery.value.game_id,
    } as any)

    proxy.mittBus.on(
      'changeMatchDetailBus',
      ({
        pushType,
        data,
      }: {
        pushType:
        | 'team_score_set'
        | 'bet_item_all_lock'
        | 'point_display_on'
        | 'handicap_to_live'
        | 'message_type_game_play_edit'
        data: any
      }) => {
        switch (pushType) {
          case 'team_score_set':
            team_score_set(data)
            break
          case 'bet_item_all_lock':
            bet_item_all_lock(data)
            break
          case 'point_display_on':
            point_display_on(data)
            break
          case 'handicap_to_live':
            handicap_to_live()
            break
          case 'message_type_game_play_edit':
            message_type_game_play_edit(data)
            break
        }
      },
    )
  })

  onUnmounted(() => {
    proxy.mittBus.off('changeMatchDetailBus')
    matchDetailAccIds.value = []
  })
  return {
    matchDetail,
    roundList,
    tabIndex,
    setTabIndex,
    showChart,
    changeChartStatus,
    init,
    showVideo,
    showVideoHandle,
    showAnimate,
    showAnimateHandle,
    showDataOfMatch,
    showDataOfMatchHandle,
    hasDataOfMatch,
    emitChangeFilterValue,
  }
}
