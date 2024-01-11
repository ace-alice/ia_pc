<script lang="ts">
import BracketNode from './components/BracketNode.vue'
import recursiveBracket from './components/recursiveBracket'

export default {

  name: 'Bracket',
  components: {
    BracketNode,
  },
  props: ['rounds', 'flatTree'],
  data() {
    return {
      highlightedPlayerId: null,
    }
  },
  computed: {
    recursiveBracket() {
      if (this.flatTree) {
        return recursiveBracket.transformFlatTree(this.flatTree)
      }

      return recursiveBracket.transform(this.rounds)
    },
  },
  methods: {
    highlightPlayer(id: any) {
      this.highlightedPlayerId = id
    },
    unhighlightPlayer() {
      this.highlightedPlayerId = null
    },
  },
}
</script>

<template>
  <div v-if="recursiveBracket" class="vtb-wrapper">
    <BracketNode
      :bracket-node="recursiveBracket"
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
    </BracketNode>
  </div>
</template>

<style>
.vtb-wrapper {
  display: flex;
}
</style>
