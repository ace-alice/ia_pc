<script setup lang="ts" name="DetailLoading">
import useImageResource from '@/hooks/useImageResource'
import { gameInfoStore } from '@/store/gameInfo'
const { prevImg } = useImageResource()
const { matchDetailQuery } = storeToRefs(gameInfoStore())
const goBack = () => {
  matchDetailQuery.value.show = false
}
</script>

<template>
  <div class="detail-loading">
    <el-skeleton :rows="1" animated>
      <template #template>
        <div class="detail-header-skeleton">
          <div class="header-event">
            <LazyImage
              :img-url="prevImg"
              class="back-btn"
              :is-lazy="false"
              @click.stop="goBack"
            />
            <div />
            <div />
          </div>
          <div class="header-main">
            <div class="main-name" />
            <div class="main-logo" />
            <div class="main-score" />
            <div class="main-score" />
            <div class="main-logo" />
            <div class="main-name" />
          </div>
        </div>
      </template>
    </el-skeleton>
    <el-skeleton :rows="1" animated class="detail-skeleton">
      <template #template>
        <div class="detail-body-skeleton">
          <div class="body-header">
            <div />
            <div />
            <div>
              <div />
              <div />
            </div>
          </div>
          <div class="body-name" />
          <div class="body-der" />
          <template v-for="i in 20" :key="i">
            <div class="body-name" />
            <div class="body-content">
              <div />
              <div />
            </div>
          </template>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style lang="scss" scoped>
.detail-loading {
  min-height: 100%;
  width: 100%;
}
.detail-header-skeleton {
  position: relative;
  width: 100%;
  height: 220px;
  // background-color: #262d34;
  margin: 16px auto;
  background: url("../../../../assets/images/schedule-header-bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .header-main {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      background: rgba(255, 255, 255, 0.06);
    }
    .main-name {
      border-radius: 4px;
      height: 22px;
      width: 100px;
      margin: 0 26px;
    }
    .main-logo {
      border-radius: 50%;
      height: 64px;
      width: 64px;
      margin: 0 10px;
    }
    .main-score {
      border-radius: 8px;
      height: 52px;
      width: 48px;
      margin: 0 22px;
    }
  }
  .header-event {
    position: absolute;
    display: flex;
    align-items: center;
    top: 24px;
    left: 16px;
    .lazy-image {
      height: 32px;
      width: 32px;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
    }
    & > div {
      & + div {
        margin-left: 24px;
      }
      &:nth-child(2) {
        background: rgba(255, 255, 255, 0.06);
        border-radius: 50%;
        height: 24px;
        width: 24px;
      }
      &:nth-child(3) {
        background: rgba(255, 255, 255, 0.06);
        border-radius: 4px;
        height: 22px;
        width: 150px;
      }
    }
  }
}
.detail-skeleton {
  height: calc(100% - 272px);
  width: 100%;
}
.detail-body-skeleton {
  height: 100%;
  width: 100%;
  background: #262d34;
  border-radius: 8px;
  overflow: hidden;
  .body-der {
    width: calc(100% - 208px);
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 16px auto;
  }
  .body-content {
    width: calc(100% - 208px);
    margin: 16px auto;
    display: flex;
    justify-content: space-between;
    div {
      height: 60px;
      width: 45%;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 6px;
    }
  }
  .body-name {
    margin: 0 auto;
    height: 22px;
    width: 228px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
  }
  .body-header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    padding: 0 28px;
    & > div {
      height: 32px;
      &:nth-child(1) {
        width: 88px;
        opacity: 0;
      }
      &:nth-child(2) {
        width: 444px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.06);
      }
      &:nth-child(3) {
        width: 88px;
        display: flex;
        justify-content: space-between;
        div {
          background: rgba(255, 255, 255, 0.06);
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
