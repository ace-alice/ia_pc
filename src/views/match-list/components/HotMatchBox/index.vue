<script lang="ts" setup name="HotMatchBox">
import getMatchListByAnyHook from '@/hooks/getMatchListByAnyHook'
import useImageResource from '@/hooks/useImageResource'
import HotBoxItem from '@/components/HotBoxItem/index.vue'
import refreshWhite from '@/assets/icons/refresh_white.png'

const { matchListData, getList } = getMatchListByAnyHook('hot' as any, '')

const imageResource: any = useImageResource()

function getImageUrl(game_type_id: number, count: number) {
  return (
    imageResource[`game_${game_type_id}_0${count}`]
    || imageResource[`game_${2}_0${count}`]
  )
}

interface BgType {
  id: number
  bg: string
  count: number
}

const bgArr: BgType[] = []
const gameBgCount: { [key: string]: number } = {}

const countSort = [1, 2, 3, 4, 5, 6, 7, 8].sort(() => Math.random() - 0.5)

function initBg(game_type_id: number, id: any) {
  if ([44, 1].includes(+game_type_id)) {
    game_type_id = 1
  }
  if ([8, 31].includes(+game_type_id)) {
    game_type_id = 31
  }
  if ([47, 28].includes(+game_type_id)) {
    game_type_id = 28
  }
  if ([4, 23].includes(+game_type_id)) {
    game_type_id = 23
  }
  const tBg = bgArr.find((bgInfo) => {
    return +id === +bgInfo.id
  })
  if (tBg) {
    return tBg.bg
  }
  else {
    let count = 1
    const maxCount = ['game_1', 'game_2', 'game_3', 'game_16'].includes(
      `game_${game_type_id}`,
    )
      ? 8
      : 2
    if (gameBgCount[`game_${game_type_id}`]) {
      gameBgCount[`game_${game_type_id}`]++
    }
    else {
      gameBgCount[`game_${game_type_id}`] = 1
    }
    count
      = maxCount === 2
        ? (countSort[gameBgCount[`game_${game_type_id}`]] % maxCount) + 1
        : countSort[gameBgCount[`game_${game_type_id}`] % maxCount]
    bgArr.push({
      id,
      bg: getImageUrl(game_type_id, count),
      count,
    })
    return getImageUrl(game_type_id, count)
  }
}

const startHotMatchKey = ref([0, 1, 2])

const matchListDataC = computed(() => {
  return matchListData.value.sort(() => Math.random() - 0.5)
})

const deg = ref(0)

function refresh() {
  deg.value += 360
  startHotMatchKey.value = startHotMatchKey.value.map(xcode =>
    xcode + 3 < matchListData.value.length
      ? xcode + 3
      : xcode + 3 - matchListData.value.length,
  )
}

onMounted(() => {
  getList()
})
</script>

<template>
  <div
    class="HotMatchBox"
    :style="{ '--deg': deg }"
    :class="{ hasMatch: matchListDataC.length > 0 }"
  >
    <div v-if="matchListDataC.length > 3" class="refresh-btn" @click="refresh">
      <LazyImage :img-url="refreshWhite" :is-lazy="false" />
      {{ $t("next_batch") }}
    </div>
    <template v-for="(match, index) in matchListDataC">
      <HotBoxItem
        v-if="startHotMatchKey.includes(index)"
        :key="match.id"
        :match-info="match"
        :bg="initBg(+match.game_type_id, match.id)"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.HotMatchBox {
  height: 0;
  display: flex;
  align-items: flex-end;
  // transition: all 0.2s ease-in-out;
  position: relative;
  .refresh-btn {
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 28px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    .lazy-image {
      height: 16px;
      width: 16px;
      margin-right: 8px;
      transform: rotateZ(calc(var(--deg) * 1deg));
      transition: all 0.6s linear;
    }
  }
}
.hasMatch {
  height: 242px;
}
</style>
