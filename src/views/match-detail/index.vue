<!-- eslint-disable vue/v-on-event-hyphenation -->
<script lang="ts">
import { defineComponent } from 'vue'
import DetailHeader from './components/detail-header/index.vue'
import DetailContent from './components/detail-content/index.vue'
import RoundTabs from './components/round-tabs/index.vue'
import PointChart from './components/point-chart/index.vue'
import LiveBox from './components/live-box/index.vue'
import AnimateBox from './components/animate-box/index.vue'
import DataOfMatch from './components/data-of-match/index.vue'
import DetailLoading from './components/detail-loading/index.vue'
import matchDetailHook from '@/hooks/matchDetailHook'
export default defineComponent({
  name: 'IaMatchDetail',
  components: {
    DetailHeader,
    DetailContent,
    RoundTabs,
    PointChart,
    LiveBox,
    AnimateBox,
    DataOfMatch,
    DetailLoading,
  },
  setup() {
    const {
      matchDetail,
      tabIndex,
      setTabIndex,
      showChart,
      changeChartStatus,
      init,
      showVideo,
      showVideoHandle,
      showAnimate,
      showAnimateHandle,
      showDataOfMatch,
      showDataOfMatchHandle,
      roundList,
      hasDataOfMatch,
      emitChangeFilterValue,
    } = matchDetailHook()

    return {
      matchDetail,
      tabIndex,
      setTabIndex,
      showChart,
      changeChartStatus,
      init,
      showVideo,
      showVideoHandle,
      showAnimate,
      showAnimateHandle,
      roundList,
      showDataOfMatch,
      showDataOfMatchHandle,
      hasDataOfMatch,
      emitChangeFilterValue,
    }
  },
})
</script>

<template>
  <div class="match-detail">
    <!-- v-if="!init" -->
    <DetailLoading v-if="!init" />
    <template v-else>
      <DetailHeader
        :match-info="matchDetail"
        @showVideoEmit="showVideoHandle"
        @showAnimateEmit="showAnimateHandle"
        @showDataOfMatchEmit="showDataOfMatchHandle"
      />
      <div class="bottom-box">
        <!-- && +matchDetail.game_type_id === 1" -->
        <DataOfMatch
          v-if="showDataOfMatch && hasDataOfMatch"
          @closeDataOfMatch="showDataOfMatchHandle"
        />
        <LiveBox
          v-if="showVideo"
          :match-detail="matchDetail"
          @closeVideo="showVideoHandle"
        />
        <AnimateBox
          v-if="showAnimate"
          :match-detail="matchDetail"
          @closeAnimate="showAnimateHandle"
        />
        <RoundTabs
          :round-list="roundList"
          :tab-index="tabIndex"
          @emitChangeFilterValue="emitChangeFilterValue"
        />
        <PointChart />
        <DetailContent
          :match-info="matchDetail"
          @setTabIndex="setTabIndex"
          @changeChartStatus="changeChartStatus"
        />
      </div>
      <div class="footer" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.match-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & > div {
    width: 97.4%;
  }
  .footer {
    height: 13px;
    flex-shrink: 0;
  }
  .bottom-box {
    flex-grow: 1;
    overflow: hidden;
    //scroll-behavior: smooth;
    background: var(--color-bg-primary);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
}
</style>
