<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, getCurrentInstance, inject, ref, watch } from 'vue'
import useImageResource from '@/hooks/useImageResource'
import Dis_logo from '@/assets/icons/xiangqing_icon_01.png'
import Daxiao_av from '@/assets/icons/xiangqing_daxiao_01.png'
import Rangfen_av from '@/assets/icons/xiangqing_rangfen_01.png'
import Rangfen_av_zh from '@/assets/icons/xiangqing_rangfen_02.png'
import Rangfen_av_en from '@/assets/icons/xiangqing_rangfen_03.png'
import Daxiao_av_zh from '@/assets/icons/xiangqing_daxiao_02.png'
import Daxiao_av_en from '@/assets/icons/xiangqing_daxiao_03.png'
import { getLocal } from '@/utils/storage'

export default defineComponent({
  name: 'RoundTabs',
  components: {},
  props: {
    roundList: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    tabIndex: {
      type: Number,
      default: 0,
    },
  },
  emits: ['emitChangeFilterValue'],
  setup(props, { emit }) {
    const { prevImg } = useImageResource()
    const currentIndex = ref(props.tabIndex)

    const { proxy }: any = getCurrentInstance()

    const is_zh = +(getLocal('lang') || 1) === 1

    const filterValue = inject('filterValue', 'all')

    watch(
      () => props.tabIndex,
      (newVal) => {
        currentIndex.value = newVal
        if (
          proxy.$refs.scrollbarRef
          && proxy.$refs[`scrollbar${currentIndex.value}`]
        ) {
          const scrollbarCurrent = Array.isArray(
            proxy.$refs[`scrollbar${currentIndex.value}`],
          )
            ? proxy.$refs[`scrollbar${currentIndex.value}`][0]
            : proxy.$refs[`scrollbar${currentIndex.value}`]
          proxy.$refs.scrollbarRef.setScrollLeft(
            scrollbarCurrent.offsetLeft / 2,
          )
        }
      },
      { deep: true },
    )

    function toTab(tabIndex: number) {
      if (tabIndex >= 0 && tabIndex < props.roundList.length) {
        proxy.mittBus.emit('scrollToEmit', tabIndex)
      }
    }

    function changeFilterValue(status: string) {
      toTab(0)
      emit('emitChangeFilterValue', status)
    }

    function wheelHanle(e: any) {
      const evet: any = e || window.event
      if (evet.deltaY > 0) {
        proxy.mittBus.emit('scrollToEmit', 'round-tabs')
      }
    }

    const filterList = [
      {
        code: 'handicap',
        color: '#4986F9',
        dis_logo: Rangfen_av,
        // av_logo: Rangfen_av,
        dis_text: is_zh ? Rangfen_av_zh : Rangfen_av_en,
        // av_text: is_zh ? Rangfen_av_zh : Rangfen_av_en,
      },
      {
        code: 'over',
        color: '#DFB162',
        dis_logo: Daxiao_av,
        // av_logo: Daxiao_av,
        dis_text: is_zh ? Daxiao_av_zh : Daxiao_av_en,
        // av_text: is_zh ? Daxiao_av_zh : Daxiao_av_en,
      },
    ]

    return {
      currentIndex,
      prevImg,
      toTab,
      changeFilterValue,
      filterValue,
      wheelHanle,
      filterList,
      Dis_logo,
    }
  },
})
</script>

<template>
  <div class="round-tabs" @wheel="wheelHanle">
    <div class="chart-btn">
      <div
        v-for="filter in filterList"
        :key="filter.code"
        :style="{
          opacity: filterValue === filter.code ? 1 : 0.5,
          borderColor: filter.color,
          background:
            filterValue === filter.code
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(0, 0, 0, 0)',
        }"
        @click="changeFilterValue(filter.code)"
      >
        <img
          class="filter-logo"
          :src="filter.dis_logo"
          alt=""
        >
        <img
          class="filter-text"
          :src="filter.dis_text"
          alt=""
        >
      </div>
    </div>
    <div class="round-box">
      <el-scrollbar ref="scrollbarRef">
        <div class="round-list">
          <div
            v-for="(item, index) in roundList"
            :ref="`scrollbar${index}`"
            :key="index"
            class="scrollbar-box"
            :class="{ 'tab-active': currentIndex === index }"
            @click.stop="toTab(index)"
          >
            {{ item }}
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="change-btn-group">
      <div
        :class="{ disabled: currentIndex === 0 }"
        @click="toTab(currentIndex - 1)"
      >
        <!-- <LazyImage :img-url="prevImg" /> -->
        <el-image class="lazy-image" :src="prevImg" />
      </div>
      <div
        :class="{ disabled: currentIndex === roundList.length - 1 }"
        @click="toTab(currentIndex + 1)"
      >
        <!-- <LazyImage :img-url="prevImg" /> -->
        <el-image class="lazy-image" :src="prevImg" />
      </div>
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.round-tabs {
  height: 80px;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  .chart-btn {
    display: flex;
    padding: 0 7.5% 0 2.5%;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;

    .reverse {
      transform: rotate(-90deg) !important;
    }

    & > div {
      height: 33px;
      border-radius: 17px;
      border: 1px solid #fff;
      background: rgba(0, 0, 0, 0.2);
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      &:active {
        transform: scale(0.9);
      }

      .filter-logo {
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }

      .filter-text {
        height: 32px;
        margin: 0 8px 0 0;
      }

      & + div {
        margin-left: 16px;
      }
    }
  }

  .change-btn-group {
    width: 19%;
    padding: 0 2.5% 0 7.5%;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .disabled {
      background-color: rgba(255, 255, 255, 0.05);
      cursor: not-allowed;
    }

    & > div {
      height: 32px;
      width: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.06);

        &:nth-child(2) {
          transform: rotate(180deg) scale(1.06);
        }
      }

      &:nth-child(2) {
        transform: rotate(180deg);
      }
    }

    .lazy-image {
      height: 22px;
      width: 22px;
      transform: translateX(-1.5px);
    }
  }

  .round-box {
    flex-grow: 1;
    height: 100%;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;

    &:deep(.el-scrollbar) {
      .el-scrollbar__thumb {
        display: none;
      }
    }

    .round-list {
      display: flex;
      height: 80px;
      align-items: center;
      padding: 0 5px;
    }
  }

  .scrollbar-box {
    padding: 2px 24px;
    line-height: 28px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 1px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    flex-shrink: 0;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;

    & + .scrollbar-box {
      margin-left: 24px;
    }
  }

  .tab-active {
    background-image: linear-gradient(90deg, #f16720 0%, #fd8908 94%);
    color: var(--color-white);
  }
}
</style>
