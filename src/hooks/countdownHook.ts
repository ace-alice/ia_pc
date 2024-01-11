import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { gameInfoStore } from '@/store/gameInfo'

export function countdownHook(showTime: number, H = 1) {
  // 当前时间
  const { currentTime } = storeToRefs(gameInfoStore())

  /**
   * @description 倒计时信息
   * @returns [boolean,string,number] 是否显示倒计时，倒计时时间
   */
  const countdown = computed(() => {
    let isCountdown = false
    const time = showTime - Math.floor(currentTime.value / 1000)
    if (time > 0 && time < 3600 * H) {
      isCountdown = true
    }
    // const h = Math.floor(time / 3600) || 0
    // ${String(h).padStart(2, '0')}:
    const i = Math.floor((time % 3600) / 60) || 0
    const s = time % 60 || 0
    const timeString = `${String(i).padStart(
      2,
      '0',
    )}:${String(s).padStart(2, '0')}`
    // console.log(currentTime.value);
    return [isCountdown, timeString, time]
  })

  return { countdown, currentTime }
}
