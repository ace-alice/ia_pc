import service from '@/service'

// 获取用户信息
export function getUserInfo(data?: any) {
  return service({
    url: '/api/game/user/balance',
    method: 'post',
    data,
  })
}

// 获取会员投注列表
export function getBetList(data?: { page: number }) {
  return service({
    url: '/api/game/user/getUserHistory/',
    method: 'post',
    data,
  })
}

// 设置语言

export function setLangFn(data: { lang: number }) {
  return service({
    url: '/api/game/changeLang',
    method: 'post',
    data,
  })
}

// 获取语言和主题信息
export function getLangFn() {
  return service({
    url: '/api/game/game/checkChangeLang',
    method: 'post',
  })
}

export function currencyInfoFn() {
  return service({
    url: '/api/game/game/getCurrency',
    method: 'post',
  })
}
