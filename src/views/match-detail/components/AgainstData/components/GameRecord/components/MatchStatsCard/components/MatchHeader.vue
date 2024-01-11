<script setup lang="ts" name="MatchHeader">
import type { PropType } from 'vue'
import winTextIcon from '@/assets/icons/hmoe_win_02.png'
import loseTextIcon from '@/assets/icons/hmoe_lose_02.png'
import hmoeBaifen from '@/assets/icons/hmoe_baifen.png'
import shuju_vs_small from '@/assets/icons/shuju_vs_small.png'
const props = defineProps({
  teamInfo: {
    type: Object,
    default: () => {},
  },
  index: {
    type: Number,
    default: 0,
  },
  allTeamInfo: {
    type: Array as PropType<any[]>,
    default: () => {},
  },
})

const isHistory = inject('isHistory', false)

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
  <div v-if="!isHistory" class="match-header" :class="{ 'is-away': index }">
    <!-- {{ teamInfo }} -->
    <div class="team-name">
      <LazyImage
        :img-url="teamInfo.logo"
        :is-lazy="false"
        style="height: 32px"
      />
      <div class="text">
        {{ teamInfo.name }}
      </div>
    </div>
    <div class="team-lose-win">
      <div>
        <LazyImage
          :img-url="winTextIcon"
          :is-lazy="false"
          style="height: 12px"
        />
        <div class="win-text">
          {{ teamInfo.win }}
        </div>
      </div>
      <div>
        <LazyImage
          :img-url="loseTextIcon"
          :is-lazy="false"
          style="height: 12px"
        />
        <div class="win-text">
          {{ teamInfo.lose }}
        </div>
      </div>
      <div>
        <LazyImage
          :img-url="hmoeBaifen"
          :is-lazy="false"
          style="height: 12px"
        />
        <div class="win-text">
          {{ dealRate(teamInfo.win_rate) }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="match-header-all">
    <div class="match-header-team-vs">
      <div v-for="team in allTeamInfo" :key="team.id" class="team-name">
        <LazyImage :img-url="team.logo" :is-lazy="false" style="height: 32px" />
        <div class="text">
          {{ team.name }}
        </div>
      </div>
      <LazyImage
        class="shuju-vs-small"
        :img-url="shuju_vs_small"
        :is-lazy="false"
        style="height: 24px"
      />
    </div>
    <div class="team-lose-win-vs">
      <div v-for="team in allTeamInfo" :key="team.id" class="team-lose-win">
        <div>
          <LazyImage
            :img-url="winTextIcon"
            :is-lazy="false"
            style="height: 12px"
          />
          <div class="win-text">
            {{ team.win }}
          </div>
        </div>
        <div>
          <LazyImage
            :img-url="loseTextIcon"
            :is-lazy="false"
            style="height: 12px"
          />
          <div class="win-text">
            {{ team.lose }}
          </div>
        </div>
        <div>
          <LazyImage
            :img-url="hmoeBaifen"
            :is-lazy="false"
            style="height: 12px"
          />
          <div class="win-text">
            {{ dealRate(team.win_rate) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lazy-image {
  flex-shrink: 0;
}
.match-header-all {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    display: flex;
  }
  .team-lose-win-vs {
    justify-content: space-between;
    height: 40px;
    width: 100%;
    align-items: center;
    .team-lose-win {
      display: flex;
      align-items: center;
      width: calc(50% - 45px);
      &:first-child {
        justify-content: flex-end;
      }
      & > div {
        display: flex;
        align-items: center;
        & + div {
          margin-left: 4px;
        }
      }
      .win-text {
        margin-left: 4px;
        font-size: 14px;
        color: #ffffff;
      }
    }
  }
  .match-header-team-vs {
    background: rgba(17, 81, 128, 0.2);
    height: 40px;
    width: 100%;
    justify-content: space-between;
    position: relative;
    .shuju-vs-small {
      position: absolute;
      top: 8px;
      left: calc(50% - 12px);
    }

    .team-name {
      display: flex;
      align-items: center;
      width: calc(50% - 24px);
      font-size: 16px;
      color: #ffffff;
      &:first-child {
        // justify-content: flex-end;
        flex-direction: row-reverse;
      }
      .text {
        margin: 0 12px;
        max-width: calc(100% - 54px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.is-away {
  background: rgba(158, 39, 56, 0.2) !important;
}
.match-header {
  width: 100%;
  height: 48px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(17, 81, 128, 0.2);
  overflow: hidden;
  .team-lose-win {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    & > div {
      display: flex;
      align-items: center;
      & + div {
        margin-left: 4px;
      }
    }
    .win-text {
      margin-left: 4px;
      font-size: 14px;
      color: #ffffff;
    }
  }
  .team-name {
    display: flex;
    align-items: center;
    flex-grow: 1;
    overflow: hidden;
    .text {
      font-size: 16px;
      color: #ffffff;
      margin-left: 18px;
      max-width: calc(100% - 60px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
