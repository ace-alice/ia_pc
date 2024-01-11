<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { gameInfoStore } from '@/store/gameInfo'
export default defineComponent({
  name: 'IaShortcutMenu',
  components: {},
  setup() {
    const i18n = useI18n()

    const { gameList } = storeToRefs(gameInfoStore())

    function hasGame(id: number | string) {
      return !gameList.value.find((game: any) => {
        return String(game.id) === String(id)
      })
    }

    const icons = [
      {
        id: 'autochess',
        text: i18n.t('autochess'),
        icon: new URL('./assets/icons/chess-icon.png', import.meta.url).href,
        routeName: 'AutoChess',
      },
      {
        id: 'virtual',
        text: i18n.t('v_speed_lol'),
        icon: new URL('./assets/icons/lol-icon.png', import.meta.url).href,
        routeName: 'Virtual',
      },
    ]

    const router = useRouter()

    function toPath(name: string) {
      router.push({ name })
    }
    return { icons, toPath, hasGame }
  },
})
</script>

<template>
  <div class="shortcut-menu">
    <template v-for="item in icons" :key="item.text">
      <div
        v-if="hasGame(item.id)"
        class="item"
        @click="toPath(item.routeName)"
      >
        <LazyImage
          v-tooltip="{ width: 10, message: item.text }"
          :img-url="item.icon"
        />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.shortcut-menu {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  .item {
    margin-left: 14px;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    .lazy-image {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
