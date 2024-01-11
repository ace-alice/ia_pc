import { useI18n } from 'vue-i18n'

export default function (gameType: number) {
  const { t } = useI18n()
  enum gameTypeForListCode {
    'lolNearTemplate' = 1,
    'dotaNearTemplate' = 2,
    'aovNearTemplate' = 16,
    'csgoNearTemplate' = 3,
  }

  enum gameTypeForWinLoseCode {
    'lolWinLoseTemplate' = 1,
    'dotaWinLoseTemplate' = 2,
    'aovWinLoseTemplate' = 16,
    'csgoWinLoseTemplate' = 3,
  }

  enum templateHistoryCode {
    'lolTemplate' = 1,
    'dotaTemplate' = 2,
    'aovTemplate' = 16,
    'csgoTemplate' = 3,
  }

  const templateWinLose: any = {
    lolWinLoseTemplate: [
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
    ],
    dotaWinLoseTemplate: [
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
    ],
    aovWinLoseTemplate: [
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
    ],
    csgoWinLoseTemplate: [
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
      { win_key: 'win', lose_key: 'lose', win: 0, lose: 0 },
    ],
  }

  const templateHistory: any = {
    lolTemplate: [
      { data_name: t('kill_num_26_5'), data_key: 'kill_num_26_5' },
      { data_name: t('time_num_33'), data_key: 'time_num_33' },
    ],
    dotaTemplate: [
      { data_name: t('kill_num_47_5'), data_key: 'kill_num_47_5' },
      { data_name: t('time_num_35'), data_key: 'time_num_35' },
    ],
    aovTemplate: [
      { data_name: t('kill_num_23_5'), data_key: 'kill_num_23_5' },
      { data_name: t('time_num_19'), data_key: 'time_num_19' },
    ],
    csgoTemplate: [
      { data_name: t('round_num_26_5'), data_key: 'round_num_26_5' },
      { data_name: t('overtime_rate'), data_key: 'overtime_rate' },
    ],
  }

  const templateList: any = {
    lolNearTemplate: [
      {
        data_name: t('global_win_rate'),
        data_key: 'win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('single_win_rate'),
        data_key: 'race_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_blood_rate'),
        data_key: 'first_blood_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_turret_rate'),
        data_key: 'first_turret_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_inhibitors_rate'),
        data_key: 'first_inhibitors_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('five_kills_rate'),
        data_key: 'five_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('ten_kills_rate'),
        data_key: 'ten_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_drakes_rate'),
        data_key: 'first_drakes_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_nashors_rate'),
        data_key: 'first_nashors_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('kill_avg'),
        data_key: 'kill_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('duration_avg'),
        data_key: 'duration_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: false,
        is_time: true,
        team1_value: 0,
        team2_value: 0,
      },
    ],

    dotaNearTemplate: [
      {
        data_name: t('global_win_rate'),
        data_key: 'win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('single_win_rate'),
        data_key: 'race_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_blood_rate'),
        data_key: 'first_blood_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_turret_rate'),
        data_key: 'first_turret_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_barrack_rate'),
        data_key: 'first_barrack_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('five_kills_rate'),
        data_key: 'five_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('ten_kills_rate'),
        data_key: 'ten_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_dota_nashors_rate'),
        data_key: 'first_nashors_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('kill_avg'),
        data_key: 'kill_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('duration_avg'),
        data_key: 'duration_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: false,
        is_time: true,
        team1_value: 0,
        team2_value: 0,
      },
    ],

    csgoNearTemplate: [
      {
        data_name: t('global_win_rate'),
        data_key: 'win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('single_win_rate'),
        data_key: 'race_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_scgo_blood_rate'),
        data_key: 'first_blood_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('r_16_win_rate'),
        data_key: 'r_16_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('t_win_rate'),
        data_key: 't_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('ct_win_rate'),
        data_key: 'ct_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('five_kills_scgo_rate'),
        data_key: 'five_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('ten_kills_scgo_rate'),
        data_key: 'ten_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('kill_avg'),
        data_key: 'kill_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('round_num_26_5'),
        data_key: 'round_num_26_5',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        is_time: true,
        team1_value: 0,
        team2_value: 0,
      },
    ],

    aovNearTemplate: [
      {
        data_name: t('global_win_rate'),
        data_key: 'win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('single_win_rate'),
        data_key: 'race_win_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_blood_rate'),
        data_key: 'first_blood_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_turret_rate'),
        data_key: 'first_turret_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('five_kills_rate'),
        data_key: 'five_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('ten_kills_rate'),
        data_key: 'ten_kills_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_aov_drakes_rate'),
        data_key: 'first_drakes_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('first_aov_nashors_rate'),
        data_key: 'first_nashors_rate',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: true,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('kill_avg'),
        data_key: 'kill_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        team1_value: 0,
        team2_value: 0,
      },
      {
        data_name: t('duration_avg'),
        data_key: 'duration_avg',
        dominant_index: 0,
        team1: 0,
        team2: 0,
        is_percentage: false,
        is_time: true,
        team1_value: 0,
        team2_value: 0,
      },
    ],
  }

  const useTemplate = computed(() => {
    return templateList[gameTypeForListCode[gameType]]
  })

  const useWinLoseTemplate = computed(() => {
    return templateWinLose[gameTypeForWinLoseCode[gameType]]
  })

  const useHistoryTemplate = computed(() => {
    return templateHistory[templateHistoryCode[gameType]]
  })

  return {
    useTemplate,
    useWinLoseTemplate,
    gameTypeForListCode,
    useHistoryTemplate,
  }
}