<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VideoAndAnimationBoxUn',
  components: {},
  props: {
    baseInfo: {
      type: Object,
      default: () => {
        return {
          bo: 0,
          eventName: '',
          hasVideo: false,
          hasAnimate: false,
        }
      },
    },
  },
  emits: ['toDetailClick'],
  setup(_, { emit }: any) {
    const videoIcon = new URL('@/assets/icons/live.png', import.meta.url).href

    const animateIcon = new URL('@/assets/icons/score.png', import.meta.url)
      .href

    function toDetailClick(value: any) {
      emit('toDetailClick', value)
    }

    return { videoIcon, animateIcon, toDetailClick }
  },
})
</script>

<template>
  <div class="VideoAndAnimationBoxUn">
    <div class="top">
      {{ baseInfo.eventName || "IA ESPORT" }}
    </div>
    <div class="bottom">
      <div v-if="baseInfo.bo > 1">
        BO{{ baseInfo.bo || 0 }}
      </div>
      <div class="video-animate">
        <LazyImage
          v-if="baseInfo.hasVideo"
          :img-url="videoIcon"
          :is-lazy="false"
          @click.stop="toDetailClick({ video: 1 })"
        />
        <LazyImage
          v-if="baseInfo.hasAnimate"
          :img-url="animateIcon"
          :is-lazy="false"
          @click.stop="toDetailClick({ video: 2 })"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.VideoAndAnimationBoxUn {
  width: 12.3%;
  padding-right: 2.8%;
  flex-shrink: 0;
  .top {
    font-size: 14px;
    word-break: break-all;
    color: #ffffff;
    max-height: 66px;
    overflow: hidden;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 2px;
    .video-animate {
      display: flex;
      div{
        flex-shrink: 0;
      }
    }
    .lazy-image {
      height: 24px;
      width: 24px;
      margin-left: 4px;
    }
  }
}
</style>
