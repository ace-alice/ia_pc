<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import NearData from './NearData.vue'
import { userInfoStore } from '@/store/userInfo'
import { toSetKeepFun } from '@/api/store-game-info'
export default defineComponent({
  name: 'FavoriteAndPointBoxUn',
  components: { NearData },
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          id: null,
          pointsCount: 0,
          isKeep: false,
          is_bind_ant_before_game_info: false,
        }
      },
    },
  },
  emits: ['toDetailClick'],
  setup(props, { emit }) {
    const { isLogin } = storeToRefs(userInfoStore())

    const isKeep = ref(props.info.isKeep)

    const keepIcon = new URL('@/assets/icons/collect.png', import.meta.url)
      .href

    const notKeepIcon = new URL(
      '@/assets/icons/not-collect.png',
      import.meta.url,
    ).href

    // 收藏和取消收藏
    async function toSetKeep(isAdd: string | number) {
      if (!isLogin.value) {
        return
      }
      const form = {
        game_id: props.info.id,
        is_add: isAdd,
      }
      const statusTag = await toSetKeepFun(form)
      if (+statusTag.data.code === 1) {
        isKeep.value = isAdd
      }
    }

    watch(
      () => props.info.isKeep,
      (newValue) => {
        isKeep.value = newValue || false
      },
    )

    function toDetailClick(value: any) {
      emit('toDetailClick', value)
    }

    return { isKeep, keepIcon, notKeepIcon, toSetKeep, toDetailClick }
  },
})
</script>

<template>
  <div class="FavoriteAndPointBoxUn">
    <div class="points-count">
      +{{ info.pointsCount }}
    </div>
    <NearData
      v-if="
        [1, 2, 3, 16].includes(+info.game_type_id)
          && info.is_bind_ant_before_game_info
      "
      :game-type="info.game_type_id"
      :game-id="info.id"
      @to-detail-click="toDetailClick"
    />
  </div>
</template>

<style lang="scss" scoped>
.FavoriteAndPointBoxUn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 8%;

  .points-count {
    font-family: Gotham-Medium, PingFangSC-Medium, monospace;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
  }

  .lazy-image {
    height: 24px;
    width: 24px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
}
</style>
