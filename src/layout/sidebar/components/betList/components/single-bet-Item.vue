<script lang="ts">
import { defineComponent } from 'vue'
import { getBetListStatus, parseTime, toFixedNumber } from '@/utils'
import CountTo from '@/components/VueCountTo/index.vue'
import Clipboard from '@/components/Clipboard/index.vue'

export default defineComponent({
  name: 'SingleBetItem',
  components: { CountTo, Clipboard },
  props: {
    betInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    const copyImage = new URL('@/assets/icons/time-Copy.png', import.meta.url)
      .href

    const statusInfo: any = getBetListStatus(props.betInfo)

    function showNumber(info: any) {
      let num: number
      if (statusInfo.code === 5) {
        num = toFixedNumber(Math.abs(+info.bonus))
      }
      else if (statusInfo.code === 6) {
        num = toFixedNumber(Math.abs(+info.amount))
      }
      else {
        num = toFixedNumber(+info.amount * (+info.odds - 1))
      }
      return num.toFixed(2)
    }

    return {
      statusInfo,
      toFixedNumber,
      parseTime,
      copyImage,
      showNumber,
    }
  },
})
</script>

<template>
  <div class="single-bet-Item">
    <div class="bet-header">
      <LazyImage :img-url="betInfo.game_type_logo" />
      <div class="event-name">
        {{ betInfo.event_name }}
      </div>
      <div class="bet-status" :style="{ color: statusInfo.color }">
        {{ statusInfo.name }}
      </div>
    </div>
    <div class="match-content">
      <div class="desc-box">
        <div>{{ betInfo.desc }}</div>
        <div
          v-if="['5', '6', 5, 6].includes(statusInfo.code)"
          class="win-lose"
          :class="{
            'win-bg': [5, '5'].includes(statusInfo.code),
            'lose-bg': [6, '6'].includes(statusInfo.code),
          }"
        >
          {{ statusInfo.name }}
        </div>
      </div>
      <div v-if="!betInfo.team_info_desc">
        {{ betInfo.team_name_1 }} - VS - {{ betInfo.team_name_2 }}
      </div>
      <div v-else>
        {{ betInfo.team_info_desc }}
      </div>
    </div>
    <div class="bet-content">
      <div>
        <span>{{ $t("cart_bet_odds") }}</span>
        <span>x{{ toFixedNumber(betInfo.odds).toFixed(2) }}</span>
      </div>
      <div>
        <span>{{ $t("bet_amount") }}</span>
        <span><CountTo :start-val="0" :end-val="Number(betInfo.amount)" /></span>
      </div>
      <div>
        <span>{{
          [5, 6].includes(statusInfo.code)
            ? statusInfo.name
            : $t("expected_profit")
        }}</span>
        <span class="amount">
          <CountTo
            v-if="showNumber(betInfo)"
            :start-val="0"
            :end-val="Number(showNumber(betInfo))"
          />
          <span v-else />
        </span>
      </div>
    </div>
    <div class="currency-content">
      <div>
        <span>{{ $t("order_id") }}:</span>
        <Clipboard
          :content="betInfo.order_id"
          parent-node-id="#sidebar-box"
          creacte-id="bet-history-copy"
        >
          <template #label>
            {{ betInfo.order_id }} <LazyImage :img-url="copyImage" />
          </template>
        </Clipboard>
      </div>
      <div>
        <!-- <span>{{ $t("bet_currency") }}:{{
          betInfo.currency_info?.short_name || ""
        }}</span> -->
        <span v-if="betInfo.create_time">{{
          parseTime(
            Number(betInfo.create_time) * 1000,
            "{y}-{m}-{d} {h}:{i}:{s}",
          )
        }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-bet-Item {
  width: 288px;
  margin: 0 auto 12px;
  padding: 10px;
  background: #181c22;
  border-radius: 16px;
  .bet-header {
    background: #262d34;
    border-radius: 8px 8px 0 0;
    height: 44px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    .lazy-image {
      flex-shrink: 0;
      height: 24px;
      width: 24px;
    }
    .event-name {
      flex-grow: 1;
      padding: 0 14px;
      white-space: pre-wrap;
      font-size: 14px;
      color: #ffffff;
      font-weight: 400;
      word-break: break-all;
      max-height: 48px;
      overflow: hidden;
    }
    .bet-status {
      flex-shrink: 0;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .match-content {
    padding: 16px 6px 12px;
    font-size: 14px;
    color: #ffffff;
    div {
      white-space: pre-wrap;
      word-break: break-all;
    }
    & > div:nth-child(2) {
      margin-top: 12px;
      color: rgba(255, 255, 255, 0.6);
    }
    .desc-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:nth-child(1) {
        flex: 1;
        padding-right: 12px;
      }
    }
  }
  .bet-content {
    width: calc(100% - 6px);
    margin: auto;
    padding: 12px 0;
    // font-family: PingFangSC-Medium, monospace;
    font-size: 14px;
    color: #ffffff;
    line-height: 20px;
    font-weight: 500;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    & > div {
      display: flex;
      justify-content: space-between;
      span:nth-child(2) {
        font-family: Gotham-Medium, monospace;
      }
      & + div {
        margin-top: 12px;
      }
      .amount {
        color: #fecb00;
      }
    }
  }
  .currency-content {
    padding: 12px 6px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & + div {
        margin-top: 12px;
      }
    }
    .clipboard {
      display: flex;
      align-items: center;
      .lazy-image {
        margin-left: 12px;
        height: 24px;
        width: 24px;
      }
    }
  }
}
.win-bg {
  background-image: url("../../../../../assets/icons/settlement-win-01.png");
}
.lose-bg {
  background-image: url("../../../../../assets/icons/settlement-lose-01.png");
}
.win-lose {
  height: 20px;
  width: 38px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-size: 100% 100%;
}
</style>
