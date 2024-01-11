<script lang="ts">
import type { Ref } from 'vue'
import {
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
} from 'vue'
import { getNoticeInfo } from '@/api/tools-api'

export default defineComponent({
  name: 'NoticeItem',
  components: {},
  setup() {
    const scrollbarRef: Ref<any> = ref(null)
    const noticeListRef: Ref<any> = ref(null)
    let toScrollWidth: any
    let currentScrollWidth = 0

    let runTimer: any = null

    function toRun() {
      if (runTimer) {
        clearInterval(runTimer)
        runTimer = null
      }
      runTimer = setInterval(() => {
        run()
      }, 10)
    }

    function run() {
      if (toScrollWidth > 0 && scrollbarRef.value) {
        currentScrollWidth += 0.3
        if (currentScrollWidth > toScrollWidth) {
          currentScrollWidth = 0
        }
        scrollbarRef.value.setScrollLeft(currentScrollWidth)
      }
    }

    const noticeList: Ref<any[]> = ref([])
    // 获取公告列表
    function getNoticeList(): Promise<Array<any>> {
      return new Promise((resolve) => {
        getNoticeInfo({ page: 1, limit: 10 }).then(({ data }: any) => {
          if (+data.code === 1) {
            resolve(data.data.data)
          }
          else {
            resolve([])
          }
        })
      })
    }

    const { proxy }: any = getCurrentInstance()

    function toSeeMore() {
      proxy.mittBus.emit('openUserCenterBus', 'BulletinListBox')
    }

    onMounted(() => {
      nextTick(async () => {
        noticeList.value = await getNoticeList()
        setTimeout(() => {
          if (noticeListRef.value) {
            toScrollWidth
              = noticeListRef.value.scrollWidth - noticeListRef.value.clientWidth
          }
          toRun()
        }, 10)
      })
    })
    return { noticeList, scrollbarRef, noticeListRef, toSeeMore }
  },
})
</script>

<template>
  <div class="NoticeItem" @click="toSeeMore">
    <div class="tag-title">
      {{ $t("the_announcement") }}
    </div>
    <div class="notice-box">
      <el-scrollbar ref="scrollbarRef">
        <div ref="noticeListRef" class="notice-list">
          <div
            v-for="(notice, index) in noticeList"
            :key="index"
            class="notice-content"
          >
            {{ notice.content }}
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.NoticeItem {
  flex-grow: 1;
  max-width: 520px;
  display: flex;
  cursor: url("@/assets/icons/home_mouse.png"), auto;
  align-items: center;
  .tag-title {
    padding: 4px 12px 3px;
    background: #fe5e00;
    border-radius: 12px;
    margin-right: 12px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 500;
    flex-shrink: 0;
  }
  .notice-box {
    overflow: hidden;
    flex-grow: 1;
    .notice-list {
      display: flex;
      align-items: center;
      .notice-content {

        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        flex-shrink: 0;
        &:after {
          content: "";
          display: inline-block;
          height: 14px;
          width: 60px;
        }
      }
    }
  }
  :deep(.el-scrollbar) {
    .el-scrollbar__thumb {
      display: none;
    }
  }
}
</style>
