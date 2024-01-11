<script setup lang="ts" name="DataOfMatch">
import { debounce } from 'lodash'
import AgainstData from '../AgainstData/index.vue'
import shuju_down_02 from '@/assets/icons/shuju_down_02.png'
import shuju_xf_up from '@/assets/icons/shuju_xf_up.png'
import closed from '@/assets/icons/closed.png'
import shuju_suspend from '@/assets/icons/shuju_suspend.png'

const emit = defineEmits(['closeDataOfMatch'])

function closeDataOfMatch() {
  emit('closeDataOfMatch')
}

const { proxy }: any = getCurrentInstance()

const isMin = ref(false)

const isClose = ref(false)

provide(
  'isMin',
  computed(() => isMin.value),
)

const isShort = ref(false)

function wheelHanle(e: any) {
  const evet: any = e || window.event
  proxy.mittBus.emit('scrollToEmit', 'live-animate')
  if (evet.deltaY > 0 && !isMin.value) {
    proxy.mittBus.emit('scrollToEmit', 'live-animate')
  }
}

const setNoShot = debounce(() => isShort.value = false, 300)

const dataOfMatchRef = ref<HTMLDivElement>()

const closeImage = new URL('@/assets/icons/closed.png', import.meta.url)
  .href

onMounted(() => {
  proxy.mittBus.on('setMiniDataBus', (isMinTag: boolean) => {
    if (isMin.value !== isMinTag) {
      isMin.value = isMinTag
      isClose.value = false
      isShort.value = false
    }
  })
  proxy.mittBus.on('setMatchOfDataCloseBus', (isMinTag: boolean) => {
    if (!isMin.value) {
      return
    }
    if (isClose.value !== isMinTag) {
      isClose.value = isMinTag
    }
  })
  proxy.mittBus.on('setShortBus', (isShortTag: boolean) => {
    if (isClose.value && isShort.value !== isShortTag) {
      isShort.value = isShortTag
    }
    if (isShort.value) {
      setNoShot()
    }
  })
})
onUnmounted(() => {
  proxy.mittBus.off('setMiniDataBus')
  proxy.mittBus.off('setShortBus')
  proxy.mittBus.off('setMatchOfDataCloseBus')
})
</script>

<template>
  <div ref="dataOfMatchRef" class="data-of-match" :class="{ 'is-min': isMin }">
    <div class="close-icon" @click="closeDataOfMatch">
      <img class="lazy-image" :src="closeImage">
    </div>
    <div class="white" @wheel="wheelHanle" />
    <div class="data-of-match-box" :class="{ 'is-close': isClose }">
      <div class="close">
        <LazyImage
          :img-url="shuju_down_02"
          style="height: 32px; width: 32px"
          :is-lazy="false"
          @click="isClose = true"
        />
      </div>
      <el-carousel
        :class="{ 'side-carousel': isMin, 'inline-carousel': !isMin }"
        indicator-position="none"
        :autoplay="false"
        arrow="never"
      >
        <el-carousel-item :class="{ 'side-carousel-item': !isMin }">
          <AgainstData />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="white" @wheel="wheelHanle" />
    <div class="open-box" :class="{ 'box-is-close': isClose, 'is-short': isShort }" @click="isClose = false">
      <LazyImage
        :img-url="shuju_suspend"
        style="height: 48px; width: 48px;cursor:default"
        :is-lazy="false"
        @click="isClose = true"
      />
      <div class="open-text">
        {{ $t('click_to_analyze') }}
      </div>
      <LazyImage
        :img-url="shuju_xf_up"
        style="height: 24px; width: 24px; margin: 0 6px"
        :is-lazy="false"
      />
      <LazyImage
        :img-url="closed"
        style="height: 24px; width: 24px; margin: 0 12px"
        :is-lazy="false"
        @click.stop="closeDataOfMatch"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.is-short {
  width: 48px !important;
  overflow: hidden;
}
.open-box {
  width: 298px;
  height: 48px;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  z-index: 10000;
  position: fixed;
  bottom: 108px;
  left: -300px;
  transition: all 0.3s ease-in-out 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  cursor: url("@/assets/icons/home_mouse.png"), auto;
  overflow: hidden;
  & > .lazy-image {
    flex-shrink: 0;
  }
  .open-text {
    flex-grow: 1;
    padding: 0 16px;
    font-size: 14px;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.box-is-close {
  left: 10px !important;
}
// .side-carousel-item {}
:deep(.el-carousel) {
  .el-carousel__container {
    height: 100%;
  }
}

.close {
  height: 32px;
  width: 32px;
  display: none;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 20000;
}

.side-carousel {
  height: calc(100% - 72px);
  width: calc(100% - 28px);
  margin-bottom: 16px;
  border-radius: 16px;
  // border: 2px solid #f16720;
  background-image: linear-gradient(218deg, #17181a 0%, #2e2f33 100%);
  border: 1px solid rgba(254, 94, 0, 0.4);
  border-radius: 32px;
}

.inline-carousel {
  height: 100%;
}

.is-close {
  transform: translateY(102%);
}

.data-of-match {
  height: 400px;
  width: 100%;
  margin-top: 24px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  flex-shrink: 0;
  position: relative;
    .close-icon {
      position: absolute;
      border-radius: 50%;
      right: 50px;
      top: 16px;
      z-index: 1000000;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      background-color: #00000050;
      height: 32px;
      width: 32px;
      padding: 4px;
      display: block;
      .lazy-image {
        height: 24px;
        width: 24px;
      }
    }
}

.data-of-match-box {
  flex-grow: 1;
  transition: all 0.6s ease-in-out;
  overflow: hidden;
  z-index: 999999 !important;
}

.is-min {
  height: 0 !important;
  margin-top: 0 !important;

  .close {
    display: block !important;
  }

  .data-of-match-box {
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 400px !important;
    height: 100% !important;
    z-index: 999999 !important;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius:  0 40px 40px 0;
  }
}

.white {
  width: 32px;
  height: 100%;
}
</style>
