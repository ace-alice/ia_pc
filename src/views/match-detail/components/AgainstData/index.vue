<script setup lang="ts" name="AgainstData">
import { reactive, ref } from 'vue'
import { ElCarousel } from 'element-plus'
import AginstDataCard from './components/AginstDataCard/index.vue'
import warning_01 from '@/assets/icons/warning_01.png'
import closeImg from '@/assets/images/closed.png'
import { gameInfoStore } from '@/store/gameInfo'
const carouselRef = ref<InstanceType<typeof ElCarousel>>()
const { matchDetailQuery } = storeToRefs(gameInfoStore())
const form = reactive({
  game_id: matchDetailQuery.value.game_id || '',
  match_num: 3,
  current_league_only: false,
})

const carouselIndex = ref(0)

function changeCarouselItem(index: number) {
  if (carouselIndex.value === index) {
    return
  }
  carouselIndex.value = index
  carouselRef.value && carouselRef.value.setActiveItem(index)
}

const options = [3, 6, 10]

function changeMatchNum(num: any) {
  if (form.match_num !== num) {
    form.match_num = num
  }
}

const isMin = inject('isMin')

const initHistory = ref(false)

const warningShow = ref(false)
</script>

<template>
  <div class="against-data-box" :class="{ 'is-min-against-data-box': isMin }">
    <div class="against-data">
      <div class="form-select">
        <div
          class="tab-box"
          :style="{
            '--left': carouselIndex ? '50%' : 0,
          }"
        >
          <div
            class="tab-item"
            :class="{ 'item-active': carouselIndex === 0 }"
            @click="changeCarouselItem(0)"
          >
            {{ $t("recent_data") }}
          </div>
          <div
            class="tab-item"
            :class="{ 'item-active': carouselIndex === 1 }"
            @click="changeCarouselItem(1)"
            @mouseenter="initHistory = true"
          >
            {{ $t("history_vs") }}
          </div>
          <div class="tab-item-active" />
        </div>
        <div class="form-data-box">
          <div class="form-item-option">
            <div class="option-name option-label">
              {{ $t("statistics") }}
            </div>
            <div
              v-for="item in options"
              :key="item"
              :class="{ 'form-item-active': +form.match_num === +item }"
              @click="changeMatchNum(item)"
            >
              <div class="option" />
              <div>
                {{ item }}
              </div>
            </div>
          </div>
          <div class="form-item-option form-league">
            <div
              :class="{ 'form-item-active': form.current_league_only }"
              @click="form.current_league_only = !form.current_league_only"
            >
              <div class="option" />
              <div class="option-label">
                {{ $t("current_league_only") }}
              </div>
            </div>
          </div>
          <LazyImage
            :img-url="warning_01"
            :is-lazy="false"
            style="height: 24px; width: 24px"
            class="warning-icon"
            @click="warningShow = true"
          />
          <div v-if="warningShow" class="warning-box">
            <div class="warning-header">
              <div style="width: 24px; height: 24px" />
              <div class="warning-header-name">
                {{ $t("display_rules") }}
              </div>
              <LazyImage
                :img-url="closeImg"
                :is-lazy="false"
                class="warning-header-icon"
                style="height: 24px; width: 24px"
                @click="warningShow = false"
              />
            </div>
            <div class="warning-text">
              <div>{{ $t("display_rules_1") }}</div>
              <div>
                {{ $t("display_rules_2") }}
              </div>
              <div>
                {{ $t("display_rules_3") }}
              </div>
              <div class="warning-o-text">
                {{ $t("display_rules_4") }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ElCarousel
        ref="carouselRef"
        arrow="never"
        class="against-data-carousel"
        :autoplay="false"
        indicator-position="none"
      >
        <el-carousel-item>
          <AginstDataCard :form="form" />
        </el-carousel-item>
        <el-carousel-item>
          <AginstDataCard v-if="initHistory" :form="form" :is-history="true" />
        </el-carousel-item>
      </ElCarousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.against-data-box {
  height: 400px;
  flex-grow: 1;
  margin: auto;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  .warning-icon {
    margin: 0 24px 0 12px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .warning-box {
    position: absolute;
    top: 60px;
    right: 2px;
    width: 330px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    z-index: 9999;
    overflow: hidden;
    color: #ffffff;
    .warning-header {
      background: rgba(0, 0, 0, 0.2);
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding: 0 12px;
      div {
        flex-shrink: 0;
      }
      .warning-header-name {
        flex-grow: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .warning-header-icon {
        cursor: url("@/assets/icons/home_mouse.png"), auto;
      }
    }
    .warning-text {
      padding: 14px 16px;
      font-size: 12px;
      line-height: 17px;
      .warning-o-text {
        color: #fe5e00;
      }
    }
  }
  .option-label {
    // width: 140px;
    max-width: 90px;
    word-break: break-all;
    text-align: left;
  }
}
.is-min-against-data-box {
  height: 100% !important;
  .warning-box {
    top: 100px !important;
  }
  .warning-icon {
    position: absolute;
    right: -12px;
  }
  .against-data {
    padding: 0;
    .tab-box {
      width: 100% !important;
      transform: none !important;
      margin: unset !important;
      line-height: 54px !important;
      height: 54px !important;
      border-radius: 0 !important;
      background: rgba(254, 94, 0, 0.7) !important;
      .tab-item {
        line-height: 54px !important;
      }
      .tab-item-active {
        display: none;
      }
    }

    .against-data-carousel {
      height: calc(100% - 100px);
      &:deep(.el-carousel__container) {
        height: 100%;
      }
    }
  }
  .form-select {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .form-data-box {
    width: 100% !important;
    margin-top: 12px;
    flex-direction: column;
    align-items: flex-start !important;
    margin: unset !important;
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);
    .option-label {
      width: 140px !important;
      word-break: break-all;
      text-align: left;
    }
    .form-league {
      margin-left: 0 !important;
      margin-top: 6px;
      & > div {
        flex-direction: row-reverse !important;
        .option {
          margin-left: 12px;
        }
      }
    }
  }
}
.against-data {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 3.5%;
  .form-select {
    display: flex;
    justify-content: space-between;
    // margin-bottom: 10px;
    .form-data-box {
      // width: calc(100% - 400px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .form-league {
        margin-left: 32px;
      }
      .form-item-option {
        display: flex;
        position: relative;
        .option-name {
          // width: 104px;
          max-width: 90px;
          cursor: default;
        }
        & > div {
          text-align: center;
          color: #fff;
          display: flex;
          align-items: center;
          cursor: url("@/assets/icons/home_mouse.png"), auto;
          & + div {
            margin-left: 12px;
          }
        }
        .option {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          margin-right: 12px;
          position: relative;
        }
        .form-item-active {
          .option {
            &::before {
              content: "";
              position: absolute;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              top: 4px;
              left: 4px;
              background: #fe5e00;
            }
          }
        }
      }
    }
    .tab-box {
      display: flex;
      width: 384px;
      position: relative;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      height: 32px;
      line-height: 32px;
      margin: 24px 0 20px 0;
      transform: translateX(13px);
      .tab-item {
        width: 50%;
        text-align: center;
        z-index: 5;
        cursor: url("@/assets/icons/home_mouse.png"), auto;
      }
      .item-active {
        color: #fff;
        font-weight: 600;
      }
      .tab-item-active {
        position: absolute;
        height: 100%;
        width: 50%;
        top: 0;
        left: var(--left);
        background-image: linear-gradient(90deg, #f16720 0%, #fd8908 94%);
        border-radius: 16px;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  .against-data-carousel {
    height: calc(100% - 76px);
    &:deep(.el-carousel__container) {
      height: 100%;
    }
  }
}

// .el-carousel__item {
//   background: rgba(0, 0, 0, 0.2);
// }
</style>
