<script lang="ts">
import type { Ref } from 'vue'
import {
  defineAsyncComponent,
  defineComponent,
  onMounted,
  ref,
} from 'vue'
import dayjs from 'dayjs'
import Container from './container/index.vue'
import { gameInfoStore } from '@/store/gameInfo'
import LoadingPage from '@/components/LodingPage/index-temp.vue'
import PlacardAlert from '@/components/PlacardAlert/index.vue'
import { getLocal, removeLocal } from '@/utils/storage'
const HeaderBox = defineAsyncComponent(() => import('./header/index.vue'))
const Sidebar = defineAsyncComponent(() => import('./sidebar/index.vue'))
const UserCenter = defineAsyncComponent(
  () => import('@/components/UserCenter/index.vue'),
)

export default defineComponent({
  name: 'LayoutBox',
  components: {
    HeaderBox,
    Sidebar,
    Container,
    UserCenter,
    LoadingPage,
  },
  setup() {
    const { initGameInfo } = gameInfoStore()

    const showPlacard = ref(false)

    function getShowPlacard() {
      const diff = dayjs().diff('2023-03-07', 'day')
      if (diff >= 7) {
        removeLocal('closePlacardTime')
        return false
      }
      const nowTime = dayjs().startOf('date').valueOf()
      const time = getLocal('closePlacardTime')
      if (time) {
        return +nowTime !== +time
      }
      else {
        return true
      }
    }

    showPlacard.value = getShowPlacard()

    const loadingPageRef: Ref<any> = ref(null)

    onMounted(() => {
      // nextTick(() => {
      //   if (loadingPageRef.value) {
      //     loadingPageRef.value.loading()
      //   }
      // })
      initGameInfo().finally(() => {
        // setTimeout(() => {
        //   if (loadingPageRef.value) {
        //     loadingPageRef.value.end()
        //   }
        // }, 240)
      })
      // initGameInfo()
    })

    return { showPlacard, loadingPageRef }
  },
})
</script>

<template>
  <div class="layout">
    <LoadingPage ref="loadingPageRef" />
    <Sidebar />
    <div class="layout-body">
      <HeaderBox />
      <Container />
      <div class="footer" />
    </div>
    <UserCenter />
    <PlacardAlert v-if="showPlacard" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  background: var(--color-bg-primary);
  overflow: hidden;
  max-width: 1440px;
  margin: auto;
  min-width: 1080px;
  position: relative;

  .layout-body {
    flex-grow: 1;
    overflow: hidden;

    & > div {
      overflow: hidden;
    }

    .footer {
      height: 20px;
      width: 100%;
      position: relative;
      overflow: visible;

      &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 14px;
        height: 10px;
        width: calc(100% - 28px);
        background-color: var(--color-bg-second);
        z-index: 10;
      }
    }
  }
}
</style>
