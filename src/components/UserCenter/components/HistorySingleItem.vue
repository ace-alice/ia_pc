<script lang="ts">
import { defineComponent } from 'vue'
import { getBetListStatus, parseTime, toFixedNumber } from '@/utils'
import Clipboard from '@/components/Clipboard/index.vue'

export default defineComponent({
  name: 'HistorySingleItem',
  components: { Clipboard },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    const copyImage = new URL('@/assets/icons/time-Copy.png', import.meta.url)
      .href

    const betListStatusget = getBetListStatus(props.info)

    function showNumber(info: any) {
      let num = 0
      if (betListStatusget.code === 5) {
        num = toFixedNumber(Math.abs(+info.bonus))
      }
      else if (betListStatusget.code === 6) {
        num = toFixedNumber(Math.abs(+info.amount))
      }
      else {
        num = toFixedNumber(+info.amount * (+info.odds - 1))
      }
      return num.toFixed(2)
    }

    return {
      toFixedNumber,
      copyImage,
      parseTime,
      showNumber,
      betListStatusget,
    }
  },
})
</script>

<template>
  <div class="HistorySingleItem">
    <div class="single-footer">
      <div>
        {{ $t("bet_amount") }}:{{
          info.amount ? toFixedNumber(info.amount).toFixed(2) : "--"
        }}
      </div>
      <div>
        {{
          betListStatusget.code === 5
            ? $t("win_this_game")
            : betListStatusget.code === 6
              ? $t("lose_this_game")
              : $t("expected_profit")
        }}:
        <span style="color: #fecb00">{{ showNumber(info) }}</span>
      </div>
      <div>
        {{ $t("order_id") }}:
        <Clipboard
          :content="info.order_id"
          parent-node-id="#center-bet-history-box"
          creacte-id="center-bet-history-copy"
        >
          <template #label>
            <span class="order-id">
              <span>{{ info.order_id }}</span>
              <LazyImage :img-url="copyImage" />
            </span>
          </template>
        </Clipboard>
      </div>
      <div>
        {{ info.create_time ? parseTime(info.create_time) : "--" }}
      </div>
    </div>
    <div class="single-body">
      <div class="body-logo">
        <div class="body-logo-con">
          <LazyImage :img-url="info.game_type_logo" />
          <div class="single-tag">
            {{ $t("single_bet") }}
          </div>
        </div>
      </div>
      <div class="body-info">
        <div>{{ info.event_name }}</div>
        <div>{{ info.desc }}</div>
        <div v-if="!info.team_info_desc">
          {{ info.team_name_1 }} - Vs - {{ info.team_name_2 }}
        </div>
        <div v-else>
          {{ info.team_info_desc }}
        </div>
      </div>
      <div class="body-status">
        <div class="odds-status">
          <div
            :style="{
              color: betListStatusget.color,
            }"
          >
            {{ betListStatusget.name }}
          </div>
          <div>
            x{{ toFixedNumber(info.odds).toFixed(2) }}
            <div
              v-if="[5, 6, '5', '6'].includes(betListStatusget.code)"
              class="win-lose"
              :class="{
                'win-bg': [5, '5'].includes(betListStatusget.code),
                'lose-bg': [6, '6'].includes(betListStatusget.code),
              }"
            >
              {{ betListStatusget.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.HistorySingleItem {
  background: #262d34;
  flex-shrink: 0;
  margin-bottom: 8px;
  .single-body {
    padding: 14px 4%;
    display: flex;
    justify-content: space-between;
    .body-status {
      width: 138px;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      // flex-direction: row-reverse;
      .odds-status {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 24px;
        align-items: center;
        & > div:nth-child(1) {
          font-size: 14px;
          color: #fecb00;
        }
        & > div:nth-child(2) {
          font-family: Gotham-Medium, PingFangSC-Medium, monospace;
          font-size: 16px;
          color: #ffffff;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          height: 26px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          position: relative;
        }
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
        position: absolute;
        top: 40px;
        left: 0;
      }
      .win-bg {
        background-image: url("../../../assets/icons/settlement-win-01.png");
      }
      .lose-bg {
        background-image: url("../../../assets/icons/settlement-lose-01.png");
      }
    }
    .body-logo {
      padding-right: 56px;
      flex-shrink: 1;
      .body-logo-con {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .lazy-image {
        height: 40px;
        width: 40px;
        margin-bottom: 8px;
        padding: 4px 4px;
        background: rgba(255,255,255,0.05);
        border-radius: 8px;
      }
      .single-tag {
        background: rgba(255, 255, 255, 0.05);
        // border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;

        font-size: 14px;
        color: #ffffff;
        white-space: nowrap;
        padding: 2px 8px;
      }
    }
    .body-info {
      flex-grow: 1;
      & > div + div {
        margin-top: 12px;
      }
      & > div:nth-child(1) {
        font-size: 16px;
        color: #ffffff;
      }
      & > div:nth-child(2) {
        font-size: 14px;
        color: #ffffff;
      }
      & > div:nth-child(3) {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  .single-footer {
    height: 32px;
    padding: 0 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1c252e;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    & > div {
      display: flex;
      align-items: center;
    }
    & > div:nth-child(1) {
      width: 20%;
      flex-shrink: 0;
    }
    & > div:nth-child(2) {
      width: 20%;
      flex-shrink: 0;
      word-break: break-all;
      span {
        margin-left: 8px;
        white-space: nowrap;
      }
    }
    & > div:nth-child(3) {
      flex-grow: 1;
    }
    .order-id {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .lazy-image {
        height: 24px;
        width: 24px;
      }
    }
  }
}
.green-color {
  color: green !important;
}
.red-color {
  color: red !important;
}
</style>
