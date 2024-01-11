<!-- eslint-disable @typescript-eslint/no-use-before-define -->
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from 'vue'
import DetailItem from './components/DetailItem.vue'
import NoMore from '@/components/NoMore/index.vue'
import { setItemName } from '@/utils'
import ToTopBox from '@/components/ToTopBox/index.vue'
import { gameInfoStore } from '@/store/gameInfo'
import LiveRoundLeftIcon from '@/assets/icons/xiangqing_startmurder_02.png'
import LiveRoundRightIcon from '@/assets/icons/xiangqing_startmurder_01.png'
import FixRoundIcon from '@/assets/icons/xiangqing_startmurder_03.png'
import EndRoundLeftIcon from '@/assets/icons/xiangqing_startmurder_04.png'
import EndRoundIcon from '@/assets/icons/xiangqing_turnend.png'
export default defineComponent({
  name: 'IaMatchContent',
  components: { DetailItem, NoMore, ToTopBox },
  props: {
    matchInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  emits: ['setTabIndex', 'changeChartStatus'],
  setup(props: any, { emit }: any) {
    const { proxy }: any = getCurrentInstance()

    const openIcon = new URL('@/assets/icons/turn-on.png', import.meta.url)
      .href

    const showNotList = reactive<any>({})

    const currentTop = ref(0)

    const filterValue = inject('filterValue', 'all')

    function scrollHandle({ scrollTop }: any) {
      currentTop.value = scrollTop
      proxy.mittBus.emit('setShortBus', true)
      if (scrollTop === 0) {
        proxy.mittBus.emit('setMiniplayerBus', false)
        proxy.mittBus.emit('setMiniAnimateBus', false)
        // proxy.mittBus.emit('setMiniDataBus', false)
      }
      else {
        proxy.mittBus.emit('setMiniplayerBus', true)
        proxy.mittBus.emit('setMiniAnimateBus', true)
        proxy.mittBus.emit('setMiniDataBus', true)
      }
      if (scrollTop < 10) {
        if (toShowChart) {
          emit('changeChartStatus', toShowChart)
          toShowChart = false
        }
      }
      if (scrollTop > 40) {
        if (!toShowChart) {
          emit('changeChartStatus', false)
        }
        proxy.mittBus.emit('changeHeightBus', false)
      }
      else {
        proxy.mittBus.emit('changeHeightBus', true)
      }
      if (
        proxy.$refs
        && proxy.$refs.pointsBox
        && proxy.$refs['detail-content']
      ) {
        if (Array.isArray(proxy.$refs.pointsBox)) {
          let clientHeight = 0
          for (let i = 0; i < proxy.$refs.pointsBox.length; i++) {
            clientHeight += proxy.$refs.pointsBox[i].clientHeight || 0
            if (clientHeight >= scrollTop) {
              emit('setTabIndex', i)
              return
            }
          }
        }
        else {
          emit('setTabIndex', 0)
        }
      }
    }

    function scrollToIndex(index: number) {
      if (!proxy.$refs['detail-content']) {
        return
      }
      if (!proxy.$refs.pointsBox) {
        return
      }
      if (!Array.isArray(proxy.$refs.pointsBox)) {
        return
      }
      let clientHeight = 0
      for (let j = 0; j < index; j++) {
        clientHeight += proxy.$refs.pointsBox[j].clientHeight || 0
      }
      proxy.$refs['detail-content'].setScrollTop(
        index === 0 ? 2 : clientHeight + 10,
      )
    }

    let toShowChart = false

    const { matchDetailQuery } = storeToRefs(gameInfoStore())

    function toInitIndex() {
      const matchVal = matchDetailQuery.value?.match || 0
      const inx = props.matchInfo.plays
        .filter((plays: any) => plays.child_plays.length > 0)
        .findIndex((play: any) => {
          return +play.bo === Number(matchVal)
        })
      if (inx !== -1 && inx !== 0) {
        scrollToIndex(inx)
      }
    }

    function getListForStatus(
      list: any[],
      status: 'yes' | 'no',
      filterV: any = 'all',
    ): any[] {
      if (filterV === 'handicap') {
        list = list.filter((play) => {
          return [1, 3].includes(+play.ext_type)
        })
      }
      if (filterV === 'over') {
        list = list.filter((play) => {
          return [4, 5, 11, 13].includes(+play.ext_type)
        })
      }
      const tempArr: any = []
      if (status === 'yes') {
        if (+props.matchInfo.winner_team_id) {
          return list.sort(
            (a: any, b: any) => (a.play_count || 0) - (b.play_count || 0),
          )
        }
        else {
          for (const play of list) {
            if (play.team_points && Array.isArray(play.team_points)) {
              const allNot = play.team_points.some((pointD: any) => {
                return !pointD.win_loss_status
              })
              !allNot || tempArr.push(play)
            }
          }
          return tempArr.sort((a: any, b: any) => {
            if (b.play_count === a.play_count) {
              if (
                +a.ext_type === +b.ext_type
                && [1, 3, 4, 5, 11, 13].includes(a.ext_type)
              ) {
                const extContentA = JSON.parse(a.play_type_ext)
                const extContentB = JSON.parse(b.play_type_ext)
                if ([1, 3, 11, 13].includes(a.ext_type)) {
                  if (
                    extContentA.team_id
                    && extContentB.team_id
                    && extContentA.number
                    && extContentB.number
                    && +extContentA.team_id === +extContentB.team_id
                  ) {
                    return extContentA.number - extContentB.number
                  }
                }
                if ([4, 5].includes(a.ext_type)) {
                  if (extContentA && extContentB) {
                    return extContentA - extContentB
                  }
                }
              }
              return a.id - b.id
            }
            else if (b.play_count || a.play_count) {
              return (a.play_count || 0) - (b.play_count || 0)
            }
            else if (!b.play_count && !a.play_count) {
              return a.id - b.id
            }
            else {
              return (a.play_count || 0) - (b.play_count || 0)
            }
          })
        }
      }
      else {
        if (+props.matchInfo.winner_team_id) {
          return []
        }
        else {
          for (const play of list) {
            if (play.team_points && Array.isArray(play.team_points)) {
              const allNot = play.team_points.every((pointD: any) => {
                return pointD.win_loss_status
              })
              !allNot || tempArr.push(play)
            }
          }
          return tempArr.sort((a: any, b: any) => {
            if (b.play_count === a.play_count) {
              if (
                +a.ext_type === +b.ext_type
                && [1, 3, 4, 5, 11, 13].includes(a.ext_type)
              ) {
                const extContentA = JSON.parse(a.play_type_ext)
                const extContentB = JSON.parse(b.play_type_ext)
                if ([1, 3, 11, 13].includes(a.ext_type)) {
                  if (
                    extContentA.team_id
                    && extContentB.team_id
                    && extContentA.number
                    && extContentB.number
                    && +extContentA.team_id === +extContentB.team_id
                  ) {
                    return extContentA.number - extContentB.number
                  }
                }
                if ([4, 5].includes(a.ext_type)) {
                  if (extContentA && extContentB) {
                    return extContentA - extContentB
                  }
                }
              }
              return a.id - b.id
            }
            else if (b.play_count || a.play_count) {
              return (a.play_count || 0) - (b.play_count || 0)
            }
            else if (!b.play_count && !a.play_count) {
              return a.id - b.id
            }
            else {
              return (a.play_count || 0) - (b.play_count || 0)
            }
          })
        }
      }
    }

    function toTopHandle() {
      if (proxy.$refs['detail-content']) {
        proxy.$refs['detail-content'].setScrollTop(0)
      }
    }

    const hasToTop = computed(() => {
      return currentTop.value > 100
    })

    onMounted(() => {
      proxy.mittBus.on('scrollToEmit', (index: any) => {
        if (index === 'showChart') {
          toShowChart = true
          proxy.$refs['detail-content'].setScrollTop(5)
          return
        }
        if (index === 'live-animate') {
          proxy.$refs['detail-content'].setScrollTop(5)
        }
        if (index === 'notShowChart') {
          proxy.$refs['detail-content'].setScrollTop(11)
          emit('changeChartStatus', false)
          return
        }
        if (index === 'round-tabs') {
          if (currentTop.value < 10) {
            proxy.$refs['detail-content'].setScrollTop(10)
          }
          return
        }
        scrollToIndex(index)
      })
      nextTick(() => {
        toInitIndex()
      })
    })

    function showNotListHandle(keyL: string, inx: number) {
      // for (const keyO of Object.keys(showNotList)) {
      //   if (keyO !== keyL) {
      //     showNotList[keyO] = false
      //   }
      // }
      showNotList[keyL] = !showNotList[keyL]
      // if (showNotList[keyL]) {
      //   scrollToIndex(inx)
      // }
    }

    function leftAndRightIcon(child_plays: any[]) {
      if (props.matchInfo && +props.matchInfo.winner_team_id) {
        return {
          left: EndRoundLeftIcon,
          right: EndRoundLeftIcon,
          r: true,
          isFinish: true,
        }
      }
      let isFinish = false
      if (child_plays.length > 0) {
        isFinish = child_plays.every((play: any) => {
          return +play.winner_point_extra_id
        })
      }
      if (isFinish) {
        return {
          left: EndRoundLeftIcon,
          right: EndRoundLeftIcon,
          r: true,
          isFinish: true,
        }
      }
      if (props.matchInfo && +props.matchInfo.category_id === 3) {
        return {
          left: LiveRoundLeftIcon,
          right: LiveRoundRightIcon,
          r: false,
          isFinish: false,
        }
      }
      else {
        return {
          left: FixRoundIcon,
          right: FixRoundIcon,
          r: true,
          isFinish: false,
        }
      }
    }

    onUnmounted(() => {
      proxy.mittBus.off('scrollToEmit')
    })

    return {
      setItemName,
      scrollHandle,
      openIcon,
      getListForStatus,
      showNotList,
      toTopHandle,
      hasToTop,
      currentTop,
      showNotListHandle,
      LiveRoundLeftIcon,
      LiveRoundRightIcon,
      FixRoundIcon,
      EndRoundLeftIcon,
      leftAndRightIcon,
      EndRoundIcon,
      filterValue,
    }
  },
})
</script>

<template>
  <div class="detail-content">
    <el-scrollbar ref="detail-content" @scroll="scrollHandle">
      <template v-if="matchInfo">
        <div
          v-for="(detail, index) in matchInfo.plays.filter((plays: any) => plays.child_plays.length > 0)"
          :key="index"
          ref="pointsBox"
          class="points-box"
        >
          <div class="round">
            <div class="round-del" />
            <img
              class="round-icon"
              :src="leftAndRightIcon(detail.child_plays).left"
              alt=""
            >
            <div>
              {{ setItemName(+detail.bo, detail.stage_name || "") }}
            </div>
            <img
              class="round-icon"
              :class="{ r: leftAndRightIcon(detail.child_plays).r }"
              :src="leftAndRightIcon(detail.child_plays).right"
              alt=""
            >
            <div class="round-del" />
          </div>
          <transition-group name="list" appear>
            <template
              v-for="item in getListForStatus(
                detail.child_plays,
                'yes',
                filterValue,
              )"
              :key="`${item.id}`"
            >
              <!-- suppress JSUnresolvedVariable -->
              <DetailItem
                :play-info="
                  Object.assign(item, {
                    category_id: matchInfo.category_id,
                    event_name: matchInfo.event_name,
                    game_logo: matchInfo.game_type_logo,
                    team_name_1: matchInfo.team_name_1,
                    team_name_2: matchInfo.team_name_2,
                    game_lang: matchInfo.game_lang,
                  })
                "
              />
            </template>
          </transition-group>
          <div
            v-show="
              getListForStatus(detail.child_plays, 'no', filterValue).length > 0
            "
            class="show-not-bet-btn"
            :class="{ 'show-btn': showNotList[`bo${detail.bo}`] }"
            @click="showNotListHandle(`bo${detail.bo}`, index)"
          >
            <div>
              {{
                showNotList[`bo${detail.bo}`] ? $t("fold") : $t("display_all")
              }}
            </div>
            <div class="status">
              {{ $t("clearinged") }}
            </div>
            <div>{{ $t("play_type") }}</div>
            <LazyImage :img-url="openIcon" />
            <img
              v-show="leftAndRightIcon(detail.child_plays).isFinish"
              :src="EndRoundIcon"
              alt=""
              class="finish-icon"
            >
          </div>
          <transition name="list">
            <div v-show="showNotList[`bo${detail.bo}`]" class="no-to-bet-list">
              <template
                v-for="item in getListForStatus(
                  detail.child_plays,
                  'no',
                  filterValue,
                )"
                :key="`${item.id}`"
              >
                <!-- suppress JSUnresolvedVariable -->
                <DetailItem
                  :play-info="
                    Object.assign(item, {
                      event_name: matchInfo.event_name,
                      game_logo: matchInfo.game_logo,
                      team_name_1: matchInfo.team_name_1,
                      team_name_2: matchInfo.team_name_2,
                      game_lang: matchInfo.game_lang,
                    })
                  "
                />
              </template>
            </div>
          </transition>
        </div>
        <NoMore />
        <div v-if="currentTop > 0" style="height: 180px" />
      </template>
    </el-scrollbar>
    <ToTopBox v-if="hasToTop" @to-top="toTopHandle" />
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style scoped lang="scss">
.detail-content {
  width: 100%;
  overflow-y: auto;

  .points-box {
    margin: auto;
    text-align: center;
    width: 87%;

    .no-to-bet-list {
      overflow: hidden;
    }

    .show-btn {
      .lazy-image {
        transform: rotateZ(90deg) !important;
      }
    }

    .show-not-bet-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: rgb(255 255 255 / 60%);
      font-weight: 400;
      margin-top: 16px;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      border-radius: 6px;
      position: relative;
      .finish-icon {
        height: 24px;
        width: 24px;
        margin-left: 16px;
      }

      &:hover {
        background-color: rgb(255 255 255 / 2%);
      }

      div + div {
        margin-left: 8px;
      }

      .lazy-image {
        height: 24px;
        width: 24px;
        transition: all 0.2s ease-in-out;
        transform: rotateZ(-90deg);
      }
    }

    .round {
      width: 100%;
      height: 53px;
      padding-top: 16px;
      font-size: 16px;
      color: #fa8600;
      // border-bottom: 1px solid rgb(255 255 255 / 5%);
      display: flex;
      justify-content: center;
      align-items: center;
      .round-del {
        height: 1px;
        flex-grow: 1;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 1px;
      }
      .round-icon {
        height: 24px;
        width: 24px;
        margin: 0 16px;
      }
      .r {
        transform: rotateZ(-90deg);
      }
    }

    .visible {
      height: 0;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  &:deep(.el-scrollbar) {
    .el-scrollbar__wrap {
      scroll-behavior: smooth;
    }

    .el-scrollbar__thumb {
      background-color: #fe5e00;
    }
  }

  .no-more {
    height: calc(100vh - 660px);
  }
}
</style>
