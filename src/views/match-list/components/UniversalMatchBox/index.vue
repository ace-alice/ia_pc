<script setup lang="ts" name="UniversalMatchBox">
import { computed } from 'vue'
import dayjs from 'dayjs'
import DateSelectBox from '../../components/DateSelectBox/index.vue'
import EmptyBox from '@/components/Empty/index.vue'
import NoMore from '@/components/NoMore/index.vue'
import ToTopBox from '@/components/ToTopBox/index.vue'
import matchListToTopHook from '@/hooks/matchListToTopHook'
import UniversalBetItem from '@/components/UniversalBetItem/index.vue'
import { parseTime } from '@/utils'
import getMatchListByAnyHook from '@/hooks/getMatchListByAnyHook'

const props = defineProps({
  handicap: {
    type: String,
    default: 'code',
  },
})

const { toTopHandle, scrollbarRef, scrollHandle, hasToTop, currentTop }
  = matchListToTopHook()

const {
  matchListData,
  currentDate,
  weekDateOptions,
  changeCurrentDate,
  loadList,
  isFinish,
  getList,
} = getMatchListByAnyHook(props.handicap as any, toTopHandle)

const hasDateSelect = computed(() => {
  return ['fix', 'parlay', 'live'].includes(props.handicap)
})

const showDate = computed(() => {
  if (currentDate.value !== 'all') {
    return parseTime(currentDate.value, '{y}-{m}-{d}') || ''
  }
  else {
    const indexM = Math.floor(currentTop.value / 92)
    const defaultDate
      = props.handicap === 'fix'
        ? dayjs().add(1, 'day').format('YYYY-MM-DD')
        : parseTime(new Date(), '{y}-{m}-{d}') || ''
    if (matchListData.value[indexM]) {
      return (
        parseTime(
          matchListData.value[indexM].game_start_time || new Date(),
          '{y}-{m}-{d}',
        ) || ''
      )
    }
    return defaultDate
  }
})
</script>

<template>
  <div
    class="list-box UniversalMatchBox"
    :style="{ '--scrollbar-height': hasDateSelect ? 90 : 14 }"
  >
    <DateSelectBox
      v-if="hasDateSelect"
      :week-date-options="weekDateOptions"
      :current-date="currentDate"
      :show-date="showDate"
      @change="changeCurrentDate"
    />
    <div class="universal-scrollbar">
      <el-scrollbar ref="scrollbarRef" @scroll="scrollHandle">
        <div
          v-infinite-scroll="getList"
          :infinite-scroll-disabled="loadList || isFinish"
          :infinite-scroll-distance="200"
          style="height: 100%;"
        >
          <UniversalBetItem
            v-for="match in matchListData"
            :key="`${match.id}-${
              match.recommend_play?.id || 'recommend_play_id'
            }`"
            :match-info="match"
          />
          <NoMore v-if="!loadList && isFinish && matchListData.length > 0" />
          <EmptyBox
            v-show="!loadList && matchListData.length === 0"
            :is-live="handicap === 'live'"
            type="live"
          />
        </div>
      </el-scrollbar>
    </div>
    <ToTopBox v-if="hasToTop" @to-top="toTopHandle" />
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.loading-ref {
  height: 80px;
  width: 100%;
  flex-shrink: 0;
}
.UniversalMatchBox {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  .universal-scrollbar {
    height: calc(100% - (calc(var(--scrollbar-height) * 1px)));
    &:deep(.el-scrollbar) {
      .el-scrollbar__wrap {
        scroll-behavior: smooth;
      }
    }
    .ia-empty {
      height: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 120px;
    }
  }
}
</style>
