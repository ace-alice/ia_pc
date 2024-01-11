<script lang="ts">
import { storeToRefs } from 'pinia'
import { computed, inject, nextTick, onMounted, ref, watch } from 'vue'
import allImg from '@/assets/images/logo-all.png'
import { gameInfoStore } from '@/store/gameInfo'
import useImageResource from '@/hooks/useImageResource'
export default {
  name: 'IaGameItem',
  components: {},
  props: {
    itemInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    const notShowGameArr = ['autochess', 'virtual']

    const { gameList } = storeToRefs(gameInfoStore())

    const isTradition = inject('isTradition', true)

    const { currentGameId, checkedEvenList } = storeToRefs(gameInfoStore())
    const { clearIcon } = useImageResource()
    const { setCurrentGameId, setCheckedEvenList } = gameInfoStore()

    const showChild = ref(false)
    const handleClick = (id: string) => {
      setCurrentGameId(id)
      showChild.value = !showChild.value
    }
    const gameEventDetail: any = computed(() => {
      if (props.itemInfo.events_count?.total) {
        return props.itemInfo.events_count
      }
      else {
        return {
          total: 0,
          events: [],
        }
      }
    })

    const init = ref(false)

    const isCurrent = computed(
      () => String(props.itemInfo.id) === currentGameId.value,
    )

    watch(
      () => isCurrent.value,
      (newVal) => {
        if (newVal) {
          showChild.value = true
        }
      },
    )

    const showD = computed(() => {
      return (
        isCurrent.value
        && showChild.value
        && gameEventDetail.value.events
        && gameEventDetail.value.events.length > 0
      )
    })

    const hasBg = computed(() => {
      const inx1 = gameList.value.findIndex((game) => {
        return String(game.id) === String(props.itemInfo.id)
      })
      const inx2 = gameList.value.findIndex((game) => {
        return String(game.id) === String(currentGameId.value)
      })
      return inx1 <= inx2
    })

    onMounted(() => {
      nextTick(() => {
        showChild.value = isCurrent.value
        setTimeout(() => {
          init.value = true
        }, 1000)
      })
    })

    return {
      setCurrentGameId,
      allImg,
      currentGameId,
      gameEventDetail,
      clearIcon,
      handleClick,
      showChild,
      init,
      isTradition,
      checkedEvenList,
      showD,
      setCheckedEvenList,
      isCurrent,
      notShowGameArr,
      hasBg,
    }
  },
}
</script>

