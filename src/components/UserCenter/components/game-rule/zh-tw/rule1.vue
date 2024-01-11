<script setup lang="ts" name="TwRule1"></script>

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
      <div>延遲開賽</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      出於結算目的，除非相關比賽能在原定開賽時間後的12小時內確認新的開賽時間，並且在24小時內開賽，否則無證據證明比賽進行、確定未進行以及被延期的比賽將視為 無效/無結果/未參賽。 有關某一比賽隊伍/選手錦標賽晉級或奪冠的注單始終有效。
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
      <div>所列賽事隊伍資訊不正確</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      如果所列賽事隊伍資訊不正確，所有投注將視為無效。如果選手/戰隊的名稱被拼錯、隊徽的顯示錯誤，公司有權糾正其錯誤且所有下注金額仍有效，除非錯誤的結果明顯指向其他物件。
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
      <div>盤口信息有誤</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      如所列賽事盤口資訊有誤，此盤口所有下注訂單做無效注單處理。比賽標題、比賽時間的錯誤在與實際進行的比賽聯賽/比賽參賽者/參賽隊相符時，公司有權糾正其錯誤且所有注單將繼續有效，按實際進行的比賽結果進行結算。
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
      <div>團隊更名或換人</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a.
      如果選手或戰隊更改了名稱，只要可以確定投注物件是哪一場或哪一局賽事，使用之前名稱的盤口注單全部生效。投注不會因團隊有替補或暫代隊員參加比賽而取消，如果比賽的組織機構允許有替補隊員且公佈官方的比賽結果，所有投注將被視為正常。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b.
      如果一支隊伍更改名字但是陣容一樣，那麼在比賽期間，所有投注於新隊名稱以及舊隊名稱均有效。但如果一支隊伍被全新的陣容以及每個玩家都不同于原來的參賽隊取代，則所有的投注將被視為無效。
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
      <div>參賽選手並非戰隊的官方選手</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      若存在參賽選手並非官方選手（或其中之一），並未在公佈賽程前公告參賽人員變動，本公司有權取消該場注單並予以退還本金。
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
      <div>單張地圖中不可抗力因素導致比賽無法進行或重賽</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、
      在單張地圖中因不可抗力導致比賽無法進行。則已結算的賽果仍然有效，未結算賽果的盤口投注將被退還本金。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、在單張地圖中因不可抗拒力導致比賽重賽，則已結算的賽果仍然有效，未結算賽果的盤口投注按照重賽賽果事為准，如12小時內，未開始重賽，則所有未結算注單取消。
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
      <div>隊伍地圖優勢</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      在一支隊伍有一張或者一張以上的地圖優勢，列如：來自於勝者組決賽而具備優勢，“地圖二”意指實際進行遊戲的第一張地圖，“地圖三”意指實際進行遊戲的第二張地圖，以此類推。
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
      <div>延遲投注（事後單））</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      延遲投注（事後單）：早盤投注如果由於任何原因在比賽開始後被接受，該情況下的投注將視為事後單處理。滾盤的盤口若未能在特定時間前關閉，投注於該時間後的注單將視為事後單處理。事後單的投注將被退還本金。
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
      <div>其他結算規則</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、
      如果缺乏一致且獨立的證據，或出現明顯互相矛盾的證據資料，投注將按我們自己的相關獨立資料進行結算。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、
      投注結算將以指定賽事、廣播或遊戲的相關管理機構宣佈的官方結果為依據。對無效/無結果/未參賽的投注將視為無效。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      c、 如果對任何賽果有不確定，公司有權無限期暫停任何盤口的結算。
    </div>
    <div style="padding: 14px 14px 14px 40px">
      d、
      所有已公佈的賽果於36小時後不得更改，且在該時間段後不再接受任何查詢。公司僅在賽果公佈後36小時內，重置/更正因人為失誤、系統錯誤或因參考賽果來源而造成錯誤的賽果；而對於有證據證明比賽已結束但無證據證明賽果的盤口，超過12小時，我們將返還這些盤口的注單。
    </div>
    <!-- 叶尾 -->
  </div>
</template>
