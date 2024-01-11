<script lang="ts" setup name="LayoutContainer">
import { gameInfoStore } from '@/store/gameInfo'
const MatchDetailCom = defineAsyncComponent(() => import('@/views/match-detail/index.vue'))

const { matchDetailQuery } = storeToRefs(gameInfoStore())
</script>

<template>
  <div class="main-container">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <transition name="detail" mode="out-in" appear>
      <MatchDetailCom v-if="matchDetailQuery.show" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  background: var(--color-bg-primary);
  height: calc(100% - 92px);
  position: relative;
  /* 隐藏滚动条 */
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  & > div {
    background: var(--color-bg-second);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    overflow: auto;
    height: 100%;
    width: 100%;
  }
  .main-enter-active {
    transition: 0.2s;
  }

  .main-leave-active {
    transition: 0.15s;
  }

  .main-enter-from {
    opacity: 0;
    margin-left: 40px;
  }

  .main-leave-to {
    opacity: 0;
    margin-left: -40px;
  }
  .detail-enter-active {
    transition: 0.5s;
  }

  .detail-leave-active {
    transition: 0.5s;
  }

  .detail-enter-from {
    // opacity: 0;
   transform: translateX(100%);
  }

  .detail-leave-to {
    // opacity: 0;
    transform: translateX(100%);
  }
}
</style>