<template>
  <div
    v-if="!notShowGameArr.includes(String(itemInfo.id))"
    class="item" :class="{
      'active-item': isCurrent && isTradition,
      'active-item-two': isCurrent && !isTradition,
      'item-mode2': !isTradition,
      'has-bg': isTradition && hasBg,
    }"
  >
    <div
      class="menu-item"
      :class="{
        'active': +itemInfo.id === +currentGameId,
        'menu-item-isTradition': isTradition,
      }"
      :style="{ '--not-tradition-logo': !isTradition ? '-18px' : 0 }"
      @click="handleClick(String(itemInfo.id))"
    >
      <div
        class="pre-box"
      />
      <LazyImage :img-url="+itemInfo.id === 0 ? allImg : itemInfo.logo" :is-lazy="false" />
      <div class="game-title">
        <span v-tooltip="{ width: 84, message: itemInfo.game_name }">
          {{ itemInfo.game_name }}</span>
      </div>
      <div
        class="bag" :class="{
          'active-bag': String(itemInfo.id) === currentGameId,
        }"
      >
        {{ gameEventDetail.total ? gameEventDetail.total : 0 }}
      </div>
      <div class="next-box" />
    </div>
    <div
      v-show="isTradition"
      class="division-list"
      :style="{
        '--height': showD ? gameEventDetail.events.length + 1 : 0,
      }"
    >
      <div class="division-title">
        <div
          class="checked-input"
          :class="{
            'active-input':
              checkedEvenList.length === gameEventDetail.events?.length
              || checkedEvenList.includes('all'),
          }"
          @click="setCheckedEvenList('all')"
        />
        <div class="event-name" @click="setCheckedEvenList('all')">
          {{ $t("select_all") }}
        </div>
        <div class="event_num" @click="setCheckedEvenList('clear')">
          <LazyImage :img-url="clearIcon" :is-lazy="false" />
        </div>
      </div>
      <div
        v-for="item in gameEventDetail.events"
        :key="item.event_id"
        class="division-item"
        @click="setCheckedEvenList(String(item.event_id))"
      >
        <div
          class="checked-input"
          :class="{
            'active-input':
              checkedEvenList.includes(String(item.event_id))
              || checkedEvenList.includes('all'),
          }"
        />
        <div class="event-name">
          {{ item.event_name }}
        </div>
        <div class="event_num">
          {{ item.match_amount ? item.match_amount : 0 }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.next-box {
  width: 14px;
  height: 20px;
}
.pre-box {
  width: 40px;
  height: 20px;
  transition: width 0.2s linear;
}
.show-division {
  width: 35px;
  transition: width 0.2s linear;
}
.has-bg {
  background: #373e46;
}

.bag {
  display: inline-block;
  width: 72px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 21px;
  font-family: Gotham-Medium, PingFangSC-Medium, monospace;
  font-size: 16px;
  font-weight: 500;
}
.active-bag {
  background: var(--color-theme-primary);
  color: #ffffff;
  transition: background 0.3s linear, color 0.3s linear;
}
.item {
  width: 304px;
  z-index: 2;
  //overflow: hidden;
}
.menu-item-isTradition {
  &:hover {
    .lazy-image {
      transform: scale(1.4);
    }
  }
}
.item-mode2 {
  background-color: var(--color-bg-second);
}
.active-item {
  background-color: var(--color-bg-second);
  border-radius: 0 26px 26px 0 !important;
  .menu-item {
    border-radius: 0 26px 26px 0 !important;
    background-color: var(--color-bg-second);
  }
  .game-title {
    color: var(--color-theme-primary);
  }
}
.active-item-two {
  background-image: linear-gradient(90deg, #f16720 0%, #fd8908 20%) !important;
}
.menu-item {
  width: 100%;
  height: 52px;
  cursor: url("@/assets/icons/home_mouse.png"), auto;
  display: flex;
  align-items: center;
  //overflow: hidden;
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  .lazy-image {
    height: 24px;
    width: 24px;
    animation: all 0.3s ease-in-out;
    transform: translateX(var(--not-tradition-logo));
    transition: transform 0.2s ease-in-out;
  }

  & > div {
    flex-shrink: 0;
  }
  .game-title {
    padding: 0 18px 0 40px;
    flex-grow: 1;
    overflow: hidden;
    flex-shrink: 1;
    text-overflow: ellipsis !important;
    span {
      white-space: nowrap;
    }
  }
}
.active {
  color: var(--color-theme-primary);
  font-weight: 500;
}
@keyframes tab-down {
  from {
    height: 0;
  }
  to {
    height: 0.6 * 100px;
  }
}
.division-list {
  background-color: var(--color-modal-bg-primary);
  border-radius: 0 26px 26px 0 !important;
  color: rgba(255, 255, 255, 0.6);
  height: calc(var(--height) * 52px);
  transition: height 0.3s linear;
  overflow: hidden;
  font-size: 16px;
  padding: 0 30px 0 40px;
  & > div {
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: url("@/assets/icons/home_mouse.png"), auto;
    & > div {
      flex-shrink: 0;
    }
    .checked-input {
      height: 20px;
      width: 20px;
      background-color: #262d34;
      border-radius: 2px;
      margin-right: 16px;
    }
    .event-name {
      flex-grow: 1;
      padding:0 32px;
      text-align: left;
      flex-shrink: 1;
      white-space: pre-wrap;
      font-weight: 400;
      word-break: break-all;
      max-height: 37px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .division-title {
    font-size: 16px;
    color: #ffffff;
  }
  .event_num {
    font-family: Gotham-Medium, monospace;
    font-weight: 500;
    .lazy-image {
      height: 24px;
      width: 24px;
      opacity: 0.6;
      transition: all 0.1s ease-in-out;
      &:hover {
        opacity: 1;
      }
      &:active {
        transform: scale(0.8);
        opacity: 1;
      }
    }
  }
}
.active-input {
  color: #ffffff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    text-align: center;
    line-height: 20px;
    background-image: url("@/assets/icons/choose.png");
    background-size: 100% 100%;
  }
}
</style>
