<script lang="ts">
import { defineAsyncComponent, defineComponent, inject } from 'vue'
import { parseTime } from '@/utils'
import home_live_coming from '@/assets/icons/home_live_coming.png'
const LiveIcon = defineAsyncComponent(
  () => import('@/components/LiveIcon/index.vue'),
)

export default defineComponent({
  name: 'LogoDateBoxUn',
  components: { LiveIcon },
  props: {
    dataInfo: {
      type: Object,
      default: () => {
        return {
          logo: '',
          startTime: 0,
        }
      },
    },
  },
  setup() {
    const handicap = inject('handicap')

    return { parseTime, handicap, home_live_coming }
  },
})
</script>

<template>
  <div class="LogoDateBoxUn">
    <LazyImage :img-url="dataInfo.logo" :is-lazy="false" />
    <div class="main-live">
      <div v-if="dataInfo.isLive" class="live-tag">
        <LiveIcon style="margin-right: 12px" />
        <!-- <HasLiveIcon
          v-else-if="dataInfo.isPrediction"
          style="margin-right: 12px"
        /> -->
      </div>
      <div class="start-time">
        {{
          parseTime(
            Number(String(dataInfo.startTime).padEnd(13, "0")),
            "{h}:{i}",
          )
        }}
      </div>
      <div v-if="!dataInfo.isLive" class="is-tom">
        {{
          parseTime(
            Number(String(dataInfo.startTime).padEnd(13, "0")),
            "{m}-{d}",
          )
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.box-item {
  background: rgba(0, 0, 0, 0) !important;
  border: none !important;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6) !important;
  .content-item {
    background: rgba(0, 0, 0, 0.6) !important;
    padding: 7px 12px;
    backdrop-filter: blur(10px);
    border-radius: 4px;
    transform: translateX(-30px);
  }
}
</style>

<style lang="scss" scoped>
@mixin text-overflow-ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.LogoDateBoxUn {
  display: flex;
  flex-shrink: 0;
  width: 16.5%;
  padding: 0 2.8%;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .lazy-image {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }
  .main-live {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .live-tag {
    display: flex;
    margin-bottom: 8px;
    overflow: hidden;
    .lazy-image {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
    }
    .live-bet {
      // font-family: PingFangSC-Medium, monospace;
      font-size: 16px;
      color: #ff4e00;
      font-weight: 600;
      flex-shrink: 0;
      @include text-overflow-ellipsis;
    }
    .live-has-1,
    .live-has-2 {
      // font-family: PingFangSC-Medium, monospace;
      font-size: 16px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.6);
      flex-shrink: 0;
      @include text-overflow-ellipsis;
    }
    .live-has-2 {
      color: #ffcd00;
    }
  }
  .start-time {
    //font-family: PingFangSC-Medium, monospace;
    font-size: 18px;
    color: #ffffff;
    font-weight: 500;
    min-width: 50px;
    text-align: center;
    @include text-overflow-ellipsis;
  }
  .countdown {
    display: flex;
    justify-content: flex-end;
    div {
      width: 46%;
      flex-shrink: 0;
      &:nth-child(1) {
        text-align: right;
      }
    }
  }
}
.is-tom {
  color: #fff;
  opacity: 0.6;
  margin-top: 4px;
}
</style>
