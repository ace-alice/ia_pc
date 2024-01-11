<script setup lang="ts" name="RaceHeader">
import type { PropType } from 'vue'
import shuju_vs_small from '@/assets/icons/shuju_vs_small.png'

const props = defineProps({
  teamInfo: {
    type: Object,
    default: () => {},
  },
  allTeamInfo: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})

const isHistory = inject('isHistory', false)
</script>

<template>
  <div v-if="!isHistory" class="match-header">
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
    <div class="team-lose-win" />
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
  </div>
</template>

<style lang="scss" scoped>
.match-header {
  width: 100%;
  height: 48px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
  .team-name {
    display: flex;
    align-items: center;
    .text {
      font-size: 16px;
      color: #ffffff;
      margin-left: 18px;
    }
  }
}
.match-header-all {
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    display: flex;
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
</style>
