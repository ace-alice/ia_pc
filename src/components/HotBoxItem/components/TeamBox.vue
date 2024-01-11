<script lang="ts">
import { inject } from 'vue'
import teamPointHook from '@/hooks/teamPointHook'
import type { BetType } from '@/interface/shopCart'
import useImageResource from '@/hooks/useImageResource'
import { toFixedNumber } from '@/utils'
export default {
  name: 'TeamBoxHot',
  components: {},
  props: {
    itemInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  setup(props: any) {
    const betType: BetType = inject('betType', 'single')
    const { teamImg } = useImageResource()

    const {
      currentTeamPointInfo,
      teamName,
      teamLogo,
      toAddShopCart,
      hasAdd,
      animateType,
      currentPlayInfo,
      isNotAllowAdd,
      statusIcon,
    } = teamPointHook(props.itemInfo as any, betType, props.index)

    return {
      teamImg,
      teamName,
      teamLogo,
      currentTeamPointInfo,
      currentPlayInfo,
      toAddShopCart,
      hasAdd,
      animateType,
      isNotAllowAdd,
      statusIcon,
      toFixedNumber,
    }
  },
}
</script>

<template>
  <div
    class="team-box-hot" :class="{
      [animateType]: true,
      [`${animateType}-border`]: true,
      'not-allowed': isNotAllowAdd,
      'cart-active': hasAdd,
    }"
    @click.stop="toAddShopCart"
  >
    <div class="team-logo">
      <LazyImage :img-url="teamLogo" :is-lazy="false" />
    </div>
    <div class="desc">
      <span
        v-tooltip="{
          width: 49,
          message: teamName || 'IA ESPORT',
        }"
      >{{ teamName || "IA ESPORT" }}</span>
    </div>
    <div
      v-if="currentPlayInfo && currentTeamPointInfo" class="point box-column"
      :class="{
        [index % 2 ? 'box-right' : 'box-normal']: true,
      }"
    >
      <span v-if="!isNotAllowAdd">
        {{ toFixedNumber(currentTeamPointInfo.point).toFixed(2) }}
      </span>
      <span v-else>
        <LazyImage
          :img-url="statusIcon.length === 2 ? statusIcon[0] : ''"
          :class="{ 'lock-icon': statusIcon.length === 2 ? statusIcon[1] : false }"
          :is-lazy="false"
        />
      </span>
    </div>
    <div v-else class="point" />
  </div>
</template>

<style scoped lang="scss">
.team-box-hot {
  &:hover {
    transform: scale(1.02);
  }
  transition: transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 5px;
  flex-direction: column;
  width: 31%;
  height: 54px;
  color: rgba(255, 255, 255, 0.8);
  overflow: visible;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(146, 149, 147, 0.31) 99%
  );
  border: 1px solid rgba(104, 104, 104, 1);
  border-radius: 6px;
  cursor: url("@/assets/icons/home_mouse_32.png"), auto;
  position: relative;
  .team-logo {
    position: absolute;
    top: -42px;
    .lazy-image {
      width: 38px;
      height: 38px;
    }
  }
  .desc {
    width: 80%;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
  }
  .point {
    text-align: center;
    font-family: Gotham-Medium, PingFangSC-Medium, monospace;
    font-size: 16px;
    color: #f2f2f6;
    font-weight: 500;
    flex-shrink: 0;
    .lazy-image {
      width: 24px !important;
      height: 24px !important;
    }
    .lock-icon {
      width: 22px !important;
      height: 22px !important;
      opacity: 0.2;
    }
  }
}
.cart-active {
  background-image: linear-gradient(90deg, #f16720 0%, #fd8908 94%) ;
  border: 1px solid rgba(104, 104, 104, 0) ;
  color: #ffffff !important;
  font-weight: 600 !important;
}
.not-allowed {
  cursor: not-allowed !important;
}
</style>
