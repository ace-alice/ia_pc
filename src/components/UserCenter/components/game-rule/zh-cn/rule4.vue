<script setup lang="ts" name="CnRule4"></script>

<template>
  <div
    style="
      background: #262d34;
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      padding: 24px;
    "
  >
    <div
      style="display: flex; align-items: center; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        1
      </div>
      <div>独赢盘口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      关于独赢盘口是以赛事和地图。根据官方赛事结果，官方比分网或官方直播（录像demo）。如该赛事局数不正确或有变化，与其他官方网站不一致，该注单视为无效返还本金。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        2
      </div>
      <div>让分局盘口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      关于让分局盘口根据官方赛事结果，官方比分网或官方直播（录像demo）。让分局包括地图，局数，击杀。如该赛事地图不正确或有变化，与其他官方网站不一致，该注单视为无效返还本金。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        3
      </div>
      <div>仅提供胜负选项的盘口遇到最终比赛结果为平局时</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      当仅提供胜负选项的盘口遇到最终比赛结果为平局时（若有加时，则最后一个加时的结果视为最终比赛结果），则该盘口的所有注单无效并予以退款。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        4
      </div>
      <div>若赛后没有统计面板</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      英雄联盟（LOL）的比赛中，会根据完赛后的时候统计面板所显示的结果派彩。若没有赛后统计面板，我们会根据官方网站结果官方直播（录像demo）进行结算。基于不同的地区赛后统计面板的编排和信息显示可能会有所不同。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        5
      </div>
      <div>全局获胜者2项盘口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      情况1：下注存在平局的比赛（如BO2只打两局、不含加时的BO1）。玩家需要预测会一方胜利，不会有打平的情况，才可赢得奖金。如果结果为平局，返还本金。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      情况2：必定会分出胜负的比赛。玩家需预测谁将会赢得这场比赛，任何形式的加时会被计算在内。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        6
      </div>
      <div>1X2胜平负3项盘口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      此类型的下注适用于存在平局的比赛（如BO2只打两局、不含加时的BO1），玩家需正确预测比赛结果才可赢得奖金。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        7
      </div>
      <div>让分</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      预测计算让分数后的赛果，任何形式的加时或补时均计算在内。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、整数盘:让球数为整数，比如"-1，-2，-3"等，将让球方的得分减去让球数，如果比受让方的得分大则为赢，比它小则为输，与之相等则不赢不输。列如：A-1和B+1，两队的赛果比分为A=3：B=2，因为A(3)-1=2：B(2)，所以AB两队均不赢不输。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、生死盘:让球数为半数，比如"-0.5，-1.5，-2.5，"等，将让球方的得分减去让球数，如果比受让方的得分大则为赢，比它小则为输。例如：A-1.5和B+1.5，两队的赛果比分为A=3：B=2，因为A(3)-1.5=1.5&lt;
      B(2)，所以B队赢，A队输。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        8
      </div>
      <div>大小</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      预测比赛总得分大于或小于盘口分值，任何形式的加时或补时均计算在内。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、整数盘:盘口分值为整数，比如"26，27，28"等，将比赛总进球数减去盘口分值，结果为正数则大于赢，结果为负数则小于赢，结果为零则不赢不输。例如：大于26和小于26，如果两队总进球数为26，因为26-26=0，所以大于和小于均不赢不输。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、生死盘:盘口分值为半数，比如"26.5，27.5，28.5，"等，将比赛总进球数减去盘口分值，结果为正数则大于赢，结果为负数则小于赢。例如：大于26.5和小于26.5，如果两队总进球数为26，因为26-26.5=-0.5，所以小于26.5赢，大于26.5输。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        9
      </div>
      <div>单双</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      预测在比赛最终结果数量的单双，任何形式的额外时间或加时赛均计算在内。（如结果出现为0，结算为偶数"双"）。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        10
      </div>
      <div>时间盘</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      （比赛时长/事件时间）-
      单场比赛时间/比赛事件发生时间；单场比赛时间以游戏结束后官方计分板上时间为准，如未提供计分板再以游戏内的计时为准；事件时间盘口将按实际产生时间计算；以上2种时间盘口时长大于或等于盘口标注时间计算为大于。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        11
      </div>
      <div>总击杀数</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      单场游戏内击杀数量；以游戏结束后官方计分板上数量为准，如未提供计分板再以游戏内显示为准。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        12
      </div>
      <div>摧毁防御塔数量</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      地图中所有防御塔如果参赛队伍在比赛结束前投降，则发起投降前摧毁的所有目标均计入。小兵或反补摧毁的目标也将被计入。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        13
      </div>
      <div>摧毁首座防御塔位置</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      指防御塔的位置，包括上路/中路/下路，总共6座一层塔。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        14
      </div>
      <div>击杀数</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      指参赛队伍选手击杀数量，以计分板为准。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        15
      </div>
      <div>一血</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      以计分板为依据，拿下第一份便是一血。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        16
      </div>
      <div>一塔</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      摧毁第一座防御塔的队伍（若其一方队伍反补，或被对方小兵攻破，全部投注仍视为有效）。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        17
      </div>
      <div>N杀</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      是指一方率先获得版面的N次的击杀数。列如：五杀：是指一方率先获得5个击杀数。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        18
      </div>
      <div>第N杀</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      是指那一队刚好获得第N次的击杀，列如：第五次击杀：是指哪一方获得第五次的击杀。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        19
      </div>
      <div>N分钟前盘口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      游戏及时刚好达到N分钟不列入计算。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        一
      </div>
      <div>DOTA 2</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="padding-left: 14px">
      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          1
        </div>
        <div>赛中掉线</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        情况A：若一血产生前如发生掉线情况，但在游戏进行中重新连接成功，即官方认可的所有有效赛果，均将正常结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        情况B：若一血产生后如发生掉线情况，即官方认可的所有有效赛果，均将正常结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        情况C：一血产生前如发生某一方掉线并且无法重新连接成功，并且在接下来的游戏时间持续无法重连成功直至游戏结束，为保证游戏的公平公正原则，该场赛事注单无效。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          2
        </div>
        <div>辅助位获得一血</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        是指战队信息中心的4和5号位置能否获得一血。即使由辅助来获得一血，只要计分板有显示辅助位就算‘是’。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          3
        </div>
        <div>三分钟前是否获得一血</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        三分钟前是否发生第一次击杀（不包含03:00）。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          4
        </div>
        <div>是否出现超级兵</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        单队六座兵营都被摧毁则计算为"是"。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          5
        </div>
        <div>获得第N次击杀队伍</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        是指哪一方刚好获得第N次的击杀，而非率先获得N杀。（
        例如：获得第二十次击杀队伍，是指哪一方获得第二十次的击杀）。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          6
        </div>
        <div>基地爆炸时总英雄存活总数</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根据官方赛事游戏视频，主遗迹血量点完后的"第一瞬间"计算获胜方与劣势方最后存活英雄总数。（主遗迹血量点完后的"第一瞬间"
        仍在读秒的英雄，皆为未复活）。
      </div>
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        二
      </div>
      <div>英雄联盟</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="padding-left: 14px">
      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          1
        </div>
        <div>选手在游戏中所处位置</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        上路/中路/打野/辅助/ADC，以实际游戏内容为准。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          2
        </div>
        <div>峡谷先锋</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        只计算击杀，只要是此队伍击杀就为胜利。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          3
        </div>
        <div>总推塔数单双</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        以比赛结束完场计分板为准，两支队伍总推塔总数（包括门牙塔）；水晶兵营和大水晶（基地）不算在内。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          4
        </div>
        <div>所有小龙盘口结算定义</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        只计算元素亚龙，不计算远古巨龙。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          5
        </div>
        <div>两队均击杀男爵</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        红蓝双方均击杀过大龙
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          6
        </div>
        <div>摧毁水晶总数大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        摧毁重生的水晶不会被重复计算在摧毁数内。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          7
        </div>
        <div>摧毁最多水晶</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        同个水晶被摧毁后，复活再被摧毁，总数只计算为获得1个水晶（同个水晶只计算一次，主水晶不作计算）
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          8
        </div>
        <div>第一滴血盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        比赛中率先击杀对方为胜方。以计分板为准。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          9
        </div>
        <div>所有基于时间的盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        结算注单是根据游戏进度时间来结算的,
        赛事结果根据官方网站的分数和赛后统计面板、官方直播 (录像demo）进行结算。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          10
        </div>
        <div>竞猜第N条元素龙属性</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        崖壁上会显示下一条元素龙的属性，只要预告了就是代表已经有结果了。根据官方网站结果进行结算或官方直播(录像demo）。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          11
        </div>
        <div>远古巨龙被击杀</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如该场赛事未有巨龙被击杀，根据双方队伍0:0
        结果为"否"结算，赛事结果根据官方网站的分数和赛后统计面板，官方直播
        (录像demo）进行结算。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          12
        </div>
        <div>获得龙魂</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        一局比赛中是否有队伍获取龙魂（一方队伍先获得四条小龙即为龙魂，第三条小龙属性既是龙魂属性）。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          13
        </div>
        <div>基地摧毁时总英雄存活大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根据官方赛事游戏视频，主水晶血量点完后的"第一瞬间"计算获胜方最后存活英雄总数。（主水晶血量点完后的"第一瞬间"
        仍在读秒的英雄，皆为未复活）。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          14
        </div>
        <div>总杀 大/小（00:00-10:00分钟，指定时间段内）盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        有效注单为规定的是时间段内，比赛的时间若未超过规定的时间段，例如15:00分钟，则0-15分钟这个时间区域就视为无效，根据游戏内的计时器，赛事结果根据官方网站的分数或官方直播
        (录像demo）进行结算。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          15
        </div>
        <div>击杀尾数总数大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        总杀双方尾数相加与盘口开出的数值比较大小。例如赛果为7:15（总杀双方尾数相加
        7+5 =12 ）赛事结果根据官方网站的分数和赛后统计面板，API 或官方直播
        (录像demo）进行结算。
      </div>
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        三
      </div>
      <div>CSGO</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="padding-left: 14px">
      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          1
        </div>
        <div>第一回合手枪局获胜</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        赢取第一回合手枪局的队伍。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          2
        </div>
        <div>首先赢得五/十个回合</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        最先赢取5/10个回合的队伍。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          3
        </div>
        <div>单双类盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        赛果计算为"0"时，算作双数。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          4
        </div>
        <div>第N回合爆头总数大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        只有出现爆头图标/提示的才算爆头击杀，该回合内任何状况时间段所产生的爆头都计算在内。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          5
        </div>
        <div>第N回合获胜方式</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        胜利方式分为四种，分别为
        时间耗尽/炸弹爆炸/拆除炸弹/全歼对方，该玩法的判定方式是该回合以何种方式获胜。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          6
        </div>
        <div>首杀</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        必须击杀对方选手才视为有效，如果是自杀或被队友击杀，则判定该回合内不存在首杀，相关投注退回本金。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          7
        </div>
        <div>首被杀</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        该回合内首个被杀的队员，任何死亡方式都被计算在内。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          8
        </div>
        <div>手枪局及第N回合总击杀数 大/小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根据官方网站的分数或官方直播(录像demo）进行结算。若被炸弹炸死，不计算在总杀内。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          9
        </div>
        <div>击杀盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根据官方网站的分数或官方直播(录像demo）进行结算。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          10
        </div>
        <div>手枪局和第N回合爆头总数 大/小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根据官方网站结果，官方直播(录像demo）进行结算。
        若被自己的团队成员爆头杀死都被视为爆头总数。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          11
        </div>
        <div>CSGO回合定义</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        新的回合进入购买倒计时，上一回合才算结算。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          12
        </div>
        <div>上半场获胜</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在比赛中上半场（前十五回合）获得较高比分的队伍获胜。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          13
        </div>
        <div>是否出现刀杀</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        刀战选边及热身期间均不计算为有效，若被友军刀杀，也计算为"是"。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          14
        </div>
        <div>是否出现手雷击杀</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        选边及热身期间均不计算为有效，只计算"手雷"击杀，"燃烧弹"及其他投掷物不计算入内，若被友军手雷击杀，也将计算为"是"。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          15
        </div>
        <div>获得最多助攻的选手</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在比赛中，所有类型的敌方击杀助攻都计算在内，闪光弹助攻不计算入内。
      </div>
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        四
      </div>
      <div>王者荣耀</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="margin-left: 14px">
      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          1
        </div>
        <div>防御塔摧毁盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        王者荣耀比赛中首防御塔摧毁方必须比对方先摧毁对应的防御塔才计算以内。注：水晶基地不计算在内。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          2
        </div>
        <div>第一血盘口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        王者荣耀比赛中率先击杀对方为胜方。（以积分面板为准）。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          3
        </div>
        <div>2分30秒前是否击杀首条暴君</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        02:30则算否。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          4
        </div>
        <div>击杀主宰总数单双</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有主宰都计算在内，包括先知主宰及暗影主宰。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          5
        </div>
        <div>击杀暴君总数单双</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有暴君都计算在内，包括暴君及暗影暴君。
      </div>
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        五
      </div>
      <div>绝地求生</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      积分排名A vs
      B：绝地求生积分是由生存分数加击杀分数组成，当两队积分排名相同时，击杀分数高的队伍获胜，如两支队伍积分相同且击杀相同的情况下，生存排名靠前的队伍获胜。
    </div>

    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        六
      </div>
      <div>足球</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      除非另有注明，所有足球投注的结算皆以球赛所规定的完场时间90分钟为准。
    </div>

    <div style="margin-left: 14px">
      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          1
        </div>
        <div>让球盘</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        一般规则
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队在盘口指定的让球数在全场/半场/赛事某个时节赢得比赛。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        "让球盘"则定义为在比赛正式开始前，一方球队已得到另一方让的虚拟分数，以领先的情况下开始比赛。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有注单将按盘口开出的让球数在玩法的时节结束后结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        让球队（优势球队）将给出让球，让球数将显示在赔率的左侧，让球队在盘面上也会以粗型字体显示
      </div>
      <div style="padding: 14px 14px 14px 40px">
        让球盘的玩法分为以下几种：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.整数让球也或称为让‘一球’（如：-1，-2，-3，等）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.非整数让球也或称为‘半球’（如：-0.5，-1.5，-2.5，等）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c.混合以上让‘半球/一球’的方式（如：-0/0.5，-0.5/1，-1/1.5，等）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根据盘口让球信息预测最终获得胜利的球队。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        投注的结算皆以球赛所规定的完场时间90分钟为准。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在90分钟结束前取消或中断，所有注单将会被视为无效
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          2
        </div>
        <div>大小盘</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        一般规则
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测赛事总入球数将大于或小于在盘口指定的大/小盘球数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事的总入球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有注单将按盘口开出的大/小盘球数在玩法的时节结束后结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        大/小盘的玩法分为以下几种：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.大/小于‘一球’（如：2，3，4，等）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.大/小于‘半球’（如：1.5，2.5，3.5，等）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c.混合以上‘半球/一球’的方式（如：1.5/2，2.5/3，3.5/4，等）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。请参考以上范例：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.范例1：会员投注大于2.5球：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1）赛事在比分2-1时中断。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2）尽管赛事中断，但因结果已经明确并且若之后有任何潜在进球将对盘口结算裁决没有影响，所有此会员注单结算为赢。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.范例2：会员投注小于2.5球：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1）赛事在比分2-1时中断。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2）尽管赛事中断，但因结果已经明确并且若之后有任何潜在进球将对盘口结算裁决没有影响，所有此会员注单结算为输。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c.范例3：会员投注大于3.5球：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1）赛事在比分2-1时中断。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2）由于赛事在未有明确的结果能裁决会员的注单前中断，此会员的注单将被取消。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          3
        </div>
        <div>1 X 2（独赢盘）</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        一般规则
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队将在比赛胜出。盘口提供两支球队和平局为投注选项。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        投注将以0-0的比分作为计算基础（让球并不计算在内）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        独赢
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队将在90分钟比赛胜出或赛事和局。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        独赢 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有上半场的投注将以上半场45分钟赛果结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        滚球独赢
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测滚球时，哪一支球队胜出。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        投注的结算将以90分钟完场赛果为准。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        以下为滚球独赢盘范例。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.范例1：在赛事比分为阿森纳1-0曼联时，会员投注滚球独赢盘 – 阿森纳赢：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1）完场赛果为阿森纳2-1曼联。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2）因阿森纳在完场时胜出，所有投注阿森纳的注单结算为赢。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3）所有在比分1-0时投注曼联或平局的注单将结算为输。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.范例2：在赛事比分为阿森纳1-0曼联时，会员投注滚球独赢盘 –曼联赢：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1）完场赛果为阿森纳1-1曼联。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2）因完场赛果为平局，所有投注曼联以及阿森纳的注单将结算为输。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3）所有投注平局的注单将结算为赢。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        加时赛则视为一场新的赛事并且会开出加时赛盘口。投注将按加时赛时节的结果做结算。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          4
        </div>
        <div>角球</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        一般规则
      </div>
      <div style="padding: 14px 14px 14px 40px">
        被裁定但并未实际执行的角球将不予以计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        注单的结算将根据官方赛果或赛事权威机构判定的结果为准。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果角球需重新进行(例如，在禁区内犯规)，重新进行的角球仍计为同一个角球。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 让球
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟完场时间内哪一支球队在盘口指定的让球数获得最多角球。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有注单将按盘口开出的让球数在玩法的时节结束后结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 让球 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在45分钟完场时间内哪一支球队在盘口指定的让球数获得最多角球。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有注单将按盘口开出的让球数在玩法的时节结束后结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 大/小
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟后完成时间内（包括伤停补时）总获得的角球将大于或小于在盘口指定的大/小盘球数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事获得的总角球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断前已有明确结果并且之后没有任何显著会影响投注结果的情况，角球的大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 大 / 小 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在45分钟后完成时间内总获得的角球将大于或小于在盘口指定的大/小盘球数。如果赛事获得的总角球数多于盘口的大/小盘球数，则为大盘。如果少于盘口的大/小盘球数，则为小盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在上半场中断，所有注单将被视为无效，除非赛事已有明确结果并且之后角球对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在下半场中断，所有投注上半场角球大/小盘将会被视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 独赢
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队将在90分钟比赛内获得更多角球数，盘口提供两支球队和平局为投注选项。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断前已有明确结果并且之后角球对赛事没有任何影响，总角球数独赢盘注单将会被结算。若遇到任何其他情况，注单将一律被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 单 / 双
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测90分钟内赛事的总角球数是单数或双数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        若比赛没有角球，结果为0，投注‘双’注单将会盈利。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在上半场中断，所有注单将被视为无效，除非赛事已有明确结果并且之后角球对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球: 单 / 双 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测45分钟内赛事的总角球数是单数或双数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在上半场中断，所有注单将被视为无效，除非赛事已有明确结果并且之后角球对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在下半场中断，所有投注上半场角球单/双盘将会被视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        最先/最后角球
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟完场时间内，第一或最后获得角球的球队。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在获得第一个角球后中断，所有第一个角球的注单将保持有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断，所有最后一个角球的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事并没有获得角球，所有第一和最后一个角球的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        最多角球的半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟完场时间内哪个半场将会获得最多角球。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断前已有明确结果并且之后没有任何显著会影响赛事结果的情况，注单才会被结算。若遇到任何其他情况，注单将一律被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球 - X角球
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪支球队将踢进指定的角球。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        指定角球将提前提供一个或多个选择，例如，第四个角球或第四和第五个角球（各自为独立盘口）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        重踢的角球将只计算为一次。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果在踢出指定的角球之前比赛中断，该角球的投注将被视为无效。所有比赛中断之前记录的角球将视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        首个角球时间
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测获得首个角球的时间。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        选项可列为：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.赛事的第8分钟或之前。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.第9分钟后。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        出于结算的用意，赛事的第一分钟是从1秒计算到59秒。第二分钟则是从1分钟计算到1分59秒，以此类推。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        范例：如果投注首个角球时间的选项是‘赛事的第8分钟或之前’，而确实踢角球的时间为8分钟49秒，踢角球时间的范围属于‘第9分钟后’，因此投注将结算为输。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在获得第一个角球后中断，所有首个角球时间的注单将保持有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在没有获得角球前中断，所有首个角球时间的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果在90分钟完场时间内并未获得角球，所有首个角球时间的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果首个角球需重新进行，那首个角球时间将以重新进行的角球时间为准。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        15分钟角球数
      </div>
      <div style="padding: 14px 14px 14px 40px">
        依照以上主要市场陈列的15分钟规则，预测哪队将在让球，独赢，大小或单双盘口取得胜利。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球时间以开出角球的时间为准。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        角球双 - 双重机会
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在三种可能出现的赛果中选择两种进行投注;
        主场赢或打平（1和X）,客场赢或打平（2和X）或主场或客场赢（1和2）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        共有三种选择: 1 X, X 2, 1 2：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a."1" 代表: 主场赢。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b."X" 代表: 平手。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c."2" 代表: 客场赢。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          5
        </div>
        <div>牌/卡</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌：一般规则
      </div>
      <div style="padding: 14px 14px 14px 40px">
        针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        黄卡将占1分，红卡占2分。如果球员获发两张黄卡，此球员所获发的总罚牌数将计算为黄卡占1分以及红卡占2分，总分三分（第二张黄牌不被计算在内，单场赛事每个球员最高可计3分）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        注单的结算将根据官方赛果或赛事权威机构判定的结果为准。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 让球
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟完场时间内哪一支球队根据盘口让牌信息获发最多罚牌。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有注单将按盘口开出让牌信息，在相应投注类型结束后结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 让球 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在45分钟完场时间内哪一支球队在盘口指定的让球数获发最多罚牌。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有注单将按盘口开出的让球数在玩法的时节结束后结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 大 / 小
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟比赛结束后总出示的罚牌数将大于或小于在盘口指定的大/小盘牌数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果出示的总罚牌数多于盘口的大/小盘牌数，则为大盘。如果少于盘口的大/小盘牌数，则为小盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断前已有明确结果并且之后没有任何显著会影响投注结果的情况，总罚牌的大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 大 / 小 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在半场"45分钟"比赛结束后总出示的罚牌将大于或小于在盘口指定的大/小盘牌数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果出示的总罚牌数多于盘口的大/小盘牌数，则为大盘。如果少于盘口的大/小盘牌数，则为小盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在上半场中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在下半场中断，那么所有投注上半场注单均视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 独赢
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队将在90分钟比赛内获得最多罚牌，盘口提供两支球队和平局为投注选项。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 独赢 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队将在45分钟比赛内获得最多罚牌，盘口提供两支球队和平局为投注选项。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在上半场中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在下半场中断，那么所有投注上半场注单均视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 单 / 双
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测90分钟内赛事的总罚牌数是单数或双数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如无红、黄牌出现，即"0"，此局可视为平局。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌数: 单 / 双 - 上半场
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测45分钟内赛事的总罚牌数是单数或双数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在上半场中断，所有注单将会被取消，除非赛事已有明确结果并且之后罚牌对赛事没有任何影响。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在下半场中断，那么所有投注上半场注单均视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如无红、黄牌出现，即"0"，此局可视为平局。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        第一张/最后一张罚牌
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟完场时间内主队或客队里的球员是否会收到首个或最后一个罚牌（黄卡或红卡）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果两位或以上球员因一个事件获发罚牌，首先被裁判员出示黄卡或红卡的球员，将被视为"优胜者"为注单进行结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在出示首个罚牌后中断，所有首个罚牌的注单将保持有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在出示首个罚牌后中断，所有最后一个罚牌的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在没有出示任何罚牌前中断，所有首个和最后一个罚牌的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果在90分钟完场时间内并未出示任何罚牌，所有首个和最后一个罚牌的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌 – X罚牌
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪支球队将被判罚指定的罚牌。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        指定罚牌将提前提供一张或多张选择，例如，第四张罚牌或第四和第五张罚牌（各自独立的盘口）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果在指定的罚牌被记录之前比赛中断，该张罚牌的投注将被视为无效。所有比赛中断之前记录的罚牌将视为有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌最多的球队
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测哪一支球队将由获收的罚牌累积最多分数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        注单将按照90分钟完场赛事时间内所获收的黄卡和红卡累积最高分数的球队做结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        选项可列为：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.球队A
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.球队B
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c.平局
      </div>
      <div style="padding: 14px 14px 14px 40px">
        第一张罚牌时间
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测出示首个罚牌的时间。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        选项可列为：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.赛事的第8分钟或之前。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.第9分钟后。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        出于结算的用意，赛事的第一分钟是从1秒计算到59秒。第二分钟则是从1分钟计算到1分59秒，以此类推。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        范例：如果投注第一张罚牌时间的选项是‘赛事的第8分钟或之前’，而确实出示罚牌的时间为8分钟49秒，罚牌出示时间的范围属于‘第9分钟后’，因此投注将结算为输。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在出示首个罚牌后中断，所有第一张罚牌时间的注单将保持有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在没有出示任何罚牌前中断，所有第一张罚牌时间的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果在90分钟完场时间内并未出示任何罚牌，所有第一张罚牌时间的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        红卡（球员）
      </div>
      <div style="padding: 14px 14px 14px 40px">
        预测在90分钟完场时间内是否会出示红卡。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        针对非球员（例如：教练，没有比赛中替补出场的替补球员，管理人员等等）出示的任何罚牌将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在出示一个红卡后中断, 所有是否出示红卡的注单将保持有效。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在没有红卡出示前中断， 所有是否出示红卡的注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        15分钟罚牌数
      </div>
      <div style="padding: 14px 14px 14px 40px">
        依照以上主要市场陈列的15分钟规则，预测哪队将在让球，独赢，大小或单双盘口取得胜利。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        罚牌 - 双重机会
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在三种可能出现的赛果中选择两种进行投注; 主场赢或打平（1和X）,
        客场赢或打平（2和X）或主场或客场赢（1和2）。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        共有三种选择: 1 X, X 2, 1 2：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a."1" 代表: 主场赢。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b."X" 代表: 平手。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c."2" 代表: 客场赢。
      </div>

      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          6
        </div>
        <div>点球大战</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        点球大战 - 独赢
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1. 预测哪一支球队将在点球大战胜出或和局。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2. 骤死赛(第6回合起) 将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3. 点球独赢盘只计算球队在前5回合的进球。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        点球大战 - 让球
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1. 预测哪一支球队根据盘口指定的让球数在点球赛里获胜。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2. 骤死賽得分也包括在点球让球盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3. 如果赛事并未进行点球，所有注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4. 在90分钟完场时间内以及加时赛踢进的点球将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        点球大战 – 大小盘
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1. 预测点球赛总入球数将大于或小于在盘口指定的大/小盘球数。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2. 点球大小盘只以10个点球为准（每队5球）。骤死赛得分不包括在点球大小盘。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        范例：
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.利物浦 4-1托特纳姆热刺 – 大小球以5球结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.利物浦6-5托特纳姆热刺（每队踢5个点球后的结果为：利物浦4-4托特纳姆热刺）-大小盘在每队踢5个点球后的8球得分结算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事并未进行点球，所有注单将被取消。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在90分钟完场时间内以及加时赛踢进的点球将不计算在内。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如果赛事在点球赛时中断，而在赛事中断前已有明确结果并且之后没有任何显著会影响投注结果的情况，大/小盘注单才会被结算。若遇到任何其他情况，注单将一律被取消。
      </div>
    </div>
    <div
      style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
    >
      <div
        style="
          width: 24px;
          line-height: 24px;
          text-align: CENTER;
          border-radius: 8px;
          flex-shrink: 0;
          background: #000;
          margin-right: 12px;
        "
      >
        七
      </div>
      <div>CSGO2</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="padding-left: 14px">
      <div
        style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px"
      >
        <div
          style="
            width: 24px;
            line-height: 24px;
            text-align: CENTER;
            border-radius: 8px;
            flex-shrink: 0;
            background: #000;
            margin-right: 12px;
          "
        >
          1
        </div>
        <div>上半场获胜</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在比赛中上半场 (前十二回合)获得较高的比分队伍获胜
      </div>
    </div>
    <!-- 叶尾 -->
  </div>
</template>
