<script setup lang="ts" name="TwRule4"></script>

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
      <div>獨贏盤口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      關於獨贏盤口是以賽事和地圖。根據官方賽事結果，官方比分網或官方直播（錄影demo）。如該賽事局數不正確或有變化，與其他官方網站不一致，該注單視為無效返還本金。
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
      <div>讓分局盤口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      關於讓分局盤口根據官方賽事結果，官方比分網或官方直播（錄影demo）。讓分局包括地圖，局數，擊殺。如該賽事地圖不正確或有變化，與其他官方網站不一致，該注單視為無效返還本金。。
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
      <div>僅提供勝負選項的盤口遇到最終比賽結果為平局時</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      當僅提供勝負選項的盤口遇到最終比賽結果為平局時（若有加時，則最後一個加時的結果視為最終比賽結果），則該盤口的所有注單無效並予以退款。
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
      <div>若賽後沒有統計面板</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      英雄聯盟（LOL）的比賽中，會根據完賽後的時候統計面板所顯示的結果派彩。若沒有賽後統計面板，我們會根據官方網站結果官方直播（錄影demo）進行結算。基於不同的地區賽後統計面板的編排和資訊顯示可能會有所不同。
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
      <div>全域獲勝者2項盤口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      情況1：下注存在平局的比賽（如BO2只打兩局、不含加時的BO1）。玩家需要預測會一方勝利，不會有打平的情況，才可贏得獎金。如果結果為平局，返還本金。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      情况2：必定會分出勝負的比賽。玩家需預測誰將會贏得這場比賽，任何形式的加時會被計算在內。
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
      <div>1X2勝平負3項盤口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      此類型的下注適用於存在平局的比賽（如BO2只打兩局、不含加時的BO1），玩家需正確預測比賽結果才可贏得獎金。
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
      <div>讓分</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      預測計算讓分數後的賽果，任何形式的加時或補時均計算在內。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、讓球數為整數，比如“-1，-2，-3”等，將讓球方的得分減去讓球數，如果比受讓方的得分大則為贏，比它小則為輸，與之相等則不贏不輸。列如：A-1和B+1，兩隊的賽果比分為A=3：B=2，因為A(3)-1=2：B(2)，所以AB兩隊均不贏不輸。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、生死盤:讓球數為半數，比如“-0.5，-1.5，-2.5，”等，將讓球方的得分減去讓球數，如果比受讓方的得分大則為贏，比它小則為輸。例如：A-1.5和B+1.5，兩隊的賽果比分為A=3：B=2，因為A(3)-1.5=1.5
      &lt; B(2)，所以B隊贏，A隊輸。
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
      預測比賽總得分大於或小於盤口分值，任何形式的加時或補時均計算在內。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、整數盤:
      盤口分值為整數，比如“26，27，28”等，將比賽總進球數減去盤口分值，結果為正數則大於贏，結果為負數則小於贏，結果為零則不贏不輸。例如：大於26和小於26，如果兩隊總進球數為26，因為26-26=0，所以大於和小於均不贏不輸。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、生死盤：盤口分值為半數，比如“26.5，27.5，28.5，”等，將比賽總進球數減去盤口分值，結果為正數則大於贏，結果為負數則小於贏。例如：大於26.5和小於26.5，如果兩隊總進球數為26，因為26-26.5=-0.5，所以小於26.5贏，大於26.5輸。
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
      <div>單雙</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      預測在比賽最終結果數量的單雙，任何形式的額外時間或加時賽均計算在內。（如結果出現為0，結算為偶數“雙”）。
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
      <div>時間盤</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      （比賽時長/事件時間）-
      單場比賽時間/比賽事件發生時間；單場比賽時間以遊戲結束後官方計分板上時間為准，如未提供計分板再以遊戲內的計時為准；事件時間盤口將按實際產生時間計算；以上2種時間盤口時長大於或等於盤口標注時間計算為大於。
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
      <div>總擊殺數</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      單場遊戲內擊殺數量；以遊戲結束後官方計分板上數量為准，如未提供計分板再以遊戲內顯示為准。
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
      <div>摧毀防禦塔數量</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      地圖中所有防禦塔如果參賽隊伍在比賽結束前投降，則發起投降前摧毀的所有目標均計入。小兵或反補摧毀的目標也將被計入。
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
      <div>摧毀首座防禦塔位置</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      指防禦塔的位置，包括上路/中路/下路，總共6座一層塔。
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
      <div>擊殺數</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      指參賽隊伍選手擊殺數量，以計分板為准。
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
      以計分板為依據，拿下第一份便是一血。
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
      摧毀第一座防禦塔的隊伍（若其一方隊伍反補，或被對方小兵攻破，全部投注仍視為有效）。
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
      <div>N殺</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      是指一方率先獲得版面的N次的擊殺數。列如：五殺：是指一方率先獲得5個擊殺數。
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
      <div>第N殺</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      是指那一隊剛好獲得第N次的擊殺，列如：第五次擊殺：是指哪一方獲得第五次的擊殺。
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
      <div>N分鐘前盤口</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      遊戲及時剛好達到N分鐘不列入計算。
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
        <div>賽中掉線线</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        情況A：若一血產生前如發生掉線情況，但在遊戲進行中重新連接成功，即官方認可的所有有效賽果，均將正常結算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        情況B：若一血產生後如發生掉線情況，即官方認可的所有有效賽果，均將正常結算。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        情況C：一血產生前如發生某一方掉線並且無法重新連接成功，並且在接下來的遊戲時間持續無法重連成功直至遊戲結束，為保證遊戲的公平公正原則，該場賽事注單無效。
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
        <div>輔助位獲得一血</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        是指戰隊資訊中心的4和5號位置能否獲得一血。即使由輔助來獲得一血，只要計分板有顯示輔助位元就算‘是’。
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
        <div>三分鐘前是否獲得一血</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        三分鐘前是否發生第一次擊殺（不包含03:00）。
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
        <div>是否出現超級兵</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        單隊六座兵營都被摧毀則計算為“是”。
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
        <div>獲得第N次擊殺隊伍</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        是指哪一方剛好獲得第N次的擊殺，而非率先獲得N殺。 （
        例如：獲得第二十次擊殺隊伍，是指哪一方獲得第二十次的擊殺）。
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
        <div>基地爆炸時總英雄存活總數</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根據官方賽事遊戲視頻，主遺跡血量點完後的“第一瞬間”計算獲勝方與劣勢方最後存活英雄總數。（主遺跡血量點完後的“第一瞬間”
        仍在讀秒的英雄，皆為未復活）。
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
      <div>英雄聯盟</div>
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
        <div>選手在遊戲中所處位置</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        上路/中路/打野/輔助/ADC，以實際遊戲內容為準。
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
        <div>峽谷先鋒</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        只計算擊殺，只要是此隊伍擊殺就為勝利。
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
        <div>總推塔數單雙</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        以比賽結束完場計分板為准，兩支隊伍總推塔總數（包括門牙塔）；水晶兵營和大水晶（基地）不算在內。
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
        <div>所有小龍盤口結算定義</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        只計算元素亞龍，不計算遠古巨龍。
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
        <div>兩隊均擊殺男爵</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        紅藍雙方均擊殺過大龍
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
        <div>摧毀水晶總數大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        摧毀重生的水晶不會被重複計算在摧毀數內。
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
        <div>摧毀最多水晶</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        同個水晶被摧毀後，復活再被摧毀，總數只計算為獲得1個水晶（同個水晶只計算一次，主水晶不作計算）
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
        <div>第一滴血盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        比賽中率先擊殺對方為勝方。以計分板為准。
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
        <div>所有基於時間的盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        結算注單：是根據遊戲進度時間來結算的,
        賽事結果根據官方網站的分數和賽後統計面板、官方直播 (錄影demo）進行結算。
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
        <div>競猜第N條元素龍屬性</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        崖壁上會顯示下一條元素龍的屬性，只要預告了就是代表已經有結果了。根據官方網站結果進行結算或官方直播(錄影demo）。
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
        <div>遠古巨龍被擊殺</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        如該場賽事未有巨龍被擊殺，根據雙方隊伍0:0
        結果為“否”結算，賽事結果根據官方網站的分數和賽後統計面板，官方直播
        (錄影demo）進行結算。
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
        <div>獲得龍魂</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        一局比賽中是否有隊伍獲取龍魂（一方隊伍先獲得四條小龍即為龍魂，第三條小龍屬性既是龍魂屬性）。
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
        <div>基地摧毀時總英雄存活大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根據官方賽事遊戲視頻，主水晶血量點完後的“第一瞬間”計算獲勝方最後存活英雄總數。（主水晶血量點完後的“第一瞬間”
        仍在讀秒的英雄，皆為未復活）。
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
        <div>總殺 大/小（00:00-10:00分鐘，指定時間段內）盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        有效注單為規定的是時間段內，比賽的時間若未超過規定的時間段，例如15:00分鐘，則0-15分鐘這個時間區域就視為無效，根據遊戲內的計時器，賽事結果根據官方網站的分數或官方直播
        (錄影demo）進行結算。
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
        <div>擊殺尾數總數大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        總殺雙方尾數相加與盤口開出的數值比較大小。例如賽果為7:15（總殺雙方尾數相加
        7+5 =12 ）賽事結果根據官方網站的分數和賽後統計面板，API 或官方直播
        (錄影demo）進行結算。
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
        <div>第一回合手槍局獲勝</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        贏取第一回合手槍局的隊伍。
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
        <div>首先贏得五/十個回合</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        最先贏取5/10個回合的隊伍。
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
        <div>單雙類盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        賽果計算為“0”時，算作雙數。
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
        <div>第N回合爆頭總數大小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        只有出現爆頭圖示/提示的才算爆頭擊殺，該回合內任何狀況時間段所產生的爆頭都計算在內。
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
        <div>第N回合獲勝方式</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        勝利方式分為四種，分別為
        時間耗盡/炸彈爆炸/拆除炸彈/全殲對方，該玩法的判定方式是該回合以何種方式獲勝。
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
        <div>首殺</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        必須擊殺對方選手才視為有效，如果是自殺或被隊友擊殺，則判定該回合內不存在首殺，相關投注退回本金。
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
        <div>首被殺</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        該回合內首個被殺的隊員，任何死亡方式都被計算在內。
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
        <div>手槍局及第N回合總擊殺數 大/小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根據官方網站的分數或官方直播(錄影demo）進行結算。若被炸彈炸死，不計算在總殺內。
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
        <div>擊殺盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根據官方網站的分數或官方直播(錄影demo）進行結算。
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
        <div>手槍局和第N回合爆頭總數 大/小</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        根據官方網站結果，官方直播(錄影demo）進行結算。
        若被自己的團隊成員爆頭殺死都被視為爆頭總數。
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
        <div>CSGO回合定義</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        新的回合進入購買倒計時，上一回合才算結算。
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
        <div>上半場獲勝</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在比賽中上半場（前十五回合）獲得較高比分的隊伍獲勝。
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
        <div>是否出現刀殺</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        刀戰選邊及熱身期間均不計算為有效，若被友軍刀殺，也計算為“是”。
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
        <div>是否出現手雷擊殺</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        選邊及熱身期間均不計算為有效，只計算“手雷”擊殺，“燃燒彈”及其他投擲物不計算入內，若被友軍手雷擊殺，也將計算為“是”。
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
        <div>獲得最多助攻的選手</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在比賽中，所有類型的敵方擊殺助攻都計算在內，閃光彈助攻不計算入內。
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
      <div>王者榮耀</div>
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
        <div>防禦塔摧毀盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        王者榮耀比賽中首防禦塔摧毀方必須比對方先摧毀對應的防禦塔才計算以內。注：水晶基地不計算在內。
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
        <div>第一血盤口</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        王者榮耀比賽中率先擊殺對方為勝方。（以積分面板為准）。
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
        <div>2分30秒前是否擊殺首條暴君</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        （02:30則算否) 。
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
        <div>擊殺主宰總數單雙</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有主宰都計算在內，包括先知主宰及暗影主宰。
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
        <div>擊殺暴君總數單雙</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        所有暴君都計算在內，包括暴君及暗影暴君。
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
      <div>絕地求生</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      積分排名A vs
      B：絕地求生積分是由生存分數加擊殺分數組成，當兩隊積分排名相同時，擊殺分數高的隊伍獲勝，如兩支隊伍積分相同且擊殺相同的情況下，生存排名靠前的隊伍獲勝。
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
      />
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
        <div>上半場獲勝</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        在比賽中上半場 (前十二回合)獲得較高的比分隊伍獲勝
      </div>
    </div>
    <!-- 叶尾 -->
  </div>
</template>
