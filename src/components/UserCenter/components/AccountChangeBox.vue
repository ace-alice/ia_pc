<script lang="ts">
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
import useImageResource from '@/hooks/useImageResource'

export default defineComponent({
  name: 'AccountChangeBox',
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { avatarId } = storeToRefs(userInfoStore())
    const { changeAvatarId } = userInfoStore()

    const selectAvatarId = ref(avatarId.value)

    function changeAccount() {
      if (+avatarId.value === +selectAvatarId.value) {
        return
      }
      changeAvatarId(selectAvatarId.value)
    }

    const imageResource: any = useImageResource()

    function getAvatarImage(id: number) {
      const ida = id > 0 && id < 16 ? id : 1
      return imageResource[`avatar${ida}`]
    }

    return { changeAccount, getAvatarImage, avatarId, selectAvatarId }
  },
})
</script>

<template>
  <div class="AccountChangeBox tab-box">
    <div class="box-header" />
    <div class="box-main box-body">
      <div class="box-main-cont">
        <div class="box-main-left">
          <div class="left-title">
            {{ $t('change_avatar') }}
          </div>
          <LazyImage :img-url="getAvatarImage(selectAvatarId)" />
          <div
            class="left-btn"
            :class="{ 'not-change': +avatarId === +selectAvatarId }"
            @click.stop="changeAccount"
          >
            {{ $t('confirm_replace') }}
          </div>
        </div>
        <div class="box-main-right">
          <div class="avatar-group">
            <div
              v-for="num in 15"
              :key="num"
              class="avatar-box"
              :class="{ 'active-avatar': num === +selectAvatarId }"
            >
              <LazyImage
                :img-url="getAvatarImage(num)"
                @click.stop="selectAvatarId = num"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-footer" />
  </div>
</template>

<style lang="scss" scoped>
.show-box {
  height: 100% !important;
  padding: 110px 0 64px !important;
}
.AccountChangeBox {
  flex-grow: 1;
  width: calc(100% - 236px);
  background: #00000000;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  padding: 0;
  .box-main {
    height: 100%;
    width: 100%;
    background: #181c22;
    border-radius: 8px;
    padding: 12px;
    .box-main-cont {
      height: 100%;
      width: 100%;
      display: flex;
    }
    .box-main-left {
      flex-shrink: 0;
      width: 226px;
      height: 100%;
      background: #262d34;
      margin-right: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .not-change {
        background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(146, 149, 147, 0.31) 99%
        ) !important;
        border: 1px solid rgba(104, 104, 104, 1);
        cursor: not-allowed !important;
      }
      .left-btn {
        background-image: linear-gradient(90deg, #f16720 0%, #fd8908 94%);
        border-radius: 8px;
        padding: 8px 48px;
        font-size: 14px;
        color: #ffffff;
        font-weight: 500;
        margin-bottom: 24px;
        cursor: url("@/assets/icons/home_mouse.png"), auto;
      }
      .lazy-image {
        height: 88px;
        width: 88px;
        border-radius: 50%;
        overflow: hidden;
      }
      .left-title {
        width: 100%;
        height: 42px;
        line-height: 42px;
        background: #1c252e;
        text-align: center;
        font-size: 14px;
        color: #ffffff;
      }
    }
    .box-main-right {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      flex-direction: row;
      height: 100%;
      background: #262d34;
      padding: 0 60px;

      .avatar-group {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        max-height: calc(100% - 20px);
        align-items: center;
        overflow: auto;
        justify-content: center;
        /* 隐藏滚动条 */
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */

        &::-webkit-scrollbar {
          display: none; /* Chrome Safari */
        }
      }

      .active-avatar {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          height: 98px;
          width: 98px;
          border: 2px solid rgba(254, 95, 0, 1);
          top: 12.75px;
          left: 12.75px;
          border-radius: 50%;
        }
      }

      .avatar-box {
        padding: 20px;
        .lazy-image {
          position: relative;
          height: 88px;
          width: 88px;
          border-radius: 50%;
          overflow: hidden;
          cursor: url("@/assets/icons/home_mouse.png"), auto;
        }
      }
    }
  }
}
</style>
