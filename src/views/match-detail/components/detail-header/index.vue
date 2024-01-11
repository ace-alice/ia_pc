<!-- eslint-disable @typescript-eslint/no-use-before-define -->
<script lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'
import { parseTime } from '@/utils'
import useImageResource from '@/hooks/useImageResource'
import videoAndAnimationHook from '@/hooks/videoAndAnimationHook'
import LiveIcon from '@/components/LiveIcon/index.vue'
import home_dataanalysis_02 from '@/assets/icons/home_dataanalysis_02.png'
import closed from '@/assets/icons/closed.png'
import { getLocal, removeLocal, setLocal } from '@/utils/storage'
import { gameInfoStore } from '@/store/gameInfo'
export default defineComponent({
  name: 'IaMatchTab',
  components: { LiveIcon },
  props: {
    matchInfo: {
      type: Object,
      default: () => null,
    },
  },
  emits: ['showVideoEmit', 'showAnimateEmit', 'showDataOfMatchEmit'],
  setup(props: any, { emit }: any) {
    const { matchDetailQuery } = storeToRefs(gameInfoStore())
    const isEnd = matchDetailQuery.value?.is_end || false
    const { prevImg } = useImageResource()
    const router = useRouter()

    function routerJump(rou: string) {
      router.push({ name: rou })
    }
    const { animationHas, videoHas } = videoAndAnimationHook(props.matchInfo)

    const videoImage = new URL('@/assets/icons/live.png', import.meta.url).href

    const animateImage = new URL('@/assets/icons/score.png', import.meta.url)
      .href

    const showVideo = inject('showVideo')

    const showAnimate = inject('showAnimate')

    const showDataOfMatch = inject('showDataOfMatch')

    const hasDataOfMatch: any = inject('hasDataOfMatch', false)

    const goBack = () => {
      matchDetailQuery.value.show = false
    }

    const allHeight = ref(true)

    const { proxy }: any = getCurrentInstance()

    function toShowVideo() {
      if (!videoHas.value) {
        return
      }
      emit('showVideoEmit')
    }

    function toShowAnimate() {
      if (!animationHas.value) {
        return
      }
      emit('showAnimateEmit')
    }

    function toShowDataOfMatch() {
      setLocal('closeTime', dayjs())
      if (!hasDataOfMatch.value) {
        return
      }
      setLocal('noShowDatawarning', true)
      noShowDatawarning.value = true
      emit('showDataOfMatchEmit')
    }

    onMounted(() => {
      proxy.mittBus.on('changeHeightBus', (tag: boolean) => {
        allHeight.value = tag
      })
    })

    onUnmounted(() => {
      proxy.mittBus.off('changeHeightBus')
    })

    const noShowDatawarning = ref(getLocal('noShowDatawarning') || false)

    function closeDatawarning() {
      setLocal('noShowDatawarning', true)
      noShowDatawarning.value = true
      toShowDataOfMatch()
    }

    const closeTime = ref(getLocal('closeTime'))

    function dealShow() {
      if (!noShowDatawarning.value) {
        return
      }
      if (dayjs().isBefore(dayjs('2023-5-2'))) {
        if (noShowDatawarning.value) {
          if (
            closeTime.value
            && dayjs(closeTime.value).isBefore(dayjs().subtract(1, 'day'))
          ) {
            removeLocal('noShowDatawarning')
            removeLocal('closeTime')
            noShowDatawarning.value = false
          }
        }
      }
    }

    dealShow()

    return {
      prevImg,
      goBack,
      allHeight,
      videoImage,
      animateImage,
      animationHas,
      videoHas,
      toShowVideo,
      showVideo,
      toShowAnimate,
      showAnimate,
      parseTime,
      isEnd,
      showDataOfMatch,
      hasDataOfMatch,
      toShowDataOfMatch,
      home_dataanalysis_02,
      noShowDatawarning,
      closeDatawarning,
      closed,
    }
  },
})
</script>

