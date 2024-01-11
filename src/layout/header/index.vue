<!-- suppress ALL -->
<script lang="ts">
import UserInfoItem from './components/UserInfoItem.vue'
import NoticeItem from './components/NoticeItem.vue'
import DuanWuBox from './components/DuanWuBox.vue'

export default {
  name: 'HeaderBox',
  components: { UserInfoItem, NoticeItem, DuanWuBox },
  setup() {
    const isEnvTest = computed(() => {
      return import.meta.env.MODE === 'test'
    })
    return { isEnvTest }
  },
}
</script>

<template>
  <div class="header">
    <div class="center-box">
      <NoticeItem />
      <!-- <ShortcutMenu /> -->
    </div>
    <div class="right-box">
      <DuanWuBox />
      <UserInfoItem />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: var(--color-bg-primary);
  height: 74px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4% 0 0;
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
  }

  .center-box {
    flex-grow: 1;
    overflow: hidden;
  }

  .right-box {
    flex-shrink: 0;
  }
}
</style>
