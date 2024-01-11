<script lang="ts">
import type { Ref } from 'vue'
import { onActivated, reactive, ref } from 'vue'
import type { ElScrollbar } from 'element-plus'
import SingleBetItem from './components/single-bet-Item.vue'
import ParlayBetItem from './components/parlay-bet-item.vue'
import Empty from '@/components/Empty/index.vue'
import { getBetList } from '@/api/store-user-info'
import { getBetListStatus } from '@/utils'
export default {
  name: 'IaBetList',
  components: { Empty, SingleBetItem, ParlayBetItem },
  setup() {
    const betList: Ref<any[]> = ref([])

    const loading = ref(false)

    const count = ref(0)

    const finish = ref(false)

    const formData = reactive({
      page: 0,
    })

    const { proxy }: any = getCurrentInstance()

    function toGetBetList() {
      if (finish.value) {
        return
      }
      loading.value = true
      formData.page++
      getBetList(formData)
        .then((res: any) => {
          if (+res.data.code === 1) {
            count.value = Number(res.data.data.total || 0)
            if (formData.page === 1) {
              betList.value = res.data.data.data
            }
            else {
              betList.value = [...betList.value, ...res.data.data.data]
            }
            if (res.data.data.data.length < 10) {
              finish.value = true
            }
          }
          else if (+res.data.code === 602 || +res.data.code === 604) {
            proxy.mittBus.emit('changeCurrentSideBarBus', 'GameList')
          }
          else {
            formData.page--
          }
        })
        .catch(() => {
          formData.page--
          finish.value = true
        })
        .finally(() => {
          loading.value = false
        })
    }

    const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

    const betListRef = ref<HTMLDivElement>()

    const currentTop = ref(0)

    function scrollHandle({ scrollTop }: { scrollTop: number }) {
      if (scrollTop < currentTop.value || finish.value) {
        return
      }
      currentTop.value = scrollTop
      if (
        betListRef.value
        && scrollbarRef.value
        && betListRef.value?.clientHeight
          - scrollbarRef.value?.$el.clientHeight
          - scrollTop
          < 80
        && !loading.value
      ) {
        toGetBetList()
      }
    }

    function refreshList() {
      formData.page = 0
      finish.value = false
      toGetBetList()
    }

    onActivated(() => {
      refreshList()
    })

    return { betList, loading, scrollHandle, scrollbarRef, betListRef, getBetListStatus }
  },
}
</script>

<template>
  <div id="bet-history-box" class="bet-list">
    <el-scrollbar ref="scrollbarRef" @scroll="scrollHandle">
      <div ref="betListRef">
        <transition-group name="list" appear>
          <template v-for="betInfo in betList" :key="betInfo.order_id + getBetListStatus(betInfo).code">
            <SingleBetItem v-if="!betInfo.is_parlay" :bet-info="betInfo" />
            <ParlayBetItem v-if="betInfo.is_parlay" :bet-info="betInfo" />
          </template>
        </transition-group>
      </div>
      <Empty v-if="betList.length === 0 && !loading" type="bet_History" />
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.bet-list {
  height: calc(100% - 20px);
  width: 100%;
  .ia-empty {
    margin-top: 240px;
  }
}
</style>
