<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { userInfoStore } from '@/store/userInfo'
import { getPosterListNew } from '@/api/tools-api'
import { gameInfoStore } from '@/store/gameInfo'

export default defineComponent({
  name: 'PosterItem',
  components: {},
  setup() {
    const isTradition = inject('isTradition', true)
    const router = useRouter()
    const route = useRoute()

    const posterImage = new URL('@/assets/images/poster-default.png', import.meta.url).href
    const { langConfig } = storeToRefs(userInfoStore())
    // 当前语言是否是中文
    const isZh = computed(() => {
      return +langConfig.value === 1
    })

    const posterList = ref<any[]>([])

    // 获取广告列表
    function getPosterList() {
      getPosterListNew().then((res: any) => {
        if (res.data.code === 1) {
          posterList.value = []
          posterList.value = res.data.data
        }
      })
    }

    const { gameList, currentGame }: any = storeToRefs(gameInfoStore())
    const { setCurrentGameId, setCheckedEvenList } = gameInfoStore()

    function hasTheGame(name: string) {
      return (gameList.value as any).some((game: any) => {
        return game.id === name
      })
    }

    // 点击banner图时跳转
    function toPosterPath(data: any) {
      if (+data.jump_type === 0) {
        return
      }
      if (+data.jump_type === 2) {
        // 是否有自走棋
        if (+data.game_type_id === 1 && hasTheGame('autochess')) {
          router.push({ name: 'AutoChess' })
        }
        // 是否有急速lol
        if (+data.game_type_id === 2 && hasTheGame('virtual')) {
          router.push({ name: 'Virtual' })
        }
        // 红猫虚拟盘
        if (+data.game_type_id === 2 && hasTheGame('50')) {
          router.push({ name: 'Virtual' })
        }
      }
      if (+data.jump_type === 1) {
        // 判断是否有这个游戏
        const gameTo = gameList.value.filter((game: any) => {
          return String(game.id) === String(data.game_type_id)
        })
        if (gameTo.length === 1) {
          setCurrentGameId(String(gameTo[0].id))

          let hasEvent = false

          const gameEventDetail: any = currentGame.value.events_count
          // 判断是否有这个赛事
          if (gameEventDetail && gameEventDetail.events.length > 0) {
            hasEvent = gameEventDetail.events.some((ev: any) => {
              return String(ev.event_id) === String(data.event_id)
            })
          }

          if (hasEvent) {
            setCheckedEvenList(String(data.event_id))
          }
          if (route.name !== 'MatchList') {
            router.push({ name: 'MatchList' })
          }
        }
      }
    }

    onMounted(() => {
      getPosterList()
    })

    return { posterImage, posterList, isTradition, isZh, toPosterPath }
  },
})
</script>

<template>
  <div class="posterItem" :class="{ 'not-show': !isTradition }">
    <el-carousel height="210px" indicator-position="none">
      <el-carousel-item v-for="data in posterList" :key="data.poster">
        <LazyImage
          :img-url="isZh ? data.poster : data.poster_en"
          :err-img="posterImage"
          :style="{
            cursor: +data.jump_type === 0 ? 'not-allowed' : 'pointer',
          }"
          @click.stop="toPosterPath(data)"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.posterItem {
  height: 217px;
  width: calc(100% - 32px);
  margin: auto;
  flex-shrink: 0;
  transition: all 0.4s ease-in-out;
  .lazy-image {
    height: 201px;
    width: 100%;
  }
  &:deep(.el-carousel) {
    .is-active {
      z-index: 500;
      background-color: var(--color-bg-primary);
    }
  }
}
.not-show {
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>
