<!-- eslint-disable @typescript-eslint/no-use-before-define -->
<script lang="ts">
import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  provide,
  ref,
  watch,
} from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import GameList from './components/gameList/index.vue'
import SideBarHeader from './components/SideBarHeader/index.vue'
import ShopCart from './components/ShopCart/index.vue'
import BetList from './components/betList/index.vue'
import PosterItem from './components/PosterItem/index.vue'
import LogoItem from './components/LogoItem/index.vue'
import NotLoginBox from './components/NotLoginBox/index.vue'
import { userInfoStore } from '@/store/userInfo'

export default {
  name: 'Sidebar',
  components: {
    SideBarHeader,
    GameList,
    BetList,
    ShopCart,
    PosterItem,
    LogoItem,
    NotLoginBox,
  },
  setup() {
    const isTradition = ref(document.body.clientWidth > 1199)

    const leftIcon = new URL('@/assets/icons/prev.png', import.meta.url).href

    const { isLogin } = storeToRefs(userInfoStore())

    provide(
      'isTradition',
      computed(() => isTradition.value),
    )

    const oldSideBar = ref('GameList')

    const currentSideBar = ref('GameList')

    const changeCurrentSideBar = (sideBar: string) => {
      oldSideBar.value = sideBar
      if (!isTradition.value || isSchedule.value) {
        return
      }
      currentSideBar.value = sideBar
    }

    function traditionStatus() {
      if (isTradition.value && !isSchedule.value) {
        oldSideBar.value = currentSideBar.value
      }
      if (!isSchedule.value) {
        currentSideBar.value = 'GameList'
      }
      isTradition.value = !isTradition.value
      if (isTradition.value && !isSchedule.value) {
        setTimeout(() => {
          currentSideBar.value = oldSideBar.value
        }, 300)
      }
    }

    const route = useRoute()

    const isSchedule = ref(false)

    const { proxy }: any = getCurrentInstance()

    function routerName(newVal: string, oldVal: string) {
      // if (['ScheduleList', 'ScheduleDetail'].includes(newVal)) {
      //   currentSideBar.value = 'ScheduleSidebar'
      //   isSchedule.value = true
      //   return
      // }
      if (['MatchList'].includes(newVal) && oldVal !== 'MatchDetail') {
        nextTick(() => {
          proxy.mittBus.emit('changeCurrentSideBarBus', 'GameList')
        })
      }
      isSchedule.value = false
    }

    watch(
      () => route.name,
      (newVal, oldVal) => {
        routerName(newVal as string, oldVal as string)
      },
    )

    onMounted(() => {
      routerName(route.name as any, '')
      proxy.mittBus.on('traditionStatusBus', (tag = true) => {
        if (tag === isTradition.value) {
          return
        }
        traditionStatus()
      })
    })
    onUnmounted(() => {
      proxy.mittBus.off('traditionStatusBus')
    })

    return {
      isTradition,
      currentSideBar,
      changeCurrentSideBar,
      traditionStatus,
      leftIcon,
      oldSideBar,
      isLogin,
    }
  },
}
</script>

<template>
  <div
    id="sidebar-box"
    class="sidebar"
    :class="{
      'not-sidebar-tradition': !isTradition,
    }"
  >
    <LogoItem />
    <SideBarHeader
      v-show="currentSideBar !== 'ScheduleSidebar'"
      @change="changeCurrentSideBar"
    />
    <div class="side-bar-box">
      <div class="main-box">
        <keep-alive>
          <component :is="currentSideBar" />
        </keep-alive>
      </div>
      <NotLoginBox
        v-show="
          currentSideBar === 'GameList' && oldSideBar === 'GameList' && !isLogin
        "
      />
    </div>
    <div
      class="toggle-icon"
      :style="{
        '--deg-value': isTradition ? '0' : '180deg',
        '--right': isTradition ? '-14px' : '-14px',
      }"
      @click.stop="traditionStatus"
    >
      <LazyImage :img-url="leftIcon" :is-lazy="false" />
    </div>
    <div
      class="hot-box-btn"
      :class="{
        right: isTradition,
        left: !isTradition,
      }"
      @click.stop="traditionStatus"
    />
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.not-sidebar-tradition {
  width: 88px !important;
  .main-box {
    width: calc(100% - 16px) !important;
  }
}
.sidebar {
  flex-shrink: 0;
  height: 100%;
  width: 320px;
  display: flex;
  //overflow: hidden;
  flex-direction: column;
  transition: all 0.4s ease-in-out;
  position: relative;
  .side-bar-box {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main-box {
      flex-grow: 1;
      overflow: hidden;
      :deep(.el-scrollbar) {
        .el-scrollbar__thumb {
          display: none;
        }
      }
    }
  }
  .toggle-icon {
    height: 28px;
    width: 28px;
    position: absolute;
    bottom: 58px;
    transition: all 0.3s linear;
    right: var(--right);
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    .lazy-image {
      height: 24px;
      width: 24px;
      transition: all 0.3s linear;
      transform: rotateZ(var(--deg-value));
    }
  }
  .hot-box-btn {
    position: absolute;
    height: 64%;
    width: 12px;
    right: 0;
    top: 18%;
    // z-index: 500;
    &:hover {
      background-image: linear-gradient(
        180deg,
        rgba(254, 94, 0, 0) 0%,
        rgba(254, 94, 0, 0.15) 49%,
        rgba(254, 94, 0, 0) 100%
      );
    }
  }
  .hot-box-btn.right {
    cursor: url("@/assets/icons/home_mouse_01.png") 12 0, auto;
  }
  .hot-box-btn.left {
    cursor: url("@/assets/icons/home_mouse_02.png") 12 0, auto;
  }
}
</style>
