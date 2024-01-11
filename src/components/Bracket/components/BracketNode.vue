<!-- eslint-disable vue/require-explicit-emits -->
<script lang="ts">
import GamePlayers from './GamePlayers.vue'
export default {
  name: 'BracketNode',
  components: { GamePlayers },
  props: ['bracketNode', 'highlightedPlayerId'],
  computed: {
    playersArePresent() {
      return this.bracketNode.player1 && this.bracketNode.player2
    },
  },
  methods: {
    getBracketNodeClass(bracketNode: any) {
      if (
        (bracketNode.games[0] && bracketNode.games[0].player1.id != null)
        || (bracketNode.games[1] && bracketNode.games[1].player1.id != null)
      ) {
        return 'vtb-item-parent'
      }

      if (bracketNode.hasParent) {
        return 'vtb-item-child'
      }

      return ''
    },
    getPlayerClass(player: any) {
      if (player.winner === null || player.winner === undefined) {
        return ''
      }

      let clazz = player.winner ? 'winner' : 'defeated'

      if (this.highlightedPlayerId === player.id) {
        clazz += ' highlight'
      }

      return clazz
    },
    highlightPlayer(playerId: any) {
      this.$emit('onSelectedPlayer', playerId)
    },
    unhighlightPlayer() {
      this.$emit('onDeselectedPlayer')
    },
  },
}
</script>

<template>
  <div v-if="playersArePresent" class="vtb-item">
    <div :class="getBracketNodeClass(bracketNode)">
      <GamePlayers
        :bracket-node="bracketNode"
        :highlighted-player-id="highlightedPlayerId"
        @onSelectedPlayer="highlightPlayer"
        @onDeselectedPlayer="unhighlightPlayer"
      >
        <template #player-extension-top="{ match }">
          <slot name="player-extension-top" :match="match" />
        </template>
        <template #player="{ player }">
          <slot name="player" :player="player" />
        </template>
        <template #player-extension-bottom="{ match }">
          <slot name="player-extension-bottom" :match="match" />
        </template>
      </GamePlayers>
    </div>

    <div
      v-if="
        (bracketNode.games[0] && bracketNode.games[0].player1.id != null)
          || (bracketNode.games[1] && bracketNode.games[1].player1.id != null)
      "
      class="vtb-item-children"
    >
      <div
        v-if="bracketNode.games[0] && bracketNode.games[0].player1.id != null"
        class="vtb-item-child"
      >
        <bracket-node
          :bracket-node="bracketNode.games[0]"
          :highlighted-player-id="highlightedPlayerId"
          @onSelectedPlayer="highlightPlayer"
          @onDeselectedPlayer="unhighlightPlayer"
        >
          <template #player-extension-top="{ match }">
            <slot name="player-extension-top" :match="match" />
          </template>
          <template #player="{ player }">
            <slot name="player" :player="player" />
          </template>
          <template #player-extension-bottom="{ match }">
            <slot name="player-extension-bottom" :match="match" />
          </template>
        </bracket-node>
      </div>
      <div
        v-if="bracketNode.games[1] && bracketNode.games[1].player1.id != null"
        class="vtb-item-child"
      >
        <bracket-node
          :bracket-node="bracketNode.games[1]"
          :highlighted-player-id="highlightedPlayerId"
          @onSelectedPlayer="highlightPlayer"
          @onDeselectedPlayer="unhighlightPlayer"
        >
          <div class="player-extension-top" />
          <template #player="{ player }">
            <slot name="player" :player="player" />
          </template>
          <template #player-extension-bottom="{ match }">
            <div class="player-extension-bottom">
              <slot name="player-extension-bottom" :match="match" />
            </div>
          </template>
        </bracket-node>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vtb-item {
  display: flex;
  flex-direction: row-reverse;
}

.vtb-item p {
  padding: 20px;
  margin: 0;
  background-color: #999999;
}

.vtb-item-parent {
  position: relative;
  margin-left: 40px;
  display: flex;
  align-items: center;
}

.vtb-item-players {
  flex-direction: column;
  background-color: #999999;
  margin: 0;
}

.vtb-item-players .vtb-player {
  padding: 10px;
}

.vtb-item-players .winner {
  background-color: darkgreen;
  color: azure;
}

.vtb-item-players .defeated {
  opacity: 0.4;
}

.vtb-item-players .winner.highlight {
  background-color: rgb(94, 160, 94);
}

.vtb-item-players .defeated.highlight {
  background-color: rgb(88, 51, 51);
}

.vtb-item-parent:before {
  content: "";
  height: 5px;
  width: 5px;
  background: #fe5e00;
  position: absolute;
  left: -2px;
  top: calc(50% - 1.5px);
  border-radius: 50%;
}

.vtb-item-parent:after {
  position: absolute;
  content: "";
  width: 21px;
  height: 1px;
  left: 0;
  top: 50%;
  color: #fe5e00;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1px;
  background-color: #fe5e00;
  transform: translateX(-100%);
  //.vtb-item-players {
  //  position: relative;
  //  /* color: var(); */
  //  &:after {
  //    content: "";
  //    height: 5px;
  //    width: 5px;
  //    background: #fe5e00;
  //    position: absolute;
  //    right: -2px;
  //    top: calc(50% - 1.5px);
  //    border-radius: 50%;
  //  }
  //  &:before {
  //    content: "";
  //    height: 5px;
  //    width: 5px;
  //    background: #fe5e00;
  //    position: absolute;
  //    left: -2px;
  //    top: calc(50% - 1.5px);
  //    border-radius: 50%;
  //  }
  //}
}

.vtb-item-children {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vtb-item-child {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}

.vtb-item-child .vtb-item-players:after {
  content: "";
  height: 5px;
  width: 5px;
  background: #fe5e00;
  position: absolute;
  right: -2px;
  top: calc(50% - 1.5px);
  border-radius: 50%;
}

.vtb-item-child:before {
  content: "";
  position: absolute;
  background-color: #fe5e00;
  right: 0;
  top: 50%;
  transform: translateX(100%);
  width: 20px;
  height: 1px;
  color: #fe5e00;
  line-height: 2px;
  padding-top: 1px;
}

.vtb-item-child:after {
  content: "";
  position: absolute;
  background-color: #fe5e00;
  right: -20px;
  height: calc(50% + 23px);
  width: 1px;
  top: 50%;
}

.vtb-item-child:last-child:after {
  transform: translateY(-100%);
}

.vtb-item-child:only-child:after {
  display: none;
}
</style>
