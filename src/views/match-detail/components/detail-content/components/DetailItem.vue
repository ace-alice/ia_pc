<script lang="ts">
import { defineComponent } from 'vue'
import DetailTeamBox from './TeamBox.vue'
export default defineComponent({
  name: 'IaDetailItem',
  components: { DetailTeamBox },
  props: {
    playInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup() {
    return {}
  },
})
</script>

<template>
  <div class="detail-item">
    <div class="play-name">
      {{ playInfo.name }}
    </div>
    <div class="bottom">
      <template v-for="(team, index) in playInfo.team_points" :key="`${team.id}-${team.status}`">
        <DetailTeamBox :play-info="playInfo" :index="index" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .play-name {
    height: 52px;
    line-height: 52px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
  }
  .bottom {
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
