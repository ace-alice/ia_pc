<script setup lang="ts" name="GameRecord">
import type { ElCarousel } from 'element-plus'
import MatchStatsCard from './components/MatchStatsCard/index.vue'
import RaceStatsCard from './components/RaceStatsCard/index.vue'
import shujuVs from '@/assets/icons/shuju_turn.png'

const props = defineProps({
  aginstData: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['toCurrentTopEmit'])

const isMin = inject('isMin')

const carouselRef = ref<InstanceType<typeof ElCarousel>>()
const carouselIndex = ref(0)

function changeCarouselItem(index: number) {
  if (carouselIndex.value === index) {
    return
  }
  carouselIndex.value = index
  carouselRef.value && carouselRef.value.setActiveItem(index)
}

const matchStats = computed(() => {
  if (
    !props.aginstData.match_id
    || !props.aginstData.teams
    || props.aginstData.teams.length !== 2
  ) {
    return []
  }
  return [
    {
      team_info: Object.assign({}, props.aginstData.teams[0].team, {
        win: props.aginstData?.teams[0].stats.win || 0,
        lose: props.aginstData?.teams[0].stats.lose || 0,
        win_rate: props.aginstData?.teams[0].stats.win_rate || 0,
      }),
      match_stats: props.aginstData.teams[0].match_stats,
    },
    {
      team_info: Object.assign({}, props.aginstData.teams[1].team, {
        win: props.aginstData?.teams[1].stats.win || 0,
        lose: props.aginstData?.teams[1].stats.lose || 0,
        win_rate: props.aginstData?.teams[1].stats.win_rate || 0,
      }),
      match_stats: props.aginstData.teams[1].match_stats,
    },
  ]
})

const raceStats = computed(() => {
  if (
    !props.aginstData.match_id
    || !props.aginstData.teams
    || props.aginstData.teams.length !== 2
  ) {
    return []
  }
  return [
    {
      team_info: Object.assign({}, props.aginstData.teams[0].team, {
        win: props.aginstData?.teams[0].stats.race_win || 0,
        lose: props.aginstData?.teams[0].stats.race_lose || 0,
        win_rate: props.aginstData?.teams[0].stats.race_win_rate || 0,
      }),
      race_stats: props.aginstData.teams[0].race_stats,
    },
    {
      team_info: Object.assign({}, props.aginstData.teams[1].team, {
        win: props.aginstData?.teams[1].stats.race_win || 0,
        lose: props.aginstData?.teams[1].stats.race_lose || 0,
        win_rate: props.aginstData?.teams[1].stats.race_win_rate || 0,
      }),
      race_stats: props.aginstData.teams[1].race_stats,
    },
  ]
})

const initRaceStats = ref(false)

function toCurrentTop() {
  emit('toCurrentTopEmit')
}
</script>

<template>
  <div class="game-record" :class="{ 'game-record-is-min': isMin }">
    <div
      class="header-box"
      :style="{ '--left-item': carouselIndex ? '60px' : 0 }"
    >
      <div class="header-label">
        {{ $t('match_record') }}
      </div>
      <LazyImage
        v-if="isMin"
        :img-url="shujuVs"
        :is-lazy="false"
        class="un-down-icon"
        @click="toCurrentTop"
      />
      <div class="item-change">
        <div
          :class="{ 'item-active': !carouselIndex }"
          @click="changeCarouselItem(0)"
        >
          {{ $t('overall') }}
        </div>
        <div
          :class="{ 'item-active': carouselIndex }"
          @click="changeCarouselItem(1)"
          @mouseenter="initRaceStats = true"
        >
          {{ $t('single_game') }}
        </div>
      </div>
    </div>
    <div class="game-record-carousel">
      <MatchStatsCard v-if="carouselIndex === 0" :info="matchStats" />
      <RaceStatsCard v-if="initRaceStats && carouselIndex === 1" :info="raceStats" />
    </div>
    <!-- <ElCarousel
      ref="carouselRef"
      class="game-record-carousel"
      arrow="never"
      :autoplay="false"
      indicator-position="none"
    >
      <el-carousel-item>
        <MatchStatsCard :info="matchStats" />
      </el-carousel-item>
      <el-carousel-item>
        <RaceStatsCard v-if="initRaceStats" :info="raceStats" />
      </el-carousel-item>
    </ElCarousel> -->
  </div>
</template>

<style lang="scss" scoped>
.game-record-is-min {
  width: 100% !important;
  overflow: visible !important;
  border-radius: unset !important;
  background: unset !important;
  .game-record-carousel {
    height: unset !important;
  }
  .header-box {
    height: 48px !important;
    background: rgba(0, 0, 0, 0.1);
    position: relative;
    .item-change {
      margin-right: 56px;
    }
    .un-down-icon {
      height: 24px;
      height: 24px;
      position: absolute;
      right: 10px;
    }
  }
}
.game-record {
  width: calc(100% - 434px);
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  .game-record-carousel {
    height: calc(100% - 64px);
  }
  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }
  .item-change {
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    margin-right: 16px;
    border-radius: 15px;
    position: relative;
    .item-active {
      color: #fff;
    }
    div {
      line-height: 30px;
      width: 60px;
      overflow: hidden;
      white-space: nowrap;
      padding: 0 6px;
      text-overflow: ellipsis;
      text-align: center;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      z-index: 2;
      color: rgba(255, 255, 255, 0.6);
    }
    &::before {
      content: "";
      position: absolute;
      width: 60px;
      height: 30px;
      top: 0;
      left: var(--left-item);
      border-radius: 15px;
      background: rgba(216, 216, 216, 0.05);
      z-index: 0;
      transition: all 0.3s ease-in-out;
    }
  }
  .header-label {
    font-size: 14px;
    color: #ffffff;
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
}
</style>
