import service from '@/service'

// 获取自走棋所有英雄图片资源
export function getChessCards() {
  return service({
    url: '/api/activity/getChessCards/',
    method: 'post',
  })
}

// 初始化游戏信息
export function getChessInitInfo() {
  return service({
    url: '/api/activity/getChessInitInfo/',
    method: 'post',
  })
}

// 刷新市场卡牌
export function refreshCards(data: any) {
  return service({
    url: '/api/activity/refreshCards/',
    method: 'post',
    data,
  })
}

// 购买卡牌
export function buyCards(data: any) {
  return service({
    url: '/api/activity/buyCards/',
    method: 'post',
    data,
  })
}

// 出售卡牌
export function sellCards(data: any) {
  return service({
    url: '/api/activity/sellCards/',
    method: 'post',
    data,
  })
}

// 获取游戏记录
export function getGameHistory(data: any) {
  return service({
    url: '/api/activity/getLogList/',
    method: 'post',
    data,
  })
}

// 完成新手指导
export function finishUserGuide() {
  return service({
    url: '/api/activity/finishUserGuide/',
    method: 'post',
  })
}
