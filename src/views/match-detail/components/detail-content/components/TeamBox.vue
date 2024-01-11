<script lang="ts">
import detailTeamPointHook from '@/hooks/DetailTeamPointHook'
import { toFixedNumber } from '@/utils'

export default {
  name: 'IaDetailTeam',
  props: {
    playInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props: any) {
    const {
      currentTeamPointInfo,
      hasAdd,
      animateType,
      toAddShopCart,
      statusIcon,
      isDisabled,
    } = detailTeamPointHook(props.playInfo, props.index)

    const lockImage = new URL('@/assets/icons/lock.png', import.meta.url).href

    const winImage = new URL('@/assets/icons/status-1.png', import.meta.url)
      .href

    const failImage = new URL('@/assets/icons/status-2.png', import.meta.url)
      .href

    const filterValue = inject('filterValue', 'all')
    return {
      currentTeamPointInfo,
      hasAdd,
      animateType,
      toAddShopCart,
      lockImage,
      statusIcon,
      winImage,
      failImage,
      isDisabled,
      toFixedNumber,
      filterValue,
    }
  },
}
</script>

<template>
  <div
    v-if="currentTeamPointInfo" class="team" :class="{
      [index % 2 ? 'team-right' : 'team-left']: true,
      [index % 2 ? 'team-right-bg' : 'team-left-bg']: filterValue !== 'all',
      'cart-active': hasAdd,
      [animateType]: !isDisabled,
      [`${animateType}-border`]: !isDisabled,
      'disabled': isDisabled,
      'has-top': index > 1,
    }" @click.stop="toAddShopCart"
  >
    <span class="detail-desc">{{ currentTeamPointInfo.desc }}</span>
    <span class="point point" :class="{ [index % 2 ? 'box-right' : 'box-normal']: true }">
      <span v-if="!isDisabled">
        {{ toFixedNumber(currentTeamPointInfo.point).toFixed(2) }}
      </span>
      <span v-else>
        <LazyImage
          :img-url="statusIcon.length === 2 ? statusIcon[0] : ''" :class="{
            'lock-image': statusIcon.length === 2 ? statusIcon[1] : false,
          }" :is-lazy="false"
        />
      </span>
    </span>
  </div>
</template>

<style scoped lang="scss">
.has-top {
  margin-top: 16px;
}

.team.smaller {
  background-color: unset;
}

.team.bigger {
  background-color: unset;
}

.team {
  width: 45%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  cursor: url("@/assets/icons/home_mouse.png"), auto;
  transition: all 0.3s linear;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;

  .detail-desc {
    //font-family: PingFangSC-Medium, monospace;
    padding: 0 40px 0 0;
    white-space: pre-wrap;
    word-break: keep-all;
    text-align: left;
  }

  .point {
    font-family: Gotham-Medium, PingFangSC-Medium, monospace;

    .lazy-image {
      height: 32px;
      width: 32px;
    }

    .lock-image {
      height: 24px;
      width: 24px;
      opacity: 0.2;
    }
  }

  .box-right {
    padding: 0;
  }

  .box-normal {
    padding: 0;
  }
}

.team-right {
  flex-direction: row-reverse;

  .detail-desc {
    //font-family: PingFangSC-Medium, monospace;
    padding: 0 0 0 40px;
  }
}

.team-right-bg {
  background: rgba(250, 134, 0, 0.10);
  border: 1px solid rgba(250, 134, 0, 0.2);
}

.team-left-bg {
  background: rgba(54, 122, 255, 0.1);
  border: 1px solid rgba(54, 122, 255, 0.2);
}

.cart-active {
  background-image: linear-gradient(90deg, #f16720 0%, #fd8908 94%);
  border: 1px solid rgba(255, 255, 255, 0);
  box-shadow: none;
}

.disabled {
  cursor: not-allowed;
}
</style>
