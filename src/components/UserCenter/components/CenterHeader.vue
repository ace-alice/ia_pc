<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
import CountTo from '@/components/VueCountTo/index.vue'
import notLoginMessage from '@/utils/notLoginMessage'
import useImageResource from '@/hooks/useImageResource'

export default defineComponent({
  name: 'CenterHeader',
  components: { CountTo },
  props: {
    boxName: {
      type: String,
      default: 'RulesBox',
    },
  },
  emits: ['change'],
  setup(props: any, { emit }) {
    const i18n = useI18n()

    const { balanceInfo, avatarId, currentCurrencyInfo } = storeToRefs(
      userInfoStore(),
    )

    const startVal = ref(0)

    watch(
      () => balanceInfo.value.amount,
      (newVal, oldVal) => {
        startVal.value = (oldVal as any) || 0
      },
    )

    const imageResource: any = useImageResource()

    const avatarImage = computed(() => {
      const id = (+avatarId.value > 0) && +avatarId.value < 16 ? avatarId.value : 1
      return imageResource[`avatar${id}`]
    })

    const editIcon = new URL('@/assets/icons/edit.png', import.meta.url).href

    const { isLogin } = storeToRefs(userInfoStore())

    const tabs = [
      { name: i18n.t('bet_records'), value: 'BetHistoryBox' },
      { name: i18n.t('the_announcement'), value: 'BulletinListBox' },
      { name: i18n.t('egame_rule'), value: 'RulesBox' },
    ]

    function changeComponentName(cName: string) {
      if (
        !isLogin.value
        && ['AccountChangeBox', 'BetHistoryBox'].includes(cName)
      ) {
        return notLoginMessage()
      }
      emit('change', cName)
    }

    return {
      changeComponentName,
      tabs,
      avatarImage,
      editIcon,
      balanceInfo,
      startVal,
      avatarId,
      currentCurrencyInfo,
      isLogin,
    }
  },
})
</script>

<template>
  <div class="CenterHeader">
    <div class="header-self">
      {{ $t('user_center') }}
    </div>
    <div class="avatar-box">
      <LazyImage class="avatar-image" :img-url="avatarImage" :is-lazy="false" />
      <div class="edit-avatar-icon" :class="{ 'not-login': !isLogin }">
        <LazyImage
          :img-url="editIcon"
          :is-lazy="false"
          @click.stop="changeComponentName('AccountChangeBox')"
        />
      </div>
    </div>
    <div class="header-nickname">
      {{
        balanceInfo.nickname ? balanceInfo.nickname : $t("you_not_login_now")
      }}
    </div>
    <div v-if="balanceInfo.amount" class="header-amount">
      <!-- <span>
        {{ currentCurrencyInfo?.symbol || "" }}
      </span> -->
      <CountTo
        :start-val="Number(startVal)"
        :end-val="Number(balanceInfo.amount)"
        :duration="1000"
      />
    </div>
    <div class="header-tabs">
      <div
        v-for="tab in tabs"
        :key="tab.value"
        :class="{
          'active': boxName === tab.value,
          'not-login': !isLogin && tab.value === 'BetHistoryBox',
        }"
        @click.stop="changeComponentName(tab.value)"
      >
        {{ tab.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CenterHeader {
  width: 190px;
  height: 100%;
  flex-shrink: 0;
  .header-self {
    // font-family: PingFangSC-Medium, monospace;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 3px;
    font-weight: 600;
    padding-left: 46px;
    margin-top: 63px;
  }
  .header-nickname {
    padding-left: 50px;
    // font-family: PingFangSC-Medium, monospace;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    margin-top: 8px;
  }
  .header-amount {
    padding-left: 50px;
    //font-family: PingFangSC-Medium, monospace;
    font-size: 16px;
    color: #fecb00;
    font-weight: 600;
    margin-top: 8px;
  }
  .avatar-box {
    padding-left: 46px;
    display: flex;
    align-items: flex-end;
    margin-top: 32px;
    .avatar-image {
      height: 56px;
      width: 56px;
      overflow: hidden;
      border-radius: 50%;
    }
    .edit-avatar-icon {
      margin-left: 4px;
      padding: 4px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      .lazy-image {
        height: 20px;
        width: 20px;
      }
    }
  }
  .not-login {
    cursor: not-allowed !important;
  }
  .header-tabs {
    width: 148px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 24px;
    .active {
      background: #181c22;
      // font-family: PingFangSC-Medium, monospace;
      color: #fe5e00;
      font-weight: 600;
    }
    & > div {
      width: 100%;
      border-radius: 0 26px 26px 0;
      height: 42px;
      white-space: pre-wrap;
      word-break: keep-all;
      padding-right: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      height: 42px;
      overflow: hidden;
      padding-left: 46px;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
      & + div {
        margin-top: 4px;
      }
    }
  }
}
</style>
