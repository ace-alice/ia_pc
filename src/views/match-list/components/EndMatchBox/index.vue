<script lang="ts">
import { defineComponent } from 'vue'
import DateSelectBox from '../../components/DateSelectBox/index.vue'
import getUniversalListHook from '@/hooks/getUniversalListHook'
import EmptyBox from '@/components/Empty/index.vue'
import matchListToTopHook from '@/hooks/matchListToTopHook'
import ToTopBox from '@/components/ToTopBox/index.vue'
import EndBetItem from '@/components/EndBetItem/index.vue'
import { gameInfoStore } from '@/store/gameInfo'
import { parseTime } from '@/utils'

export default defineComponent({
  name: 'EndMatchBox',
  components: { DateSelectBox, EndBetItem, EmptyBox, ToTopBox },
  setup() {
    const {
      matchListData,
      weekDateOptions,
      currentDate,
      changeCurrentDate,
      loadList,
      getList,
      // refreshList,
    } = getUniversalListHook('end')

    const { toTopHandle, scrollbarRef, scrollHandle, hasToTop, currentTop }
      = matchListToTopHook()

    const endBetRef = ref<HTMLDivElement | null>()

    const { currentGameId } = storeToRefs(gameInfoStore())

    // watch(() => [currentDate.value, currentGameId.value], () => {
    //   refreshList()
    // })

    function scrollHandler({ scrollTop }: { scrollTop: number }) {
      if (scrollTop > currentTop.value) {
        if (
          endBetRef.value
        && scrollbarRef.value
        && endBetRef.value?.clientHeight
          - scrollbarRef.value?.$el.clientHeight
          - scrollTop
          < 80
        && !loadList.value
        ) {
          getList()
        }
      }
      scrollHandle({ scrollTop })
    }

    const showDate = computed(() => {
      if (currentDate.value !== 'all') {
        return parseTime(currentDate.value, '{y}-{m}-{d}') || ''
      }
      else {
        const indexM = Math.floor(currentTop.value / 92)
        if (matchListData.value[indexM]) {
          return parseTime(matchListData.value[indexM].game_start_time || new Date(), '{y}-{m}-{d}') || ''
        }
        return parseTime(new Date(), '{y}-{m}-{d}') || ''
      }
    })

    return {
      matchListData,
      weekDateOptions,
      currentDate,
      changeCurrentDate,
      loadList,
      toTopHandle,
      scrollbarRef,
      hasToTop,
      scrollHandler,
      endBetRef,
      currentGameId,
      showDate,
    }
  },
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
    <div class="universal-scrollbar">
      <el-scrollbar
        v-show="matchListData.length > 0"
        ref="scrollbarRef"
        @scroll="scrollHandler"
      >
        <div ref="endBetRef" :key="`${currentDate}-${currentGameId}`" class="end-bet-list">
          <EndBetItem
            v-for="match in matchListData"
            :key="`${match.id}-${currentDate}-${currentGameId}`"
            :match-info="match"
          />
        </div>
      </el-scrollbar>
      <EmptyBox v-show="!loadList && matchListData.length === 0" type="live" />
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
      padding-bottom: 240px;
    }
  }
}
</style>
