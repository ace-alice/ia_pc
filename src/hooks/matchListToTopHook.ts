import { computed, ref } from 'vue'
import type { ElScrollbar } from 'element-plus'
import { useRoute } from 'vue-router'
import { gameInfoStore } from '@/store/gameInfo'

export default function matchListToTopHook(routeName = 'MatchList') {
  const currentTop = ref(0)

  const route = useRoute()

  const { matchListTop } = storeToRefs(gameInfoStore())

  const hasToTop = computed(() => {
    return currentTop.value > 100 && routeName === route.name
  })

  const { proxy }: any = getCurrentInstance()

  function scrollHandle({ scrollTop }: { scrollTop: number }) {
    if (
      currentTop.value < scrollTop
      && routeName === 'MatchList'
      && scrollTop > 10
    ) {
      proxy.mittBus.emit('matchListSetTop', 242)
    }
    if (scrollTop - currentTop.value > 300) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      scrollbarRef.value?.scrollTo({ top: currentTop.value + 100, behavior: 'instant' })
    }
    else {
      currentTop.value = scrollTop
      matchListTop.value = scrollTop
    }
  }

  const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

  function toTopHandle(behavior = 'smooth') {
    if (scrollbarRef.value) {
      scrollbarRef.value?.scrollTo({ top: 0, behavior })
    }
  }

  // function toTopActive() {
  //   if (scrollbarRef.value) {
  //     scrollbarRef.value?.setScrollTop(matchListTop.value)
  //   }
  // }

  // onMounted(() => {
  //   proxy.mittBus.on('toTopActiveBus', toTopActive)
  // })

  // onUnmounted(() => {
  //   proxy.mittBus.off('toTopActiveBus')
  // })

  return {
    hasToTop,
    scrollHandle,
    toTopHandle,
    scrollbarRef,
    currentTop,
    // toTopActive,
  }
}
