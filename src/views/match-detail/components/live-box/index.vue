<script lang="ts">
import type { Ref } from 'vue'
import {
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import Player from 'xgplayer'
import HlsJsPlayer from 'xgplayer-hls.js'
import FlvPlayer from 'xgplayer-flv'
import { getLocal } from '@/utils/storage'
import videoAndAnimationHook from '@/hooks/videoAndAnimationHook'

export default defineComponent({
  name: 'LiveBox',
  components: {},
  props: {
    matchDetail: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  emits: ['closeVideo'],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance() as any

    const closeImage = new URL('@/assets/icons/closed.png', import.meta.url)
      .href

    const isMin = ref(false)

    function closeVideo() {
      emit('closeVideo')
    }

    const dplayer = ref<HTMLDivElement>()

    const player: Ref<any> = ref(null)

    const iframeStyle = ref((720 * 720) / 1280)

    const { currentVideoUrl, isIframe } = videoAndAnimationHook(props.matchDetail)

    function initPlayer(url: string) {
      const commonOption = {
        el: proxy.$refs.dplayer,
        url,
        isLive: true,
        // 是否自动播放
        autoplay: true,
        // 是否显示视频首帧
        videoInit: true,
        // 封面图
        poster: '',
        // 触发全屏时实现样式横屏全屏
        // rotateFullscreen: true,
        crossOrigin: true,
        // fitVideoSize: 'auto',
        width: '100%',
        height: '534px',
        // controlPlugins: [play, fullscreen, progress, volume, pip, flex],
        // pip: true, // 打开画中画功能
        lang: +getLocal('lang') === 1 ? 'zh-cn' : 'en',
        miniplayer: true,
        miniplayerConfig: {
          bottom: 88,
          left: 0,
          width: 512,
          height: 320,
          zIndex: 600,
        },
        closeVideoClick: true,
        closeVideoPreventDefault: true,
      }

      const flvTag = url.indexOf('.flv')
      const m3u8Tag = url.indexOf('.m3u8')

      if (flvTag !== -1) {
        player.value = new FlvPlayer(Object.assign(commonOption, {}))
      }
      else if (m3u8Tag !== -1) {
        player.value = new HlsJsPlayer(Object.assign(commonOption, {}))
      }
      else {
        player.value = new Player(Object.assign(commonOption, {}))
      }
    }

    function wheelHanle(e: any) {
      const evet: any = e || window.event
      if (evet.deltaY > 0 && player.value && !player.value.isMiniPlayer) {
        if (player.value) {
          isMin.value = true
          player.value.getMiniplayer()
          proxy.mittBus.emit('scrollToEmit', 'live-animate')
        }
      }
    }

    const isInit = ref(false)

    watch(() => currentVideoUrl.value, (newVal) => {
      if (
        newVal
          && proxy.$refs.dplayer
          && isInit.value
          && !isIframe.value
      ) {
        if (player.value) {
          player.value.pause()
          player.value.src = newVal
          player.value.play()
        }
        else {
          initPlayer(newVal)
        }
      }
    })
    onMounted(() => {
      isInit.value = true

      proxy.mittBus.on('setMiniplayerBus', (isMinTag: boolean) => {
        if (player.value && isMinTag === !player.value.isMiniPlayer) {
          isMin.value = isMinTag
          isMinTag
            ? player.value.getMiniplayer()
            : player.value.exitMiniplayer()
        }
      })

      nextTick(() => {
        if (player.value && !isIframe.value) {
          player.value.pause()
          player.value.destroy()
          player.value = null
          initPlayer(currentVideoUrl.value)
        }
        else {
          initPlayer(currentVideoUrl.value)
        }
      })
    })

    onUnmounted(() => {
      isInit.value = false
      proxy.mittBus.off('setMiniplayerBus')
      if (player.value) {
        player.value.pause()
        player.value.destroy()
        player.value = null
      }
    })

    return {
      closeImage,
      closeVideo,
      player,
      currentVideoUrl,
      isIframe,
      iframeStyle,
      isMin,
      wheelHanle,
      dplayer,
    }
  },
})
</script>

<template>
  <div class="live-box" :class="{ 'is-min': isMin }" @wheel="wheelHanle">
    <div class="live-video" :style="{ '--height': iframeStyle }">
      <div v-if="!isIframe" id="dplayer" ref="dplayer" />
      <div v-else class="iframe-box" v-html="currentVideoUrl" />
      <div v-if="!isMin" class="close-icon" @click="closeVideo">
        <el-image class="lazy-image" :src="closeImage" />
      </div>
      <Teleport v-if="isMin" :to="dplayer">
        <div class="close-icon" @click="closeVideo">
          <el-image class="lazy-image" :src="closeImage" />
        </div>
      </Teleport>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.is-min {
  padding: 0 24px !important;
  min-height: 0 !important;
}
.live-box {
  width: 100%;
  padding: 24px 26px 0;
  min-height: 330px;
  flex-shrink: 0;
  transition: all 0.5s ease-in-out;
  .iframe-box {
    height: calc(var(--height) * 1px);
  }
  overflow: hidden;
  .live-video {
    position: relative;
    width: 100%;
    height: 100%;
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
  .iframe-box iframe {
    width: 100% !important;
    height: 100% !important;
    border: none !important;
  }
}
#dplayer {
  z-index: 1000;
  .close-icon{
    display: block;
  }
}
</style>
