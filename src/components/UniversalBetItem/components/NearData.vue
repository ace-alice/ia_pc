<script lang="ts" setup name="NearData">
import { useI18n } from 'vue-i18n'
import nearDataHook from '@/hooks/nearDataHook'
import avatar1 from '@/assets/icons/home_dataanalysis.png'
import LolLogo from '@/assets/icons/hmoe_lol_.png'
import hmoe_dota2 from '@/assets/icons/hmoe_dota2.png'
import hmoe_csgo from '@/assets/icons/hmoe_csgo.png'
import hmoe_wangzhe from '@/assets/icons/hmoe_wangzhe.png'
import winIcon from '@/assets/icons/hmoe_win_01.png'
import loseIcon from '@/assets/icons/hmoe_lose_01.png'
import winTextIcon from '@/assets/icons/hmoe_win_02.png'
import loseTextIcon from '@/assets/icons/hmoe_lose_02.png'
import { getAntBeforeGameDataApi } from '@/api/ant-match-info'
import shujuVs from '@/assets/icons/shuju_vs.png'

const props = defineProps({
  gameType: {
    type: Number,
    default: 1,
  },
  gameId: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['toDetailClick'])

function toDetailClick(value: any) {
  emit('toDetailClick', value)
}

const logos: any = {
  lolNearTemplate: LolLogo,
  dotaNearTemplate: hmoe_dota2,
  aovNearTemplate: hmoe_wangzhe,
  csgoNearTemplate: hmoe_csgo,
}

const { useTemplate, useWinLoseTemplate, gameTypeForListCode } = nearDataHook(
  props.gameType,
)

const gameTypeClass = gameTypeForListCode[props.gameType] || ''

const gameTypeLogo = logos[gameTypeForListCode[props.gameType]] || ''

const dataBase = ref<any[]>([])

const aginstData = ref<any>({})

const teamInfo = computed(() => {
  if (
    aginstData.value.match_id
    && aginstData.value.teams
    && aginstData.value.teams.length === 2
  ) {
    return [
      aginstData.value.teams[0].team || {},
      aginstData.value.teams[1].team || {},
    ]
  }
  else {
    return [{}, {}]
  }
})

function getMatchData() {
  if (dataBase.value && dataBase.value.length > 0) {
    return
  }
  getAntBeforeGameDataApi({ game_id: props.gameId }).then((res: any) => {
    if (+res.data.code === 1 && res.data.data.match_id && res.data.data.teams) {
      aginstData.value = res.data.data
      dataBase.value = res.data.data.teams.map((team: any) => team.stats)
    }
  })
}

const displayLoseWin = computed(() => {
  return useWinLoseTemplate.value.map((temp: any, index: number) => {
    return Object.assign({}, temp, {
      win:
        dataBase.value.length === 2
          ? Number(dataBase.value[index][temp.win_key])
          : 0,
      lose:
        dataBase.value.length === 2
          ? Number(dataBase.value[index][temp.lose_key])
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
    dataBase.value.length !== 2
    || !dataBase.value[index]
    || !Object.keys(dataBase.value[index]).includes(temp.data_key)
  ) {
    return [0, t('none')]
  }
  const dataC1 = Number(dataBase.value[0][temp.data_key])
  const dataC2 = Number(dataBase.value[1][temp.data_key]) || 0
  const dataC = Number(dataBase.value[index][temp.data_key]) || 0
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
        Number(dataC.toFixed(2)),
      ]
    }
  }
  else {
    return [0, 0]
  }
}

const displayData = computed(() => {
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
</script>

<template>
  <!-- <el-progress :percentage="50" class="progress" /> -->
  <el-tooltip effect="customized" placement="left-end">
    <template #content>
      <div class="near-data">
        <div class="header-item" :class="{ [gameTypeClass]: true }" />
        <div class="header-logo">
          <LazyImage
            :img-url="gameTypeLogo"
            :is-lazy="false"
            style="height: 34px"
          />
        </div>
        <div class="header-label">
          {{ $t("last_ten_games") }}
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
        <div
          v-for="(item, index) in displayData"
          :key="index"
          class="info-main"
        >
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
        <div class="lose-win-box">
          <div
            v-for="(item, index) in displayLoseWin"
            :key="index"
            class="lose-win-item"
          >
            <div class="lose-win-item-box">
              <div class="image-box">
                <LazyImage
                  :img-url="winIcon"
                  :is-lazy="false"
                  style="height: 24px"
                />
              </div>
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
              <div class="image-box">
                <LazyImage
                  :img-url="loseIcon"
                  :is-lazy="false"
                  style="height: 24px"
                />
              </div>
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
      </div>
    </template>
    <img
      :src="avatar1"
      class="customized-img"
      alt=""
      @mouseenter="getMatchData"
      @click.stop="toDetailClick({ video: 3 })"
    >
  </el-tooltip>
</template>

<style lang="scss" scoped>
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
.customized-img {
  height: 24px;
  width: 24px;
  margin-top: 8px;
}
.progress {
  width: 100px !important;
  .el-progress__text {
    width: 60px;
  }
}
.near-data {
  width: 370px;
  .lose-win-box {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    height: 60px;
    width: 336px;
    margin: 14px auto;
    display: flex;
    align-items: center;
    backdrop-filter: blur(20px);

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
        margin-left: 18px;
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
  .dotaNearTemplate {
    background: #ff4242;
  }
  .csgoNearTemplate {
    background: #11cf94;
  }
  .aovNearTemplate {
    background: #ffc203;
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
  .header-label {
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
    padding: 12px 0;
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
            background-image: linear-gradient(270deg, #d8d8d8 0%, #9b9b9b 100%);
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
        font-family: Gotham-Medium;
        font-size: 12px;
        color: #ffffff;
      }
    }
    .item-progress {
      width: 150px !important;
    }
    .item-left {
      flex-direction: row-reverse;
      &:deep(.el-progress-bar) {
        .el-progress-bar__outer {
          .el-progress-bar__inner {
            background-image: linear-gradient(270deg, #9b9b9b 0%, #d8d8d8 100%);
          }
        }
      }
    }
    .data-name {
      flex-grow: 1;
      text-align: center;
      padding: 0 8px;
      width: 100px;
      font-size: 12px;
      overflow: hidden;
      color: rgba(242, 242, 246, 0.6);
      white-space: nowrap;
      word-break: break-all;
      text-overflow: ellipsis;
    }
  }
}
</style>
