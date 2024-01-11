import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import type { PlayInfoType } from '@/interface/matchList'
import { gameInfoStore } from '@/store/gameInfo'
import addShopCartHook from '@/hooks/addShopCartHook'
import type { BetType } from '@/interface/shopCart'
import { shopCartStore } from '@/store/shopCart'
import LockIcon from '@/assets/icons/lock.png'
import WinIcon from '@/assets/icons/status-1.png'
import FailIcon from '@/assets/icons/status-2.png'

export default function detailTeamPointHook(
  playInfo: PlayInfoType,
  index: number,
) {
  const { oddInfoCache, matchDetailQuery } = storeToRefs(gameInfoStore())

  const betType: BetType | any = matchDetailQuery.value?.betType || 'single'

  const theMatchPoint = computed(() => {
    return undefined
  })

  const currentPlayInfo = computed(() => {
    if (theMatchPoint.value) {
      return Object.assign({}, playInfo, theMatchPoint.value)
    }
    else {
      return playInfo
    }
  })

  /**
   * @description 展示的TeamPoint数据
   * */
  const currentTeamPointInfo = computed(() => {
    if (
      currentPlayInfo.value.team_points
      && currentPlayInfo.value.team_points.length >= index
    ) {
      const tempTeamPoint = oddInfoCache.value.find((team) => {
        return (
          +team.point_id
          === +(currentPlayInfo.value as any).team_points[index].id
        )
      })
      const playTeamPoint = (playInfo as any).team_points.find((team: any) => {
        return (
          +team.id === +(currentPlayInfo.value as any).team_points[index].id
        )
      })
      if (tempTeamPoint) {
        return Object.assign(
          currentPlayInfo.value.team_points[index],
          tempTeamPoint,
          { desc: playTeamPoint?.desc || '' },
        )
      }
      else {
        return Object.assign(currentPlayInfo.value.team_points[index], {
          desc: playTeamPoint?.desc || '',
        })
      }
    }
    else {
      return undefined
    }
  })

  const { parlayIds, singleIds } = storeToRefs(shopCartStore())

  const hasAdd = computed(() => {
    return betType === 'single'
      ? singleIds.value.includes(String(currentTeamPointInfo.value?.id || ''))
      : parlayIds.value.includes(String(currentTeamPointInfo.value?.id || ''))
  })

  /**
   * @description 变赔类型 none无变化 bigger赔率变大 smaller赔率变小
   * */
  const animateType: Ref<'none' | 'bigger' | 'smaller'> = ref('none')

  let animateTimer: any = null

  /**
   * @description 监听currentTeamPointInfo的值，根据赔率变化设置动画
   * */
  watch(
    () => currentTeamPointInfo.value?.point,
    (newVal, oldVal) => {
      if (!newVal || !oldVal) {
        return
      }
      if (+newVal === +oldVal) {
        return
      }
      if (+newVal > +oldVal) {
        animateType.value = 'bigger'
      }
      if (+newVal < +oldVal) {
        animateType.value = 'smaller'
      }
      clearTimeout(animateTimer)
      animateTimer = null
      animateTimer = setTimeout(() => {
        animateType.value = 'none'
      }, 8000)
    },
    { deep: true },
  )

  const isDisabled = computed(() => {
    return (
      +currentTeamPointInfo.value?.status !== 1
      || currentTeamPointInfo.value?.win_loss_status
    )
  })

  /**
   * @description 比赛状态的icon展示图标
   * @return lock锁盘 | gaming游戏中 | win胜利 | fail失败
   * */
  const statusIcon = computed<any[]>(() => {
    if (!currentTeamPointInfo.value) {
      return []
    }
    if (
      currentTeamPointInfo.value
      && currentTeamPointInfo.value.win_loss_status
    ) {
      if (+(currentTeamPointInfo.value as any).win_loss_status === 1) {
        return [WinIcon, false]
      }
      if (+(currentTeamPointInfo.value as any).win_loss_status === 2) {
        return [FailIcon, false]
      }
    }
    if (isDisabled.value) {
      return [LockIcon, true]
    }
    return []
  })

  const { addShopCart } = addShopCartHook()

  /**
   * @description 添加购物车
   * */
  function toAddShopCart() {
    if (animateType.value !== 'none') {
      clearTimeout(animateTimer)
      animateTimer = null
      animateType.value = 'none'
      // return
    }
    if (!(currentPlayInfo.value as any) || !currentTeamPointInfo.value) {
      return
    }
    addShopCart(
      currentPlayInfo.value as any,
      currentTeamPointInfo.value,
      betType,
    )
  }

  onMounted(() => {
    nextTick(() => {
      const teamPointIds: string = matchDetailQuery.value.teamPointIds || ''
      if (teamPointIds) {
        let teamPointIdsArr: string[] = teamPointIds.split(',')
        if (teamPointIdsArr.includes(String(currentTeamPointInfo.value?.id))) {
          teamPointIdsArr = teamPointIdsArr.filter(
            (ps: any) => +ps !== +(currentTeamPointInfo.value?.id || 0),
          )
          matchDetailQuery.value.teamPointIds = teamPointIdsArr.join(',')
          toAddShopCart()
        }
      }
    })
  })

  return {
    currentTeamPointInfo,
    animateType,
    statusIcon,
    toAddShopCart,
    hasAdd,
    isDisabled,
  }
}
