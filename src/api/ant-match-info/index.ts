import service from '@/service'

// 获取公告信息
export function getAntBeforeGameDataApi(params: any) {
  return service({
    url: '/api/game/game/getAntBeforeGameData',
    method: 'get',
    params,
  })
}

export function getAntBeforeGameHistoryDataApi(params: any) {
  return service({
    url: '/api/game/game/getAntBeforeGameHistoryData',
    method: 'get',
    params,
  })
}

