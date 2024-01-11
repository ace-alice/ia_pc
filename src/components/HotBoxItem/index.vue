<script lang="ts">
import { computed, defineComponent } from 'vue'
import HotTeamBox from './components/TeamBox.vue'
import HotBaseInfoBox from './components/BaseInfoBox.vue'
import HotFavoriteAndPointBox from './components/FavoriteAndPointBox.vue'
import HotPlayNameBox from './components/PlayNameBox.vue'
import videoAndAnimationHook from '@/hooks/videoAndAnimationHook'
import home_dataanalysis_02 from '@/assets/icons/home_dataanalysis_02.png'
import { gameInfoStore } from '@/store/gameInfo'
export default defineComponent({
  name: 'HotBoxItem',
  components: {
    HotTeamBox,
    HotFavoriteAndPointBox,
    HotPlayNameBox,
    HotBaseInfoBox,
  },
  props: {
    matchInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
    bg: {
      type: String,
      default: new URL('@/assets/banner/game_1_01.png', import.meta.url).href,
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

    const { matchDetailQuery } = storeToRefs(gameInfoStore())

    function toMatchDetail(params?: any) {
      const query: any = {
        game_id: props.matchInfo.id,
        betType: 'single',
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

    const videoIcon = new URL('@/assets/icons/live.png', import.meta.url).href

    const animateIcon = new URL('@/assets/icons/score.png', import.meta.url)
      .href

    return {
      hasPlayInfo,
      videoHas,
      animationHas,
      toMatchDetail,
      videoIcon,
      animateIcon,
      home_dataanalysis_02,
    }
  },
})
</script>

<template>
  <div class="hot-box-item" @click.stop="toMatchDetail">
    <div class="bg-image">
      <LazyImage :img-url="bg" :is-lazy="false" class="banner" />
    </div>
    <div class="video-animate">
      <LazyImage
        v-if="
          [1, 2, 3, 16].includes(+matchInfo.game_type_id)
            && matchInfo.is_bind_ant_before_game_info
        "
        :img-url="home_dataanalysis_02"
        :is-lazy="false"
        @click.stop="toMatchDetail({ video: 3 })"
      />
      <LazyImage
        v-if="videoHas"
        :img-url="videoIcon"
        :is-lazy="false"
        @click.stop="toMatchDetail({ video: 1 })"
      />
      <LazyImage
        v-if="animationHas"
        :img-url="animateIcon"
        :is-lazy="false"
        @click.stop="toMatchDetail({ video: 2 })"
      />
    </div>
    <div class="top">
      <HotTeamBox
        :key="hasPlayInfo ? `${matchInfo.recommend_play.id}0` : 0"
        :item-info="matchInfo"
        :index="0"
      />
      <HotPlayNameBox :item-info="matchInfo" />
      <HotTeamBox
        :key="hasPlayInfo ? `${matchInfo.recommend_play.id}1` : 1"
        :item-info="matchInfo"
        :index="1"
      />
    </div>
    <div class="bottom">
      <!-- suppress JSUnresolvedVariable -->
      <HotBaseInfoBox
        :base-info="{
          bo: matchInfo.matches,
          eventName: matchInfo.event_name || 'IA ESPORT',
          isLive: +matchInfo.category_id === 3,
          logo: matchInfo.game_type_logo,
        }"
      />
      <HotFavoriteAndPointBox
        :info="{
          id: matchInfo.id,
          pointsCount: matchInfo.play_count,
          isKeep: matchInfo.is_favorite,
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes cartIn {
  0%{
    opacity: 0.3;
  }
}
.hot-box-item {
  height: 190px;
  background-image: url("../../assets/images/img_bg.png");
  background-size: 100% 100%;
  width: calc(33.33% - 10px);
  border-radius: 8px;
  cursor: url("../../assets/icons/home_mouse.png"), auto;
  padding: 8px 16px;
  position: relative;
  animation: cartIn 0.6s linear;
  .banner {
    transition: transform 0.5s ease-in-out;
  }

  &:hover {
    .banner {
      transform: scale(1.05);
    }
  }
  & + .hot-box-item {
    margin-left: 16px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .video-animate {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    .lazy-image {
      height: 24px;
      width: 24px;
      & + .lazy-image {
        margin-left: 8px;
      }
    }
  }
  .top {
    flex-grow: 1;
    overflow-x: visible;
    //overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 0 8px;
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
  }
  .bg-image {
    width: 100%;
    position: absolute;
    top: -36px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-left: -16px;
    z-index: 0;
    .lazy-image {
      width: 324px;
    }
  }
}
</style>
