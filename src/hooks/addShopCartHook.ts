import { storeToRefs } from 'pinia'
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import { shopCartStore } from '@/store/shopCart'
import type { PlayInfoType, TeamPointType } from '@/interface/matchList'
import type { BetType, ShopCartElementType } from '@/interface/shopCart'
import {
  getParlayOddInfoList,
  getSingleOddInfoList,
} from '@/api/store-game-info'
import { userInfoStore } from '@/store/userInfo'
import notLoginMessage from '@/utils/notLoginMessage'
import copyMessage from '@/utils/copyMessage'
import messageImage from '@/assets/icons/home_tixing.png'

/**
 * @description 需要处理的teamPoint内的数据
 * */
const teamPointKeys: any = {
  money_max: 'money_max',
  money_min: 'money_min',
  shop_id: 'id',
  desc: 'desc',
  odd: 'point',
  status: 'status',
  parlay_money_min: 'parlay_money_min',
  user_parlay_cumulate_limit: 'user_parlay_cumulate_limit',
  user_parlay_single_limit: 'user_parlay_single_limit',
  user_parlay_total_limit: 'user_parlay_total_limit',
  single_parlay_array: [
    'parlay_limit_3',
    'parlay_limit_4',
    'parlay_limit_5',
    'parlay_limit_6',
    'parlay_limit_7',
    'parlay_limit_8',
    'parlay_limit_9',
    'parlay_limit_10',
    'parlay_limit_other',
  ],
  cumulate_parlay_array: [
    'cumulate_parlay_3',
    'cumulate_parlay_4',
    'cumulate_parlay_5',
    'cumulate_parlay_6',
    'cumulate_parlay_7',
    'cumulate_parlay_8',
    'cumulate_parlay_9',
    'cumulate_parlay_10',
    'other_cumulate_parlay',
  ],
  // parlay_user_daily_payout: 'parlay_user_daily_payout',
}

/**
 * @description 需要处理的playInfo内的数据
 * */
const playInfoKeys: any = {
  category_id: 'category_id',
  game_logo: 'game_logo',
  game_id: 'game_id',
  game_lang: 'stage_name',
  play_info_id: 'id',
  is_champion: 'is_champion',
  match: 'match',
  play_name: 'name',
  team_name_1: 'team_name_1',
  team_name_2: 'team_name_2',
  event_name: 'event_name',
}

export default function addShopCartHook() {
  const i18n = useI18n()

  const { proxy }: any = getCurrentInstance()
  /**
   * @description 生成购物车的数据
   * @param playInfo PlayInfoType
   * @param teamPoint TeamPointType
   * @param betType
   * @return ShopCartElementType 购物车数据
   * */
  function createShopCartElement(
    playInfo: any,
    teamPoint: any,
    betType: BetType,
  ) {
    const temp: ShopCartElementType | any = {}
    for (const teamTey of Object.keys(teamPointKeys)) {
      if (typeof teamPointKeys[teamTey] === 'string') {
        if (
          ['money_max', 'money_min'].includes(teamPointKeys[teamTey])
          && betType === 'parlay'
        ) {
          continue
        }
        temp[teamTey] = teamPoint[teamPointKeys[teamTey]] || 0
      }
      else {
        // 将teamPoint中的single_parlay_{3-other}组装成一个数组
        // 将teamPoint中的parlay_user_payout组装成一个数组
        if (betType === 'parlay') {
          const childTemp: any[] = []
          for (const itemKey of teamPointKeys[teamTey]) {
            childTemp.push(teamPoint[itemKey] || 0)
          }
          temp[teamTey] = childTemp
        }
      }
    }
    for (const playTey of Object.keys(playInfoKeys)) {
      temp[playTey] = playInfo[playInfoKeys[playTey]] || 0
    }
    return temp
  }

  const { singleIds, parlayIds } = storeToRefs(shopCartStore())
  const { changeShopCartElement } = shopCartStore()
  const { isLogin, currentCurrencyInfo } = storeToRefs(userInfoStore())

  /**
   * @description 添加购物车
   * @param playInfo PlayInfoType
   * @param teamPoint TeamPointType
   * @param betType BetType 投注类型
   * */
  function addShopCart(
    playInfo: PlayInfoType,
    teamPoint: TeamPointType,
    betType: BetType,
    is_champion: 0 | 1 = 0,
  ) {
    if (!isLogin.value) {
      return notLoginMessage()
    }

    // 是否已经在购物车内
    const hasAdd
      = betType === 'single'
        ? singleIds.value.includes(String(teamPoint.id))
        : parlayIds.value.includes(String(teamPoint.id))

    if ((+teamPoint.win_loss_status || +teamPoint.status !== 1) && !hasAdd) {
      return
    }
    if (hasAdd) {
      changeShopCartElement(String(teamPoint.id), betType)
    }
    else {
      const getInfoFun
        = betType === 'parlay' ? getParlayOddInfoList : getSingleOddInfoList
      getInfoFun({
        game_id: playInfo.game_id,
        play_id: playInfo.id,
        point_id: teamPoint.id,
        is_champion,
      })
        .then((res: any) => {
          if (+res.data.code === 1) {
            proxy.mittBus.emit('setMatchOfDataCloseBus', true)
            if (
              betType === 'single'
              && (+res.data.data.money_max < +res.data.data.money_min
                || +res.data.data.money_max === 0)
            ) {
              copyMessage(
                '#app',
                'shop-error',
                i18n.t('limit_full'),
                messageImage,
              )
            }

            const resData: any = {}

            for (const key in res.data.data) {
              if (
                Object.prototype.hasOwnProperty.call(res.data.data, key)
                && key !== 'debug'
              ) {
                if (['parlay_money_min', 'money_min'].includes(key)) {
                  resData[key] = Math.ceil(
                    res.data.data[key]
                    / +(currentCurrencyInfo.value?.exchange_rate || 1),
                  )
                }
                else {
                  resData[key] = Math.floor(
                    res.data.data[key]
                    / +(currentCurrencyInfo.value?.exchange_rate || 1),
                  )
                }
              }
            }

            const tempElement = createShopCartElement(
              playInfo,
              Object.assign(teamPoint, resData),
              betType,
            )
            changeShopCartElement(String(teamPoint.id), betType, tempElement)
            proxy.mittBus.emit('traditionStatusBus')
            setTimeout(() => {
              proxy.mittBus.emit('changeCurrentSideBarBus', 'ShopCart')
            }, 100)
            setTimeout(() => {
              proxy.mittBus.emit('changeBetTypeBus', betType)
            }, 300)
          }
          else if (
            parseInt(res.data.code) === 602
            || parseInt(res.data.code) === 604
          ) {
            notLoginMessage(res.data.message || res.data.msg)
          }
          else {
            copyMessage(
              '#app',
              'shop-error',
              i18n.t('add_failed'),
              messageImage,
            )
          }
        })
        .catch(() => {
          copyMessage('#app', 'shop-error', i18n.t('add_failed'), messageImage)
        })
    }
  }

  return { addShopCart }
}
