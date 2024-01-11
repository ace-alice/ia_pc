<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import winIcon from '@/assets/icons/status-1.png'
import failIcon from '@/assets/icons/status-2.png'
import { parseTime } from '@/utils'
import { gameInfoStore } from '@/store/gameInfo'
export default defineComponent({
  name: 'EndBetItem',
  components: {},
  props: {
    matchInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    function setWinLoseImage(teamId: boolean) {
      if (!props.matchInfo.winner_team_id) {
        return winIcon
      }
      if (+props.matchInfo.winner_team_id === -1) {
        return winIcon
      }
      if (
        props.matchInfo.winner_team_id
        && +teamId === +props.matchInfo.winner_team_id
      ) {
        return winIcon
      }
      else {
        return failIcon
      }
    }

    const { matchDetailQuery } = storeToRefs(gameInfoStore())

    function toMatchDetail() {
      const query: any = {
        game_id: props.matchInfo.id,
        is_end: true,
        show: true,
      }
      matchDetailQuery.value = query
    }

    return { setWinLoseImage, toMatchDetail, parseTime }
  },
})
</script>

<template>
  <div class="end-bet-item" @click.stop="toMatchDetail">
    <div class="LogoDateBox">
      <LazyImage :img-url="matchInfo.game_type_logo" />
      <div class="bo">
        BO{{ matchInfo.matches || 0 }}
      </div>
    </div>
    <div class="VideoAndAnimationBox">
      <div class="top">
        {{ matchInfo.event_name }}
      </div>
      <div class="bottom">
        <div>
          {{
            parseTime(
              Number(String(matchInfo.game_start_time).padEnd(13, "0")),
              "{m}-{d}",
            )
          }}
        </div>
        <div />
        <div>
          {{
            parseTime(
              Number(String(matchInfo.game_start_time).padEnd(13, "0")),
              "{h}:{i}",
            )
          }}
        </div>
      </div>
    </div>
    <div class="team-box">
      <div class="team-logo">
        <LazyImage :img-url="matchInfo.team_logo_1" />
      </div>
      <div class="desc">
        {{ matchInfo.team_name_1 }}
      </div>
      <LazyImage
        :img-url="setWinLoseImage(matchInfo.team_id_1)"
        :is-lazy="false"
      />
    </div>
    <div class="PlayNameBox">
      <span class="score-info">
        {{ matchInfo.score_1 }} - {{ matchInfo.score_2 }}
      </span>
    </div>
    <div class="team-box team-left">
      <div class="team-logo">
        <LazyImage :img-url="matchInfo.team_logo_2" />
      </div>
      <div class="desc">
        {{ matchInfo.team_name_2 || "IA ESPORT" }}
      </div>
      <LazyImage
        :img-url="setWinLoseImage(matchInfo.team_id_2)"
        :is-lazy="false"
      />
    </div>
    <div class="points-count">
      +{{ matchInfo.play_count }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.end-bet-item {
  width: 100%;
  height: 88px;
  background: var(--color-bg-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: url("../../assets/icons/home_mouse.png"), auto;
  flex-shrink: 0;
  & + .end-bet-item {
    margin-top: 4px;
  }
  .points-count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8%;
    flex-shrink: 0;
    font-family: Gotham-Medium, PingFangSC-Medium, monospace;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
  }
  .PlayNameBox {
    width: 10%;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    .score-info {
      font-family: Gotham-Medium, PingFangSC-Medium, monospace;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: 500;
    }
    .lazy-image {
      height: 32px;
      width: 32px;
    }
  }
  .team-left {
    flex-direction: row-reverse;
    .desc {
      text-align: right;
    }
  }
  .team-box {
    .lazy-image {
      height: 32px;
      width: 32px;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 26.4%;
    height: 58px;
    flex-shrink: 0;
    padding: 0 16px;
    color: rgba(255, 255, 255, 0.8);
    overflow-x: visible;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(146, 149, 147, 0.31) 99%
    );
    border: 1px solid rgba(104, 104, 104, 1);
    border-radius: 6px;
    .team-logo {
      flex-shrink: 0;
    }
    .desc {
      flex-grow: 1;
      padding: 0 12px;
      white-space: pre-wrap;
      word-break: break-word;
      // font-family: PingFangSC-Medium, monospace;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .LogoDateBox {
    display: flex;
    flex-shrink: 0;
    width: 8%;
    padding: 0 2.8%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    flex-direction: column;

    .lazy-image {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }

    .bo {
      font-size: 14px;
      color: #ffffff;
      margin-top: 4px;
    }
  }
  .VideoAndAnimationBox {
    width: 12.3%;
    padding-right: 2.8%;
    flex-shrink: 0;
    .top {
      font-size: 14px;
      color: #ffffff;
      word-break: break-all;
      max-height: 66px;
      overflow: hidden;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      flex-wrap: nowrap;
      margin-top: 6px;
      div {
        &:nth-child(2) {
          height: 10px;
          width: 1px;
          background-color: #d8d8d8;
          opacity: 0.2;
          margin: 0 6px;
          border-radius: 1px;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>