<template>
  <div
    class="match-tab"
    :class="{
      'cut-height': !allHeight || showVideo || showAnimate || showDataOfMatch,
    }"
  >
    <LazyImage
      :img-url="prevImg"
      class="back-btn"
      :is-lazy="false"
      @click.stop="goBack"
    />
    <div class="bo-event-name">
      <div>
        <LazyImage :img-url="matchInfo.game_type_logo" :is-lazy="false" />
        <div>{{ matchInfo.event_name || "IA ESPORT" }}</div>
      </div>
      <div>
        <div v-if="matchInfo.matches > 1">
          BO{{ matchInfo.matches }}
        </div>
        <LiveIcon v-show="+matchInfo.category_id === 3 && !isEnd" />
      </div>
    </div>
    <div
      v-if="hasDataOfMatch && !noShowDatawarning"
      class="data-warning"
      @click.stop="closeDatawarning"
    >
      <div>{{ $t('click_to_analyze') }}</div>
      <!-- <LazyImage
        v-if="hasDataOfMatch && !isEnd"
        :img-url="closed"
        :is-lazy="false"
        @click.stop="closeDatawarning"
      /> -->
    </div>
    <div class="video-animate">
      <LazyImage
        v-if="hasDataOfMatch && !isEnd"
        :img-url="home_dataanalysis_02"
        :is-lazy="false"
        @click.stop="toShowDataOfMatch"
      />
      <LazyImage
        v-if="videoHas && !isEnd"
        :img-url="videoImage"
        :is-lazy="false"
        @click.stop="toShowVideo"
      />
      <LazyImage
        v-if="animationHas && !isEnd"
        :img-url="animateImage"
        :is-lazy="false"
        @click.stop="toShowAnimate"
      />
    </div>
    <div class="play-info">
      <div class="team-name">
        {{ matchInfo.team_name_1 }}
      </div>
      <LazyImage :img-url="matchInfo.team_logo_1" :is-lazy="false" />
      <div class="score-box">
        <div>{{ matchInfo.score_1 || 0 }}</div>
        -
        <div>{{ matchInfo.score_2 || 0 }}</div>
        <div class="start-time">
          {{ parseTime(matchInfo.game_start_time, "{m}-{d} {h}:{i}") }}
        </div>
      </div>
      <LazyImage :img-url="matchInfo.team_logo_2" :is-lazy="false" />
      <div class="team-name">
        {{ matchInfo.team_name_2 }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.match-tab {
  height: 220px;
  background: #171923;
  flex-shrink: 0;
  margin: 16px 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .play-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    .lazy-image {
      height: 64px;
      width: 64px;
      margin: 0 36px;
      flex-shrink: 0;
      transition: all 0.25s ease-in-out;
    }
    .team-name {
      font-size: 18px;
      width: calc(50% - 216px);
      color: rgba(255, 255, 255, 0.6);
      flex-shrink: 0;
      white-space: pre-wrap;
      word-break: break-all;
      &:nth-child(1) {
        text-align: right;
      }
    }
    .score-box {
      display: flex;
      align-items: center;
      font-family: Gotham-Medium, PingFangSC-Medium, monospace;
      font-size: 32px;
      color: #ffffff;
      font-weight: 500;
      transition: all 0.25s ease-in-out;
      position: relative;
      .start-time {
        background: none !important;
        position: absolute;
        bottom: -60px;
        width: 100%;
        text-align: center;
        // left: calc(50% - 36px);
        left: -12px;
        transform: translateY(0);
        font-size: 14px;
        color: #fe5e00;
        font-weight: 400;
        transition: all 0.2s ease-in-out;
      }
      div {
        transition: all 0.25s ease-in-out;
        height: 52px;
        padding: 0 8px;
        min-width: 48px;
        line-height: 55px;
        text-align: center;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        margin: 0 12px;
        // padding: 0 8px;
      }
    }
  }
  .data-warning {
    position: absolute;
    display: flex;
    background: #006EDE;
    height: 40px;
    align-items: center;
    top: 58px;
    right: 16px;
    font-size: 14px;
    color: #ffffff;
    border-radius: 8px;
    padding: 0 12px;
    transition: all 0.2s ease-in-out;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    div {
      flex-shrink: 0;
    }
    .lazy-image {
      height: 24px;
      width: 24px;
      margin-left: 12px;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
    }
  }
  .video-animate {
    position: absolute;
    right: 40px;
    top: 28px;
    display: flex;
    align-items: center;
    transition: all 0.25s ease-in-out;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    .lazy-image {
      height: 24px;
      width: 24px;
      & + .lazy-image {
        margin-left: 12px;
      }
    }
  }
  &:after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: url("../../../../assets/images/schedule-header-bg.png")
      no-repeat;
    background-size: 100% 260px;
    z-index: -1;
    opacity: 0.6;
  }
  transition: all 0.25s ease-in-out;
  .back-btn {
    position: absolute;
    height: 32px;
    width: 32px;
    top: 24px;
    left: 32px;
    transition: all 0.25s ease-in-out;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .bo-event-name {
    transition: all 0.25s ease-in-out;
    position: absolute;
    top: 28px;
    left: 88px;
    font-size: 14px;
    & > div {
      display: flex;
      align-items: center;
      &:nth-child(1) {
        color: #ffffff;
        .lazy-image {
          height: 24px;
          width: 24px;
          margin-right: 24px;
        }
      }
      &:nth-child(2) {
        color: rgba(255, 255, 255, 0.6);
        padding: 4px 48px;
      }
    }
  }
}
.cut-height {
  height: 82px;
  overflow: hidden;
  .start-time {
    transform: translateY(60px) !important;
  }
  .data-warning {
    top: 38px !important;
  }
  .play-info {
    display: flex;
    align-items: center;
    transform: translateY(10px);
    .lazy-image {
      height: 32px;
      width: 32px;
      margin: 0 12px;
    }
    .team-name {
      font-size: 14px;
    }
    .score-box {
      font-size: 24px;
      div {
        height: 34px;
        line-height: 36px;
        margin: 0 8px;
      }
    }
  }
  .video-animate {
    top: 12px;
    right: 24px;
  }
  .back-btn {
    top: 8px;
    left: 16px;
  }
  .bo-event-name {
    top: 12px;
    left: 72px;
  }
}
</style>
