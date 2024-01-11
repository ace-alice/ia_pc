<script lang="ts">
import { defineComponent } from 'vue'
import ShopItemParlay from './shop-item-parlay.vue'
import ParlayBetBox from './parlay-bet-box.vue'
import parlayCartHook from '@/hooks/parlayCartHook'
import Empty from '@/components/Empty/index.vue'
import { numberUnit, toFixedNumber } from '@/utils'
import CountTo from '@/components/VueCountTo/index.vue'
import parlayIcon from '@/assets/icons/parlay_icon.png'
import openImage from '@/assets/icons/spread_ombinations_01.png'
import closeImage from '@/assets/icons/spread_ombinations_02.png'
import closeImg from '@/assets/icons/closed.png'

export default defineComponent({
  name: 'ParlayShopCartList',
  components: { ShopItemParlay, Empty, ParlayBetBox, CountTo },
  setup() {
    const fastArr = [10, 100, 500]

    // let timer: any = null

    function amountChange(option: any, fast?: number) {
      // clearTimeout(timer)
      // timer = null
      if (fast) {
        option.amount += fast
      }
      if (option.amount > option.money_max()) {
        option.amount = option.money_max()
      }
      // timer = setTimeout(() => {
      //   if (option.amount && option.amount < option.money_min()) {
      //     option.amount = option.money_min()
      //   }
      //   clearTimeout(timer)
      //   timer = null
      // }, 1000)
    }

    const {
      parlayCartList,
      totalPrice,
      totalBet,
      toBet,
      betOptions,
      showFastNumberFun,
      isAllowToBet,
      showMore,
      showMoreHandle,
      messages,
      scrollbarRef,
      toBottom,
    } = parlayCartHook()

    const optionHeight = computed(() => {
      let isShow = false
      for (const option of betOptions.value) {
        if (option.showFastNumber) {
          isShow = true
        }
      }
      let heightV = showMore.value ? 108.5 * betOptions.value.length : 108.5
      if (isShow) {
        heightV += 44
      }
      return heightV
    })

    return {
      optionHeight,
      parlayCartList,
      totalPrice,
      totalBet,
      toBet,
      betOptions,
      openImage,
      closeImage,
      showFastNumberFun,
      isAllowToBet,
      toFixedNumber,
      closeImg,
      showMore,
      showMoreHandle,
      numberUnit,
      messages,
      amountChange,
      fastArr,
      parlayIcon,
      scrollbarRef,
      toBottom,
    }
  },
})
</script>

