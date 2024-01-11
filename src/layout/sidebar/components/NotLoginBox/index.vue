<script lang="ts">
import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
  name: 'NotLoginBox',
  components: {},
  setup() {
    const isTradition = inject('isTradition', true)

    const closeIcon = new URL('@/assets/icons/closed.png', import.meta.url).href

    const bing = new URL('@/assets/icons/bling.png', import.meta.url).href

    const show = ref(true)

    function toLogin() {
      window.parent.postMessage('login', '*')
    }

    return { closeIcon, bing, show, isTradition, toLogin }
  },
})
</script>

<template>
  <div
    class="not-login-box"
    :class="{ 'close': !show, 'not-show': !isTradition }"
  >
    <LazyImage class="close-icon" :img-url="closeIcon" :is-lazy="false" @click="show = false" />
    <div class="box-header">
      <span>{{ $t('to-login-ia') }}</span>
    </div>
    <div class="box-message">
      <LazyImage :img-url="bing" :is-lazy="false" />
      <div class="text">
        {{ $t('hot-live') }}
      </div>
    </div>
    <div class="box-message">
      <LazyImage :img-url="bing" :is-lazy="false" />
      <div class="text">
        {{ $t('play-bet') }}
      </div>
    </div>
    <div class="box-login-btn" @click="toLogin">
      {{ $t('login-now') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.close {
  height: 0 !important;
  padding: 0;
  margin: auto !important;
}
.not-login-box {
  height: 180px;
  width: calc(100% - 46px);
  margin: 10px auto 20px;
  flex-shrink: 0;
  background: #3b4045;
  border-radius: 8px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  position: relative;
  transition: all 0.2s ease-in-out;
  .box-message {
    font-size: 14px;
    color: #ffffff;
    font-weight: 500;
    height: 32px;
    display: flex;
    align-items: center;
    margin-left: 18px;
    .lazy-image {
      height: 24px;
      width: 24px;
      margin: 0 12px 0 6px;
    }
    .text {
      width: 160px;
      white-space: pre-wrap;
      // line-height: 20px;
    }
  }
  .box-login-btn {
    height: 40px;
    width: 232px;
    margin: 12px auto;
    font-size: 14px;
    color: #ffffff;
    font-weight: 500;
    background-image: linear-gradient(90deg, #f16720 0%, #fd8908 94%);
    border-radius: 8px;
    text-align: center;
    white-space: pre-wrap;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .close-icon {
    position: absolute;
    height: 24px;
    width: 24px;
    top: 14px;
    right: 20px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .box-header {
    height: 46px;
    display: flex;
    align-items: center;
    width: 200px;
    margin-left: 18px;
    margin-top: 3px;
    span {
      // line-height: 20px;
      font-size: 14px;
      color: #fe5e00;
    }
  }
}
.not-show {
  width: 0;
  height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
</style>
