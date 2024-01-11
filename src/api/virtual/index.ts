import service from '@/service'

// 获取虚拟盘的基本信息
export function getVirtualInfo() {
  return service({
    url: '/api/Virtual/getVirtualInfo',
    method: 'post',
  })
}

// 获取投注记录
export function getResults({ game_id }: any) {
  return service({
    url: '/api/Virtual/getResults',
    method: 'post',
    data: { game_id },
  })
}

// 获取投注记录
export function getUserWin({ game_id }: any) {
  return service({
    url: '/api/Virtual/getUserWin',
    method: 'post',
    data: { game_id },
  })
}

// 获取用户限红
export function getUserMoneyLimit() {
  return service({
    url: '/api/Virtual/getUserMoneyLimit',
    method: 'post',
  })
}

// 会员投注
export function toBetPlayMore(data: any) {
  return service({
    url: '/api/Virtual/playMore',
    method: 'post',
    data,
  })
}

// 获取游戏规则
export function getVirtualRules(data: any) {
  return service({
    url: '/api/Virtual/getRules',
    method: 'post',
    data,
  })
}

// 获取走势
export function getVirCharts() {
  return service({
    url: '/api/Virtual/getVirCharts',
    method: 'post',
  })
}

// 获取投注列表
export function getVirtualHistory(data?: any) {
  return service({
    url: '/api/Virtual/getVirGameTotal',
    method: 'post',
    data,
  })
}

// 获取投注列表
export function getVirGameTotalInfo(data?: any) {
  return service({
    url: '/api/Virtual/getVirGameTotalInfo',
    method: 'post',
    data,
  })
}
