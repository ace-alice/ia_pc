<script lang="ts">
import { defineComponent } from 'vue'
import getChampionListByAnyHook from '@/hooks/getChampionListByAnyHook'
import EmptyBox from '@/components/Empty/index.vue'
import NoMore from '@/components/NoMore/index.vue'
import matchListToTopHook from '@/hooks/matchListToTopHook'
import ToTopBox from '@/components/ToTopBox/index.vue'
import ChampionBetItem from '@/components/ChampionBetItem/index.vue'
import { gameInfoStore } from '@/store/gameInfo'

export default defineComponent({
  name: 'ChampionMatchBox',
  components: { ChampionBetItem, EmptyBox, NoMore, ToTopBox },
  setup() {
    const { toTopHandle, scrollbarRef, scrollHandle, hasToTop }
      = matchListToTopHook()

    const { currentMatchList, loadList, isFinish, getList }
      = getChampionListByAnyHook('champion', toTopHandle)

    const { currentGameId } = storeToRefs(gameInfoStore())
    return {
      currentMatchList,
      loadList,
      toTopHandle,
      scrollbarRef,
      scrollHandle,
      hasToTop,
      currentGameId,
      isFinish,
      getList,
    }
  },
})
</script>

<template>
  <div class="list-box UniversalMatchBox">
    <div class="universal-scrollbar">
      <el-scrollbar ref="scrollbarRef" @scroll="scrollHandle">
        <div
          v-infinite-scroll="getList"
          :infinite-scroll-disabled="loadList || isFinish"
          :infinite-scroll-distance="200"
        >
          <ChampionBetItem
            v-for="match in currentMatchList"
            :key="`${match.id}-${currentGameId}`"
            :match-info="match"
          />
          <NoMore v-if="!loadList && isFinish && currentMatchList.length > 0" />
          <EmptyBox
            v-show="!loadList && currentMatchList.length === 0"
            :is-live="false"
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
.UniversalMatchBox {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  .universal-scrollbar {
    height: calc(100% - 14px);
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
