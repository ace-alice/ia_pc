<script lang="ts">
import { defineComponent, inject } from 'vue'
import { getLocal } from '@/utils/storage'
import logoImg from '@/assets/images/logo.png'
import logoImgEn from '@/assets/images/shouye_logo_en.png'

export default defineComponent({
  name: 'LogoItem',
  components: {},
  setup() {
    const isTradition = inject('isTradition', true)

    const router = useRouter()

    function routerJump(rou: string) {
      router.push({ name: rou })
    }

    const logo = [1, 3].includes(+getLocal('lang')) ? logoImg : logoImgEn

    return { routerJump, isTradition, logo }
  },
})
</script>

<template>
  <div class="LogoItem" :class="{ 'not-show': !isTradition }">
    <LazyImage :img-url="logo" :is-lazy="false" @click="routerJump('Match')" />
  </div>
</template>

<style lang="scss" scoped>
.LogoItem {
  width: 100%;
  height: 74px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  transition: all 0.4s ease-in-out;
  .lazy-image {
    width: 124px;
    height: 28px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    margin-left: 24px;
  }
}
.not-show {
  width: 0;
  height: 0;
}
</style>
