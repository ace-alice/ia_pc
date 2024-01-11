<script setup lang="ts" name="AginstDataCard">
import DataComparison from '../DataComparison/index.vue'
import GameRecord from '../GameRecord/index.vue'
import AginstRadarChart from '../RadarChart/index.vue'
import {
  getAntBeforeGameDataApi,
  getAntBeforeGameHistoryDataApi,
} from '@/api/ant-match-info'
const props = defineProps({
  form: {
    type: Object,
    default: () => {
      return {
        match_num: 3,
        current_league_only: false,
      }
    },
  },
  isHistory: {
    type: Boolean,
    default: false,
  },
})

provide('isHistory', props.isHistory)

const aginstData = ref<any>({})

const init = ref(false)

const api = props.isHistory
  ? getAntBeforeGameHistoryDataApi
  : getAntBeforeGameDataApi

function getMatchData() {
  api(props.form).then((res: any) => {
    if (+res.data.code === 1 && res.data.data.match_id && res.data.data.teams) {
      aginstData.value = res.data.data
      init.value = true
    }
  })
}

watch(
  () => props.form,
  () => {
    getMatchData()
  },
  { deep: true },
)

const overviewData = computed(() => {
  if (
    aginstData.value.match_id
    && aginstData.value.teams
    && aginstData.value.teams.length === 2
  ) {
    return [
      aginstData.value.teams[0].stats || {},
      aginstData.value.teams[1].stats || {},
    ]
  }
  else {
    return []
  }
})

const teamInfo = computed(() => {
  if (
    aginstData.value.match_id
    && aginstData.value.teams
    && aginstData.value.teams.length === 2
  ) {
    return [
      aginstData.value.teams[0].team || {},
      aginstData.value.teams[1].team || {},
    ]
  }
  else {
    return [{}, {}]
  }
})

const isMin = inject('isMin')

const initRadarChart = ref(false)

const isDown = ref(false)

const aginstDataCardRef = ref<HTMLDivElement>()

const aginstDataCardBoxRef = ref<HTMLDivElement>()

const cardLeftRef = ref<HTMLDivElement>()

const gameRecordRef = ref<any>()

const aginstRadarChart = ref<any>()

const cuurentTop = ref(0)

function scrollHandle(e: any) {
  cuurentTop.value = e.target.scrollTop
  if (aginstDataCardBoxRef.value && aginstDataCardRef.value) {
    const offSet
      = aginstDataCardBoxRef.value.clientHeight
      - aginstDataCardRef.value.clientHeight
    if (offSet - e.target.scrollTop < 10) {
      isDown.value = true
    }
    else {
      isDown.value = false
    }
  }
}

function toNext() {
  if (cardLeftRef.value && aginstDataCardRef.value) {
    aginstDataCardRef.value.scrollTo({
      top: cardLeftRef.value?.clientHeight || 0,
      behavior: 'smooth',
    })
  }
}

function toNextOrCurrent() {
  const offset = cardLeftRef.value?.clientHeight || 0
  if (cuurentTop.value - offset > -5) {
    if (aginstDataCardRef.value) {
      const toTop
        = (cardLeftRef.value?.clientHeight || 0)
        + (gameRecordRef.value?.$el.clientHeight || 0)
      aginstDataCardRef.value.scrollTo({
        top: toTop,
        behavior: 'smooth',
      })
    }
  }
  else {
    if (aginstDataCardRef.value) {
      aginstDataCardRef.value.scrollTo({
        top: cardLeftRef.value?.clientHeight || 0,
        behavior: 'smooth',
      })
    }
  }
}

function toCurrentTop() {
  if (isDown.value && aginstDataCardRef.value) {
    aginstDataCardRef.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  if (!isDown.value && aginstDataCardRef.value && aginstDataCardBoxRef.value) {
    const offSet
      = aginstDataCardBoxRef.value.clientHeight
      - aginstDataCardRef.value.clientHeight

    aginstDataCardRef.value.scrollTo({
      top: offSet || 0,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  getMatchData()
})
</script>

<template>
  <div
    ref="aginstDataCardRef"
    class="aginst-data-card"
    :class="{ 'aginst-data-card-is-min': isMin }"
    @scroll="scrollHandle"
  >
    <div ref="aginstDataCardBoxRef" class="aginst-data-card-box">
      <div
        ref="cardLeftRef"
        class="card-left"
        @mouseenter="initRadarChart = true"
      >
        <el-scrollbar>
          <DataComparison
            :data-base="overviewData"
            :team-info="teamInfo"
            @next-emit="toNext"
          />
          <AginstRadarChart
            v-if="!isMin && init && initRadarChart"
            :data-base="overviewData"
            :team-info="teamInfo"
          />
        </el-scrollbar>
      </div>
      <GameRecord
        ref="gameRecordRef"
        :aginst-data="aginstData"
        :team-info="teamInfo"
        @to-current-top-emit="toNextOrCurrent"
      />
      <AginstRadarChart
        v-if="isMin && init"
        ref="aginstRadarChart"
        :data-base="overviewData"
        :team-info="teamInfo"
        @to-current-top-emit="toCurrentTop"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aginst-data-card-is-min {
  height: 100% !important;
  overflow: auto !important;
  justify-content: flex-start !important;
  align-items: center;
  .aginst-data-card-box {
    overflow: visible !important;
    flex-direction: column !important;
    height: unset !important;
  }
  .card-left {
    height: auto !important;
    overflow: visible !important;
    background: unset !important;
    border-radius: unset !important;
  }
}
.aginst-data-card {
  height: 100%;
  overflow: hidden;
  .aginst-data-card-box {
    height: 100%;
    display: flex;
    width: 100%;
    overflow: hidden;
    justify-content: space-between;
  }
  .card-left {
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
}
</style>
