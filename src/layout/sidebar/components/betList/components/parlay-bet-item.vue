<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getBetListStatus, parseTime, toFixedNumber } from '@/utils'
import Clipboard from '@/components/Clipboard/index.vue'
import openImage from '@/assets/icons/spread_001.png'
import closeImage from '@/assets/icons/spread_002.png'
import copyImage from '@/assets/icons/time-Copy.png'
import winBg from '@/assets/icons/settlement-win-01.png'
import loseBg from '@/assets/icons/settlement-lose-01.png'
import pIcon from '@/assets/icons/parlay_icon.png'
import { getUserParlayList } from '@/api/tools-api'

export default defineComponent({
  name: 'ParlayBetItem',
  components: { Clipboard },
  props: {
    betInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    const statusInfo: any = getBetListStatus(props.betInfo, true)

    const parlayInfoItemRef = ref<HTMLDivElement | null>()

    const showAll = ref(false)

    const groupHeight = computed(() => {
      if (
        parlayInfoItemRef.value
        && Array.isArray(parlayInfoItemRef.value)
        && parlayInfoItemRef.value.length > 0
      ) {
        if (showAll.value) {
          let height = 0
          for (const parlayInfo of parlayInfoItemRef.value) {
            height += parlayInfo.clientHeight
          }
          return height
        }
        else {
          return 0
        }
      }
      else {
        return 0
      }
    })

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

    const isGetDetail = ref(false)

    async function showMoreHandle() {
      if (
        !isGetDetail.value
        || !props.betInfo.parlay_info
        || !Array.isArray(props.betInfo.parlay_info)
        || props.betInfo.parlay_info.length === 0
      ) {
        await getUserParlayList({ id: props.betInfo.id })
          .then((res: any) => {
            if (+res.data.code === 1) {
              Object.assign(props.betInfo, {
                parlay_info: res.data.data,
              })
              isGetDetail.value = true
            }
            else {
              showAll.value = false
              isGetDetail.value = false
            }
          })
          .catch(() => {
            showAll.value = false
            isGetDetail.value = false
          })
      }
      showAll.value = !showAll.value
    }

    onActivated(() => {
      showAll.value = false
      isGetDetail.value = false
    })

    return {
      copyImage,
      statusInfo,
      openImage,
      closeImage,
      parseTime,
      getBetListStatus,
      winBg,
      loseBg,
      groupHeight,
      showAll,
      parlayInfoItemRef,
      toFixedNumber,
      showNumber,
      pIcon,
      showMoreHandle,
    }
  },
})
</script>

