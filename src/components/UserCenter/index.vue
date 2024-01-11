<script lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
import CenterHeader from '@/components/UserCenter/components/CenterHeader.vue'
import RulesBox from '@/components/UserCenter/components/RulesBox.vue'
import BetHistoryBox from '@/components/UserCenter/components/BetHistoryBox.vue'
import BulletinListBox from '@/components/UserCenter/components/BulletinListBox.vue'
import AccountChangeBox from '@/components/UserCenter/components/AccountChangeBox.vue'
export default {
  name: 'IaUserCenter',
  components: {
    CenterHeader,
    RulesBox,
    BetHistoryBox,
    BulletinListBox,
    AccountChangeBox,
  },
  setup() {
    const { proxy }: any = getCurrentInstance()

    const showCommon = ref(false)

    const closeImage = new URL('@/assets/icons/closed.png', import.meta.url).href

    const { isLogin } = storeToRefs(userInfoStore())

    const currentComponentName = ref('')

    function changeComponentName(cName: string) {
      currentComponentName.value = cName
    }

    onMounted(() => {
      proxy.mittBus.on('openUserCenterBus', (cName: string) => {
        if (isLogin.value || cName === 'RulesBox' || cName === 'BulletinListBox') {
          currentComponentName.value = cName
          showCommon.value = true
        }
      })
    })

    onUnmounted(() => {
      proxy.mittBus.off('openUserCenterBus')
    })

    return {
      showCommon,
      closeImage,
      currentComponentName,
      changeComponentName,
    }
  },
}
</script>

<template>
  <div
    class="common-layout" :class="{ 'show-common': showCommon }"
    @click.stop="showCommon = false"
  >
    <div class="common-box" @click.stop>
      <CenterHeader
        :box-name="currentComponentName"
        @change="changeComponentName"
      />
      <component :is="currentComponentName" :key="currentComponentName" />
      <LazyImage
        class="close-icon"
        :img-url="closeImage"
        @click.stop="showCommon = false"
      />
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style scoped lang="scss">
.common-layout {
  position: fixed;
  opacity: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  top: 0;
  background: #00000050;
  z-index: 5555;
  transition: opacity 0.2s ease-in-out;
}
.show-common {
  width: 100%;
  height: 100%;
  opacity: 1;
}
.common-box {
  position: relative;
  background: #262d34;
  border-radius: 16px;
  overflow: hidden;
  width: 88%;
  margin: 108px auto;
  max-width: 1268px;
  min-width: 1080px;
  height: 80%;
  max-height: 800px;
  min-height: 560px;
  z-index: 6666;
  display: flex;
  .close-icon {
    height: 24px;
    width: 24px;
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
  }
  &:deep(.tab-box) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-right: 46px;
    overflow: hidden;
    .box-header {
      height: 110px;
      flex-shrink: 0;
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .box-body {
      flex-grow: 1;
      background: #181c22;
      border-radius: 8px;
      overflow: hidden;
    }
    .box-footer {
      height: 64px;
      flex-shrink: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .el-pagination {
        // font-family: PingFangSC-Medium, monospace;
        --el-pagination-font-size: 16px;
        --el-pagination-bg-color: rgba(255, 255, 255, 0.05);
        --el-pagination-border-radius: 8px;
        --el-pagination-button-disabled-bg-color: rgba(255, 255, 255, 0.6);
        --el-pagination-hover-color: #ffffff;
        --el-pagination-button-color: rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 0.6);
        font-weight: 600;
        .el-pager {
          li {
            border-radius: 8px;
            margin: 0 6px;
          }
          .is-active {
            background: rgba(255, 255, 255, 0.2);
          }
        }
        button {
          background-color: #00000000 !important;
          .el-icon {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
