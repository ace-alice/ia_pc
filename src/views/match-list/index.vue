<script lang="ts">
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import UniversalMatchBox from './components/UniversalMatchBox/index.vue'
import HandicapBox from './components/HandicapBox/index.vue'
import HotMatchBox from './components/HotMatchBox/index.vue'
import EndMatchBox from './components/EndMatchBox/temp.vue'
import ChampionMatchBox from './components/ChampionMatchBox/index.vue'
import { gameInfoStore } from '@/store/gameInfo'
const handicapName: any = {
  end: 'EndMatchBox',
  champion: 'ChampionMatchBox',
}

export default defineComponent({
  name: 'MatchList',
  components: {
    HotMatchBox,
    UniversalMatchBox,
    EndMatchBox,
    ChampionMatchBox,
    HandicapBox,
  },
  setup() {
    const { currentHandicap } = storeToRefs(gameInfoStore())

    const currentMatchBoxName = computed(() => {
      return handicapName[currentHandicap.value] || 'UniversalMatchBox'
    })

    const matchListRef = ref<HTMLDivElement | null>()

    const { proxy }: any = getCurrentInstance()

    const hotMatchKey = ref(1)

    onMounted(() => {
      proxy.mittBus.on('matchListSetTop', (top: number) => {
        matchListRef.value && matchListRef.value.scrollTo({ top })
      })
    })

    onUnmounted(() => {
      proxy.mittBus.off('matchListSetTop')
    })

    return { currentHandicap, currentMatchBoxName, matchListRef, hotMatchKey }
  },
})
</script>

<template>
  <div ref="matchListRef" class="match-list">
    <HotMatchBox />
    <HandicapBox />
    <transition name="el-fade-in-linear">
      <component
        :is="currentMatchBoxName"
        :key="currentHandicap"
        :handicap="currentHandicap"
      />
    </transition>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.match-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  scroll-behavior: smooth;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  & > div {
    flex-shrink: 0;
    width: calc(100% - 30px);
    margin: auto;
  }

  .list-box {
    height: calc(100% - 56px);
    width: calc(100% - 10px);
    overflow: hidden;

    &:deep(.el-scrollbar) {
      padding: 0 10px;
    }
  }

  &:deep(.el-scrollbar__thumb) {
    background: rgb(254 94 0 / 50%);
    border-radius: 7px;
    width: 6px;
  }
}
</style>
