<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { gameInfoStore } from '@/store/gameInfo'

export default defineComponent({
  name: 'FilterCriteriaBox',
  components: {},
  emits: ['search'],
  setup(props: any, { emit }: any) {
    const i18n = useI18n()

    const formData: any = reactive({
      is_prize: -1,
      is_parlay: -1,
      game_type_id: -1,
    })

    const { gameList } = storeToRefs(gameInfoStore())

    const getprizeOptions = [
      {
        label: i18n.t('all_bets'),
        value: -1,
      },
      {
        label: i18n.t('not_clearing'),
        value: 0,
      },
      {
        label: i18n.t('clearinged'),
        value: 1,
      },
    ]

    const betTypeOptions = [
      {
        label: i18n.t('all_type'),
        value: -1,
      },
      {
        label: i18n.t('single_bet'),
        value: 0,
      },
      {
        label: i18n.t('parlay_game'),
        value: 1,
      },
    ]

    function toSearch() {
      emit('search', formData)
    }

    return { formData, betTypeOptions, gameList, getprizeOptions, toSearch }
  },
})
</script>

<template>
  <div class="FilterCriteriaBox">
    <el-select
      v-model="formData.is_prize"
      :placeholder="$t('all_bets')"
      popper-class="filter-select"
      size="small"
      @change="toSearch"
    >
      <!-- suppress JSUnresolvedVariable -->
      <el-option
        v-for="item in getprizeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="formData.is_parlay"
      :placeholder="$t('all_type')"
      popper-class="filter-select"
      size="small"
      @change="toSearch"
    >
      <!-- suppress JSUnresolvedVariable -->
      <el-option
        v-for="item in betTypeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="formData.game_type_id"
      :placeholder="$t('all_game')"
      popper-class="filter-select"
      size="small"
      @change="toSearch"
    >
      <el-option
        :label="$t('all_game')"
        :value="-1"
      />
      <!-- suppress JSUnresolvedVariable -->
      <template v-for="item in gameList" :key="item.id">
        <el-option
          v-if="+item.id !== 0"
          :label="item.game_name"
          :value="item.id"
        />
      </template>
    </el-select>
    <div class="search-box">
      <div class="search" @click.stop="toSearch">
        {{ $t('to_search') }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.FilterCriteriaBox {
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  max-width: 460px;
  min-width: 340px;
  margin-left: 16px;
  //noinspection CssInvalidPseudoSelector
  :deep(.el-select--small) {
    --el-select-border-color-hover: #ffffff00;
    width: 26%;
    flex-shrink: 0;
    padding: 0 4px;
    border-right: 1.5px solid rgba(255, 255, 255, 0.2) !important;
    .el-input {
      --el-input-bg-color: #ffffff00;
      --el-input-text-color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      border: none !important;
      .el-input__wrapper {
        box-shadow: none !important;
      }
    }
    .el-input.is-focus{
      --el-input-text-color:#ffffff;
    }
  }
  .search-box {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    .search {
      background-color: #fe5f00;
      border-radius: 25px;
      height: 26px;
      line-height: 26px;
      width: 84%;
      text-align: center;
      margin-right: 4px;
      font-size: 14px;
      color: #ffffff;
      font-weight: 500;
      cursor: url("@/assets/icons/home_mouse.png"), auto;
    }
  }
}
</style>
