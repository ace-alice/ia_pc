<!-- eslint-disable vue/require-explicit-emits -->
<script lang="ts">
export default {
  name: 'GamePlayers',
  props: ['bracketNode', 'highlightedPlayerId'],
  computed: {
    matchProperties() {
      return Object.assign({}, this.bracketNode, {
        games: undefined,
        hasParent: undefined,
      })
    },
  },
  methods: {
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
  <div class="vtb-item-players">
    <div class="player-extension-top">
      <slot name="player-extension-top" :match="matchProperties" />
    </div>

    <div>
      <div
        class="vtb-player vtb-player1" :class="[
          getPlayerClass(bracketNode.player1),
        ]"
        @mouseover="highlightPlayer(bracketNode.player1.id)"
        @mouseleave="unhighlightPlayer"
      >
        <slot :player="bracketNode.player1" name="player" />
      </div>

      <div
        class="vtb-player vtb-player2" :class="[
          getPlayerClass(bracketNode.player2),
        ]"
        @mouseover="highlightPlayer(bracketNode.player2.id)"
        @mouseleave="unhighlightPlayer"
      >
        <slot :player="bracketNode.player2" name="player" />
      </div>
    </div>
    <div class="player-extension-bottom">
      <slot name="player-extension-bottom" :match="matchProperties" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vtb-item-players {
  background-color: #00000000;
  position: relative;
  .vtb-player {
    background: #1a1f26;
    border-radius: 8px;
    height: 36px;
    width: 188px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & + .vtb-player {
      margin-top: 6px;
    }
  }
}
.player-extension-top,
.player-extension-bottom {
  width: 200px;
  min-height: 30px;
  position: absolute;
}
.player-extension-top {
  top: -30px;
}
</style>
