import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { shopCartStore } from '@/store/shopCart'
import { userInfoStore } from '@/store/userInfo'
import { getQuickaAmount, toFixedNumber } from '@/utils'
import { toBetFun } from '@/api/store-game-info'
import copyMessage from '@/utils/copyMessage'
import succseeImg from '@/assets/icons/bet-success.png'
import fialImg from '@/assets/icons/bet-fail.png'
import { setLocal } from '@/utils/storage'

export default function singleCartHook() {
  const i18n = useI18n()
  const { singleCartList, singleIds, quickaAmount, delivery, oddDelivery }
    = storeToRefs(shopCartStore())
  const { updateBalanceInfo } = userInfoStore()
  const { changeShopCartElement, socketPushChange } = shopCartStore()

  /**
   * @description 单注投注的金额
   * */
  const singleBetAmount: Ref<{ [key: string]: number | null }> = ref({})

  let oldIds = JSON.parse(JSON.stringify(singleIds.value))

  watch(
    () => singleIds.value,
    (newVal) => {
      Object.keys(singleBetAmount.value).forEach((keyS) => {
        if (!newVal.includes(keyS.replace(/[^0-9]/gi, ''))) {
          delete singleBetAmount.value[keyS]
        }
      })
      if (
        newVal.length > oldIds.length
        && delivery.value
        && quickaAmount.value
      ) {
        const newId = newVal[newVal.length - 1]
        if (newId && !singleBetAmount.value[`single${newId}`]) {
          setShoppingCarCount({
            cartId: String(newId),
            amount: quickaAmount.value,
          })
        }
      }
      oldIds = JSON.parse(JSON.stringify(newVal))
    },
    { deep: true },
  )

  // let timer: any = null

  /**
   * @description 输入金额时动态对购物车数据赋值
   * */
  function setShoppingCarCount({
    cartId,
    amount,
  }: {
    cartId: string
    amount: number
  }) {
    // clearTimeout(timer)
    // timer = null
    const theCart = singleCartList.value.find((cart) => {
      return String(cart.shop_id) === String(cartId)
    })
    if (!theCart) {
      return
    }
    if (amount > Number(theCart.money_max)) {
      singleBetAmount.value[`single${cartId}`] = Number(theCart.money_max)
      return
    }
    // if (amount && amount < Number(theCart.money_min)) {
    //   timer = setTimeout(() => {
    //     if (amount) {
    //       singleBetAmount.value[`single${cartId}`] = Number(theCart.money_min)
    //     }
    //     else {
    //       delete singleBetAmount.value[`single${cartId}`]
    //     }
    //     clearTimeout(timer)
    //     timer = null
    //   }, 1500)
    //   return
    // }
    singleBetAmount.value[`single${cartId}`] = Number(amount) || null
  }

  const { balanceInfo } = storeToRefs(userInfoStore())

  const totalBet = computed(() => {
    let result = 0
    // for (const num of Object.values(singleBetAmount.value)) {
    //   result += num || 0
    // }
    singleCartList.value.forEach((shop: any) => {
      if (
        singleBetAmount.value[`single${shop.shop_id}`]
        && +shop.status === 1
        && !shop.is_hide
      ) {
        result += Number(singleBetAmount.value[`single${shop.shop_id}`])
      }
    })
    return toFixedNumber(result)
  })

  const totalPrice = computed(() => {
    let result = 0
    singleCartList.value.forEach((shop: any) => {
      if (
        singleBetAmount.value[`single${shop.shop_id}`]
        && +shop.status === 1
        && !shop.is_hide
      ) {
        result
          += Number(shop.odd ? shop.odd : '0')
          * Number(singleBetAmount.value[`single${shop.shop_id}`])
      }
    })
    return toFixedNumber(result)
  })

  /**
   * @description 是否有可投注项（输入金额）
   * */
  const isAllowToBet = computed(() => {
    return (
      singleCartList.value.some((shop: any) => {
        return (
          singleBetAmount.value[`single${shop.shop_id}`]
          && Number(singleBetAmount.value[`single${shop.shop_id}`]) > 0
          && +shop.status === 1
          && +shop.money_min
            <= +(singleBetAmount.value[`single${shop.shop_id}`] || 0)
          && !shop.is_hide
        )
      }) && +(balanceInfo.value.amount || 0) >= totalBet.value
    )
  })

  const betLoading = ref(false)

  const { proxy }: any = getCurrentInstance()

  /**
   * @description 单注投注
   * */
  async function toBet() {
    if (betLoading.value || !isAllowToBet.value) {
      return
    }
    betLoading.value = true
    setTimeout(() => {
      if (!isAllowToBet.value) {
        betLoading.value = false
        return
      }
      const items: any[] = []
      singleCartList.value.forEach((cart) => {
        if (
          singleBetAmount.value[`single${cart.shop_id}`]
          && +cart.status === 1
          && +cart.money_min
            <= +(singleBetAmount.value[`single${cart.shop_id}`] || 0)
          && !cart.is_hide
        ) {
          items.push({
            point_extra_id: cart.shop_id,
            money: singleBetAmount.value[`single${cart.shop_id}`],
            odd: Number(cart.odd),
          })
        }
      })
      if (items.length > 0) {
        toBetFun(
          Object.assign(
            {},
            { items: JSON.stringify(items), odd_change_type: oddDelivery.value },
          ),
        )
          .then((res: any) => {
            if (+res.data.code !== 1) {
              if (+res.data.code === 602 || +res.data.code === 604) {
                proxy.mittBus.emit('changeCurrentSideBarBus', 'GameList')
              }
              return
            }
            if (+res.data.data.status === 1) {
              copyMessage(
                '#sidebar-box',
                'bet-success',
                i18n.t('bet_success'),
                succseeImg,
              )
              if (res.data.data.currency?.amount) {
                updateBalanceInfo(res.data.data.currency.amount)
              }
              const numArr: number[] = [];
              (res.data.data.data?.ids || []).forEach((id: number) => {
                numArr.push(Number(singleBetAmount.value[`single${id}`]))
                delete singleBetAmount.value[`single${id}`]
                changeShopCartElement(String(id), 'single')
              })
              quickaAmount.value = getQuickaAmount(numArr)
              setLocal('quickaAmount', quickaAmount.value);
              (res.data.data.ext || []).forEach((shop: any) => {
                socketPushChange('notToBet', shop)
              })
            }
            else {
              copyMessage(
                '#sidebar-box',
                'bet-success',
                i18n.t('lost_bet'),
                fialImg,
              );
              (res.data.data.ext || []).forEach((shop: any) => {
                socketPushChange('notToBet', shop)
              })
            }
          })
          .finally(() => {
            betLoading.value = false
          })
      }
    }, 500)
  }

  return {
    singleCartList,
    singleBetAmount,
    setShoppingCarCount,
    isAllowToBet,
    toBet,
    totalBet,
    totalPrice,
  }
}
