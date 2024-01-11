<script setup lang="ts" name="RaceVsInfo">
import setIconsHook from '../hook'
import { parseTime } from '@/utils'
import shuju_vs_small from '@/assets/icons/shuju_vs_small.png'
import shuju_time from '@/assets/icons/shuju_time.png'

const props = defineProps({
  vsInfo: {
    type: Object,
    default: () => {},
  },
  teamInfo: {
    type: Object,
    default: () => {},
  },
  info: {
    type: Object,
    default: () => {},
  },
})
const { icons } = setIconsHook()

const isHistory = inject('isHistory', false)

const wayVsInfo = computed(() => {
  if (isHistory && props.info.length === 2) {
    const theMatch = props.info[1].race_stats.find((stat: any) => {
      return +props.vsInfo.match_id === +stat.match_id
    })
    if (theMatch && props.vsInfo.stats.length === theMatch.stats.length) {
      return Object.assign({}, props.vsInfo, {
        competitor_stats: theMatch.stats,
      })
    }
    return Object.assign({}, props.vsInfo, { stats: [] })
  }
  else {
    return Object.assign({}, props.vsInfo, { stats: [] })
  }
})

function dealTime(dataC: number) {
  return `${Math.floor(dataC / 60)}'${Math.floor(dataC % 60)}`
}

const isMin = inject('isMin', false)
</script>

<template>
  <div class="match-vs-info">
    <div class="event-info">
      <div>{{ vsInfo.league?.name || "" }}</div>
      <div>
        <span v-if="isHistory">{{
          parseTime(vsInfo.start_time, "{y}-{m}-{d}")
        }}</span>
      </div>
    </div>
    <div v-if="!isHistory" class="team-vs-info">
      <div style="margin-right: 8px">
        <span>{{ teamInfo.name || "" }}</span>
        <LazyImage
          :img-url="shuju_vs_small"
          :is-lazy="false"
          style="height: 24px; margin: 0 8px"
        />
        <span>{{ vsInfo.competitor?.name || "" }}</span>
      </div>
      <div>
        <span v-if="vsInfo.start_time">{{
          parseTime(vsInfo.start_time, "{y}-{m}-{d}")
        }}</span>
        <span v-else>--</span>
      </div>
    </div>
    <template v-if="!isHistory">
      <div
        v-for="(item, index) in vsInfo.stats || []"
        :key="index"
        class="vs-info"
      >
        <div>
          <LazyImage
            :img-url="shuju_time"
            :is-lazy="false"
            :class="{ 'shuju-time-min': isMin }"
            style="height: 24px; margin-left: 8px"
          />
          <span>{{ dealTime(+item.duration || 0) }}</span>
        </div>
        <div>
          <span :class="{ 'is-win': +item.kill > +item.competitor_kill }">{{
            item.kill
          }}</span>:
          <span :class="{ 'is-win': +item.kill < +item.competitor_kill }">{{
            item.competitor_kill
          }}</span>
        </div>
        <div class="icons-show">
          <LazyImage
            v-for="icon in icons"
            :key="icon.key"
            :img-url="icon.icon"
            :is-lazy="false"
            :class="{ has: +item[icon.key] || 0 }"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div
        v-for="(item, index) in wayVsInfo.stats || []"
        :key="index"
        class="vs-info-history"
      >
        <div class="shuju-time">
          <LazyImage :img-url="shuju_time" :is-lazy="false" />
          <span>{{ dealTime(+item.duration || 0) }}</span>
        </div>
        <div class="history-vs-box">
          <div class="history-vs-box-item">
            <div class="team-score">
              <LazyImage
                :img-url="teamInfo.logo"
                :is-lazy="false"
                style="height: 24px; margin: 0 8px"
              />
              <span
                :class="{
                  'is-win': +item.kill > +item.competitor_kill,
                }"
              >{{ item.kill }}</span>
            </div>
            <div class="icons-show">
              <LazyImage
                v-for="icon in icons"
                :key="icon.key"
                :img-url="icon.icon"
                :is-lazy="false"
                :class="{ has: +item[icon.key] || 0 }"
              />
            </div>
          </div>
          <div class="history-vs-box-item">
            <div class="team-score">
              <LazyImage
                :img-url="vsInfo.competitor.logo"
                :is-lazy="false"
                style="height: 24px; margin: 0 8px"
              />
              <span
                :class="{
                  'is-win': +item.kill < +item.competitor_kill,
                }"
              >{{ item.competitor_kill }}</span>
            </div>
            <div class="icons-show">
              <LazyImage
                v-for="icon in icons"
                :key="icon.key"
                :img-url="icon.icon"
                :is-lazy="false"
                :class="{
                  has: +wayVsInfo.competitor_stats[index][icon.key] || 0,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.history-vs-box {
  font-family: Gotham-Medium;
  flex-grow: 1;
  .history-vs-box-item {
    display: flex;
    justify-content: space-between;
    .icons-show {
      display: flex;
      align-items: center;
      .lazy-image {
        opacity: 0.4;
        height: 20px;
        width: 20px;
        flex-shrink: 0;
        & + .lazy-image {
          margin-left: 8px;
        }
      }
      .has {
        opacity: 1;
      }
    }
    .team-score {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 80px;

      .is-win {
        color: #fe5e00;
        font-weight: 600;
      }
    }
  }
}
.vs-info-history {
  display: flex;
  justify-content: space-between;
  height: 68px;
  width: calc(100% - 56px);
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.6);
  align-items: center;
  & + .vs-info-history {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .shuju-time {
    display: flex;
    align-items: center;
    margin-right: 8px;
    width: 70px;
    flex-shrink: 0;
    .lazy-image {
      height: 24px;
      width: 24px;
      flex-shrink: 0;
      margin-right: 8px;
    }
  }
  .lazy-image {
    height: 20px;
    width: 20px;
    flex-shrink: 0;
  }
}
.match-vs-info {
  .vs-info {
    display: flex;
    align-items: center;
    width: calc(100% - 56px);
    margin: 0 auto;
    height: 40px;
    align-items: center;
    font-size: 14px;
    font-family: Gotham-Medium;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.6);
    .is-win {
      color: #fe5e00;
    }
    .shuju-time-min {
margin-left: 0 !important;
    }
    .icons-show {
      .lazy-image {
        height: 20px;
        width: 20px;
        margin-left: 8px;
        opacity: 0.4;
      }
      .has {
        opacity: 1 !important;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      &:nth-child(1) {
        width: 80px;
        flex-shrink: 0;
      }
      &:nth-child(2) {
        width: 80 !important;
        flex-shrink: 0;
      }
      // &:nth-child(2) {
      //   width: 90px;
      //   flex-shrink: 0;
      // }
    }
  }

  .event-info {
    background: rgba(0, 0, 0, 0.1);
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    padding: 0 28px;
    justify-content: space-between;
  }

  .team-vs-info {
    display: flex;
    height: 40px;
    padding: 0 28px;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.05);
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    & > div:first-child {
      display: flex;
      align-items: center;
    }
  }
}
</style>
