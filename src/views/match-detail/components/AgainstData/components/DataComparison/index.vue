<script setup lang="ts" name="DataComparison">
import type { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import nearDataHook from '@/hooks/nearDataHook'
import shujuVs from '@/assets/icons/shuju_vs.png'
import winTextIcon from '@/assets/icons/hmoe_win_02.png'
import loseTextIcon from '@/assets/icons/hmoe_lose_02.png'
import shuju_turn from '@/assets/icons/shuju_turn.png'
import shuju_time from '@/assets/icons/shuju_time.png'
import shuju_murder from '@/assets/icons/shuju_murder.png'

const props = defineProps({
  dataBase: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  teamInfo: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})

const emit = defineEmits(['nextEmit'])

const isMin = inject('isMin', false)

const isHistory = inject('isHistory', false)

const gameType: any = inject('gameType', 1)

const { useTemplate, useWinLoseTemplate, useHistoryTemplate } = nearDataHook(
  gameType.value,
)

const displayLoseWin = computed(() => {
  if (!useWinLoseTemplate.value) {
    return []
  }
  return useWinLoseTemplate.value.map((temp: any, index: number) => {
    return Object.assign({}, temp, {
      win:
        props.dataBase.length === 2
          ? Number(props.dataBase[index][temp.win_key])
          : 0,
      lose:
        props.dataBase.length === 2
          ? Number(props.dataBase[index][temp.lose_key])
          : 0,
    })
  })
})

const displayHistory = computed(() => {
  if (!useHistoryTemplate.value) {
    return []
  }
  return useHistoryTemplate.value.map((temp: any) => {
    return Object.assign({}, temp, {
      value:
        props.dataBase.length > 0
          ? Number(props.dataBase[0][temp.data_key])
          : 0,
    })
  })
})

function setDominant(team1: number, team2: number) {
  if (team1 > team2) {
    return 0
  }
  else if (team1 < team2) {
    return 1
  }
  else {
    return -1
  }
}

const { t } = useI18n()

function dealData(index: number, temp: any): any[] {
  if (
    props.dataBase.length !== 2
    || !props.dataBase[index]
    || !Object.keys(props.dataBase[index]).includes(temp.data_key)
  ) {
    return [0, t('none')]
  }
  const dataC1 = Number(props.dataBase[0][temp.data_key]) || 0
  const dataC2 = Number(props.dataBase[1][temp.data_key]) || 0
  const dataC = Number(props.dataBase[index][temp.data_key]) || 0
  if (temp) {
    if (temp.is_percentage) {
      return [Math.floor(dataC * 100), `${Math.floor(dataC * 100)}%`]
    }
    else if (temp.is_time) {
      return [
        Math.floor((dataC / (dataC1 + dataC2)) * 100),
        `${Math.floor(dataC / 60)}'${Math.floor(dataC % 60)}`,
      ]
    }
    else {
      return [
        Math.floor((dataC / (dataC1 + dataC2)) * 100),
        Number(dataC.toFixed(1)),
      ]
    }
  }
  else {
    return [0, 0]
  }
}

const displayData = computed(() => {
  if (!useTemplate.value) {
    return []
  }
  return useTemplate.value.map((temp: any) => {
    const data1 = dealData(0, temp)
    const data2 = dealData(1, temp)
    return Object.assign({}, temp, {
      dominant_index: setDominant(data1[0], data2[0]),
      team1: data1[0],
      team2: data2[0],
      team1_value: data1[1],
      team2_value: data2[1],
    })
  })
})

function nextCard() {
  emit('nextEmit')
}

function dealRate(rate: any) {
  if (!Number.isNaN(Number(rate))) {
    return `${(+rate * 100).toFixed(0)}%`
  }
  else {
    return '--'
  }
}
</script>

<template>
  <div class="data-comparison" :class="{ 'data-comparison-is-min': isMin }">
    <div class="near-data">
      <div class="header-label">
        {{ $t("all_recent_data") }}
        <LazyImage
          v-if="isMin"
          :img-url="shuju_turn"
          :is-lazy="false"
          class="un-down-icon"
          @click="nextCard"
        />
      </div>
      <div class="header-team-info">
        <div class="team-info-box">
          <LazyImage
            :img-url="teamInfo[0].logo"
            :is-lazy="false"
            class="team-info-logo-1"
          />
          <div class="team-abbr">
            {{ teamInfo[0].name }}
          </div>
        </div>
        <LazyImage :img-url="shujuVs" :is-lazy="false" style="height: 40px" />
        <div class="team-info-box">
          <LazyImage
            :img-url="teamInfo[1].logo"
            :is-lazy="false"
            class="team-info-logo-2"
          />
          <div class="team-abbr">
            {{ teamInfo[1].name }}
          </div>
        </div>
      </div>
      <div v-for="(item, index) in displayData" :key="index" class="info-main">
        <el-progress
          :percentage="item.team1"
          class="item-progress item-left"
          :class="{ dominant_0_color: item.dominant_index === 0 }"
        >
          <template #default>
            {{ item.team1_value }}
          </template>
        </el-progress>
        <div class="data-name">
          {{ item.data_name }}
        </div>
        <el-progress
          :percentage="item.team2"
          class="item-progress right-progress"
          :class="{ dominant_1_color: item.dominant_index === 1 }"
        >
          <template #default>
            {{ item.team2_value }}
          </template>
        </el-progress>
      </div>
      <div class="lose-win-box" :class="{ 'is-history': isHistory }">
        <div
          v-for="(item, index) in displayLoseWin"
          :key="index"
          class="lose-win-item"
        >
          <div class="lose-win-item-box">
            <div>
              <div class="lose-win-value">
                {{ item.win }}
              </div>
              <LazyImage
                :img-url="winTextIcon"
                :is-lazy="false"
                style="width: 26px; height: 12px; transform: translateY(-4px)"
              />
            </div>
          </div>
          <div class="lose-win-item-box">
            <div>
              <div class="lose-win-value">
                {{ item.lose }}
              </div>
              <LazyImage
                :img-url="loseTextIcon"
                :is-lazy="false"
                style="width: 26px; height: 12px; transform: translateY(-4px)"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="isHistory" class="history-box">
        <div
          v-for="(item, index) in displayHistory"
          :key="index"
          class="history-item"
        >
          <LazyImage
            :img-url="index ? shuju_time : shuju_murder"
            :is-lazy="false"
            style="width: 24px; height: 24px; margin-right: 14px"
          />
          <div class="history-item-box">
            <div class="history-value">
              {{ dealRate(item.value) }}
            </div>
            <div class="data-name">
              {{ item.data_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-comparison-is-min {
  flex-shrink: 0;
  height: auto !important;
  width: 100% !important;
  .header-label {
    padding: 16px 0 !important;
    background: rgba(0, 0, 0, 0.1);
    position: relative;
    .un-down-icon {
      height: 24px;
      height: 24px;
      position: absolute;
      right: 10px;
    }
  }

  &:deep(.el-scrollbar) {
    height: auto !important;
  }
}
.data-comparison {
  width: 410px;
  overflow: hidden;
  height: 100%;
  border-radius: 8px;

  &:deep(.el-scrollbar) {
    height: calc(100% - 48px);
  }

  .header-label {
    font-size: 14px;
    color: #ffffff;
    padding: 24px 0;
    display: flex;
    align-items: center;
    &::before {
      content: "";
      width: 2px;
      height: 16px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 2px;
      margin: 0 18px;
    }
  }

  .progress {
    width: 100px !important;
    .el-progress__text {
      width: 60px;
    }
  }
  .near-data {
    width: 100%;
    .header-team-info {
      display: flex;
      margin: 12px auto;
      justify-content: space-between;
      .team-info-box {
        display: flex;
        width: calc(50% - 36px);
        flex-shrink: 0;
        align-items: center;
        .team-info-logo-1 {
          height: 36px;
          width: 36px;
          background: rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(17, 81, 128, 1);
          border-radius: 50%;
          padding: 2px;
        }
        .team-info-logo-2 {
          height: 36px;
          width: 36px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          border: 2px solid rgba(158, 39, 56, 1);
          padding: 2px;
        }
        .team-abbr {
          width: calc(100% - 36px);
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 14px;
          color: #ffffff;
          opacity: 0.6;
          padding: 10px;
        }
        &:first-child {
          flex-direction: row-reverse;
          .team-abbr {
            text-align: right;
          }
        }
      }
    }
    .is-history {
      background: rgba(0, 0, 0, 0) !important;
      margin: 0 auto !important;
    }

    .history-box {
      height: 60px;
      width: calc(100% - 48px);
      margin: 0 auto 14px;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      & > div {
        width: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        & + div {
          &::before {
            content: "";
            width: 1px;
            height: 20px;
            position: absolute;
            top: 2px;
            left: 0;
            background-color: rgba(255, 255, 255, 0.09);
            border-radius: 1px;
          }
        }
      }
      .history-item {
        display: flex;
        .history-item-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #9b9b9b;
          font-size: 12px;
          .history-value {
            font-family: Gotham-Medium;
            font-size: 14px;
            color: #ffffff;
            font-weight: 500;
            margin-bottom: 2px;
          }
          .data-name {
            width: 100px;
            word-break: break-all;
            text-align: center;
          }
        }
      }
    }
    .lose-win-box {
      height: 60px;
      width: calc(100% - 48px);
      margin: 14px auto;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      .lose-win-item {
        display: flex;
        .lose-win-item-box {
          display: flex;
          align-items: center;
          & > div + div {
            margin-left: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
        .lose-win-value {
          font-family: Gotham-Medium;
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
          text-align: center;
        }
        .image-box {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          height: 32px;
          width: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div + div {
          margin-left: 24px;
        }
      }

      & > div {
        width: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        & + div {
          &::before {
            content: "";
            width: 1px;
            height: 20px;
            position: absolute;
            top: 2px;
            left: 0;
            background-color: rgba(255, 255, 255, 0.09);
            border-radius: 1px;
          }
        }
      }
    }
    .header-item {
      width: 100%;
      height: 5px;
    }
    .lolNearTemplate {
      background: #038893;
    }
    .header-logo {
      height: 40px;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(20px);
    }
    .info-main {
      display: flex;
      justify-content: center;
      align-items: center;
      & + .info-main {
        margin-top: 8px;
      }
      .dominant_0_color {
        &:deep(.el-progress-bar) {
          .el-progress-bar__outer {
            .el-progress-bar__inner {
              background-color: unset !important;
              background-image: linear-gradient(
                270deg,
                #2390e2 2%,
                #6fcfe5 100%
              ) !important;
            }
          }
        }
      }
      .dominant_1_color {
        &:deep(.el-progress-bar) {
          .el-progress-bar__outer {
            .el-progress-bar__inner {
              background-color: unset !important;
              background-image: linear-gradient(
                270deg,
                #ea7460 0%,
                #c50138 100%
              ) !important;
            }
          }
        }
      }
      .right-progress {
        &:deep(.el-progress-bar) {
          .el-progress-bar__outer {
            .el-progress-bar__inner {
              background-color: unset !important;
              background-image: linear-gradient(
                270deg,
                #d8d8d8 0%,
                #9b9b9b 100%
              );
            }
          }
        }
      }
      &:deep(.el-progress) {
        .el-progress-bar {
          .el-progress-bar__outer {
            background-color: rgba(0, 0, 0, 0.3) !important;
            .el-progress-bar__inner {
              background-color: unset !important;
            }
          }
        }
        .el-progress__text {
          width: 60px;
          // font-family: Gotham-Medium;
          font-size: 12px;
          color: #ffffff;
        }
      }
      .item-progress {
        width: 150px !important;
      }
      .item-left {
        flex-direction: row-reverse;
        &:deep(.el-progress__text) {
          text-align: right;
          padding-right: 6px;
        }
        &:deep(.el-progress-bar) {
          .el-progress-bar__outer {
            .el-progress-bar__inner {
              left: unset !important;
              right: 0;
              background-image: linear-gradient(
                270deg,
                #9b9b9b 0%,
                #d8d8d8 100%
              );
            }
          }
        }
      }
      .data-name {
        flex-grow: 1;
        text-align: center;
        width: 100px;
        padding: 0 8px;
        font-size: 12px;
        overflow: hidden;
        color: rgba(242, 242, 246, 0.6);
        white-space: nowrap;
        word-break: break-all;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
