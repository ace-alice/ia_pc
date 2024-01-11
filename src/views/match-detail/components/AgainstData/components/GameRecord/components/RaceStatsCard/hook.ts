import shuju_attribute_tower from '@/assets/icons/shuju_attribute_tower.png'
import shuju_attribute_bigdragon from '@/assets/icons/shuju_attribute_bigdragon.png'
import shuju_attribute_blood from '@/assets/icons/shuju_attribute_blood.png'
import shuju_attribute_murder5 from '@/assets/icons/shuju_attribute_murder5.png'
import shuju_attribute_smalldragon from '@/assets/icons/shuju_attribute_smalldragon.png'
import shuju_attribute_murder10 from '@/assets/icons/shuju_attribute_murder10.png'
import shuju_dota2attribute_baojun from '@/assets/icons/shuju_dota2attribute_baojun.png'
import shuju_dota2attribute_zhuzai from '@/assets/icons/shuju_dota2attribute_zhuzai.png'
import shuju_csgo_murderfive from '@/assets/icons/shuju_csgo_murderfive.png'
import shuju_csgo_murderten from '@/assets/icons/shuju_csgo_murderten.png'
import shuju_csgo_rone from '@/assets/icons/shuju_csgo_rone.png'
import shuju_csgo_rsixteen from '@/assets/icons/shuju_csgo_rsixteen.png'

export default function setIconsHook() {
  const gameType: any = inject('gameType', 1)

  const lolIcons: any[] = [
    { key: 'first_blood', icon: shuju_attribute_blood },
    { key: 'first_towers', icon: shuju_attribute_tower },
    { key: 'five_kills', icon: shuju_attribute_murder5 },
    { key: 'ten_kills', icon: shuju_attribute_murder10 },
    { key: 'first_drakes', icon: shuju_attribute_smalldragon },
    { key: 'first_nashors', icon: shuju_attribute_bigdragon },
  ]
  const voaIcons: any[] = [
    { key: 'first_blood', icon: shuju_attribute_blood },
    { key: 'first_towers', icon: shuju_attribute_tower },
    { key: 'five_kills', icon: shuju_attribute_murder5 },
    { key: 'ten_kills', icon: shuju_attribute_murder10 },
    { key: 'first_drakes', icon: shuju_dota2attribute_baojun },
    { key: 'first_nashors', icon: shuju_dota2attribute_zhuzai },
  ]

  const dotaIcons: any[] = [
    { key: 'first_blood', icon: shuju_attribute_blood },
    { key: 'first_towers', icon: shuju_attribute_tower },
    { key: 'five_kills', icon: shuju_attribute_murder5 },
    { key: 'ten_kills', icon: shuju_attribute_murder10 },
  ]

  const csgoIcons: any[] = [
    { key: 'five_kills', icon: shuju_csgo_murderfive },
    { key: 'ten_kills', icon: shuju_csgo_murderten },
    { key: 'first_blood', icon: shuju_csgo_rone },
    { key: 'r_16_win', icon: shuju_csgo_rsixteen },
  ]

  const iconsEnum: any = {
    1: lolIcons,
    16: voaIcons,
    2: dotaIcons,
    3: csgoIcons,
  }

  const icons = computed(() => {
    return iconsEnum[String(gameType.value)] || []
  })

  return { icons }
}
