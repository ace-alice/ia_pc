type SUN = string | undefined | null
export type NUN = number | undefined | null

export interface CurrencyInfoType {
  show_scale?: number
  id: NUN
  name: string
  name_cn: string
  name_en: string
  name_tw: string
  short_name: string
  short_name_cn: string
  short_name_en: string
  short_name_tw: string
  symbol: string
  exchange_rate: string
  currency_code: string
  [key: string]: any
}

export interface BalanceInfosType {
  amount: SUN
  nickname: SUN
  currency_id: NUN | SUN
}

export type LangType =
  | 'zh-CN'
  | 'en-US'
  | 'zh-TW'
  | 'th-TH'
  | 'vi-VN'
  | 'id-ID'
  | 'ja-JP'
  | 'ko-KR'

export type LangIdType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
