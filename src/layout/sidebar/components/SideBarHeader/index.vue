<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { gameInfoStore } from '@/store/gameInfo'
import { shopCartStore } from '@/store/shopCart'
import { userInfoStore } from '@/store/userInfo'
import notLoginMessage from '@/utils/notLoginMessage'

export default defineComponent({
  name: 'SideBarHeader',
  components: {},
  emits: ['change'],
  setup(props, { emit }) {
    const isTradition = inject('isTradition', true)

    const currentSideBar = ref(isTradition ? 'GameList' : '')

    const { gameList } = storeToRefs(gameInfoStore())

    const { singleIds, parlayIds } = storeToRefs(shopCartStore())

    const shopNum = computed(() => {
      return singleIds.value.length + parlayIds.value.length
    })

    const i18n = useI18n()

    const navList = [
      {
        label: i18n.t('game'),
        code: 'GameList',
        needLogin: false,
      },
      {
        label: i18n.t('bet_cart'),
        code: 'ShopCart',
        needLogin: true,
      },
      {
        label: i18n.t('bet_histoy_list'),
        code: 'BetList',
        needLogin: true,
      },
    ]

    const { isLogin } = storeToRefs(userInfoStore())

    function changeSideBar(sideBar: any) {
      if (sideBar.needLogin && !isLogin.value) {
        return notLoginMessage()
      }
      currentSideBar.value = sideBar.code
      emit('change', sideBar.code)
    }

    const { proxy }: any = getCurrentInstance()

    onMounted(() => {
      proxy.mittBus.on('changeCurrentSideBarBus', (sideBarCode: string) => {
        const sideBar = navList.find((side: any) => {
          return sideBarCode === side.code
        })
        if (!sideBar) {
          return
        }
        changeSideBar(sideBar)
      })
    })

    onUnmounted(() => {
      proxy.mittBus.off('changeCurrentSideBarBus')
    })

    return {
      isTradition,
      navList,
      changeSideBar,
      currentSideBar,
      gameList,
      shopNum,
      isLogin,
    }
  },
})
</script>

<template>
  <div
    class="SideBarHeader" :class="{
      'not-tradition': !isTradition,
    }"
  >
    <div
      v-for="nav in navList" :key="nav.code"
      class="nav-item"
      :class="{
        'active': nav.code === currentSideBar,
        'no-login': !isLogin && nav.needLogin,
      }"
      @click.stop="changeSideBar(nav)"
    >
      <span
        v-tooltip="{
          width: 75,
          message: nav.label,
        }"
      >{{ nav.label }}</span>
      <span v-if="nav.code === 'ShopCart' && shopNum" class="shop-num">{{
        shopNum
      }}</span>
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.SideBarHeader {
  height: 36px;
  width: calc(100% - 70px);
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  transition: all 0.4s ease-in-out;
  margin-left: 40px;
  .active {
    color: #ffffff !important;
  }
  .no-login {
    cursor: not-allowed !important;
  }
  .nav-item {
    width: 30%;
    flex-shrink: 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    &:hover {
      transform: scale(1.1);
      color: #ffffff;
    }

    &:nth-child(3) {
      text-align: right;
    }

    .shop-num {
      position: absolute;
      background: #fe5e00;
      border-radius: 10px;
      padding: 1px 6px 3px 6px;
      margin-left: 4px;
      min-width: 22px;
      height: 20px;
      line-height: 19px;
      color: #ffffff;
      right: 0;
      font-size: 14px;
      font-weight: 500;
      font-family: Gotham-Medium, monospace;
      flex-shrink: 0;
      text-align: center;
    }
  }
}
.not-tradition {
  height: 0;
  width: 0;
  overflow: hidden;
}
</style>
