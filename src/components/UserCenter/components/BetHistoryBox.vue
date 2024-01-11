<script lang="ts">
import type { Ref } from 'vue'
import { defineComponent, onMounted, reactive, ref } from 'vue'
import type { ElScrollbar } from 'element-plus'
import { getBettingRecord } from '@/api/tools-api'
import HistorySingleItem from '@/components/UserCenter/components/HistorySingleItem.vue'
import HistoryParlayItem from '@/components/UserCenter/components/HistoryParlayItem.vue'
import TimePickerBox from '@/components/TimePickerBox/index.vue'
import FilterCriteriaBox from '@/components/FilterCriteriaBox/index.vue'
import useImageResource from '@/hooks/useImageResource'
import { getBetListStatus } from '@/utils'

export default defineComponent({
  name: 'BetHistoryBox',
  components: {
    HistorySingleItem,
    HistoryParlayItem,
    TimePickerBox,
    FilterCriteriaBox,
  },
  setup() {
    const scrollbarRef: Ref<InstanceType<typeof ElScrollbar> | null>
      = ref(null)

    const historyCount = ref(0)

    const { emptyImg } = useImageResource()

    const historyList = ref<any[]>([])

    const loading = ref(false)

    const formData: any = reactive({
      start_time: null,
      end_time: null,
      page: 1,
      limit: 10,
      is_parlay: -1,
      is_prize: -1,
      game_type_id: -1,
    })

    function filterForm() {
      const temp: any = {}
      for (const fk of Object.keys(formData)) {
        if (
          (['start_time', 'end_time'].includes(fk) && formData[fk])
          || (!['start_time', 'end_time'].includes(fk) && formData[fk] !== -1)
        ) {
          temp[fk] = formData[fk]
        }
      }
      return temp
    }

    function changeTime(newTime: any) {
      Object.assign(formData, newTime)
      formData.page = 1
      getHistoryList()
    }

    const { proxy }: any = getCurrentInstance()

    function getHistoryList() {
      loading.value = true
      getBettingRecord(filterForm())
        .then((res: any) => {
          if (+res.data.code === 1) {
            if (scrollbarRef.value) {
              scrollbarRef.value.setScrollTop(0)
            }
            historyCount.value = +res.data.data.total
            historyList.value = res.data.data.data
          }
          if (+res.data.code === 602 || +res.data.code === 604) {
            proxy.mittBus.emit('changeCurrentSideBarBus', 'GameList')
            proxy.mittBus.emit('openUserCenterBus', 'RulesBox')
          }
        })
        .finally(() => {
          loading.value = false
        })
    }

    onMounted(() => {
      getHistoryList()
    })

    return {
      scrollbarRef,
      getHistoryList,
      formData,
      historyCount,
      historyList,
      changeTime,
      emptyImg,
      loading,
      getBetListStatus,
    }
  },
})
</script>

<template>
  <div id="center-bet-history-box" class="BetHistoryBox tab-box">
    <div class="box-header">
      <TimePickerBox
        :end-time="formData.end_time"
        :start-time="formData.start_time"
        @change="changeTime"
      />
      <FilterCriteriaBox @search="changeTime" />
    </div>
    <div class="box-body">
      <el-scrollbar v-if="historyList.length > 0 || loading" ref="scrollbarRef">
        <template
          v-for="history in historyList"
          :key="`${history.order_id}${getBetListStatus(history).code}`"
        >
          <HistorySingleItem v-if="+history.is_parlay === 0" :info="history" />
          <HistoryParlayItem v-if="+history.is_parlay === 1" :info="history" />
        </template>
      </el-scrollbar>
      <div class="no-data">
        <LazyImage :img-url="emptyImg" />
        <div>{{ $t("no_bet_records") }}</div>
      </div>
    </div>
    <div class="box-footer">
      <div class="bet-num">
        {{ $t("odd_number") }}: {{ historyCount }}
      </div>
      <el-pagination
        v-model:page-size="formData.limit"
        v-model:current-page="formData.page"
        layout="prev, pager, next"
        :total="historyCount"
        @current-change="getHistoryList"
      />
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.BetHistoryBox {
  .box-body {
    padding: 12px 0;
    overflow: hidden;
    .rule-content {
      padding: 24px;
    }
    &:deep(.el-scrollbar) {
      padding: 0 12px;
    }
  }
  .box-footer {
    justify-content: space-between !important;
    .bet-num {
      // font-family: PingFangSC-Medium, monospace;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }
  }
  .no-data {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .lazy-image {
      height: 100px;
    }
    font-family: PingFangSC-Regular, monospace;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    div:nth-child(2) {
      margin-top: 16px;
    }
  }
}
</style>
