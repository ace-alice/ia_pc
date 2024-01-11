// noinspection JSUnusedGlobalSymbols

import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { computed, reactive, ref } from 'vue'
import { gameInfoStore } from './gameInfo'
import { getLocal, setLocal } from '@/utils/storage'
import {
  currencyInfoFn,
  getUserInfo,
  setLangFn,
} from '@/api/store-user-info'
import type { BalanceInfosType, CurrencyInfoType } from '@/interface/userInfo'
import { GetParam } from '@/utils/getCommonInfo'

export const userInfoStore = defineStore('userInfo', () => {
  const balanceInfo: BalanceInfosType = reactive({
    amount: '',
    nickname: '',
    currency_id: '',
  })

  const currencyInfo: Ref<CurrencyInfoType[]> = ref(
    getLocal('currencyInfo') || [],
  )

  const token = ref<string>(getLocal('token') || '')

  getLocal('avatarId') || setLocal('avatarId', 1)

  const avatarId = ref(getLocal('avatarId'))

  function changeAvatarId(id: number) {
    if (id > 0 && id < 16) {
      avatarId.value = id
      setLocal('avatarId', id)
    }
  }

  function loginExit() {
    Object.assign(balanceInfo, {
      amount: '',
      nickname: '',
      currency_id: '',
    })
    token.value = ''
    setLocal('token', '')
  }

  const isLogin = computed(() => {
    return token.value
  })

  const langConfig = ref<number>(getLocal('lang') || 1)

  const canChangeLang = ref(false)

  function getCurrencyInfo() {
    currencyInfoFn().then((res: any) => {
      if (+res.data.code === 1) {
        currencyInfo.value = res.data.data
        setLocal('currencyInfo', res.data.data)
      }
    })
  }

  const currentCurrencyInfo = computed(() => {
    return currencyInfo.value.find((currency) => {
      return String(currency.id) === String(balanceInfo.currency_id)
    })
  })

  // 获取会员信息
  function doGetUserInfo() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      if (!isLogin.value) {
        return resolve(0)
      }
      getUserInfo()
        .then(({ data }: any) => {
          if (data.code === 1) {
            Object.assign(balanceInfo, data.data)
          }
          else {
            loginExit()
          }
          resolve(+data.code)
        })
        .catch(() => {
          loginExit()
          resolve(0)
        })
    })
  }

  function updateBalanceInfo(amount: string) {
    balanceInfo.amount = amount
  }

  // 切换语言
  function changLangAction(data: { lang: number }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      if (!isLogin.value) {
        return resolve(0)
      }
      setLangFn(data)
        .then((res: any) => {
          if (+res.data.code === 1) {
            resolve(true)
          }
          else {
            resolve(false)
          }
        })
        .catch(() => {
          resolve(false)
        })
    })
  }

  function updateLangConfig(lg: number) {
    langConfig.value = lg
    setLocal('lang', langConfig.value)
    document.title = +langConfig.value === 1 ? '小艾电竞' : 'IA ESPORTS'
  }

  function initLangAction() {
    //
  }

  const { matchDetailQuery, currentGameId, checkedEvenList } = storeToRefs(gameInfoStore())

  // 是否跳转
  function isJump() {
    const game_id
    = GetParam(window.location.href, 'id')
    || GetParam(window.location.href, 'game_id')
    const teamPointIds: any = GetParam(window.location.href, 'teamPointIds') || ''
    const game_type_id: string = GetParam(window.location.href, 'game_type_id') || ''
    const event_id: string = GetParam(window.location.href, 'event_id') || ''
    if (game_type_id) {
      currentGameId.value = game_type_id
      if (event_id) {
        checkedEvenList.value = event_id.split(',')
      }
    }
    if (game_id) {
      if (teamPointIds) {
        matchDetailQuery.value = {
          game_id: +game_id,
          betType: 'single',
          show: true,
          teamPointIds,
        }
      }
      else {
        matchDetailQuery.value = {
          game_id: +game_id,
          betType: 'single',
          show: true,
        }
      }
    }
  }

  async function initUserInfo() {
    isJump()
    doGetUserInfo()
    initLangAction()
  }

  return {
    balanceInfo,
    isLogin,
    langConfig,
    doGetUserInfo,
    updateLangConfig,
    changLangAction,
    initLangAction,
    avatarId,
    currencyInfo,
    changeAvatarId,
    currentCurrencyInfo,
    getCurrencyInfo,
    updateBalanceInfo,
    initUserInfo,
    canChangeLang,
    loginExit,
  }
})
