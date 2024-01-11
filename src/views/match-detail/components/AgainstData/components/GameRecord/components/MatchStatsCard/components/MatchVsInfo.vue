<script setup lang="ts" name="MatchVsInfo">
import { parseTime } from '@/utils'
import winIcon from '@/assets/icons/hmoe_win_02.png'

const props = defineProps({
  vsInfo: {
    type: Object,
    default: () => {},
  },
})

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
  <div class="match-vs-info">
    <div class="event-info">
      {{ vsInfo.leagues?.name || "" }}
    </div>
    <div
      v-for="item in vsInfo.matches || []"
      :key="item.match_id"
      class="vs-info"
    >
      <div class="match-bo-time-box">
        <div class="bo-box">
          BO{{ item.bo || "" }}
        </div>
        <div class="time-box">
          {{ parseTime(item.start_time, "{y}-{m}-{d}") }}
        </div>
      </div>
      <div class="team-info-box">
        <div v-for="team in item.teams" :key="team.team_id" class="team-info">
          <div class="team-info-name">
            <LazyImage :img-url="team.team_info.logo" :is-lazy="false" />
            <div
              class="team-name"
              :class="{ 'win-team': +item.win_team === +team.team_id }"
            >
              {{ team.team_info.name }}
            </div>
          </div>
          <div class="team-win-lose-info">
            <div class="team-score" :class="{ 'win-team': +item.win_team === +team.team_id }">
              {{ team.score }}
            </div>
            <div class="team-win-icon">
              <LazyImage
                v-if="+item.win_team === +team.team_id"
                :img-url="winIcon"
                :is-lazy="false"
              />
            </div>
            <div class="team-win-rate">
              {{ dealRate(team.win_rate) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.match-vs-info {
  .vs-info {
    display: flex;
    align-items: center;
    width: calc(100% - 56px);
    margin: 0 auto;
    padding: 8px 0;

    & + .vs-info {
      border-top: 1px solid rgba(255, 255, 255, 0.09);
    }

    .team-info-box {
      flex-grow: 1;
      .team-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 4px;
        .team-win-lose-info {
          display: flex;
          align-items: center;
          font-family: Gotham-Medium;
          color: #ffffff;
          font-weight: 600;
          & > div + div {
            margin-left: 12px;
          }
          .team-score{
            min-width: 14px;
            text-align: center;
          }
          .team-win-icon {
            height: 12px;
            width: 26px;
          }
          .team-win-rate {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            font-size: 12px;
            line-height: 28px;
            min-width: 42px;
            text-align: center;
          }
        }
        .team-info-name {
          display: flex;
          align-items: center;
          .lazy-image {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 50%;
            flex-shrink: 0;
            border: 4px solid rgba(0, 0, 0, 0.2);
            height: 28px;
            width: 28px;
          }
          .team-name {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            margin-left: 12px;
          }
        }
        .win-team {
            color: #fe5e00 !important;
          }
      }
    }
    .match-bo-time-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 24px;
      .bo-box {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        width: 70px;
        height: 28px;
        font-family: Gotham-Medium;
        font-size: 14px;
        color: #0095ff;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .time-box {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
        margin-top: 4px;
      }
    }
  }
  .event-info {
    background: rgba(0, 0, 0, 0.1);
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    padding: 24px;
  }
}
</style>
