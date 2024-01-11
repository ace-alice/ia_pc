<script lang="ts">
import { merge } from 'lodash'
import { useI18n } from 'vue-i18n'
import useImageResource from '@/hooks/useImageResource'
import { gameInfoStore } from '@/store/gameInfo'
export default {
  name: 'EmptyData',
  props: {
    // 使用场景
    type: {
      type: String,
      default: 'default',
    },
    top: {
      type: Number,
      default: 160,
    },
    isLive: {
      type: Boolean,
      default: false,
    },
    // option: {
    //   type: [Object, undefined, null],
    //   // eslint-disable-next-line @typescript-eslint/no-empty-function
    //   default: () => {},
    // },
  },
  setup(props: any) {
    const { setHandicapValue } = gameInfoStore()
    const { emptyImg, emptyLiveImg, notMatchImg, queTouZhuImg }
      = useImageResource()

    const i18n = useI18n()

    const data: { [key: string]: any } = {
      default: {
        width: '100',
        top: 140,
        image: emptyImg,
        text: i18n.t('no_records'),
        urlText: '',
        callback: () => null,
      },
      // 滚球
      live: {
        width: '140',
        top: 80,
        image: emptyLiveImg,
        text: i18n.t('no_more_matches'),
        urlText: '去滚球看看',
        callback: () => {
          setHandicapValue('live')
        },
      },
      event: {
        width: '120',
        top: 120,
        image: notMatchImg,
        text: i18n.t('no_more_matches'),
        urlText: '',
        callback: () => null,
      },
      bet_History: {
        width: '100',
        top: 120,
        image: emptyImg,
        text: i18n.t('no_bet_records'),
        urlText: '',
        callback: () => null,
      },
      shop_cart: {
        width: '100',
        top: 140,
        image: queTouZhuImg,
        text: i18n.t('no_records'),
        urlText: '',
        callback: () => null,
      },
    }
    const dataObj: any = merge(data[props.type], props.option)
    return {
      dataObj,
    }
  },
}
</script>

<template>
  <div :style="{ '--margin-top': dataObj.top }" class="ia-empty">
    <img :src="dataObj.image" :width="dataObj.width" alt="">
    <div class="bottom">
      <div class="text">
        {{ dataObj.text }}
      </div>
      <slot name="top" />
      <div v-show="type === 'live' && !isLive" class="url-text">
        {{ $t("go")
        }}<span class="jump" @click="dataObj.callback">{{
          $t("live_bet")
        }}</span>{{ $t("look_look") }}
      </div>
      <slot name="bottom" />
    </div>
  </div>
</template>
