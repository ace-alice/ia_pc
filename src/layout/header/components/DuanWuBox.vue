<script setup lang="ts" name="DuanWuBox">
import dayjs from 'dayjs'
import duanwuImg from '@/assets/other/duanwu.png'
const show = ref(dayjs().isBefore(dayjs('2023-6-25')))
</script>

<template>
  <img v-if="show" :src="duanwuImg" class="duanwuImg" alt="">
</template>

<style lang="scss" scoped>
.duanwuImg {
  height: 72px;
  width: 152px;
}
</style>
