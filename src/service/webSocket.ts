// noinspection JSIgnoredPromiseFromCall
import { storeToRefs } from 'pinia'
import io from 'socket.io-client'
import { useRoute } from 'vue-router'
import { gameInfoStore } from '@/store/gameInfo'
import { shopCartStore } from '@/store/shopCart'
import webSocketEdge from '@/service/webSocketEdge'
import { getLocal } from '@/utils/storage'
interface DataType {
  room_type: string
  message_type: string
  content: any
}

export function socketServiceHook(proxy?: any) {
  const {
    close,
    disconnect,
    error,
    connectError,
    reconnectFailed,
    reconnectError,
    reconnectAttempt,
    reconnecting,
    reconnect,
    connectTimeout,
    ping,
    pong,
    joinRoomCallBack,
    leaveRoomCallBack,
  } = webSocketEdge()

  const socket = io(import.meta.env.VITE_APP_SOCKET_API, {
    transports: ['websocket'],
    auth: {
      token: getLocal('token') || '123',
    },
  })

  const route = useRoute()

  socket.on('ping', ping)
  socket.on('pong', pong)
  socket.on('close', close)
  socket.on('connect', initRoomConnect)
  socket.on('disconnect', disconnect)
  socket.on('connect-error', connectError)
  socket.on('error', error)
  socket.on('reconnect-failed', reconnectFailed)
  socket.on('reconnect-error', reconnectError)
  socket.on('reconnect-attempt', reconnectAttempt)
  socket.on('reconnecting', reconnecting)
  socket.on('reconnect', reconnect)
  socket.on('connect-timeout', connectTimeout)
  socket.on('joinRoomCallBack', joinRoomCallBack)
  socket.on('leaveRoomCallBack', leaveRoomCallBack)
  socket.on('roomMessageCallBack', roomMessageCallBack)

  /**
   * @description 加入房间
   * @param room_type 房间类型
   * @param handicap_id 房间id
   * */
  function joinRoom(room_type: string, handicap_id?: number) {
    if (!socket.connected) {
      return
    }
    socket.emit('RoomJoin', {
      room_type,
      handicap_id,
    })
  }

  /**
   * @description 离开房间
   * @param room_type 房间类型
   * @param handicap_id 房间id
   * */
  function leaveRoom(room_type: string, handicap_id?: number) {
    if (!socket.connected) {
      return
    }
    socket.emit('RoomLeave', {
      room_type,
      handicap_id,
    })
  }

  /**
   * @description 初始化房间连接
   * */
  function initRoomConnect() {
    joinRoom('room_type_index_content_push')
  }

  /**
   * @description 接收信息后的操作
   * @param data {type:DataType} 推送的数据
   * */
  function roomMessageCallBack(data: DataType) {
    if (!data.content) {
      return
    }
    const contentData = data.content
    switch (data.message_type) {
      // 赔率推送
      case 'message_type_push_point_change':
        push_point_change(contentData)
        break
      // 新增盘口
      case 'message_type_handicap_add':
        handicap_display(contentData, true)
        break
      // 开滚推送
      case 'message_type_handicap_edit':
        handicap_to_live(contentData)
        break
      // 删除盘口
      case 'message_type_handicap_delete':
        handicap_display(contentData, false)
        break
      // 盘口显示
      case 'message_type_handicap_display_on':
        handicap_display(contentData, true)
        break
      // 盘口隐藏
      case 'message_type_handicap_display_off':
        handicap_display(contentData, false)
        break
      // 新增玩法
      case 'message_type_game_play_add':
        point_display_on(contentData, true)
        break
      // 修改玩法
      case 'message_type_game_play_edit':
        game_play_add(contentData)
        break
      // 显示隐藏玩法
      case 'message_type_point_display_on':
        point_display_on(contentData)
        break
      case 'message_type_point_display_off':
        point_display_on(contentData)
        break
      // 直播视频的变换
      case 'message_type_live_video_url_change':
        live_video_url_change(contentData)
        break
      // 投注项全锁
      case 'message_type_bet_item_all_lock':
        bet_item_all_lock(contentData)
        break
      // 投注项单边锁
      case 'message_type_bet_item_single_lock':
        bet_item_single_lock(contentData)
        break
      // 修改玩法设展
      case 'message_type_game_play_set_recommend':
        game_play_set_recommend(contentData)
        break
      // 设置盘口分数
      case 'message_type_team_score_set':
        team_score_set(contentData)
        break
      // 冠军盘玩法显示
      case 'message_type_champion_point_display_on':
        champion_point_display(contentData, true)
        break
      // 冠军盘玩法隐藏
      case 'message_type_champion_point_display_off':
        champion_point_display(contentData, false)
        break
      // 盘口数量推送
      case 'message_fore_ground_tab_count_push':
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        foreGroundTabCount(contentData)
        break
      default:
      //
    }
  }

  const { socketPushChange } = shopCartStore()

  const { pushOddInfo, pushVideoInfo, pushAnimationInfo, foreGroundTabCount } = gameInfoStore()

  const { currentHandicap, matchDetailQuery } = storeToRefs(gameInfoStore())

  /***
   * @description 赔率推送
   */
  function push_point_change(content: any) {
    if (content.point_id && content.point) {
      pushOddInfo({ point_id: content.point_id, delta: content.point })
    }
  }

  /***
   * @description 盘口修改
   */
  function handicap_display(content: any, show: boolean) {
    if (
      route.name === 'MatchList'
      && content.nav_code?.includes(currentHandicap.value)
    ) {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'handicap_display',
        data: Object.assign({ show }, content),
      })
    }
    if (route.name === 'LeaguePage' && content.nav_code.includes('hot')) {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'handicap_display',
        data: Object.assign({ show }, content),
      })
    }
  }

  /***
   * @description 玩法新增与编辑
   */
  function game_play_add(content: any) {
    if (route.name === 'MatchList') {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'message_type_game_play_edit',
        data: content,
      })
    }
    if (
      matchDetailQuery.value.show
      && matchDetailQuery.value.game_id === +content.game_id
    ) {
      proxy.mittBus.emit('changeMatchDetailBus', {
        pushType: 'message_type_game_play_edit',
        data: content,
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'point_display_on',
        data: content,
      })
    }
  }

  /***
   * @description 显示隐藏玩法
   */
  function point_display_on(content: any, isAdd = false) {
    if (
      !isAdd
      && route.name === 'MatchList'
      && ['today', 'fix', 'live', 'parlay'].includes(currentHandicap.value)
    ) {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'point_display_on',
        data: content,
      })
      proxy.mittBus.emit('hotUpdateBus', {
        pushType: 'point_display_on',
        data: content,
      })
    }
    if (
      matchDetailQuery.value.show
      && matchDetailQuery.value.game_id === +content.game_id
    ) {
      proxy.mittBus.emit('changeMatchDetailBus', {
        pushType: 'point_display_on',
        data: Object.assign(content, { add: isAdd }),
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'point_display_on',
        data: content,
      })
    }
    socketPushChange('hideChange', content)
  }

  /**
   * @description 视频推送
   */
  function live_video_url_change(content: any) {
    if (content.game_id && content.has_push_m) {
      pushAnimationInfo({
        game_id: Number(content.game_id),
        has_push_pc: content.has_push_m,
      })
    }
    if (content.game_id && content.media_content) {
      pushVideoInfo({
        game_id: Number(content.game_id),
        url: content.media_content,
      })
    }
  }
  /***
   * @description 单边锁
   */
  function bet_item_single_lock(content: any) {
    if (['side'].includes(content.action) && content.point_id) {
      pushOddInfo({ point_id: content.point_id, status: content.status })
    }
    else {
      bet_item_all_lock(content)
      socketPushChange('statusChange', content)
    }
  }

  /***
   * @description 全锁
   */
  function bet_item_all_lock(content: any) {
    if (
      route.name === 'MatchList'
      && ['today', 'fix', 'live', 'parlay'].includes(currentHandicap.value)
    ) {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'bet_item_all_lock',
        data: content,
      })
    }
    if (
      matchDetailQuery.value.show
      && matchDetailQuery.value.game_id === +content.game_id
    ) {
      proxy.mittBus.emit('changeMatchDetailBus', {
        pushType: 'bet_item_all_lock',
        data: content,
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'bet_item_all_lock',
        data: content,
      })
    }
  }

  /**
   * @description
   */
  function team_score_set(content: any) {
    if (
      route.name === 'MatchList'
      && ['today', 'fix', 'live', 'parlay'].includes(currentHandicap.value)
    ) {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'team_score_set',
        data: content,
      })
    }
    if (
      matchDetailQuery.value.show
      && matchDetailQuery.value.game_id === +content.game_id
    ) {
      proxy.mittBus.emit('changeMatchDetailBus', {
        pushType: 'team_score_set',
        data: content,
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'team_score_set',
        data: content,
      })
    }
  }

  function game_play_set_recommend(content: any) {
    if (
      route.name === 'MatchList'
      && ['today', 'fix', 'live', 'parlay'].includes(currentHandicap.value)
    ) {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'game_play_set_recommend',
        data: content,
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'game_play_set_recommend',
        data: content,
      })
    }
  }

  function champion_point_display(content: any, isAdd = false) {
    if (route.name === 'MatchList' && currentHandicap.value === 'champion') {
      proxy.mittBus.emit('championUpdateBus', {
        pushType: 'point_display_on',
        data: Object.assign(content, { show: isAdd }),
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'point_display_on',
        data: content,
      })
    }
  }

  function handicap_to_live(content: any) {
    if (
      route.name === 'MatchList'
      && ['today', 'fix', 'live', 'parlay'].includes(currentHandicap.value)
    ) {
      proxy.mittBus.emit(`${currentHandicap.value}UpdateBus`, {
        pushType: 'handicap_to_live',
        data: content,
      })
    }
    if (
      matchDetailQuery.value.show
      && matchDetailQuery.value.game_id === +content.game_id
    ) {
      proxy.mittBus.emit('changeMatchDetailBus', {
        pushType: 'handicap_to_live',
        data: content,
      })
    }
    if (route.name === 'LeaguePage') {
      proxy.mittBus.emit('leagueUpdateBus', {
        pushType: 'handicap_to_live',
        data: content,
      })
    }
  }

  return { joinRoom, leaveRoom }
}
