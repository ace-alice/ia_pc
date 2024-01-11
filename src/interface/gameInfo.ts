export type HandicapType =
  | 'today'
  | 'fix'
  | 'live'
  | 'end'
  | 'favorite'
  | 'parlay'
  | 'champion'
  | 'hot'

/**
 * @description 盘口列表的数据类型
 * */
export interface HandicapItemType {
  show_date: boolean
  code: HandicapType
  name: string
  count: number
}

/**
 * @description 游戏列表的数据类型
 * */
export interface GameItemType {
  id: number | string
  logo: string
  game_name: string
  events_count?: {
    total?: number
    events?: GameEventDetailType[]
  }
  tag_count?: any
}

/**
 * @description 盘口数量统计数据类型
 * */
export interface HandicapCountType {
  champion?: number
  fix?: number
  hot?: number
  live?: number
  parlay?: number
  today?: number
  total?: number
  [key: string]: any
}

/**
 * @description 游戏赛事类型
 * */
export interface GameEventDetailType {
  event_id: string | number
  event_name: string
  match_amount: number
  [key: string]: any
}

/**
 * @description 游戏统计数据类型
 * */
export interface GameStatisticsType {
  game_type_id: number
  nav_count?: HandicapCountType
  detail?: GameEventDetailType[]
  total?: number
  [key: string]: any
}

/**
 * @description 赛事统计数据类型
 * */
export interface MatchStatisticsType {
  [key: string]: GameStatisticsType
}

/**
 * @description 推送的动画数据类型
 * */
export interface PushAnimationInfoType {
  game_id: string | number
  has_push_pc: string
  [key: string]: any
}

/**
 * @description 推送的视频数据类型
 * */
export interface PushVideoInfoType {
  game_id: string | number
  url: string
  [key: string]: any
}
