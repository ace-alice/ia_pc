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
 * @description team_point的类型
 * */
export interface TeamPointType {
  danger_status: 1 | 0
  desc?: string
  id: number | string
  money_max?: number
  money_min?: number
  parlay_global_userday_payout?: number
  parlay_user_day_payout?: number
  parlay_user_single_payout?: number
  point?: string
  odd?: string | number
  single_parlay_3?: number
  single_parlay_4?: number
  single_parlay_5?: number
  single_parlay_6?: number
  single_parlay_7?: number
  single_parlay_8?: number
  single_parlay_9?: number
  single_parlay_10?: number
  single_parlay_other?: number
  is_lock?: number
  ext?: number | null
  is_parlay?: 1 | 0
  is_champion?: 1 | 0
  [key: string]: any
}

/**
 * @description 列表页单条赛事的recommend_play类型
 * */
export interface PlayInfoType {
  danger_status?: 1 | 0
  id?: number | string
  is_end?: 1 | 0
  is_del?: 1 | 0
  is_danger?: 1 | 0
  is_finish?: 1 | 0
  is_parlay?: 1 | 0
  is_hide?: 1 | 0
  match?: number | null
  need_push?: 1 | 0
  need_show_round?: string[]
  play_id?: number
  play_name?: string
  round_name_json?: any[]
  sale_end_time?: number | null
  sale_start_time?: number | null
  winner?: number | string | null
  team_points?: TeamPointType[]
  team_name_1?: string
  team_name_2?: string
  [key: string]: any
}

/**
 * @description 列表页单条赛事的数据类型
 * */
export interface MatchType {
  id: string | number
  game_type_id: string | number
  event_id: string | number
  bo: number
  is_end: 1 | 0
  is_del: 1 | 0
  is_champion: 1 | 0
  is_favorite: 1 | 0
  is_finish: 1 | 0
  is_parlay: 1 | 0
  game_fix_start_time: number | null
  game_logo: string
  event_name: string
  category_id: 1 | 2 | 3
  game_lang: string
  game_start_time: number | null
  has_push_url_pc: string | null
  media_content: string | null
  recommend_play?: PlayInfoType
  team_name_1: string
  team_name_2: string
  score_1: number | null
  score_2: number | null
  points_count: number | null
  sale_end_time: number | null
  sale_start_time: number | null
  team_logo_1: string
  team_logo_2: string
  show_win_lose?: 1 | 0
  team_winloss_1?: 1 | 2 | 3 | null
  team_winloss_2?: 1 | 2 | 3 | null
  [key: string]: any
}

/**
 * @description 列表页列表的数据类型
 * */
export type MatchListType = MatchType[]

/**
 * @description 赛事下注详情页的数据类型
 * */
export interface MatchDetailType {
  id: number | string
  game_type_id: number | string
  event_name: string
  bo: number
  is_end: 1 | 0
  is_del: 1 | 0
  game_fix_start_time: number
  game_logo: string
  category_id: 1 | 2 | 3
  game_lang: string
  game_start_time: number
  has_push_url_pc: string
  is_champion: 1 | 0
  is_favorite: 1 | 0
  is_finish: 1 | 0
  is_parlay: 1 | 0
  media_content: string
  team_name_1: string
  team_name_2: string
  score_1: string | number
  score_2: string | number
  points_count: string
  sale_end_time: string
  sale_start_time: string
  team_logo_1: string
  team_logo_2: string
  matches_num?: any[]
  show_type_lang?: any[]
  round_name_json?: any[]
  show_win_lose?: 1 | 0
  team_winloss_1?: number
  team_winloss_2?: number
  points: PlayInfoType[][]
  [key: string]: any
}

/**
 * @description 赔率推送 repoint接口，详情页所有赔率等接口类型
 * */
export interface AllPointsType {
  id: number | string
  is_parlay: 0 | 1
  is_champion: 0 | 1
  danger_status: 0 | 1
  team_points: TeamPointType[]
}

export interface PullPointsType {
  point_id: number
  delta?: number
  status?: number
  point?: number
}
