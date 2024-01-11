import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type {
  BetType,
  OperateAction,
  ShopCartElementType,
} from '@/interface/shopCart'
import type { PullPointsType } from '@/interface/matchList'
import { getLocal, setLocal } from '@/utils/storage'
import betLengthLimit from '@/utils/betLengthLimit'

export const shopCartStore = defineStore('shopCart', () => {
  /**
   *@description 快捷金额
   * **/
  const quickaAmount = ref<any>(getLocal('quickaAmount') || null)

  /**
   *@description 快速投注
   * **/
  const delivery = ref<boolean>(false)

  /**
   *@description 接受赔率变化的情况
   * **/
  const oddDelivery = ref<1 | 2 | 0>(2)

  /**
   *@description 单注id列表
   * **/
  const singleIds: Ref<string[]> = ref(getLocal('singleIds') || [])

  /**
   *@description 串关id列表
   * **/
  const parlayIds: Ref<string[]> = ref(getLocal('parlayIds') || [])

  /**
   *@description 购物车数据
   * **/
  const shopCartList: Ref<ShopCartElementType[]> = ref([])

  /**
   *@description 变更购物车数据
   * **/
  function changeShopCartElement(
    shopId: string,
    betType: BetType,
    shopElement?: ShopCartElementType,
  ) {
    if (shopElement) {
      if (betType === 'parlay' && parlayIds.value.length === 15) {
        return betLengthLimit(15)
      }
      if (betType === 'single' && singleIds.value.length === 10) {
        return betLengthLimit(10)
      }
      const inx = shopCartList.value.findIndex((shop) => {
        return String(shop.shop_id) === String(shopElement.shop_id)
      })
      if (betType === 'parlay') {
        const sameHandIndex = shopCartList.value.findIndex((shop) => {
          return (
            +shopElement.game_id === +shop.game_id
            && parlayIds.value.includes(String(shop.shop_id))
            && String(shop.shop_id) !== String(shopElement.shop_id)
          )
        })
        if (sameHandIndex !== -1) {
          parlayIds.value = parlayIds.value.filter((id) => {
            return +id !== Number(shopCartList.value[sameHandIndex].shop_id)
          })
          if (
            !singleIds.value.includes(
              String(shopCartList.value[sameHandIndex].shop_id),
            )
          ) {
            shopCartList.value.splice(sameHandIndex, 1)
          }
        }
      }
      if (inx !== -1) {
        shopCartList.value[inx] = Object.assign(
          shopCartList.value[inx],
          shopElement,
        )
      }
      else {
        shopCartList.value.unshift(shopElement)
      }
      betType === 'single'
        ? singleIds.value.push(shopId)
        : parlayIds.value.push(shopId)
    }
    else {
      const hasAdd
        = betType === 'single'
          ? singleIds.value.includes(shopId)
          : parlayIds.value.includes(shopId)
      if (hasAdd) {
        const inx = shopCartList.value.findIndex((shop) => {
          return String(shop.shop_id) === shopId
        })
        if (
          betType === 'single'
            ? !parlayIds.value.includes(shopId)
            : !singleIds.value.includes(shopId)
        ) {
          shopCartList.value.splice(inx, 1)
        }
        betType === 'single'
          ? singleIds.value.splice(singleIds.value.indexOf(shopId), 1)
          : parlayIds.value.splice(parlayIds.value.indexOf(shopId), 1)
      }
      else {
        if (betType === 'parlay' && parlayIds.value.length === 15) {
          return betLengthLimit(15)
        }
        if (betType === 'single' && singleIds.value.length === 10) {
          return betLengthLimit(10)
        }
        betType === 'single'
          ? singleIds.value.push(shopId)
          : parlayIds.value.push(shopId)
      }
    }
  }

  /**
   * @description 清空购物车
   * */
  function clearShopCart(betType: BetType = 'single') {
    const ids = [...(betType === 'single' ? singleIds.value : parlayIds.value)]
    ids.forEach((id) => {
      changeShopCartElement(id, betType)
    })
  }

  /**
   *@description 单注列表
   * **/
  const singleCartList = computed(() => {
    return shopCartList.value.filter((shop) => {
      return singleIds.value.includes(String(shop.shop_id))
    })
  })

  /**
   *@description 串关列表
   * **/
  const parlayCartList = computed(() => {
    return shopCartList.value.filter((shop) => {
      return parlayIds.value.includes(String(shop.shop_id))
    })
  })

  function pushOddUpdate(oddInfo: PullPointsType) {
    for (let i = 0; i < shopCartList.value.length; i++) {
      if (String(shopCartList.value[i].shop_id) === String(oddInfo.point_id)) {
        if (oddInfo.delta) {
          shopCartList.value[i].odd = String(oddInfo.delta)
        }
        if (oddInfo.status) {
          shopCartList.value[i].status = oddInfo.status
        }
      }
    }
    setLocal('shopCartList', shopCartList.value)
  }

  /**
   * @description 接受socket的推送
   * */
  function socketPushChange(type: OperateAction, data: any) {
    switch (type) {
      case 'notToBet':
        shopCartList.value.forEach((shop, index) => {
          if (+shop.shop_id === +data.id) {
            if (data.new_odd) {
              shopCartList.value[index].odd = data.new_odd
            }
            else {
              shopCartList.value[index].status = 2
            }
          }
        })
        break
      case 'gameHideChange':
        shopCartList.value.forEach((shop, index) => {
          if (+shop.game_id === +data.game_id) {
            shopCartList.value[index].is_hide = +data.is_hide
          }
        })
        break
      case 'hideChange':
        shopCartList.value.forEach((shop, index) => {
          if (+shop.play_info_id === +data.play_id) {
            shopCartList.value[index].is_hide = +data.is_hide
            if (data && data.play_info && data.play_info.child_plays && data.play_info.child_plays.length > 0) {
              data.play_info.child_plays[0].team_points.forEach((shopd: any) => {
                if (+shopd.id === +shop.shop_id) {
                  shopCartList.value[index].status = +shopd.status
                }
              })
            }
          }
        })
        break
      case 'statusChange':
        shopCartList.value.forEach((shop, index) => {
          if (
            data.action === 'play'
            && +shop.game_id === +data.game_id
            && +shop.play_info_id === +data.play_id
          ) {
            shopCartList.value[index].status = data.status
          }
          if (
            data.action === 'match'
            && +shop.game_id === +data.game_id
            && +shop.match === +data.match
          ) {
            shopCartList.value[index].status = data.status
          }
          if (
            data.action === 'game'
            && +shop.game_id === +data.game_id
          ) {
            shopCartList.value[index].status = data.status
          }
        })
        break
    }
  }

  return {
    singleIds,
    parlayIds,
    shopCartList,
    singleCartList,
    parlayCartList,
    changeShopCartElement,
    pushOddUpdate,
    socketPushChange,
    clearShopCart,
    delivery,
    oddDelivery,
    quickaAmount,
  }
})
