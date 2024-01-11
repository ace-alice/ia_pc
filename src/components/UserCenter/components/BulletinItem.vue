<!-- suppress ALL -->
<script lang="ts">
import type { Ref } from 'vue'
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import { parseTime } from '@/utils'

export default defineComponent({
  name: 'BulletinItem',
  components: {},
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup() {
    const contentBoxRef: Ref<HTMLDivElement | null> = ref(null)

    const hasMore = ref(false)

    const showMore = ref(false)

    const contentHeight = ref(0)

    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          if (contentBoxRef.value) {
            contentHeight.value = contentBoxRef.value?.clientHeight
            if (contentBoxRef.value?.clientHeight > 35) {
              hasMore.value = true
            }
          }
        }, 20)
      })
    })

    return { contentBoxRef, hasMore, showMore, contentHeight, parseTime }
  },
})
</script>

<template>
  <div
    class="BulletinItem"
    :style="{ '--content-height': contentHeight }"
    @click.stop="showMore = !showMore"
  >
    <div class="bulletin-header">
      <div class="header-title">
        {{ info.title }}
      </div>
      <div class="header-time">
        <span v-if="info.create_time || info.update_time">{{
          parseTime(info.create_time || info.update_time)
        }}</span>
      </div>
    </div>
    <div
      class="notice-info-content" :class="{
        'more-height': !showMore || !hasMore,
      }"
    >
      <div
        ref="contentBoxRef"
        class="content-box"
        v-html="info.content"
      />
    </div>
    <div v-if="hasMore" class="more-and_more">
      <span>{{ showMore ? $t("fold") : $t("More_and_more") }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.BulletinItem {
  width: 100%;
  background: #262d34;
  margin-bottom: 8px;
  padding: 12px 54px;

  cursor: url("@/assets/icons/home_mouse.png"), auto;
  .more-and_more {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    color: #fe5e00;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  .bulletin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-title {
      font-size: 16px;
      color: #ffffff;
      max-width: 75%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .header-time {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .more-height {
    height: 33px !important;
  }
  .notice-info-content {
    margin-top: 8px;
    font-size: 14px;
    height: calc(var(--content-height) * 1px);
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    white-space: pre-wrap;
    padding: 0 8px;
    .content-box {
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
}
</style>
