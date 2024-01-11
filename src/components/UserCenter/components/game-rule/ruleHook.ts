import { getLocal } from '@/utils/storage'

const CnRule0 = defineAsyncComponent(() => import('./zh-cn/rule0.vue'))
const CnRule1 = defineAsyncComponent(() => import('./zh-cn/rule1.vue'))
const CnRule2 = defineAsyncComponent(() => import('./zh-cn/rule2.vue'))
const CnRule3 = defineAsyncComponent(() => import('./zh-cn/rule3.vue'))
const CnRule4 = defineAsyncComponent(() => import('./zh-cn/rule4.vue'))

const EnRule0 = defineAsyncComponent(() => import('./en-us/rule0.vue'))
const EnRule1 = defineAsyncComponent(() => import('./en-us/rule1.vue'))
const EnRule2 = defineAsyncComponent(() => import('./en-us/rule2.vue'))
const EnRule3 = defineAsyncComponent(() => import('./en-us/rule3.vue'))
const EnRule4 = defineAsyncComponent(() => import('./en-us/rule4.vue'))

const TwRule0 = defineAsyncComponent(() => import('./zh-tw/rule0.vue'))
const TwRule1 = defineAsyncComponent(() => import('./zh-tw/rule1.vue'))
const TwRule2 = defineAsyncComponent(() => import('./zh-tw/rule2.vue'))
const TwRule3 = defineAsyncComponent(() => import('./zh-tw/rule3.vue'))
const TwRule4 = defineAsyncComponent(() => import('./zh-tw/rule4.vue'))

const InRule0 = defineAsyncComponent(() => import('./in-id/rule0.vue'))
const InRule1 = defineAsyncComponent(() => import('./in-id/rule1.vue'))
const InRule2 = defineAsyncComponent(() => import('./in-id/rule2.vue'))
const InRule3 = defineAsyncComponent(() => import('./in-id/rule3.vue'))
const InRule4 = defineAsyncComponent(() => import('./in-id/rule4.vue'))

const JaRule0 = defineAsyncComponent(() => import('./ja-jp/rule0.vue'))
const JaRule1 = defineAsyncComponent(() => import('./ja-jp/rule1.vue'))
const JaRule2 = defineAsyncComponent(() => import('./ja-jp/rule2.vue'))
const JaRule3 = defineAsyncComponent(() => import('./ja-jp/rule3.vue'))
const JaRule4 = defineAsyncComponent(() => import('./ja-jp/rule4.vue'))

const KoRule0 = defineAsyncComponent(() => import('./ko-kr/rule0.vue'))
const KoRule1 = defineAsyncComponent(() => import('./ko-kr/rule1.vue'))
const KoRule2 = defineAsyncComponent(() => import('./ko-kr/rule2.vue'))
const KoRule3 = defineAsyncComponent(() => import('./ko-kr/rule3.vue'))
const KoRule4 = defineAsyncComponent(() => import('./ko-kr/rule4.vue'))

const ThRule0 = defineAsyncComponent(() => import('./th-th/rule0.vue'))
const ThRule1 = defineAsyncComponent(() => import('./th-th/rule1.vue'))
const ThRule2 = defineAsyncComponent(() => import('./th-th/rule2.vue'))
const ThRule3 = defineAsyncComponent(() => import('./th-th/rule3.vue'))
const ThRule4 = defineAsyncComponent(() => import('./th-th/rule4.vue'))

const ViRule0 = defineAsyncComponent(() => import('./vi-vn/rule0.vue'))
const ViRule1 = defineAsyncComponent(() => import('./vi-vn/rule1.vue'))
const ViRule2 = defineAsyncComponent(() => import('./vi-vn/rule2.vue'))
const ViRule3 = defineAsyncComponent(() => import('./vi-vn/rule3.vue'))
const ViRule4 = defineAsyncComponent(() => import('./vi-vn/rule4.vue'))

export default function () {
  const cnRules: any = {
    rule0: CnRule0,
    rule1: CnRule1,
    rule2: CnRule2,
    rule3: CnRule3,
    rule4: CnRule4,
  }
  const enRules: any = {
    rule0: EnRule0,
    rule1: EnRule1,
    rule2: EnRule2,
    rule3: EnRule3,
    rule4: EnRule4,
  }

  const twRules: any = {
    rule0: TwRule0,
    rule1: TwRule1,
    rule2: TwRule2,
    rule3: TwRule3,
    rule4: TwRule4,
  }

  const inRules: any = {
    rule0: InRule0,
    rule1: InRule1,
    rule2: InRule2,
    rule3: InRule3,
    rule4: InRule4,
  }

  const jaRules: any = {
    rule0: JaRule0,
    rule1: JaRule1,
    rule2: JaRule2,
    rule3: JaRule3,
    rule4: JaRule4,
  }

  const koRules: any = {
    rule0: KoRule0,
    rule1: KoRule1,
    rule2: KoRule2,
    rule3: KoRule3,
    rule4: KoRule4,
  }

  const thRules: any = {
    rule0: ThRule0,
    rule1: ThRule1,
    rule2: ThRule2,
    rule3: ThRule3,
    rule4: ThRule4,
  }

  const viRules: any = {
    rule0: ViRule0,
    rule1: ViRule1,
    rule2: ViRule2,
    rule3: ViRule3,
    rule4: ViRule4,
  }

  const lang = getLocal('lang') || 1

  const langOfRule: any = {
    1: cnRules,
    2: enRules,
    3: twRules,
    4: thRules,
    5: viRules,
    6: inRules,
    7: jaRules,
    8: koRules,
  }

  const currentRules = computed(() => {
    return langOfRule[String(lang)]
  })

  return { currentRules }
}
