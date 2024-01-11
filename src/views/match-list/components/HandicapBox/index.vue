<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { storeToRefs } from 'pinia'
import { gameInfoStore } from '@/store/gameInfo'

export default defineComponent({
  name: 'HandicapBox',
  components: {},
  setup() {
    const { proxy }: any = getCurrentInstance()

    const { totalHandicapList, currentHandicap } = storeToRefs(gameInfoStore())

    const { setHandicapValue } = gameInfoStore()

    function toUserCenter() {
      proxy.mittBus.emit('openUserCenterBus', 'RulesBox')
    }

    return {
      totalHandicapList,
      currentHandicap,
      setHandicapValue,
      toUserCenter,
    }
  },
})
</script>

<template>
  <div class="HandicapBox">
    <div class="handicap-list">
      <div
        v-for="handicap in totalHandicapList"
        :key="handicap.code"
        class="tab-item"
        :class="{ active: currentHandicap === handicap.code }"
        @click="setHandicapValue(String(handicap.code))"
      >
        <div class="tab-name">
          <span
            v-tooltip="{
              width: 52,
              message: handicap.name,
            }"
          >{{ handicap.name }}</span>
        </div>
        <div v-if="handicap.code !== 'end'" class="tab-num">
          {{ handicap.count || 0 }}
        </div>
      </div>
    </div>
    <div class="game-rule rule-btn-hover-active" @click.stop="toUserCenter">
      {{ $t("egame_rule") }}
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.HandicapBox {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .handicap-list {
    flex-grow: 1;
    display: flex;
    overflow: auto;
    .tab-item {
      //flex-grow: 1;
      flex-shrink: 0;
      max-width: 14%;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 2px;
      font-weight: 400;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      transition: all 0.2s ease-in-out;
      display: flex;
      align-items: center;
      overflow: hidden;
      &:hover {
        transform: scale(1.04);
        color: #ffffff;
      }
      .tab-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        //max-width: 65%;
      }
      .tab-num {
        font-family: Gotham-Medium, PingFangSC-Medium, monospace;
        letter-spacing: 2px;
        font-weight: 500;
        margin-left: 8px;
      }
      & + .tab-item {
        margin-left: 32px;
      }
    }
    .active {
      color: #fe5e00 !important;
      letter-spacing: 2.22px;
    }
  }
  .game-rule {
    padding: 3px 18px;
    border: 1.5px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    font-size: 16px;
    color: #ffffff;
    flex-shrink: 0;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .rule-btn-hover-active {
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
