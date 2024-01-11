import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { gameInfoStore } from '@/store/gameInfo'
import { shopCartStore } from '@/store/shopCart'
import addShopCartHook from '@/hooks/addShopCartHook'
import LockIcon from '@/assets/icons/lock.png'
import WinIcon from '@/assets/icons/status-1.png'
import FailIcon from '@/assets/icons/status-2.png'

export default function championTeamPointHook(matchInfo: any) {
  const { oddInfoCache } = storeToRefs(gameInfoStore())

  const i18n = useI18n()

  const currentTeamPoint = computed(() => {
    const tempTeamPoint = oddInfoCache.value.find((team) => {
      return +team.point_id === +matchInfo.id
    })

    if (tempTeamPoint) {
      return Object.assign(matchInfo, tempTeamPoint)
    }
    else {
      return Object.assign(matchInfo)
    }
  })

  const playInfo = computed(() => {
    return {
      event_name: matchInfo.event_name,
      game_id: matchInfo.game_id,
      category_id: 4,
      id: matchInfo.play_info_id,
      game_logo: matchInfo.game_type_logo,
      is_champion: 1,
      name: i18n.t('champion_bet'),
    }
  })

  const { singleIds } = storeToRefs(shopCartStore())

  const hasAdd = computed(() => {
    return singleIds.value.includes(String(currentTeamPoint.value?.id || ''))
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
    () => currentTeamPoint.value?.point,
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

  const isAllowAddCart = computed(() => {
    return currentTeamPoint.value.status === 1 && !+currentTeamPoint.value.win_loss_status
  })

  /**
   * @description 比赛状态的icon展示图标
   * @return lock锁盘 | gaming游戏中 | win胜利 | fail失败
   * */
  const statusIcon = computed<any[]>(() => {
    if (!currentTeamPoint.value) {
      return []
    }
    if (currentTeamPoint.value && currentTeamPoint.value.win_loss_status) {
      if (
        +(currentTeamPoint.value as any).win_loss_status === 1
      ) {
        return [WinIcon, false]
      }
      if (
        +(currentTeamPoint.value as any).win_loss_status === 2
      ) {
        return [FailIcon, false]
      }
    }
    if (currentTeamPoint.value && !isAllowAddCart.value) {
      return [LockIcon, true]
    }
    return []
  })

  const { addShopCart } = addShopCartHook()

  /**
   * @description 添加购物车
   * */
  function toAddCart() {
    if (!isAllowAddCart.value) {
      return
    }
    addShopCart(playInfo.value, currentTeamPoint.value, 'single', 1)
  }

  return {
    currentTeamPoint,
    hasAdd,
    isAllowAddCart,
    toAddCart,
    animateType,
    statusIcon,
  }
}
