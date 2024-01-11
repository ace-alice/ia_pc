<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import videoAndAnimationHook from '@/hooks/videoAndAnimationHook'

export default defineComponent({
  name: 'AnimateBox',
  props: {
    matchDetail: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  emits: ['closeAnimate'],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance() as any

    const closeImage = new URL('@/assets/icons/closed.png', import.meta.url)
      .href

    function closeAnimate() {
      emit('closeAnimate')
    }

    const { animateSrc } = videoAndAnimationHook(
      props.matchDetail,
    )

    const isMin = ref(false)

    function wheelHandle(e: any) {
      const evet: any = e || window.event
      if (evet.deltaY > 0 && !isMin.value) {
        isMin.value = true
        proxy.mittBus.emit('scrollToEmit', 'live-animate')
      }
    }

    onMounted(() => {
      proxy.mittBus.on('setMiniAnimateBus', (isMinTag: boolean) => {
        isMin.value = isMinTag
      })
    })

    onUnmounted(() => {
      proxy.mittBus.off('setMiniAnimateBus')
      window.removeEventListener('wheel', (e) => {
        const evet: any = e || window.event
        if (evet.deltaY > 0 && !isMin.value) {
          isMin.value = true
        }
      })
    })

    return { closeAnimate, animateSrc, closeImage, isMin, wheelHandle }
  },
})
</script>

<template>
  <div
    class="animate-box"
    :class="{ 'clear-margin': isMin }"
    @wheel="wheelHandle"
  >
    <div class="animate-video" :class="{ 'min-animate': isMin }">
      <iframe width="100%" height="100%" :src="animateSrc" />
      <div class="close-icon" @click="closeAnimate">
        <el-image class="lazy-image" :src="closeImage" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clear-margin {
  margin: auto !important;
  padding: 0 !important;
}
.animate-box {
  width: 100%;
  padding: 24px 24px 0;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;

  &:hover .animate-video .close-icon {
    display: block;
  }

  .min-animate {
    position: fixed !important;
    bottom: -120px;
    left: -200px;
    background-color: #0d151d;
    z-index: 1000;
    max-width: 900px;
    transform: scale(0.5);
    .close-icon {
      transform: scale(2) translate(-10px, 10px);
    }
  }
  .animate-video {
    position: relative;
    height: 548px;
    width: 100%;
    background-color: #12151B;
    iframe {
      border: 0;
    }
    &:hover .close-icon {
      display: block;
    }
    .close-icon {
      position: absolute;
      border-radius: 50%;
      right: 10px;
      top: 16px;
      z-index: 1000;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      background-color: #00000050;
      height: 32px;
      width: 32px;
      padding: 4px;
      display: none;
      .lazy-image {
        height: 24px;
        width: 24px;
      }
    }
  }
}
</style>
