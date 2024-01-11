<script lang="ts" setup name="RulesBox">
import { ElScrollbar } from 'element-plus'
import { useI18n } from 'vue-i18n'
import ruleHook from './game-rule/ruleHook'

const { t } = useI18n()

const { currentRules } = ruleHook()

const ruleLabel = [
  { label: t('basic_rules'), com: 'rule0' },
  { label: t('settlement_rules'), com: 'rule1' },
  { label: t('live_rules'), com: 'rule2' },
  { label: t('parlay_rules'), com: 'rule3' },
  { label: t('play_rules'), com: 'rule4' },
]

// const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

const currentTabId = ref<string>('rule0')

function changeCurrentTabId(value: string) {
  currentTabId.value = value
}
</script>

<template>
  <div class="RulesBox tab-box">
    <div class="box-header">
      <div class="rule-box-tabs">
        <div
          v-for="tab in ruleLabel"
          :key="tab.com"
          class="rule-box-tab"
          :class="{ active: String(tab.com) === String(currentTabId) }"
          @click.stop="changeCurrentTabId(tab.com)"
        >
          {{ tab.label }}
        </div>
      </div>
    </div>
    <div class="box-body">
      <ElScrollbar :key="currentTabId">
        <component :is="currentRules[currentTabId]" class="rule-content" />
      </ElScrollbar>
    </div>
    <div class="box-footer">
      <div />
      <div>{{ $t("above_rules") }}</div>
    </div>
  </div>
</template>

<!-- suppress CssInvalidPseudoSelector -->
<style lang="scss" scoped>
.RulesBox {
  .box-body {
    padding: 12px 0;
    overflow: hidden;
    &:deep(.el-scrollbar) {
      padding: 0 12px;
      .el-scrollbar__view {
        min-height: 100%;
        background-color: #262d34;
      }
    }
    .rule-content {
      padding: 24px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .box-header {
    .rule-box-tabs {
      display: flex;
      .active {
        color: #fe5e00 !important;
      }
      .rule-box-tab {
        cursor: url("@/assets/icons/home_mouse.png"), auto;

        font-size: 16px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.5);
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.06);
          color: #ffffff;
        }
        & + .rule-box-tab {
          margin-left: 48px;
        }
      }
    }
  }
  .box-footer {
    font-size: 12px;
    color: #ffffff;
    div:nth-child(1) {
      height: 24px;
      width: 24px;
      border: 1px solid #ffffff20;
      border-radius: 6px;
      margin-right: 8px;
      position: relative;
      &:after {
        position: absolute;
        content: "";
        font-size: 24px;
        height: 22px;
        width: 22px;
        background-image: url("@/assets/icons/choose.png");
        background-size: 100% 100%;
      }
    }
  }
}
</style>
