/* eslint-disable @typescript-eslint/no-use-before-define */
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import type { MatchType } from '@/interface/matchList'
import { gameInfoStore } from '@/store/gameInfo'
import addShopCartHook from '@/hooks/addShopCartHook'
import type { BetType } from '@/interface/shopCart'
import { shopCartStore } from '@/store/shopCart'
import LockIcon from '@/assets/icons/lock.png'
import WinIcon from '@/assets/icons/status-1.png'
import FailIcon from '@/assets/icons/status-2.png'

export default function teamPointHook(
  matchInfo: MatchType,
  betType: BetType,
  index: number,
) {
  const currentPlayInfo = computed(() => {
    if (
      matchInfo.recommend_play
      && !Array.isArray(matchInfo.recommend_play)
      && matchInfo.recommend_play.id
    ) {
      return Object.assign(matchInfo.recommend_play, {
        game_logo: matchInfo.game_type_logo,
        team_name_1: matchInfo.team_name_1,
        team_name_2: matchInfo.team_name_2,
        category_id: matchInfo.category_id,
        event_name: matchInfo.event_name,
      })
    }
    else {
      return undefined
    }
  })

  const { oddInfoCache } = storeToRefs(gameInfoStore())

  /**
   * @description 展示的TeamPoint数据
   * */
  const currentTeamPointInfo = computed(() => {
    if (
      currentPlayInfo.value
      && currentPlayInfo.value.team_points
      && Array.isArray(currentPlayInfo.value.team_points)
      && currentPlayInfo.value.team_points.length >= index
    ) {
      const tempTeamPoint = oddInfoCache.value.find((team) => {
        return (
          +team.point_id
          === +((currentPlayInfo.value as any).team_points[index]?.id || 0)
        )
      })
      if (tempTeamPoint) {
        return Object.assign(
          (currentPlayInfo.value as any).team_points[index],
          tempTeamPoint,
        )
      }
      else {
        return (currentPlayInfo.value as any).team_points[index]
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
    if (isNotAllowAdd.value) {
      return [LockIcon, true]
    }
    return []
  })

  /**
   * @description 战队名称
   * */
  const teamName = computed(() => {
    if (currentTeamPointInfo.value) {
      return currentTeamPointInfo.value.desc
    }
    else {
      return (matchInfo[`team_name_${index + 1}`] || 'IA ESPORT')
    }
  })

  /**
   * @description 战队logo
   * */
  const teamLogo = computed(() => {
    return matchInfo[`team_logo_${index + 1}`] || ''
  })

  const { addShopCart } = addShopCartHook()

  const isNotAllowAdd = computed(() => {
    return (
      !currentTeamPointInfo.value
      || +currentTeamPointInfo.value?.status !== 1
      || currentTeamPointInfo.value.win_loss_status
    )
  })

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
    if (!currentPlayInfo.value || !currentTeamPointInfo.value) {
      return
    }
    addShopCart(
      currentPlayInfo.value as any,
      currentTeamPointInfo.value,
      betType,
    )
  }

  return {
    currentTeamPointInfo,
    animateType,
    statusIcon,
    currentPlayInfo,
    toAddShopCart,
    teamName,
    teamLogo,
    hasAdd,
    isNotAllowAdd,
  }
}
