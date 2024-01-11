<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
const LiveIcon = defineAsyncComponent(
  () => import('@/components/LiveIcon/index.vue'),
)

export default defineComponent({
  name: 'VideoAndAnimationBoxHot',
  components: { LiveIcon },
  props: {
    baseInfo: {
      type: Object,
      default: () => {
        return {
          bo: 0,
          eventName: '',
          hasVideo: false,
          hasAnimate: false,
          logo: '',
          isLive: false,
        }
      },
    },
  },
  setup() {
    const videoIcon = new URL('@/assets/icons/live.png', import.meta.url).href

    const animateIcon = new URL('@/assets/icons/score.png', import.meta.url).href

    return { videoIcon, animateIcon }
  },
})
</script>

<template>
  <div class="VideoAndAnimationBoxHot">
    <LazyImage :img-url="baseInfo.logo" :is-lazy="false" />
    <div class="event-name">
      <span v-tooltip="{ width: 70, message: baseInfo.eventName }">{{
        baseInfo.eventName
      }}</span>
    </div>
    <div class="deliver" />
    <div class="bo">
      BO{{ baseInfo.bo || 0 }}
    </div>
    <LiveIcon v-if="baseInfo.isLive" />
  </div>
</template>

<style lang="scss" scoped>
.VideoAndAnimationBoxHot {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  align-items: center;
  .lazy-image {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  .deliver {
    height: 16px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    margin-right: 8px;
  }
  .event-name {
    padding: 0 6px;
    overflow: hidden;
    max-width: calc(100% - 80px);
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #f2f2f6;
    letter-spacing: 0;
    font-weight: 400;
    z-index: 5;
  }
}
</style>
