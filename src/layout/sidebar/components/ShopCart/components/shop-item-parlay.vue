<script lang="ts">
import { computed, ref, watch } from 'vue'
import useImageResource from '@/hooks/useImageResource'
import { CategoryIdName } from '@/enum'
import { setItemName, toFixedNumber } from '@/utils'
import { shopCartStore } from '@/store/shopCart'
export default {
  name: 'ShopItemParlay',
  components: {},
  props: {
    itemInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    const { betTitleImg, closeImg, lockIcon } = useImageResource()

    const { changeShopCartElement } = shopCartStore()

    const isLock = computed(() => {
      return Boolean(
        +props.itemInfo.status !== 1 || +(props.itemInfo.is_hide || 0),
      )
    })

    const isOddChange = ref(false)

    let changeTimer: any = null

    watch(
      () => props.itemInfo.odd,
      () => {
        isOddChange.value = true
        clearTimeout(changeTimer)
        changeTimer = null
        changeTimer = setTimeout(() => {
          isOddChange.value = false
        }, 3000)
      },
    )

    function closeCart() {
      changeShopCartElement(String(props.itemInfo.shop_id), 'parlay')
    }

    return {
      betTitleImg,
      closeImg,
      setItemName,
      CategoryIdName,
      isLock,
      closeCart,
      lockIcon,
      isOddChange,
      toFixedNumber,
    }
  },
}
</script>

<template>
  <div
    class="shop-item"
    :class="{
      'lock-disabled': isLock,
    }"
  >
    <div class="header">
      <LazyImage :is-lazy="false" :img-url="itemInfo.game_logo" />
      <span class="text">
        {{ itemInfo.event_name }}
      </span>
      <LazyImage
        class="close"
        :img-url="closeImg"
        :is-lazy="false"
        @click.stop="closeCart"
      />
    </div>
    <div class="content">
      <div class="title">
        <span class="name">{{
          `${setItemName(+itemInfo.match, itemInfo.game_lang)}  ${
            itemInfo.play_name
          }  ${itemInfo.desc}`
        }}</span>
        <span class="bet">
          <LazyImage v-show="isLock" :img-url="lockIcon" style="opacity: 0.2" />
          <span v-show="!isLock" :class="{ isOddChange }">x{{ toFixedNumber(itemInfo.odd).toFixed(2) }}</span>
        </span>
      </div>
      <div class="team-show">
        <span>{{ itemInfo.team_name_1 }}</span>
        <span> - VS - </span>
        <span>{{ itemInfo.team_name_2 }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-item {
  width: 288px;
  margin: 0 auto 10px;
  padding: 8px;
  background: var(--color-bg-second);
  border-radius: 16px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding-left: 16px;
    padding-right: 18px;
    background: var(--color-bg-primary);
    border-radius: 8px 8px 0 0;
    .lazy-image {
      width: 24px;
      height: 24px;
    }
    .close {
      width: 24px !important;
      height: 24px !important;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
    }
    .text {
      display: inline-block;
      width: 152px;
      white-space: pre-wrap;
      font-size: 14px;
      color: #ffffff;
      font-weight: 400;
      word-break: break-all;
      max-height: 32px;
      overflow: hidden;
    }
  }
  .content {
    padding: 16px 10px 6px;
    & > div + div {
      margin-top: 12px;
    }
    .title {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .name {
        flex-grow: 1;
        padding-right: 16px;

        font-size: 14px;
        color: #ffffff;
        font-weight: 400;
      }
      .bet {
        font-family: Gotham-Medium, PingFangSC-Medium, monospace;
        font-size: 16px;
        height: 24px;
        color: #fe5e00;
        font-weight: 500;
        align-items: center;
        .lazy-image {
          height: 24px;
          opacity: 0.2;
        }
        .isOddChange {
          color: #18fa9b;
        }
      }
    }
    .team-show {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 400;
    }
  }
}
.lock-disabled {
  * {
    color: rgba(254, 94, 0, 1) !important;
  }
  .header {
    background: rgba(254, 94, 0, 0.2);
  }
}
</style>
