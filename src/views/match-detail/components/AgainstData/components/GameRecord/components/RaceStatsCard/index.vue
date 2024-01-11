<script setup lang="ts" name="RaceStatsCard">
import type { PropType } from 'vue'
import RaceHeader from './components/RaceHeader.vue'
import RaceVsInfo from './components/RaceVsInfo.vue'
import emptyImg from '@/assets/images/empty.png'

const props = defineProps({
  info: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
})
const allTeamInfo = computed(() => {
  if (props.info.length === 2) {
    return [props.info[0].team_info || {}, props.info[1].team_info || {}]
  }
  else {
    return []
  }
})

const isHistory = inject('isHistory', false)
</script>

<template>
  <div class="race-stats-card">
    <el-scrollbar>
      <div class="card-box">
        <template v-for="(inf, index) in info" :key="index">
          <div v-if="!isHistory || index === 0" class="card-info-box">
            <RaceHeader
              :index="index"
              :team-info="inf.team_info"
              :all-team-info="allTeamInfo"
            />
            <div v-for="(item, ind) in inf.race_stats || []" :key="ind">
              <RaceVsInfo
                :vs-info="item"
                :team-info="inf.team_info"
                :info="info"
              />
            </div>
            <div
              v-if="isHistory && (inf.race_stats || []).length === 0"
              class="empty"
            >
              <LazyImage
                :img-url="emptyImg"
                :is-lazy="false"
                style="height: 100px; width: 100px"
              />
              <div style="opacity: 0.6">
                {{ $t("no_data_now") }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.race-stats-card {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
    flex-direction: column;
    font-size: 14px;
    color: #ffffff;
  }
}
.card-box {
  opacity: 1;
}
</style>
