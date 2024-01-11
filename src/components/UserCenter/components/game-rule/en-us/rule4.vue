<script setup lang="ts" name="EnRule4"></script>

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
      <div>Winner</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Winner is based on the game/map and the result shall be based from the
      official match results published or the official live stream broadcast
      (video recordings). If the number of games/maps of the event is incorrect
      or has been changed, all bets shall be considered invalid and will be
      refunded.
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
      <div>Handicap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Handicap result shall be based from the official match results published
      or the official live stream broadcast (video recordings). Handicap include
      map, number of games, and kills. If the map of the event is incorrect or
      has been changed, all bets shall be considered invalid and will be
      refunded.
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
      <div>Moneyline bets when the result is a draw</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Winner-only (winner-loser) market but ends up in a draw, all bets shall be considered invalid and will be
      refunded. (If there is an overtime, the result of the last overtime will be regarded as the final result of the
      game.)
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>If there is no post-match stats panel after the game</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      In League of Legends (LOL), settlements will be based on the results displayed on the post-match stats panel page
      after the game. If for some reason is unavailable, settlement of results will be according to the official live
      stream broadcast (video recordings) or from the published results on the official website. The layout and
      information display of the post-match stats panel may vary based on different regions.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Overall Winner</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Scenario 1: There is a possibility of a tie (e.g., BO2 game which will play 2 games/maps, BO1 game without
      overtime). Players need to predict which side will win, which should not result in a tie, in order to win bet. If
      the result is a tie, the bet will be refunded.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Scenario 2: Winner of a match can be determined. Players need to predict who will win the game; any form of
      overtime will be counted.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>1X2 bets</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      This type of bet is suitable for games in which there is a possibility of a tie (e.g., BO2 game which will play 2
      games/maps, BO1 game without overtime), players need to correctly predict the outcome of the game in order to win.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Handicap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Correctly predict the result after the handicap has been calculated, any form of overtime will be counted.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Whole：If the number of the handicap is an whole number, such as "-1, -2, -3", etc., the total score will be
      subtracted from the Handicap. If the result is even, neither will win or lose. For example: A-1 and B+1, the
      results of the two teams are A=3: B=2, because A(3)-1=2: B(2), then neither team wins nor loses.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b. Half：The number of the handicap is half, such as "-0.5, -1.5, -2.5," etc., the total score will be subtracted
      from the Handicap. For example: A-1.5 and B+1.5, the result of the two teams is A=3: B=2, because A(3)-1.5=1.5
      &lt; B(2), Team B wins and Team A loses.
    </div>
    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Over/Under</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Correctly predict the total number of the gameplay based on the over or under value, any form of overtime will
      be counted
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Whole：If the Over/Under number is a whole number, such as "26, 27, 28", etc., the total score will be
      subtracted from the Over/Under number. If the number is positive then it is Over, if the number is negative
      then it is Under, if the number is zero then it is neither. For example: Over 26 and Under 26, if the total
      number of goals scored by the two teams is 26, because 26-26=0, then neither wins nor loses.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b. Half：The number of Over/Under value is half, such as "-0.5, -1.5, -2.5," etc., the total score will be
      subtracted from the Over/Under number. If the number is positive then it is Over, if the number is negative
      then it is Under, if the number is zero then it is neither. For example: Over 26.5 and Under 26.5, if the
      total number of goals between the two teams is 26, because 26-26.5=-0.5, Under 26.5 wins and Over 26.5 loses
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Odd/Even</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Correctly predict whether the result is Odd or Even, any form of overtime will be counted. (If the result is 0
      then it is considered ‘Even’)
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Time/Duration</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to match duration/match time. The duration of the game is subject to the time displayed on the
      official scoreboard after the match. If the scoreboard is not provided, the in-game time shall prevail. If the
      time displayed is greater than or equal to time displayed on the market, it shall be considered ‘Over’.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Total Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      The total number of kills in a single game; the number on the official scoreboard after the end of the game
      shall prevail. If the scoreboard is not provided, the in-game display shall be used.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Number of Towers Destroyed</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to all the Towers destroyed on the map before the game ends. Towers destroyed by minions or was
      denied shall also counted.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>First Tower Destroyed Location</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to the location of the Tower (Top Lane/Mid Lane/Bottom Lane), a total of 6 towers.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to the number of kills made by players. The score displayed on the official scoreboard always
      prevail.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>First Kill</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      The first one to get a point gets first kill.
    </div>
    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>First Tower Destroyed</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      First team to destroy a Tower (If the tower is denied or was destroyed by a minion, it shall still be
      considered valid).
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Race to N Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to the number of kills displayed on the scoreboard done by a team. For example: First to 5 Kills-
      First team to get 5 kills on the scoreboard.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Nth Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to which team just got the Nth Kill (1st, 2nd, 3rd,4th,5th, and so on) For example: Third Kill- The
      team who got the 3rd kill in the match.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Within N Minutes</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      When the game timer reaches N minutes, it is not included in the calculation.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Disconnection</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Scenario A: If a player disconnected before the First Kill occur, but is successful in reconnecting, the
        game shall be considered valid and will settled normally.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Scenario B: If a player disconnected after the First Kill occur, all clear and valid results will be settled
        normally.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Scenario C: If a player gets disconnected and is unable to reconnect successfully until the end of the game,
        in order to ensure fairness, the game shall be considered invalid.
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Support Role to gets first kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to the Support Position (Position 4 or 5) getting the First Kill. As long as the Support player's
        name is indicated, no matter what the means, it is considered YES.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First kill occurs within 3 minutes</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to First Kill happening before the 3:00 minute mark (does not include 3:00).
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>FMega Creeps Spawned</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        When six (6) barracks of a single team is destroyed, it is considered YES.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div> N Kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to which team just got the Nth Kill not the first to get N Kills. For example: 20th Kill- The team
        who got the 20th kill in the match.
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Number of heroes alive when the Ancient gets destroyed</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        According to the official video stream, pertains to the total number of heroes alive for both teams at the
        first moment the Ancient gets destroyed. (Heroes who are still counting down are not counted.)
      </div>
    </div>
    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>League of Legends</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="padding-left: 14px">
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>The player's role in the game</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Top lane/mid lane/jungle/support/ADC, subject to actual game content.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Rift Herald</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Only the kill is counted, as long as the Rift Herald is killed by a team, it is counted.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Total Turrets destroyed Odd/Even</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to all the Turrets destroyed on the map before the game ends. The scoreboard at the end of the game
        shall prevail. Towers destroyed by minions are counted, while the Creep Inhibitor and Nexus are not.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>With regards to Elemental Drakes</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Only Elemental Drakes are counted, does not count Elder Dragon.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Both teams have slayed Baron</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to both teams slaying Baron at least once.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Total Creep Inhibitors destroyed</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Destroying a Creep Inhibitor is only counted once, a respawned Creep Inhibitor shall not be counted, as well
        as the Nexus.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First Kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The first one to get a point on the scoreboard gets the First Kill.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All time-based markets are settled based on the in-game time according to official scoreboard, post-match
        stats panel, and official live stream.
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Nth Elemental Drake Type</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The elemental attribute of the next Elemental Drake will be displayed on the upper right-hand corner of
        the screen. As long as it has been shown, there is already a clear result. Settlement is based on live
        video stream or official website.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Elder Dragon to be slayed</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If no Elder Dragon was slain during the course of the match, then it will be considered NO.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Obtain Dragon Soul buff</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to whether a team receives the Dragon Soul buff (A team that killed 4 Elemental Drakes gets the
        Dragon Soul. The third Elemental Drake type is the Dragon Soul attributed.)
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Number of champions alive when the Nexus gets destroyed</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        According to the official video stream, pertains to the total number of champions alive for both teams at
        the first moment the Nexus gets destroyed. (Champions who are still counting down are not counted.)
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Total Kills (00:00-10:00 minutes)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bets are only considered valid if they are within the specified time period. If the game time did not
        exceed the specified time period, for example: 15 minutes, then 0-15 minutes shall be considered invalid.
        Settlement is based on official website or live stream.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Total Kills (last digit)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to the sum of the last digit of the total kills of both teams. For example: the result of the
        match is 7:15 (then 7+5=12). Settlement is based on official website, post-match stats panel, API, or live
        stream.
      </div>
    </div>
    <div
      style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First Pistol Round</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to the team that won the first pistol round.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First to 5/10 Rounds</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pertains to the team that won 5/10 rounds.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Odd/Even markets</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If the result is 0 then it is considered ‘Even’
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Round N Total Headshots</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Headshot kills are only counted if the headshot icon/prompt appears and occur within the specified time
        period/round.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Round N Winning Method</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        There are 4 ways to win a round, 1) by running out of time, 2) by bomb detonation, 3) by bomb diffusal,
        4) by annihilating the opponent. This is determined by the method in which the round is won.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The opponent must be killed in order to be considered valid. If it is a suicide or has been killed by a
        teammate, it will be considered that there is no first kill in the round. All bets placed will be
        refunded.
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First to die</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The first player to be killed in the specified round, any manner of death is counted.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Pistol Round and Round N Total Kills</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Settlement is based on live video stream or official website. If a player is killed by bomb
        detonation, it does not count towards the total kills.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Kills market</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Settlement is based on live video stream or official website.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Pistol Round and Round N Total Headshots</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Settlement is based on live video stream or official website. Headshot kills by your own teammate is
        counted.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>CSGO round definition</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        as the new round enters the buy phase, the previous round is considered settled.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>1st Half Winner</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The team with the higher score in the first half (first fifteen rounds) of the match wins.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Will there be a Knife Kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Knife kills made during side selection phase and warm-up phase is not counted. Knife kills by your own
        teammate is counted.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Will there be a Grenade Kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Grenade kills made during side selection phase and warm-up phase as well as kills caused by Molotov
        Cocktails are not counted. Grenade kills by your own teammate is counted.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Player with most Assists</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All types of enemy kill assists count excluding flash bangs.
      </div>
    </div>
    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>King of Glory</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="margin-left: 14px">
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Turrets market</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The team that destroys the first defensive turret must destroy before the opponent does in order to be
        counted. Note: The Core does not count.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First Kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The first one to get a point on the scoreboard gets the First Kill.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>First Tyrant killed before 2min 30secs</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Kills occur at exactly 2min 30 secs does not count.。
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Total Overlord Kills Odd/Even</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All Overlords are counted, including Prophetic Overlord and Darkness Overlord.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Total Tyrant Kills Odd/Even</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All Tyrants are counted, including Tyrant and Darkness Tyrant.
      </div>
    </div>
    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>PUBG</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Match Points A vs B
      Points are composed of placement points and kill points. If two teams have the same placement points,
      the team with the highest kill points wins. If two teams have the same placement points and kill points,
      the team with the highest placement wins.
    </div>

    <div style="display: FLEX; align-items: CENTER; color: #fff; font-size: 16px">
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
      <div>Football</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Unless otherwise stated, all Football bets will be settled based on the scheduled "90 minutes" play.
    </div>
    <div style="margin-left: 14px">
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Handicap</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        General Rules
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Predict who will win the match / half / period with the indicated handicap applied.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        A "Handicap" means that a team receives a virtual head start, effectively leading the match by
        differing goals before it actually begins.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All bets will be settled by factoring in the indicated handicap applied at the end of the bet type
        period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The favorite team, giving the handicap start, will be allocated the minus handicap and will be
        highlighted.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        A handicap can be a full goal start (e.g. -1, -2, -3, etc.)，a half goal start (e.g. -0.5, -1.5, -2.5,
        etc.)，or a split goal start (e.g. -0/0.5, -0.5/1, -1/1.5, etc.).
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Predict the winning team based on the information about the ball.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The settlement of bets will be based on the completion time of the match specified in 90 minutes.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If the event is cancelled or interrupted before the end of 90 minutes, all bets will be deemed
        invalid.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Handicap – 1st Half</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All 1st half bets apply to the first half of play only. Bets are settled on the score at the end of
        the scheduled "45 minutes"
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If the match is abandoned, suspended, cancelled or aborted for whatsoever reason during the 1st Half,
        all the first half bets will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If the match is abandoned, suspended, cancelled or aborted for whatsoever reason during the 2nd Half
        or additional periods, all the first half bets will be considered valid.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>
          Goals - Over / Under
        </div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        General Rules
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Predict whether the total number of goals will be Over or Under the indicated goal line.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If the total number of goals scored is more than the indicated line, the market is settled as 'Over'.
        If the total number of goals scored is less than the indicated line, the market is settled as 'Under'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All Over / Under bets will be settled by factoring in the indicated handicap applied at the end of the
        bet type period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        An Over / Under market line can be a full goal (e.g. 2, 3, 4, etc.), a half goal (e.g. 1.5, 2.5, 3.5,
        etc.) or a split goal line (e.g. 1.5/2, 2.5/3, 3.5/4, etc.).
      </div>
      <div style="padding: 14px 14px 14px 40px">
        If a match is abandoned, Over / Under bets will only be settled if the market has been unconditionally
        determined and any further goals have no affect on the market result. In all other scenarios, bets
        will be considered void. Please see the examples below:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.Example 1: Member bets Over 2.5 Goals:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅰ.The match is abandoned when the score is 2 –1。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅱ.The member wins as, even though the match is abandoned, this market has been unconditionally
        determined and any other potential goals have no affect on the market result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.Example 2: Member bets Under 2.5 Goals:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅰ.The match is abandoned when the score is 2 - 1。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅱ.The member's bet is a losing bet as, even though the match is abandoned, this market has been
        unconditionally determined and any other potential goals have no affect on the market result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c.Example 3: Member bets Over 3.5 Goals:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅰ.The match is abandoned when the score is 2 - 1
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅱ.The member's bet is considered void as the match was abandoned before the result of the market is
        unconditionally determined.
      </div>

      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div> 1 X 2 (Match Betting)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        General Rules
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Predict who will win the match. This market will contain the two teams and the draw as betting
        selections.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        For bets to be valid, the match must start with a 0 - 0 score line.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1 X 2
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Predict who will win or whether the result between both teams will be a draw at the end of "90
        minutes" play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1 X 2 – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All 1st half bets apply to the first half of play only. Bets are settled on the score at the end of
        the scheduled "45 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        In-Play 1 X 2
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Predict who will win the match while it is in-play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Settlement is based on the winning selection at the end of the bet type period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Here is an example of In-Play 1 X 2.。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.Example 1: Member bets Arsenal when the score is Arsenal 1 - 0 Manchester United:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        i.The final score is Arsenal 2 - 1 Manchester United.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅱ.The member wins as they bet Arsenal to win. All bets placed on Arsenal are winning bets.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅲ.All bets placed on Manchester United or the Draw when the score
        was 1 - 0 lose.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.Example 2: Member bets Manchester United when the score is Arsenal 1 - 0 Manchester United:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        i.The final score is Arsenal 1 - 1 Manchester United
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ⅱ.The member loses as they bet Manchester United to win and the result was a draw. All bets placed
        ⅲ.on Arsenal and Manchester United are considered losing bets.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        All bets placed on the Draw win.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        In the event of extra time, a new market will be opened.
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Corners</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: General Ruless
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.For settlement purposes, corners awarded but not taken will not count.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2. All bets are settled based on the official results made available from the Football authority
        responsible for organising the match.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.Retaken corners will only count once.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: Handicap
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which team will have taken the most corners with the indicated handicap applied through
        the full "90 minutes" of play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Corners Handicap is similar to Match Handicap - all bets will be settled by factoring in the
        indicated handicap applied at the end of the bet type period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: Handicap – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1. Predict which team will have taken the most corners with the indicated handicap applied through
        "45 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Corners Handicap is similar to Match Handicap - all bets will be settled by factoring in the
        indicated handicap applied at the end of the bet type period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: Over / Under
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of corners taken will be Over or Under the indicated corner line
        after "90 minutes" play, including injury time.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Corners Over / Under is similar to Match Over / Under - if the total number of corners taken is
        more than the indicated line, the market is settled as 'Over'. If the total number of corners taken
        is less than the indicated line, the market is settled as 'Under'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned, Corners Over / Under bets will only be settled if the market has been
        unconditionally determined and any further Corners have no affect on the market result. In all other
        scenarios, bets will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: Over / Under – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of Corners taken will be 'Over' or 'Under' the indicated corner
        line for "45 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If the total number of Corners taken is more than the indicated line, the market is settled as
        'Over'. If the total number of corners taken is less than the indicated line, the market is settled
        as 'Under'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned in the first half, Corners Over / Under bets will only be settled if the
        market has been unconditionally determined and any further Corners have no affect on the market
        result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.If a match is abandoned in the second half, all bets relating to first half Corners Over / Under
        will be considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: 1 X 2
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict the team that will record more Corners or the same number of Corners as their opponent,
        over the course of "90 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned, Corners 1 X 2 bets will only be settled if the market has been
        unconditionally determined and any further Corners have no affect on the market result. In all other
        scenarios, bets will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: 1 X 2 – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict the team that will record more Corners or the same number of Corners as their opponent,
        over the course of "45 minutes"
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned in the first half, Corners 1 X 2 bets will only be settled if the market
        has been unconditionally determined and any further Corners have no affect on the market result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned in the second half, all bets relating to first half Corners 1 X 2 will be
        considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: Odd / Even
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of Corners taken will be Odd or Even over the course of "90
        minutes" play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If no Corners are taken, i.e. 0, then the market will be settled as 'Even'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned, all bets will be void, unless the market has been unconditionally
        determined and any further Corners have no affect on the market result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners: Odd / Even – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of Corners taken will be Odd or Even over the course of "45
        minutes" play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned in the first half, Corners Odd / Even bets will only be settled if the
        market has been unconditionally determined and any further Corners have no affect on the market
        result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned in the second half, all bets relating to first half Corners Odd / Even
        will be considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        First Corner / Last Corner
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict the team to take the First or Last corner in a designated match within the official "90
        minutes" play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned after the "First Corner" is taken, all bets on "First Corner" will be
        considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned, all bets on "Last Corner" will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.If no corner is taken by either team within the bet type period, all bets on "First Corner / Last
        Corner" will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Half with Most Corners
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which half will have the most corners taken after the full "90 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned, any Half with Most Corners bets will only be settled if the result is
        unconditionally determined and any further corners have no affect on the market result. In all other
        scenarios, bets will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners - X Corner
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which team will be recorded as taking a specific corner yet to happen.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.The selections offered may be one corner or multiple corners ahead, e.g. 4th Corner or 4th and 5th
        Corner (each being separate markets)
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.Retaken corners will only count once.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.If the match is abandoned before 'X Corner' is taken, then any bet on that corner will be
        considered void. All corners recorded prior to abandonment will be considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Time of the First Corner
      </div>

      <div style="padding: 14px 14px 14px 40px">
        1.Predict the time in which the first corner will be taken in the specific match.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.An example of the selections are:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a.Up to and including the 8th Minute
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b.9th minute onwards
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.For settlement purposes, the 1st minute of the match is from 1 second to 59 seconds. The 2nd
        minute is from 1 minute to 1 minute 59 seconds and so on.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.For example, if a bet is placed on the time of the first corner being between the 1st and the
        8th minute and the first corner is taken (as opposed to awarded) at 8 minutes 49 seconds, the bet
        is a losing bet as this falls within the "9th minute onwards" selection.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        5.If the match is abandoned after the first corner is taken, all bets on "Time of the First
        Corner" will be valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        6.If the match is abandoned before the first corner is taken, all bets on "Time of the First
        Corner" will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        7.If no corner is taken in the full "90 minutes" of play, all bets will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        8.In the event that the 1st corner kick has to be retaken, the time that the corner is retaken at
        shall be deemed as the time of the first corner.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        15 Minute Corners
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.In accordance with 15 Minute Rules as laid out in Main Markets above, predict which team will
        obtain the required winning statistic in either Handicap, 1 X 2, Over / Under or Odd / Even.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Corner kick time is based on the time the corner kick kicked.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Corners – Double Chance
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Bet on 2 of the 3 possible outcomes; home win and draw (1 & X), away win and draw (X & 2) or
        home win and away win (1 & 2).
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.The three options available are: 1 X, X 2, 1 2:
      </div>
      <div style="padding: 14px 14px 14px 40px">
        a."1" indicates: Home win.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        b."X" indicates: Draw.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        c."2" indicates: Away win.
      </div>
      <div
        style="
            display: FLEX;
            align-items: CENTER;
            color: #fff;
            font-size: 16px;
          "
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
        <div>Bookings/Cards</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: General Rules
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.For settlement purposes, cards issued to non-players (e.g. managers or substitutes who play no
        subsequent part in the match) do not count.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.A yellow card constitutes 1 point and a red card constitutes 2 points. If a player is issued
        with 2 yellow cards, the total bookings points received by the same player will be counted as 1
        point for the yellow card and 2 points for the red card - giving a total of 3 points (second
        yellow card not counted, a maximum of 3 points can be accumulated by an individual player per
        match).
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.All bets are settled based on the official results made available from the Football authority
        responsible for organising the match.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: Handicap
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which team will receive the most bookings with the indicated handicap applied through
        the full "90 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Bookings Handicap is similar to Match Handicap - all bets will be settled by factoring in the
        indicated handicap applied at the end of the bet type period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: Handicap – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which team will receive the most bookings with the indicated handicap applied through
        "45 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Bookings Handicap is similar to Match Handicap - all bets will be settled by factoring in the
        indicated handicap applied at the end of the bet type period.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: Over / Under
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of Bookings will be 'Over' or 'Under' the indicated line at the
        end of "90 minutes" play.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.Bookings Over / Under is similar to Match Over / Under - if the total number of bookings is more
        than the indicated line, the market is settled as 'Over'. If the total number of bookings is less
        than the indicated line, the market is settled as 'Under'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned, Bookings Over / Under bets will only be settled if the market has been
        unconditionally determined and any further Bookings have no affect on the market result. In all
        other scenarios, bets will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: Over / Under – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of Bookings will be 'Over' or 'Under' the indicated line at the
        end of "45 minutes"
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If the total number of Bookings is more than the indicated line, the market is settled as
        'Over'. If the total number of bookings is less than the indicated line, the market is settled as
        'Under'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned in the first half, all bets will be considered void unless the market
        has been unconditionally determined as that no further Bookings will have an effect on the market
        result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.If a match is abandoned in the second half, all first half bets in respect of Bookings Over /
        Under will be considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: 1 X 2
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which team will record the most number of Bookings at the end of "90 minutes" or whether
        both will finish on with the same number
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned at any stage, all bets will be considered void unless the market has
        been unconditionally determined as that no further bookings will have an effect on the market
        result.。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: 1 X 2 – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict which team will record the most number of Bookings at the end of "45 minutes" or whether
        both will finish with the same number.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned in the first half, all bets will be considered void unless the market
        has been unconditionally determined as that no further Bookings will have an effect on the market
        result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned in the second half, all first half bets in respect of Bookings 1 X 2
        will be considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: Odd / Even
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of bookings will be Odd / Even at the end of "90 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned all bets will be considered void unless the market has been
        unconditionally determined as that no further bookings will have an effect on the market result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If no Bookings are recorded, i.e. 0, then the market will be settled as 'Even'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bookings: Odd / Even – 1st Half
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1.Predict whether the total number of Bookings will be Odd / Even at the end of "45 minutes".
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.If a match is abandoned in the first half, all bets will be considered void unless the market has
        been unconditionally determined as that no further bookings will have an effect on the market
        result.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.If a match is abandoned in the second half, all first half bets in respect of Bookings Odd / Even
        will be considered valid.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.If no Bookings are recorded, i.e. 0, then the market will be settled as 'Even'.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        First Booking / Last Booking
      </div>
      <div style="padding: 14px 14px 14px 40px">
        1. Predict whether the Home or Away team will have a player to be the first / last to receive any
        card (yellow or red) in a designated match within the full "90 minutes" of play.。
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2.In the event of two or more players receiving a booking for the same incident, then the player who
        is shown the first yellow / red card by the referee will be deemed the "winner" for settlement
        purposes.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        3.Any cards issued to non-players (e.g. managers, coaches or substitutes) do not count.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        4.If a match is abandoned after the first booking is issued, all bets on the "First Booking" will
        stand.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        5.If a match is abandoned after the first booking is issued, all bets on the "Last Booking" will be
        considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        6.If a match is abandoned before the first booking is issued, all bets on the "First Booking" and
        "Last Booking" will be considered void.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        7.If there is no card received by either team within the official "90 minutes" of play, all bets
        placed on the "First / Last Booking" markets will be considered void.
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
        <div>1st Half Winner</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        The team with the higher score in the first half ( first 12 rounds) of the match wins.
      </div>
    </div>
  </div>
</template>
