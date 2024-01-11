<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CountTo from '@/components/VueCountTo/index.vue'
import warningImg from '@/assets/icons/warning_01.png'
import { shopCartStore } from '@/store/shopCart'

export default defineComponent({
  name: 'ParlayBetBox',
  components: { CountTo },
  props: {
    totalBet: {
      type: Number,
      default: 0,
    },
    totalBonus: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    messages: {
      type: Object as PropType<any>,
      default: () => {},
    },
  },
  emits: ['toBet', 'acceptChange', 'toBottom'],
  setup(props: any, { emit }: any) {
    const betStartVal = ref(0)

    const bonusStartVal = ref(0)

    watch(() => props.totalBonus, (_, oldVal) => {
      bonusStartVal.value = oldVal
    })

    watch(() => props.totalBet, (_, oldVal) => {
      betStartVal.value = oldVal
    })

    const i18n = useI18n()

    const warnMessage = i18n.t('danger_status_pl')

    const hasChange = ref(false)

    const { oddDelivery, parlayCartList } = storeToRefs(shopCartStore())

    let oldShopCartList: any = JSON.parse(JSON.stringify(parlayCartList.value))

    watch(() => parlayCartList.value, (newVal) => {
      switch (oddDelivery.value) {
        case 2:
          hasChange.value = false
          break
        case 1:
          hasChange.value = newVal.some((_shop: any) => {
            const oldData = oldShopCartList.find((shop: any) => {
              return +shop.shop_id === +_shop.shop_id
            })
            if (oldData && +oldData.odd > +_shop.odd) {
              return true
            }
            else {
              return false
            }
          })
          break
        case 0:
          hasChange.value = newVal.some((_shop: any) => {
            const oldData = oldShopCartList.find((shop: any) => {
              return +shop.shop_id === +_shop.shop_id
            })
            if (oldData && oldData && +oldData.odd !== +_shop.odd) {
              return true
            }
            else {
              return false
            }
          })
          break
      }
      oldShopCartList = JSON.parse(JSON.stringify(newVal))
    }, { deep: true })

    function toBet() {
      emit('toBottom')
      if (hasChange.value) {
        hasChange.value = false
        return
      }
      if (props.disabled) {
        return
      }
      emit('toBet')
    }

    return { betStartVal, bonusStartVal, toBet, hasChange, warnMessage, warningImg }
  },
})
</script>

<template>
  <div class="parlay-bet-box">
    <div v-show="messages.type && messages.type === 'status'" class="warn-box">
      {{ messages.error }}
    </div>
    <div v-show="hasChange" class="warn-box">
      {{ warnMessage }}
    </div>
    <div
      v-show="messages.type && messages.type === 'length'"
      class="warn-box length-box"
    >
      <LazyImage :img-url="warningImg" :is-lazy="false" />
      <span>
        {{ messages.error }}
      </span>
    </div>
    <div class="total-bet">
      <div>{{ $t("tot_bet") }}</div>
      <div>
        <CountTo
          :start-val="Number(betStartVal)"
          :end-val="Number(totalBet)"
          :duration="1000"
        />
      </div>
    </div>
    <div class="total-bonus">
      <div>{{ $t("expected_profit") }}</div>
      <div>
        <CountTo
          :start-val="Number(bonusStartVal)"
          :end-val="Number(totalBonus)"
          :duration="1000"
        />
      </div>
    </div>
    <div
      class="bet-btn"
      :class="{ 'disabled': disabled, 'has-change': hasChange }"
      @click.stop="toBet"
    >
      {{ hasChange ? $t("accept_odds") : $t("bet_now") }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parlay-bet-box {
  width: 100%;
  padding: 14px 28px;
  //box-shadow: 0 -5px 5px rgba(255, 255, 255, 0.1);
  z-index: 50;
  .total-bonus,
  .total-bet {
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    div:nth-child(1) {
      font-size: 14px;
      color: #ffffff;
      font-weight: 400;
      max-width: 60%;
    }
    div:nth-child(2) {
      font-family: Gotham-Medium, PingFangSC-Medium, monospace;
      font-size: 14px;
      color: #ffffff;
      font-weight: 500;
    }
  }
  .total-bonus {
    div:nth-child(2) {
      color: #fecb00;
    }
  }
  .bet-btn {
    height: 40px;
    line-height: 40px;
    background-image: linear-gradient(90deg, #f98442 0%, #fd8908 94%);
    border-radius: 8px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 500;
    text-align: center;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .disabled {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(146, 149, 147, 0.31) 99%
    );
    border: 1px solid rgba(104, 104, 104, 1);
    cursor: not-allowed;
  }
  .has-change {
    background-image: linear-gradient(90deg, #d53720 0%, #f2691e 98%);
    color: #ffffff;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .warn-box {
    background-image: linear-gradient(
      90deg,
      rgba(254, 94, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    min-height: 52px;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 20px;
    margin-bottom: 14px;
    font-size: 14px;
    color: #f36c1d;
    font-weight: 400;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 4px;
      top: 0;
      left: 0;
      background: #f36c1d;
      border-radius: 8px 0 0 8px;
    }
  }
  .length-box {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    color: #fecb00;
    padding-right: 12px;
    &:before{
      display: none;
    }
    .lazy-image{
      height: 24px;
      width: 24px;
      margin-right: 12px;
    }
  }
}
</style>
