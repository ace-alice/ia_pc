export type BetType = 'single' | 'parlay'

export interface ShopCartElementType {
  category_id: 1 | 2 | 3
  game_logo: string
  game_id: number | string
  shop_id: number | string
  danger_status: 1 | 0
  status: number
  desc: string
  ext: number
  money_max: number
  money_min: number
  odd: string
  play_info_id: number
  is_champion: 1 | 0
  is_del: 1 | 0
  is_finish: 1 | 0
  is_parlay: 1 | 0
  match: 1 | 0
  is_lock: 1 | 0
  parlay_money_min: number
  play_name: string
  team_name_1: string
  team_name_2: string
  single_parlay_array: number[] // [...single_parlay_x]
  cumulate_parlay_array: number[]
  user_parlay_single_limit: number
  user_parlay_total_limit: number
  // parlay_user_daily_payout: number // [parlay_global_userday_payout,parlay_user_day_payout,parlay_user_single_payout]的最小值
  [key: string]: any
}

export type OperateAction = 'statusChange' | 'hideChange' | 'gameHideChange' | 'notToBet'
