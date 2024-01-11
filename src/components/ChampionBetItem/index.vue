<!-- suppress JSUnresolvedVariable -->
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { parseTime } from '@/utils'
import TeamBox from '@/components/ChampionBetItem/components/TeamBox.vue'
export default defineComponent({
  name: 'ChampionBetItem',
  components: { TeamBox },
  props: {
    matchInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    const retractableImage = new URL('@/assets/icons/prev.png', import.meta.url)
      .href

    const isPackUp = ref(true)

    function changePackStatus() {
      isPackUp.value = !isPackUp.value
    }

    const teamPoints = computed(() => {
      if (
        props.matchInfo.recommend_play
        && props.matchInfo.recommend_play.team_points
      ) {
        return props.matchInfo.recommend_play.team_points
      }
      else {
        return undefined
      }
    })

    return {
      parseTime,
      retractableImage,
      isPackUp,
      changePackStatus,
      teamPoints,
    }
  },
})
</script>

<template>
  <div
    class="champion-bet-item"
    :style="{
      '--content-height': isPackUp
        ? teamPoints.length > 3
          ? 152
          : 76
        : Math.ceil(teamPoints.length / 3) * 76,
    }"
  >
    <div class="champion-header">
      <LazyImage :img-url="matchInfo.game_type_logo" :is-lazy="false" />
      <div class="event-name">
        {{ matchInfo.event_name || "IA ESPORT" }}
      </div>
      <div class="start-time">
        <span v-if="matchInfo.game_start_time">{{
          parseTime(
            Number(String(matchInfo.game_start_time).padEnd(13, "0")),
            "{y}-{m}-{d}",
          )
        }}</span>
      </div>
    </div>
    <div class="team-info">
      <div>
        <span v-if="matchInfo.bonus_pool">{{ matchInfo.bonus_pool }}</span>
        <span v-else>--</span>
        <span>{{ $t("bonus_pool") }}</span>
      </div>
      <div>
        <span>{{ (teamPoints && teamPoints.length) || 0 }}</span>
        <span>{{ $t("game_teams") }}</span>
      </div>
    </div>
    <div class="team-box-group">
      <template v-for="(match, index) in teamPoints" :key="index">
        <TeamBox
          :index="index"
          :item-info="Object.assign({}, match, {
            event_name: matchInfo.event_name,
            game_id: matchInfo.id,
            category_id: 4,
            game_logo: matchInfo.game_type_logo,
            is_champion: 1,
            play_info_id: matchInfo.recommend_play?.id,
            name: $t('champion_bet'),
          })"
        />
      </template>
    </div>
    <div
      v-if="teamPoints.length > 6"
      class="retractable"
      :class="{ 'is-pack': isPackUp }"
      @click.stop="changePackStatus"
    >
      <div class="retractable-text">
        {{ isPackUp ? $t("more_teams") : $t("pack_up") }}
      </div>
      <LazyImage :img-url="retractableImage" :is-lazy="false" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.champion-bet-item {
  background: #262d34;
  border-radius: 8px;
  padding: 24px 32px;
  flex-shrink: 0;
  margin-bottom: 8px;
  .team-box-group {
    width: 82%;
    height: calc(var(--content-height) * 1px);
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }
  .team-info {
    width: 82%;
    margin: auto;
    display: flex;
    justify-items: center;
    & > div {
      height: 54px;
      line-height: 54px;
      font-size: 16px;
      & + div {
        margin-left: 16px;
      }
      span:nth-child(1) {
        font-family: Gotham-Medium, monospace;
        color: #fecb00;
        margin-right: 6px;
      }
      span:nth-child(2) {
        color: #ffffff;
      }
    }
  }
  .champion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    .lazy-image {
      height: 32px;
      width: 32px;
    }
    .event-name {
      flex-grow: 1;
      padding: 0 16px;
      color: #ffffff;
    }
    .start-time {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .retractable {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(146, 149, 147, 0.1) 99%
      );
    }

    .retractable-text{
      min-width: 80px;
      text-align: right;
    }

    .lazy-image {
      height: 24px;
      width: 24px;
      margin-left: 12px;
      transition: all 0.2s ease-in-out;
      transform: rotate(90deg);
    }
  }
  .is-pack {
    .lazy-image {
      transform: rotate(-90deg);
    }
  }
}
</style>
