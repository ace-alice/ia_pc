/* eslint-disable @typescript-eslint/no-use-before-define */
// noinspection JSUnusedGlobalSymbols

import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { shopCartStore } from './shopCart'
import { getGameInfo, getHandicapList } from '@/api/store-game-info'
import type {
  GameItemType,
  HandicapItemType,
  HandicapType,
  PushAnimationInfoType,
  PushVideoInfoType,
} from '@/interface/gameInfo'
import type { PullPointsType } from '@/interface/matchList'
import { getCurrentEventName, getCurrentGameName } from '@/utils'

export const gameInfoStore = defineStore('gameInfo', () => {
  /**
   * @description 盘口列表
   * */
  const handicapList: Ref<HandicapItemType[]> = ref([])

  const currentHandicap = ref('today')

  /**
   * @description 获取盘口列表
   * */
  function toGetHandicapList() {
    return getHandicapList().then((res: any) => {
      if (+res.data.code === 1) {
        handicapList.value = res.data.data
      }
    })
  }

  const hasInitHandicap: Ref<string[]> = ref(['today'])

  function setInitHandicap(handicap: HandicapType) {
    if (!hasInitHandicap.value.includes(handicap)) {
      hasInitHandicap.value.push(handicap)
    }
  }

  function setHandicapValue(type: string) {
    matchListTop.value = 0
    currentHandicap.value = type
  }

  /**
   * @description 游戏列表
   * */
  const gameList: Ref<GameItemType[]> = ref([])

  /**
   * @description 获取游戏列表
   * */
  function toGetGameList() {
    return getGameInfo().then((res: any) => {
      if (+res.data.code === 1) {
        gameList.value = res.data.data
      }
    })
  }

  /**
   *  @description 接受推送盘口数量
   * **/
  function foreGroundTabCount(data: any[]) {
    const tempData = data.map((gameData) => {
      const events = gameData.events_count.events.map((eventsData: any) => {
        return {
          event_id: eventsData.event_id,
          event_name: getCurrentEventName(eventsData),
          match_amount: eventsData.match_amount,
        }
      })

      const events_count = {
        total: gameData.events_count.total,
        events,
      }
      return {
        tag_count: gameData.tag_count,
        sort: gameData.sort,
        id: gameData.id,
        logo: gameData.logo,
        game_name: getCurrentGameName(gameData),
        events_count,
      }
    })
    tempData.forEach((td) => {
      const idx = gameList.value.findIndex((game) => {
        return +game.id === +td.id
      })
      if (idx !== -1) {
        gameList.value.splice(idx, 1, td)
      }
    })
  }

  /**
   * @description 排序后的游戏列表
   * */
  const sortGameList = computed(() => {
    return gameList.value.sort((a: any, b: any) => {
      if (
        Number([0, 1, 2, 3, 16].includes(a.id))
        && Number([0, 1, 2, 3, 16].includes(b.id))
      ) {
        return 0
      }
      else if (
        Number([0, 1, 2, 3, 16].includes(a.id))
        && !Number([0, 1, 2, 3, 16].includes(b.id))
      ) {
        return 0
      }
      else if (
        !Number([0, 1, 2, 3, 16].includes(a.id))
        && Number([0, 1, 2, 3, 16].includes(b.id))
      ) {
        return 1
      }
      else {
        return (b.events_count?.total || 0) - (a.events_count?.total || 0)
      }
    })
  })

  /**
   *@description 当前选中的游戏id
   * **/
  const currentGameId: Ref<string> = ref('0')

  /**
   *@description 当前游戏
   * **/
  const currentGame = computed(() => {
    return gameList.value.find((game) => {
      return String(game.id) === currentGameId.value
    })
  })
  const router = useRouter()
  /**
   *@description 设置当前选中的游戏id
   * **/
  function setCurrentGameId(id: string) {
    // if (router.currentRoute.value.name !== 'MatchList') {
    //   router.push({ name: 'MatchList' })
    // }
    if (currentGameId.value !== id) {
      currentGameId.value = id
      checkedEvenList.value = []
      matchDetailQuery.value.show = false
    }
  }

  /**
   *@description 选中的赛事id
   * **/
  const checkedEvenList: Ref<string[]> = ref([])

  /**
   *@description 设置选中的赛事id
   *@param id 点击的赛事id
   * **/
  function setCheckedEvenList(id: string) {
    if (router.currentRoute.value.name !== 'MatchList') {
      router.push({ name: 'MatchList' })
    }
    if (id === 'clear') {
      checkedEvenList.value = []
      return
    }
    if (checkedEvenList.value.includes(id)) {
      checkedEvenList.value.splice(checkedEvenList.value.indexOf(id), 1)
    }
    else {
      if (id === 'all') {
        if (
          currentGame.value
          && currentGame.value.events_count
          && currentGame.value.events_count.events
        ) {
          if (
            checkedEvenList.value.length
            === currentGame.value.events_count.events?.length
          ) {
            checkedEvenList.value = []
            return
          }
          currentGame.value.events_count.events.forEach((detail: any) => {
            if (!checkedEvenList.value.includes(String(detail.event_id))) {
              checkedEvenList.value.push(String(detail.event_id))
            }
          })
        }
      }
      else {
        checkedEvenList.value.push(id)
      }
    }
  }

  /**
   *@description 初始化选中的赛事id
   * **/
  function initCheckedEvenList() {
    checkedEvenList.value = []
  }

  /**
   *@description 初始化游戏相关数据
   * **/
  function initGameInfo() {
    return Promise.all([toGetHandicapList(), toGetGameList()])
  }

  const totalHandicapList = computed(() => {
    return handicapList.value.map((hand) => {
      return Object.assign({}, hand, {
        count: currentGame.value?.tag_count[`${hand.code}`] || 0,
      })
    })
  })

  let timer: any = null
  const currentTime: Ref<number> = ref(0)
  function openTimer() {
    timer = setInterval(() => {
      currentTime.value = new Date().getTime()
    }, 1000)
  }
  function closeTimer() {
    clearInterval(timer)
    timer = null
    currentTime.value = 0
  }

  const { pushOddUpdate } = shopCartStore()

  const route = useRoute()

  const { shopCartList } = storeToRefs(shopCartStore())

  /**
   * @description 赔率推送缓存数据
   * */
  const oddInfoCache: Ref<PullPointsType[]> = ref([])

  const matchDetailAccIds = ref<string[]>([])

  const matchListAccIds = ref<string[]>([])

  const matchHotAccIds = ref<string[]>([])

  const accIds = computed(() => {
    return [
      ...new Set([
        ...matchDetailAccIds.value,
        ...matchListAccIds.value,
        ...matchHotAccIds.value,
      ]),
    ]
  })

  watch(
    () => accIds.value,
    () => {
      oddInfoCache.value = oddInfoCache.value.filter((info) => {
        return accIds.value.includes(String(info.point_id))
      })
    }, { deep: true },
  )

  function initOddRoom() {
    oddInfoCache.value = []
    videoInfoCache.value = []
    animationInfoCache.value = []
  }

  watch(
    () => [route.name, currentHandicap.value],
    () => {
      matchDetailAccIds.value = []
      matchListAccIds.value = []
      initOddRoom()
    },
  )

  /**
   * @description 设置赔率推送缓存数据
   * */
  function pushOddInfo(oddInfo: PullPointsType) {
    const shopIds = shopCartList.value.map(shop => String(shop.shop_id))
    const ids = [
      ...new Set([
        ...accIds.value,
        ...shopIds,
      ]),
    ]
    if (!ids.includes(String(oddInfo.point_id))) {
      return
    }
    pushOddUpdate(oddInfo)
    if (oddInfo.delta) {
      oddInfo.point = oddInfo.delta
      delete oddInfo.delta
    }
    const inx = oddInfoCache.value.findIndex((p) => {
      return +p.point_id === +oddInfo.point_id
    })
    if (inx === -1) {
      oddInfoCache.value.push(oddInfo)
    }
    else {
      oddInfoCache.value.splice(
        inx,
        1,
        Object.assign(oddInfoCache.value[inx], oddInfo),
      )
    }
  }

  /**
   * @description 视频推送缓存数据
   * */
  const videoInfoCache: Ref<PushVideoInfoType[]> = ref([])

  /**
   * @description 设置视频推送缓存数据
   * */
  function pushVideoInfo(videoInfo: PushVideoInfoType) {
    const inx = videoInfoCache.value.findIndex((video) => {
      return String(video.game_id) === String(videoInfo.game_id)
    })
    inx === -1
      ? videoInfoCache.value.push(videoInfo)
      : videoInfoCache.value.splice(inx, 1, videoInfo)
  }

  /**
   * @description 动画推送缓存数据
   * */
  const animationInfoCache: Ref<PushAnimationInfoType[]> = ref([])

  /**
   * @description 设置动画推送缓存数据
   * */
  function pushAnimationInfo(animationInfo: PushAnimationInfoType) {
    const inx = animationInfoCache.value.findIndex((animation) => {
      return String(animation.game_id) === String(animationInfo.game_id)
    })
    inx === -1
      ? animationInfoCache.value.push(animationInfo)
      : animationInfoCache.value.splice(inx, 1, animationInfo)
  }

  const matchListTop = ref(0)

  interface matchDetailQueryType {
    game_id: number
    betType?: 'single' | 'parlay'
    match?: number
    show: boolean
    is_end?: boolean
    video?: 1 | 2 | 3
    teamPointIds?: string
  }

  const matchDetailQuery = ref<matchDetailQueryType>({
    game_id: 0,
    betType: 'single',
    show: false,
  })

  return {
    foreGroundTabCount,
    initGameInfo,
    currentGameId,
    setCurrentGameId,
    checkedEvenList,
    setCheckedEvenList,
    initCheckedEvenList,
    gameList,
    toGetGameList,
    hasInitHandicap,
    setInitHandicap,
    handicapList,
    currentHandicap,
    setHandicapValue,
    toGetHandicapList,
    currentGame,
    totalHandicapList,
    currentTime,
    openTimer,
    closeTimer,
    oddInfoCache,
    pushOddInfo,
    videoInfoCache,
    pushVideoInfo,
    animationInfoCache,
    pushAnimationInfo,
    initOddRoom,
    sortGameList,
    matchListTop,
    matchDetailQuery,
    matchListAccIds,
    matchDetailAccIds,
    matchHotAccIds,
  }
})