<template>
  <div class="parlay-shop-cart-list">
    <div class="list-box">
      <el-scrollbar ref="scrollbarRef">
        <div
          v-if="parlayCartList.length > 0"
          class="parlay-shop-cart-list"
          :style="{ '--width-li': 200 }"
        >
          <transition-group name="list" appear>
            <ShopItemParlay
              v-for="cart in parlayCartList"
              :key="cart.shop_id"
              :item-info="cart"
            />
          </transition-group>
          <transition name="list" appear>
            <div
              v-if="betOptions.length > 0"
              class="bet-options"
              :style="
                {
                  '--option-height': optionHeight,
                }
              "
            >
              <div class="option-header">
                <LazyImage class="option-icon" :img-url="parlayIcon" />
                <div>{{ $t("parlay_option") }}</div>
                <LazyImage
                  v-show="betOptions.length > 1 && showMore"
                  class="control-icon"
                  :img-url="closeImage"
                  :is-lazy="false"
                  @click="showMoreHandle"
                />
                <LazyImage
                  v-show="betOptions.length > 1 && !showMore"
                  class="control-icon"
                  :img-url="openImage"
                  :is-lazy="false"
                  @click="showMoreHandle"
                />
              </div>
              <div class="option-list">
                <template
                  v-for="(option) in betOptions"
                  :key="option.name"
                >
                  <div
                    class="option-item"
                    @mouseleave="showFastNumberFun(option, false, 'isHover')"
                    @mouseenter="showFastNumberFun(option, true, 'isHover')"
                  >
                    <div>
                      <span>{{ option.name }}</span>
                      <span v-show="+option.point > 0">
                        x{{ toFixedNumber(option.point).toFixed(2) }}
                      </span>
                    </div>
                    <div>
                      <span>{{ $t("expected_profit") }}:</span>
                      <CountTo :end-val="option.price()" />
                    </div>
                    <div>
                      <el-input
                        v-model="option.amount"
                        :placeholder="
                          option.money_min() > option.money_max()
                            || option.money_max() === 0
                            ? $t('bet_amount_full')
                            : `${numberUnit(option.money_min())}-${numberUnit(
                              option.money_max(),
                            )}`
                        "
                        :disabled="
                          option.money_min() > option.money_max()
                            || option.money_max() === 0
                        "
                        oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
                        @input="amountChange(option)"
                        @focus="showFastNumberFun(option, true, 'isFocus')"
                        @blur="showFastNumberFun(option, false, 'isFocus')"
                      >
                        <template #prepend>
                          {{ option.num }}x
                        </template>
                        <template #suffix>
                          <img
                            class="close-img"
                            :src="closeImg"
                            alt=""
                            @click.stop="option.amount = null"
                          >
                        </template>
                      </el-input>
                      <div
                        :class="{
                          'not-show-msg':
                            !option.amount
                            || +option.amount >= +option.money_min(),
                        }"
                        class="min-bet-amount"
                      >
                        {{ $t("min-bet-amount") }}{{ option.money_min() }}
                      </div>
                      <div
                        :style="{
                          'height': option.showFastNumber ? '32px' : 0,
                          'margin-top': option.showFastNumber ? '12px' : 0,
                        }"
                        class="fast-number"
                      >
                        <div
                          v-for="item in [...fastArr, option.money_max()]"
                          :key="item"
                          @click.stop="amountChange(option, item)"
                        >
                          <span v-if="item !== +option.money_max()">+{{ numberUnit(+item) }}</span>
                          <span v-else>{{ $t("max") }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </transition>
        </div>
        <div v-else class="no-data">
          <Empty type="shop_cart">
            <template #top>
              <div class="top-slot">
                {{ $t("click_now_bet") }}
              </div>
            </template>
          </Empty>
        </div>
      </el-scrollbar>
    </div>
    <ParlayBetBox
      :total-bet="totalBet"
      :total-bonus="totalPrice"
      :disabled="!isAllowToBet"
      :messages="messages"
      @toBet="toBet"
      @toBottom="toBottom"
    />
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.parlay-shop-cart-list {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .top-slot {
    font-size: 12px;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.3);
  }
  .list-box {
    flex-grow: 1;
    width: calc(100% - 32px);
    overflow: hidden;
  }
  .close-img {
    height: 16px;
    width: 16px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
}
.no-data {
  height: 100%;
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: center;
}
.bet-options {
  width: 288px;
  margin: 0 auto 10px;
  padding: 8px;
  background: #181c22;
  border-radius: 16px;
  .option-list {
    padding: 0 8px;
    height: calc(var(--option-height) * 1px);
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    .min-bet-amount {
      width: 100%;
      line-height: 32px;
      font-size: 12px;
      height: 32px;
      background-color: #fe5e0020;
      border-radius: 4px;
      text-align: center;
      color: #fe5e00;
      margin-top: 12px;
      transition: all 0.2s linear 0.5s;
      overflow: hidden;
    }
    .not-show-msg {
      margin-top: 0;
      height: 0;
    }
    :deep(.el-input) {
      height: 32px;
      --el-input-placeholder-color: rgba(255, 255, 255, 0.1);
      --el-input-text-color: #ffffff;
      background-color: rgba(255, 255, 255, 0.05) !important;
      border-radius: 8px;
      .el-input-group__prepend {
        background-color: #00000000 !important;
        box-shadow: none !important;
        position: relative;
        color: #ffffff;
        &:after {
          content: "";
          position: absolute;
          right: 0;
          top: calc(50% - 10px);
          height: 20px;
          width: 2px;
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
    :deep(.el-input__wrapper) {
      background: #00000000;
      box-shadow: none;
    }
    .option-item {
      font-size: 16px;
      color: #ffffff;
      font-weight: 500;
      padding: 11.5px 0 12px;
      .fast-number {
        width: 100%;
        display: flex;
        justify-content: space-between;
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        .fast-active {
          background: rgba(255, 255, 255, 0.2);
        }
        & > div {
          width: 23%;
          flex-shrink: 0;
          height: 32px;
          line-height: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          // font-family: PingFangSC-Medium, monospace;
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
          text-align: center;
          cursor: url("@/assets/icons/home_mouse.png"), auto;
        }
      }
      & + div {
        border-top: 0.5px solid rgba(255, 255, 255, 0.1);
      }
      & > div {
        & + div {
          margin-top: 8px;
        }
        &:nth-child(1) {
          display: flex;
          justify-content: space-between;
          span:nth-child(2) {
            font-family: Gotham-Medium, PingFangSC-Medium, monospace;
            color: #fe5e00;
          }
        }
        &:nth-child(2) {
          span:nth-child(2) {
            color: rgba(255, 255, 255, 0.6);
            font-weight: 400;
          }
          span:nth-child(2) {
            font-family: Gotham-Medium, PingFangSC-Medium, monospace;
            color: #fecb00;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .option-header {
    width: 100%;
    height: 44px;
    background: #262d34;
    border-radius: 8px 8px 0 0;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-child(2) {
      flex-grow: 1;
      padding: 0 14px;
      font-size: 16px;
      color: #ffffff;
      font-weight: 400;
    }
    .option-icon {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }
    .control-icon {
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
  }
}
</style>
