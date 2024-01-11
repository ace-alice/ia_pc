import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ElScrollbar } from 'element-plus'
import { shopCartStore } from '@/store/shopCart'
import type { ShopCartElementType } from '@/interface/shopCart'
import {
  oddCombination,
  recursionMult,
  toFixedNumber,
  toPrecision,
} from '@/utils'
import { toBetFun } from '@/api/store-game-info'
import { userInfoStore } from '@/store/userInfo'
import copyMessage from '@/utils/copyMessage'
import succseeImg from '@/assets/icons/bet-success.png'
import fialImg from '@/assets/icons/bet-fail.png'

interface BetItemType {
  amount: number | null
  point: number
  name: string
  num: number
  oddArr: any[][]
  price: () => number
  money_max: () => number
  money_min: () => number
}

export default function parlayCartHook() {
  const i18n = useI18n()
  /**
   * @description 所有串关注单
   * */
  const { parlayCartList, oddDelivery } = storeToRefs(shopCartStore())

  const { clearShopCart, socketPushChange } = shopCartStore()

  const { balanceInfo } = storeToRefs(userInfoStore())

  const { updateBalanceInfo } = userInfoStore()

  const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

  /**
   * @description 获取parlay_user_payout数组非-1的最小值
   * */
  // function getMoneyMin(cart: ShopCartElementType) {
  //   const parlay_single_limit = +cart.user_parlay_single_limit || Number.POSITIVE_INFINITY
  //   const parlay_total_limit = +cart.user_parlay_total_limit || Number.POSITIVE_INFINITY
  //   return Math.min(parlay_single_limit, parlay_total_limit)
  // }

  /**
   * @description 当 4窜3 等情况时获取最大投注值
   * @return number
   * */
  function connectMax(oddArr: any[]): number {
    let cMoneyMax = Number.POSITIVE_INFINITY
    let parlaySingleLimit = Number.POSITIVE_INFINITY
    let parlayTotalLimit = Number.POSITIVE_INFINITY
    for (const shopArr of oddArr) {
      let moneyMax = Number.POSITIVE_INFINITY
      let cPoint = 1
      for (const item of shopArr) {
        cPoint *= Number(item.odd)
      }
      for (const shop of shopArr) {
        let cumulateParlay = Number.POSITIVE_INFINITY
        parlaySingleLimit = +shop.user_parlay_single_limit || Number.POSITIVE_INFINITY
        parlayTotalLimit = +shop.user_parlay_total_limit || Number.POSITIVE_INFINITY
        if (
          +shop.cumulate_parlay_array[
            shopArr.length < 11 ? shopArr.length - 3 : 8
          ]
        ) {
          cumulateParlay
            = shop.cumulate_parlay_array[
              shopArr.length < 11 ? shopArr.length - 3 : 8
            ] - (+shop.user_parlay_cumulate_limit || 0)
        }
        moneyMax = Math.min(
          moneyMax,
          shop.single_parlay_array[
            shopArr.length < 11 ? shopArr.length - 3 : 8
          ],
          cumulateParlay,
        )
      }
      const theMin = Math.min(parlaySingleLimit, parlayTotalLimit, moneyMax / (cPoint - 1))
      cMoneyMax = Math.min(
        cMoneyMax,
        toFixedNumber(theMin, 0),
      )
    }
    return cMoneyMax
  }

  /**
   * @description 参与串关计算的有效注单
   * */
  const validCartList = computed(() => {
    return parlayCartList.value.filter((cart: ShopCartElementType) => {
      return +cart.status === 1 && !cart.is_hide
    })
  })

  const minLimit = computed(() => {
    let min = 0
    validCartList.value.forEach((shop: any) => {
      min = Math.max(min, Number(shop.parlay_money_min))
    })
    return toFixedNumber(min, 0)
  })

  /**
   * @description 串关选项
   * */
  const betOptions: Ref<Array<BetItemType | any>> = ref([])

  /**
   * @description 生成串关投注的选项
   * @return {}
   * */
  function createOptions() {
    betOptions.value = []
    const l = validCartList.value.length
    let point = 1
    if (l < 3) {
      return
    }
    for (const item of validCartList.value) {
      point *= Number(item.odd)
    }
    if (l === 3) {
      betOptions.value.push({
        amount: null,
        point: toFixedNumber(point),
        name: `3${i18n.t('connect')}1`,
        num: recursionMult(l, 3),
        oddArr: oddCombination(validCartList.value, 3),
        price() {
          return toFixedNumber(
            (this.amount ? this.amount : 0) * this.point * this.num,
          )
        },
        money_max() {
          let moneyMax = Number.POSITIVE_INFINITY
          let parlaySingleLimit = Number.POSITIVE_INFINITY
          let parlayTotalLimit = Number.POSITIVE_INFINITY
          for (const shopArr of this.oddArr) {
            for (const shop of shopArr) {
              let cumulateParlay = Number.POSITIVE_INFINITY
              parlaySingleLimit = +shop.user_parlay_single_limit || Number.POSITIVE_INFINITY
              parlayTotalLimit = +shop.user_parlay_total_limit || Number.POSITIVE_INFINITY
              if (
                +shop.cumulate_parlay_array[
                  shopArr.length < 11 ? shopArr.length - 3 : 8
                ]
              ) {
                cumulateParlay
                  = shop.cumulate_parlay_array[
                    shopArr.length < 11 ? shopArr.length - 3 : 8
                  ] - (+shop.user_parlay_cumulate_limit || 0)
              }
              moneyMax = Math.min(
                moneyMax,
                shop.single_parlay_array[l - 3],
                cumulateParlay,
              )
            }
          }
          const theMin = Math.min(parlaySingleLimit, parlayTotalLimit, moneyMax / (point - 1))
          return toFixedNumber(theMin, 0)
        },
        money_min: () => minLimit.value,
      })
    }
    if ([4, 5].includes(l) || l > 12) {
      for (let i = l; i > l - 2; i--) {
        if (i > 1) {
          betOptions.value.push({
            amount: null,
            point: i === l ? toFixedNumber(point) : 0,
            name: `${i}${i18n.t('connect')}1`,
            num: recursionMult(l, i),
            oddArr: oddCombination(validCartList.value, i),
            price() {
              let result = 0
              const tempOddArr = []
              for (const item of this.oddArr) {
                let tempOdd = 1
                for (const ele of item) {
                  tempOdd *= ele.odd
                }
                tempOddArr.push(tempOdd)
              }

              for (const i of tempOddArr) {
                result += (this.amount ? this.amount : 0) * i
              }
              return toFixedNumber(result)
            },
            money_max() {
              return connectMax(this.oddArr)
            },
            money_min: () => minLimit.value,
          })
        }
      }
      let tempNum = 0
      let tempArr: any[][] = []
      for (const item of betOptions.value) {
        tempNum += item.num
        tempArr = [...item.oddArr, ...tempArr]
      }

      betOptions.value.push({
        amount: null,
        point: 0,
        name: `${l}${i18n.t('connect')}${tempNum}`,
        num: tempNum,
        oddArr: tempArr,
        price() {
          let result = 0
          const tempOddArr = []
          for (const item of this.oddArr) {
            let tempOdd = 1
            for (const ele of item) {
              tempOdd *= ele.odd
            }
            tempOddArr.push(tempOdd)
          }

          for (const i of tempOddArr) {
            result += (this.amount ? this.amount : 0) * i
          }
          return toFixedNumber(result)
        },
        money_max() {
          return connectMax(this.oddArr)
        },
        money_min: () => minLimit.value,
      })
    }

    if ([6, 7, 8, 9, 10, 11, 12].includes(l)) {
      for (let i = l; i > l - 3; i--) {
        if (i > 1) {
          betOptions.value.push({
            amount: null,
            point: i === l ? toFixedNumber(point) : 0,
            name: `${i}${i18n.t('connect')}1`,
            num: recursionMult(l, i),
            oddArr: oddCombination(validCartList.value, i),
            price() {
              let result = 0
              const tempOddArr = []
              for (const item of this.oddArr) {
                let tempOdd = 1
                for (const ele of item) {
                  tempOdd *= ele.odd
                }
                tempOddArr.push(tempOdd)
              }

              for (const i of tempOddArr) {
                result += (this.amount ? this.amount : 0) * i
              }
              return toFixedNumber(result)
            },
            money_max() {
              return connectMax(this.oddArr)
            },
            money_min: () => minLimit.value,
          })
        }
      }
    }
  }

  /**
   * @description 总奖金
   * */
  const totalPrice = computed(() => {
    let result = 0
    betOptions.value.forEach((shop: any) => {
      result += shop.price()
    })
    return toPrecision(result)
  })

  /**
   * @description 总投注
   * */
  const totalBet = computed(() => {
    let result = 0
    betOptions.value.forEach((shop: any) => {
      result += (shop.amount || 0) * shop.num
    })
    return result
  })

  watch(
    () => totalBet.value,
    () => {
      getMessages()
    },
  )

  // 输入框定时器
  let timer: any = null

  /**
   * @description 输入金额时动态对购物车数据赋值
   * */
  function setShoppingCarCount(idx: number) {
    clearTimeout(timer)
    timer = null
    if (
      (betOptions.value[idx].amount || 0) > betOptions.value[idx].money_min()
    ) {
      betOptions.value[idx].amount = betOptions.value[idx].money_max()
    }
    if (
      betOptions.value[idx].amount
      && (betOptions.value[idx].amount || 0) < betOptions.value[idx].money_min()
    ) {
      timer = setTimeout(() => {
        if (betOptions.value[idx].amount) {
          betOptions.value[idx].amount = betOptions.value[idx].money_min()
        }
        else {
          betOptions.value[idx].amount = null
        }
        clearTimeout(timer)
        timer = null
      }, 1500)
    }
  }

  /**
   * @description 是否有可投注项
   * */
  const isAllowToBet = computed(() => {
    return (
      betOptions.value.some((option) => {
        return (
          !Number.isNaN(Number(option.amount))
          && option.money_min() <= Number(option.amount)
        )
      }) && +(balanceInfo.value.amount || 0) >= totalBet.value
    )
  })

  const betLoading = ref(false)

  const { proxy }: any = getCurrentInstance()

  function toBottom() {
    if (betOptions.value.length > 0) {
      scrollbarRef.value
        && scrollbarRef.value?.scrollTo({ top: 2000, behavior: 'smooth' })
    }
  }

  /**
   * @description 串关投注
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
      // 筛选出下注的注单
      const betOptionsViable = betOptions.value.filter((option) => {
        return (
          !Number.isNaN(Number(option.amount))
          && (option.amount as any) > 0
          && (option.amount as any) >= +option.money_min()
        )
      })
      const betFormData: any[] = []
      // 处理投注的参数
      for (const item of betOptionsViable) {
        const tempFormDataItem: any = {}
        tempFormDataItem.title = item.name
        tempFormDataItem.number = item.oddArr.length
        tempFormDataItem.order_type = 2
        tempFormDataItem.order = []
        for (const ele of item.oddArr) {
          const tempOrder: any = {}
          tempOrder.title = item.name
          tempOrder.money = item.amount
          tempOrder.money_type = '1'
          let tempOdd = 1
          const tempCombination: any[] = []
          const tempOrderDetail: any[] = []
          for (const e of ele) {
            tempOdd *= e.odd
            tempCombination.push(e.shop_id)
            tempOrderDetail.push(
              Object.assign(
                {},
                {
                  option: e.shop_id,
                  odd: e.odd,
                },
              ),
            )
          }

          tempOrder.odd = toFixedNumber(tempOdd)
          tempOrder.order_detail = tempOrderDetail
          tempOrder.combination = tempCombination.join(',')
          tempFormDataItem.order.push(tempOrder)
        }
        betFormData.push(tempFormDataItem)
      }
      toBetFun(
        Object.assign(
          {},
          {
            items: JSON.stringify(betFormData),
            odd_change_type: oddDelivery.value,
          },
        ),
      )
        .then((res: any) => {
          if (+res.data.code === 0 && +res.data.error_code === 14) {
            return
          }
          if (+res.data.code === 1) {
            if (+res.data.data.status === 1) {
              if (res.data.data.currency?.amount) {
                updateBalanceInfo(res.data.data.currency.amount)
              }
              clearShopCart('parlay')
              copyMessage(
                '#sidebar-box',
                'bet-success',
                i18n.t('bet_success'),
                succseeImg,
              );
              (res.data.data.ext || []).forEach((shop: any) => {
                socketPushChange('notToBet', shop)
              })
            }
            else {
              (res.data.data.ext || []).forEach((shop: any) => {
                socketPushChange('notToBet', shop)
                copyMessage(
                  '#sidebar-box',
                  'bet-success',
                  i18n.t('lost_bet'),
                  fialImg,
                )
              })
            }
          }
          if (+res.data.code === 602 || +res.data.code === 604) {
            proxy.mittBus.emit('changeCurrentSideBarBus', 'GameList')
          }
        })
        .finally(() => {
          betLoading.value = false
        })
    }, 500)
  }

  watch(
    () => validCartList.value,
    () => {
      createOptions()
      getMessages()
    },
    { deep: true },
  )

  function showFastNumberFun(option: any, tag: boolean, pKey: string) {
    option[pKey] = tag
    let result = false
    if (option.showFastNumber) {
      if (!option.isHover && !option.isFocus) {
        result = false
      }
      else {
        return
      }
    }
    else {
      if (option.isHover && option.isFocus) {
        result = true
      }
      else {
        return
      }
    }
    setTimeout(() => {
      option.showFastNumber = result
    }, 100)
  }

  const showMore = ref(true)

  function showMoreHandle() {
    if (betOptions.value.length === 1) {
      return
    }
    showMore.value = !showMore.value
  }

  const messages = ref<any>({})

  function getMessages() {
    if (parlayCartList.value.length === 0) {
      return (messages.value = {})
    }
    if (validCartList.value.length < 3) {
      return (messages.value = { type: 'length', error: i18n.t('least_3') })
    }
    const hasToBet = betOptions.value.some((option) => {
      return option.money_max() >= option.money_min() && option.money_max() > 0
    })
    if (hasToBet) {
      if (+totalBet.value > +(balanceInfo.value.amount || 0)) {
        return (messages.value = {
          type: 'status',
          error: `${i18n.t('balance_short')}${totalBet.value}`,
        })
      }
      return (messages.value = {})
    }
    else {
      return (messages.value = {
        type: 'status',
        error: i18n.t('game_limit_danger'),
      })
    }
  }

  onMounted(() => {
    createOptions()
    getMessages()
  })

  return {
    parlayCartList,
    totalPrice,
    totalBet,
    betOptions,
    setShoppingCarCount,
    toBet,
    showFastNumberFun,
    isAllowToBet,
    showMoreHandle,
    showMore,
    messages,
    scrollbarRef,
    toBottom,
  }
}
