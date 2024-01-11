<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import UnTeamBox from './components/TeamBox.vue'
import UnBaseInfoBox from './components/BaseInfoBox.vue'
import UnFavoriteAndPointBox from './components/FavoriteAndPointBox.vue'
import UnLogoDateBox from './components/LogoDateBox.vue'
import UnPlayNameBox from './components/PlayNameBox.vue'
import videoAndAnimationHook from '@/hooks/videoAndAnimationHook'
import { gameInfoStore } from '@/store/gameInfo'

export default defineComponent({
  name: 'UniversalBetItem',
  components: {
    UnTeamBox,
    UnBaseInfoBox,
    UnFavoriteAndPointBox,
    UnLogoDateBox,
    UnPlayNameBox,
  },
  props: {
    matchInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    const hasPlayInfo = computed(() => {
      return (
        !Array.isArray(props.matchInfo.recommend_play)
        && props.matchInfo.recommend_play.id
      )
    })

    const { videoHas, animationHas } = videoAndAnimationHook(props.matchInfo)

    const betType = inject('betType', 'single')

    const { matchDetailQuery } = storeToRefs(gameInfoStore())

    function toMatchDetail(params?: any) {
      const query: any = {
        game_id: props.matchInfo.id,
        betType,
        show: true,
      }
      if (hasPlayInfo.value) {
        query.match = props.matchInfo.recommend_play?.match
      }
      if (params) {
        Object.assign(query, params)
      }
      matchDetailQuery.value = query
    }

    return { hasPlayInfo, videoHas, animationHas, toMatchDetail }
  },
})
</script>

<template>
  <div class="universal-bet-item" @click.stop="toMatchDetail">
    <UnLogoDateBox
      :key="matchInfo.game_start_time"
      :data-info="{
        logo: matchInfo.game_type_logo,
        startTime: matchInfo.game_start_time,
        isLive: +matchInfo.category_id === 3,
        isPrediction:
          +matchInfo.category_id === 2 && matchInfo.bowls_prediction,
      }"
    />
    <UnBaseInfoBox
      :base-info="{
        bo: matchInfo.matches,
        eventName: matchInfo.event_name,
        hasVideo: videoHas,
        hasAnimate: animationHas,
      }"
      @toDetailClick="toMatchDetail"
    />
    <UnTeamBox
      :key="hasPlayInfo ? `${matchInfo.recommend_play.id}0` : 0"
      :item-info="matchInfo"
      :index="0"
    />
    <UnPlayNameBox :item-info="matchInfo" />
    <UnTeamBox
      :key="hasPlayInfo ? `${matchInfo.recommend_play.id}1` : 1"
      :item-info="matchInfo"
      :index="1"
    />
    <UnFavoriteAndPointBox
      :info="{
        id: +matchInfo.id,
        game_type_id: +matchInfo.game_type_id,
        pointsCount: matchInfo.play_count,
        isKeep: matchInfo.is_favorite,
        is_bind_ant_before_game_info: !!matchInfo.is_bind_ant_before_game_info,
      }"
      @to-detail-click="toMatchDetail"
    />
  </div>
</template>

<style lang="scss" scoped>
.universal-bet-item {
  width: 100%;
  height: 88px;
  background: var(--color-bg-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: url("../../assets/icons/home_mouse.png"), auto;
  transition: all 0.15s ease-in-out;
  & + .universal-bet-item {
    margin-top: 4px;
  }
  &:hover {
    background: #333b42;
  }
}
</style>
