<script lang="ts" setup name="EndMatchBox">
import DateSelectBox from '../../components/DateSelectBox/index.vue'
import getMatchListByAnyHook from '@/hooks/getMatchListByAnyHook'
import EmptyBox from '@/components/Empty/index.vue'
import matchListToTopHook from '@/hooks/matchListToTopHook'
import ToTopBox from '@/components/ToTopBox/index.vue'
import EndBetItem from '@/components/EndBetItem/index.vue'
import { gameInfoStore } from '@/store/gameInfo'
import { parseTime } from '@/utils'

const { toTopHandle, scrollbarRef, hasToTop, currentTop, scrollHandle }
  = matchListToTopHook()

const {
  matchListData,
  weekDateOptions,
  currentDate,
  changeCurrentDate,
  loadList,
  getList,
  isFinish,
} = getMatchListByAnyHook('end', toTopHandle)

const { currentGameId } = storeToRefs(gameInfoStore())

const showDate = computed(() => {
  if (currentDate.value !== 'all') {
    return parseTime(currentDate.value, '{y}-{m}-{d}') || ''
  }
  else {
    const indexM = Math.floor(currentTop.value / 92)
    if (matchListData.value[indexM]) {
      return (
        parseTime(
          matchListData.value[indexM].game_start_time || new Date(),
          '{y}-{m}-{d}',
        ) || ''
      )
    }
    return parseTime(new Date(), '{y}-{m}-{d}') || ''
  }
})
</script>

<template>
  <div class="list-box EndMatchBox" :style="{ '--scrollbar-height': 90 }">
    <DateSelectBox
      :week-date-options="weekDateOptions"
      :current-date="currentDate"
      :show-date="showDate"
      @change="changeCurrentDate"
    />
    <!-- @scroll="scrollHandler" -->
    <div class="universal-scrollbar">
      <el-scrollbar
        ref="scrollbarRef"
        @scroll="scrollHandle"
      >
        <div
          v-infinite-scroll="getList"
          :infinite-scroll-disabled="loadList || isFinish"
          :infinite-scroll-distance="200"
        >
          <EndBetItem
            v-for="match in matchListData"
            :key="`${match.id}-${currentDate}-${currentGameId}`"
            :match-info="match"
          />
        </div>
        <NoMore v-if="!loadList && isFinish && matchListData.length > 0" />
        <EmptyBox v-show="!loadList && matchListData.length === 0" type="live" />
      </el-scrollbar>
    </div>
    <ToTopBox v-if="hasToTop" @to-top="toTopHandle" />
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.EndMatchBox {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .universal-scrollbar {
    &:deep(.el-scrollbar) {
      .el-scrollbar__wrap {
        scroll-behavior: smooth;
      }
    }
    height: calc(100% - (calc(var(--scrollbar-height) * 1px)));
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
