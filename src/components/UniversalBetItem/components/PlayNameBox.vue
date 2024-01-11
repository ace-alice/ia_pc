<script lang="ts">
import { computed, defineComponent } from 'vue'
import ThirdTeamBox from './ThirdTeamBox.vue'
import { setItemName } from '@/utils'

export default defineComponent({
  name: 'PlayNameBoxUn',
  components: { ThirdTeamBox },
  props: {
    itemInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props) {
    const hasPlayInfo = computed(() => {
      return (
        !Array.isArray(props.itemInfo.recommend_play)
        && props.itemInfo.recommend_play.id
      )
    })

    const hasTeam3 = computed(() => {
      return (
        hasPlayInfo.value
        && props.itemInfo.recommend_play.team_points
        && props.itemInfo.recommend_play.team_points[2]
      )
    })
    return { hasPlayInfo, hasTeam3, setItemName }
  },
})
</script>

<template>
  <div class="PlayNameBoxUn">
    <ThirdTeamBox v-if="hasTeam3" :index="2" :item-info="itemInfo" />
    <template v-else>
      <div class="score">
        {{ itemInfo.score_1 }} - {{ itemInfo.score_2 }}
      </div>
      <div
        v-if="!hasTeam3 && hasPlayInfo"
        :key="itemInfo.recommend_play.id"
        class="play-name"
      >
        <span
          v-tooltip="{
            width: 53,
            message: itemInfo.recommend_play.name,
          }"
        >
          {{
            setItemName(
              +itemInfo.recommend_play.match,
              itemInfo.recommend_play.stage_name,
            )
          }}
          {{ itemInfo.recommend_play.name }}
        </span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.PlayNameBoxUn {
  width: 10%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  // overflow-x: hidden;
  overflow-y: visible;
  .score {
    font-family: Gotham-Medium, PingFangSC-Medium, monospace;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 500;
  }
  .play-name {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
