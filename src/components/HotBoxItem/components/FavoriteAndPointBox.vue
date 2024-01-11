<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
import { toSetKeepFun } from '@/api/store-game-info'
import notLoginMessage from '@/utils/notLoginMessage'

export default defineComponent({
  name: 'FavoriteAndPointBox',
  components: {},
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          id: null,
          pointsCount: 0,
          isKeep: false,
        }
      },
    },
  },
  setup(props) {
    const { isLogin } = storeToRefs(userInfoStore())

    const isKeep = ref(props.info.isKeep)

    const keepIcon = new URL('@/assets/icons/collect.png', import.meta.url).href

    const notKeepIcon = new URL('@/assets/icons/not-collect.png', import.meta.url).href

    // 收藏和取消收藏
    async function toSetKeep(isAdd: string | number) {
      if (!isLogin.value) {
        return notLoginMessage()
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

    return { isKeep, keepIcon, notKeepIcon, toSetKeep }
  },
})
</script>

<template>
  <div class="FavoriteAndPointBoxHot">
    <div class="points-count">
      +{{ info.pointsCount }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.FavoriteAndPointBoxHot {
  height: 18px;
  width: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 8px;
  .points-count {
    font-size: 14px;
    color: rgba(242, 242, 246, 0.6);
    letter-spacing: 0;
    font-weight: 400;
  }
}
</style>
