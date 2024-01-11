import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { gameInfoStore } from '@/store/gameInfo'
export default function videoAndAnimationHook(
  matchInfo: any,
) {
  const { videoInfoCache, animationInfoCache } = storeToRefs(gameInfoStore())

  // socket推送的视频列表
  const videoList = computed(() => {
    return videoInfoCache.value.filter((video: any) => {
      return +video.game_id === +matchInfo.id
    })
  })
  // socket推送的动画列表
  const animationList = computed(() => {
    return animationInfoCache.value.filter((animation: any) => {
      return +animation.game_id === +matchInfo.id
    })
  })

  const currentVideoUrl = computed(() => {
    let url: string = matchInfo.media_content || ''
    let currentUrl = ''
    if (videoList.value.length > 0 && videoList.value[0].url) {
      url = videoList.value[0].url
    }
    if (url && url.includes('twitch')) {
      const startInx = url.indexOf('https')
      const endInx = url.indexOf('&parent')
      const host = url.substring(startInx, endInx)
      const parent = window.location.host
      let referrer = ''
      if (window.document.referrer) {
        const startInxR = window.document.referrer.indexOf('//')
        const len = window.document.referrer.length
        referrer = window.document.referrer.substring(
          startInxR + 2,
          len - 1,
        )
        currentUrl = `<iframe src=\"${host}&parent=${parent}&parent=${referrer}\" allowfullscreen ></iframe>`
      }
      else {
        currentUrl = `<iframe src=\"${host}&parent=${parent}\" allowfullscreen ></iframe>`
      }
    }
    else {
      currentUrl = url
    }
    return currentUrl
  })

  const animateSrc = computed(() => {
    if (
      animationList.value.length > 0
      && animationList.value[0].has_push_url_pc
    ) {
      return animationList.value[0].has_push_url_pc
    }
    else {
      return matchInfo.has_push_url_pc
    }
  })

  const isIframe = computed(() => {
    return currentVideoUrl.value.includes('iframe')
  })

  // 是否有视频
  const videoHas = computed(() => {
    return !!currentVideoUrl.value
  })
  // 是否有动画
  const animationHas = computed(() => {
    return !!animateSrc.value
  })

  return {
    currentVideoUrl,
    animateSrc,
    videoList,
    animationList,
    videoHas,
    animationHas,
    isIframe,
  }
}
