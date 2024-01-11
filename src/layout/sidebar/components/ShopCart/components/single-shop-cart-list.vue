<script lang="ts">
import { defineComponent } from 'vue'
import ShopItemSingle from './shop-item-single.vue'
import SingleBetBox from './single-bet-box.vue'
import singleCartHook from '@/hooks/singleCartHook'
import Empty from '@/components/Empty/index.vue'
export default defineComponent({
  name: 'SingleShopCartList',
  components: { ShopItemSingle, Empty, SingleBetBox },
  setup() {
    const {
      singleCartList,
      singleBetAmount,
      setShoppingCarCount,
      totalBet,
      totalPrice,
      isAllowToBet,
      toBet,
    } = singleCartHook()

    return {
      singleCartList,
      singleBetAmount,
      setShoppingCarCount,
      totalBet,
      totalPrice,
      isAllowToBet,
      toBet,
    }
  },
})
</script>

<template>
  <div class="single-shop-cart-list">
    <div class="list-box">
      <el-scrollbar>
        <div
          v-if="singleCartList.length > 0"
          class="single-shop-cart-list"
          :style="{ '--width-li': 200 }"
        >
          <transition-group name="list" appear>
            <ShopItemSingle
              v-for="cart in singleCartList"
              :key="cart.shop_id"
              :item-info="cart"
              :shop-amount="singleBetAmount[`single${cart.shop_id}`]"
              @changeAmountEmit="setShoppingCarCount"
            />
          </transition-group>
        </div>
        <div v-else class="no-data">
          <Empty type="shop_cart">
            <template #top>
              <div class="top-slot">
                {{ $t('click_now_bet') }}
              </div>
            </template>
          </Empty>
        </div>
      </el-scrollbar>
    </div>
    <SingleBetBox
      :total-bet="totalBet"
      :total-bonus="totalPrice"
      :disabled="!isAllowToBet"
      @toBet="toBet"
    />
  </div>
</template>

<style lang="scss" scoped>
.single-shop-cart-list {
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
}
.no-data {
  height: 100%;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
