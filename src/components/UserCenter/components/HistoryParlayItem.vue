<script lang="ts">
import { defineComponent } from 'vue'
import { getBetListStatus, parseTime, toFixedNumber } from '@/utils'
import Clipboard from '@/components/Clipboard/index.vue'
import copyImage from '@/assets/icons/time-Copy.png'
import MoreIcon from '@/assets/icons/turn-on.png'
import { getUserParlayList } from '@/api/tools-api'

export default defineComponent({
  name: 'HistoryParlayItem',
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
    const betListStatus = getBetListStatus(props.info, true)
    function showNumber(info: any) {
      let num = 0
      if (betListStatus.code === 5) {
        num = toFixedNumber(Math.abs(+info.bonus))
      }
      else if (betListStatus.code === 6) {
        num = toFixedNumber(Math.abs(+info.amount))
      }
      else {
        num = toFixedNumber(+info.amount * (+info.odds - 1))
      }
      return num.toFixed(2)
    }

    const showMore = ref(false)

    const isGetDetail = ref(false)

    function showMoreHandle() {
      if (!isGetDetail.value) {
        getUserParlayList({ id: props.info.id }).then((res: any) => {
          if (+res.data.code === 1) {
            Object.assign(props.info, {
              parlay_info: res.data.data,
            })
            isGetDetail.value = true
          }
          else {
            showMore.value = false
            isGetDetail.value = false
          }
        }).catch(() => {
          showMore.value = false
          isGetDetail.value = false
        })
      }
      showMore.value = !showMore.value
    }

    return {
      toFixedNumber,
      copyImage,
      getBetListStatus,
      parseTime,
      showNumber,
      betListStatus,
      MoreIcon,
      showMore,
      showMoreHandle,
    }
  },
})
</script>

<template>
  <div
    class="HistoryParlayItem"
    :style="{ '--height': 102.5 * (info.parlay_info?.length || 0) }"
  >
    <div class="parlay-footer">
      <div class="footer-top">
        <div>
          <span class="parlay-game">{{ $t("parlay_game") }}</span>
          <span class="parlay-desc">({{ info.desc }})</span>
        </div>
        <div class="odd-box">
          <div>x{{ toFixedNumber(info.odds).toFixed(2) }}</div>
        </div>
        <div class="odd-status">
          <div
            :style="{
              color: betListStatus.color,
            }"
          >
            {{ betListStatus.name }}
          </div>
          <img
            :src="MoreIcon"
            alt=""
            class="more-icon"
            :class="{ 'show-more': showMore }"
            @click="showMoreHandle"
          >
          <div
            v-if="[7, '7'].includes(betListStatus.code)"
            class="win-lose-top"
            :class="{
              'win-bg': [5, '5'].includes(getBetListStatus(info).code),
              'lose-bg': [6, '6'].includes(getBetListStatus(info).code),
            }"
          >
            {{ getBetListStatus(info).name }}
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          {{ $t("bet_amount") }}:{{
            info.amount ? toFixedNumber(info.amount).toFixed(2) : "--"
          }}
        </div>
        <div>
          <span>{{
            [5, 6].includes(betListStatus.code)
              ? betListStatus.name
              : $t("expected_profit")
          }}</span>:
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
    </div>
    <div class="parlay-body" :class="{ 'body-more': showMore }">
      <div
        v-for="parlayInfo in info.parlay_info"
        :key="parlayInfo.parlay_id"
        class="parlay-info"
      >
        <div class="body-logo">
          <div class="body-logo-con">
            <LazyImage :img-url="parlayInfo.game_type_logo" />
            <div class="single-tag">
              {{ $t("single_bet") }}
            </div>
          </div>
          <!-- <LazyImage :img-url="parlayInfo.game_type_logo" />
          <div class="single-tag">
            {{ $t("single_bet") }}
          </div> -->
        </div>
        <div class="body-info">
          <div>{{ parlayInfo.event_name }}</div>
          <div>{{ parlayInfo.desc }}</div>
          <div>
            {{ parlayInfo.team_name_1 }} - Vs -
            {{ parlayInfo.team_name_2 }}
          </div>
        </div>
        <div class="body-status">
          <div class="odds-status">
            <div
              :style="{
                color: getBetListStatus(parlayInfo).color,
              }"
            >
              {{ getBetListStatus(parlayInfo).name }}
            </div>
            <div>
              x{{ toFixedNumber(parlayInfo.odds).toFixed(2) }}
              <div
                v-if="
                  [5, 6, '5', '6'].includes(getBetListStatus(parlayInfo).code)
                "
                class="win-lose"
                :class="{
                  'win-bg': [5, '5'].includes(
                    getBetListStatus(parlayInfo).code,
                  ),
                  'lose-bg': [6, '6'].includes(
                    getBetListStatus(parlayInfo).code,
                  ),
                }"
              >
                {{ getBetListStatus(parlayInfo).name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.HistoryParlayItem {
  background: #262d34;
  flex-shrink: 0;
  margin-bottom: 8px;
  .body-more {
    height: calc(var(--height) * 1px) !important;
  }
  .win-lose-top {
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
    top: 0px;
    right: 34px;
  }
  .parlay-body {
    height: 0;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    .parlay-info {
      & + .parlay-info {
        //border-top: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        &:after {
          content: "";
          height: 1px;
          position: absolute;
          top: 0;
          width: 96%;
          left: 2%;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
      padding: 14px 4%;
      display: flex;
      justify-content: space-between;
      .body-status {
        width: 138px;
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
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
          background: rgba(255, 255, 255, 0.05);
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
  }
  .parlay-footer {
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div:nth-child(1) {
        width: 20%;
      }
      .odd-box {
        flex: 1;
        display: flex;
        div {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          padding: 3px 18px;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          font-family: Gotham-Medium, PingFangSC-Medium, monospace;
        }
      }
      .parlay-game {
        font-size: 16px;
        color: #fecb00;
        letter-spacing: 0;
        line-height: 22px;
        font-weight: 600;
        margin-right: 10px;
      }
      .parlay-desc {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 22px;
      }
      .odd-status {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        width: 138px;
        position: relative;
        .more-icon {
          height: 24px;
          width: 24px;
          cursor: pointer;
          transform: rotateZ(-90deg);
          transition: all 0.2s ease-in-out;
        }
        .show-more {
          transform: rotateZ(90deg);
        }
      }
    }
    height: 76px;
    padding: 12px 4%;
    background: #1c252e;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px;
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
        // span {
        //   margin-left: 8px;
        // }
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
}
.green-color {
  color: green !important;
}
.red-color {
  color: red !important;
}
.win-bg {
  background-image: url("../../../assets/icons/settlement-win-01.png");
}
.lose-bg {
  background-image: url("../../../assets/icons/settlement-lose-01.png");
}
</style>