<template>
  <div class="parlay-bet-item" :style="{ '--group-height': groupHeight }">
    <div class="bet-header">
      <LazyImage :img-url="pIcon" />
      <div class="event-name">
        {{ betInfo.desc }}
      </div>
      <div class="bet-status" :style="{ color: statusInfo.color }">
        <span> {{ statusInfo.name }}</span>
        <!-- v-if="['5', '6', 5, 6].includes(statusInfo.code)" -->
        <div
          v-if="['5', '6', 5, 6].includes(getBetListStatus(betInfo).code)"
          class="win-lose"
          :class="{
            'win-bg': [5, '5'].includes(getBetListStatus(betInfo).code),
            'lose-bg': [6, '6'].includes(getBetListStatus(betInfo).code),
          }"
        >
          {{ getBetListStatus(betInfo).name }}
        </div>
        <LazyImage
          v-show="showAll"
          :img-url="closeImage"
          :is-lazy="false"
          @click="showAll = !showAll"
        />
        <LazyImage
          v-show="!showAll"
          :img-url="openImage"
          :is-lazy="false"
          @click="showMoreHandle"
        />
      </div>
    </div>
    <div class="match-content-group">
      <div
        v-for="info in betInfo.parlay_info || []"
        :key="info.order_id + getBetListStatus(info).code"
        ref="parlayInfoItemRef"
        class="match-content"
      >
        <div>
          {{ info.desc }}
        </div>
        <div>{{ info.team_name_1 }} - VS - {{ info.team_name_2 }}</div>
        <div>
          <span>{{ $t("cart_bet_odds") }}</span>
          <span>x{{ toFixedNumber(info.odds).toFixed(2) }}</span>
        </div>
        <div
          v-if="[5, 6, '5', '6'].includes(getBetListStatus(info).code)"
          class="win-lose"
        >
          <LazyImage
            :img-url="+getBetListStatus(info).code === 5 ? winBg : loseBg"
            :is-lazy="false"
          />
          <div class="text">
            {{ +getBetListStatus(info).code === 5 ? $t("win") : $t("lose") }}
          </div>
        </div>
      </div>
    </div>
    <div v-show="!showAll" class="bet-content">
      <div>
        <span>{{ $t("cart_bet_odds") }}</span>
        <span>x{{ toFixedNumber(betInfo.odds).toFixed(2) }}</span>
      </div>
      <div>
        <span>{{ $t("bet_amount") }}</span>
        <span>{{ toFixedNumber(betInfo.amount).toFixed(2) }}</span>
      </div>
      <div>
        <span>{{
          [5, 6].includes(statusInfo.code)
            ? statusInfo.name
            : $t("expected_profit")
        }}</span>
        <span class="amount">
          <span v-if="showNumber(betInfo)">{{ showNumber(betInfo) }}</span>
          <span v-else />
        </span>
      </div>
    </div>
    <div class="currency-content">
      <template v-if="showAll">
        <div>
          <span>{{ betInfo.desc }}:</span>
          <span>x{{ toFixedNumber(betInfo.odds).toFixed(2) }}</span>
        </div>
        <div>
          <span>{{ $t("bet_amount") }}:</span>
          <span>{{ toFixedNumber(betInfo.amount).toFixed(2) }}</span>
        </div>
        <div>
          <span>{{
            [5, 6].includes(statusInfo.code)
              ? statusInfo.name
              : $t("expected_profit")
          }}</span>
          <span>{{ showNumber(betInfo) }}</span>
        </div>
      </template>
      <div class="order-id">
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
.parlay-bet-item {
  width: 288px;
  margin: 0 auto 12px;
  padding: 10px;
  background: #181c22;
  border-radius: 16px;
  .match-content-group {
    transition: height 0.3s ease-in-out;
    height: calc(var(--group-height) * 1px);
    overflow: hidden;
  }
  .match-content {
    padding: 12px 6px 0;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    position: relative;
    div {
      white-space: pre-wrap;
      word-break: break-all;
    }
    .win-lose {
      position: absolute;
      height: 20px;
      width: 38px;
      right: 8px;
      top: 12px;
      .text {
        position: absolute;
        height: 20px;
        width: 38px;
        left: 0;
        top: 0;
        text-align: center;
        line-height: 20px;
        z-index: 100;
        margin: 0;
        color: #ffffff;
      }
      .lazy-image {
        position: absolute;
        left: 0;
        top: 0;
        height: 20px;
        width: 38px;
      }
    }
    div:nth-child(2) {
      margin-top: 12px;
      color: rgba(255, 255, 255, 0.6);
    }
    div:nth-child(3) {
      height: 36px;
      padding: 0 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      margin-top: 12px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        // font-family: PingFangSC-Medium, monospace;
        color: #ffffff;
        font-weight: 500;
      }
      span:nth-child(2) {
        font-family: Gotham-Medium, PingFangSC-Medium, monospace;
        color: #fecb00;
      }
    }
  }
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
      display: flex;
      align-items: center;
      .lazy-image {
        height: 24px;
        width: 24px;
        margin-left: 8px;
        cursor: url("@/assets/icons/home_mouse.png"), auto;
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
        margin-left: 12px;
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
      &:nth-child(1) {
        justify-content: flex-start;
        span:nth-child(2) {
          color: #ffffff;
          margin-left: 8px;
        }
      }
      &:nth-child(2) {
        justify-content: flex-start;
        span:nth-child(2) {
          color: #ffffff;
          margin-left: 8px;
        }
      }
      &:nth-child(3) {
        justify-content: flex-start;
        span:nth-child(2) {
          color: #fecb00;
          margin-left: 8px;
        }
      }
      & + div {
        margin-top: 12px;
      }
    }
    .order-id {
      justify-content: space-between !important;
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
</style>
