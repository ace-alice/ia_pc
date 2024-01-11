<script setup lang="ts" name="ThRule4"></script>

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
      <div>ผู้ชนะ</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ผู้ชนะจะขึ้นอยู่กับเกม/แผนที่และผลจะขึ้นอยู่กับผลการแข่งขันอย่างเป็นทางการที่เผยแพร่หรือการถ่ายทอดสดอย่างเป็นทางการ
      (บันทึกวิดีโอ)
      หากจำนวนเกม/แผนที่ของการแข่งขันไม่ถูกต้องหรือมีการเปลี่ยนแปลง
      การเดิมพันทั้งหมด จะถือเป็นโมฆะและจะได้รับเงินคืน
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
      <div>แฮนดิแคป</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ผลของแฮนดิแคปจะขึ้นอยู่กับผลการแข่งขันอย่างเป็นทางการที่เผยแพร่หรือการถ่ายทอดสดอย่างเป็นทางการ
      (การบันทึกวิดีโอ) แฮนดิแคปรวมถึงแผนที่ จำนวนเกม และการฆ่า
      หากแผนที่ของการแข่งขันไม่ถูกต้องหรือมีการเปลี่ยนแปลง
      การเดิมพันทั้งหมดจะเป็น ถือว่าไม่ถูกต้องและจะได้รับเงินคืน
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
      <div>มันนี่ไลน์เดิมพันเมื่อผลเสมอกัน</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ตลาดผู้ชนะเท่านั้น (ชนะ-แพ้) แต่จบลงด้วยผลเสมอ
      การเดิมพันทั้งหมดถือเป็นโมฆะและจะได้รับเงินคืน (หากมีการต่อเวลา
      ผลการต่อเวลาครั้งสุดท้ายจะถือเป็นผลสุดท้ายของเกม
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
      <div>หากไม่มีแผงสถิติหลังเกม</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ใน League of Legends (LOL)
      การตัดสินจะยึดตามผลลัพธ์ที่แสดงในหน้าแผงสถิติหลังการแข่งขันหลังเกม
      หากไม่สามารถทำได้ด้วยเหตุผลบางประการ
      การตัดสินผลจะเป็นไปตามการถ่ายทอดสดการถ่ายทอดสดอย่างเป็นทางการ
      (การบันทึกวิดีโอ) ) หรือจากผลการตีพิมพ์บนเว็บไซต์ทางการ
      เลย์เอาต์และการแสดงข้อมูลของแผงสถิติหลังการแข่งขันอาจแตกต่างกันไปตามภูมิภาคต่างๆ
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
      <div>ผู้ชนะโดยรวม</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      สถานการณ์ที่ 1: มีความเป็นไปได้ที่จะเสมอกัน (เช่น เกม BO2 ซึ่งจะเล่น 2
      เกม/แผนที่ เกม BO1 โดยไม่ต้องต่อเวลา)
      ผู้เล่นต้องทายว่าฝ่ายใดจะชนะซึ่งไม่ควรส่งผลให้เสมอกันเพื่อที่จะชนะ เดิมพัน
      หากผลเสมอกันจะคืนเงินเดิมพัน
    </div>
    <div style="padding: 14px 14px 14px 40px">
      สถานการณ์ที่ 2: ผู้ชนะการแข่งขันสามารถกำหนดได้
      ผู้เล่นต้องทายว่าใครจะชนะในเกม จะมีการนับช่วงต่อเวลาทุกรูปแบบ
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
      <div>เดิมพัน 1X2</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      การเดิมพันประเภทนี้เหมาะสำหรับเกมที่มีโอกาสเสมอกัน (เช่น เกม BO2
      ซึ่งจะเล่น 2 เกม/แผนที่ เกม BO1 โดยไม่ต้องต่อเวลา)
      ผู้เล่นต้องทายผลการแข่งขันให้ถูกต้องจึงจะชนะ
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
      <div>แฮนดิแคป</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ทำนายผลอย่างถูกต้องหลังจากคำนวณแฮนดิแคปแล้ว
      การต่อเวลารูปแบบใดก็ตามจะถูกนับทั้งหมด
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ก.หากจำนวนแฮนดิแคปเป็นจำนวนเต็ม เช่น "-1, -2, -3" เป็นต้น
      คะแนนรวมจะถูกหักออกจากแฮนดิแคป หากผลเป็นคู่ จะไม่ชนะหรือแพ้ สำหรับ
      ตัวอย่าง: A-1 และ B+1 ผลลัพธ์ของทั้งสองทีมคือ A=3: B=2 เพราะ A(3)-1=2:
      B(2) ดังนั้นทั้งสองทีมจะไม่ชนะหรือแพ้
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ข. ครึ่งจำนวนแฮนดิแคปคือครึ่งหนึ่ง เช่น "-0.5, -1.5, -2.5" เป็นต้น
      คะแนนรวมจะถูกหักออกจากแฮนดิแคป เช่น A-1.5 และ B+1.5 ผลของทั้งสอง ทีมคือ
      A=3: B=2 เพราะ A(3)-1.5=1.5 &lt; B(2) ทีม b ชนะ และทีม a แพ้
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
      <div>สูง/ต่ำ</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ทายผลรวมของการเล่นเกมให้ถูกต้องตามค่าสูงหรือต่ำ
      ค่าล่วงเวลารูปแบบใดก็ตามจะถูกนับทั้งหมด
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ก.หากจำนวนสูง/ต่ำเป็นจำนวนเต็ม เช่น "26, 27, 28" เป็นต้น
      คะแนนรวมจะถูกหักออกจากจำนวนสูง/ต่ำ หากจำนวนเป็นบวก แสดงว่าสูง
      ถ้าตัวเลขเป็นบวก มีค่าติดลบ เท่ากับ ต่ำ ถ้าตัวเลขเป็นศูนย์
      แสดงว่าไม่ใช่ทั้งสอง ตัวอย่างเช่น: สูงกว่า 26 และต่ำกว่า 26
      หากจำนวนประตูทั้งหมดที่ทำได้โดยทั้งสองทีมคือ 26 เนื่องจาก 26-26=0 จะไม่ชนะ
      หรือไม่สูญเสีย
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ข. ครึ่งจำนวนค่าสูง/ต่ำคือครึ่งหนึ่ง เช่น "-0.5, -1.5, -2.5" เป็นต้น
      คะแนนรวมจะถูกหักออกจากตัวเลขสูง/ต่ำ หากตัวเลขเป็นบวก แสดงว่าสูง ถ้า
      ตัวเลขติดลบก็ว่าต่ำถ้าตัวเลขเป็นศูนย์ก็ไม่ใช่ทั้งคู่ ตัวอย่างเช่น สูงกว่า
      26.5 และต่ำกว่า 26.5 หากจำนวนประตูรวมระหว่างทั้งสองทีมคือ 26 เนื่องจาก
      26-26.5=-0.5 ต่ำกว่า ชนะ 26.5 และแพ้มากกว่า 26.5
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
      <div>คี่/คู่</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ทายถูกว่าผลเป็นคี่หรือคู่ การต่อเวลารูปแบบใด ๆ จะถูกนับ (ถ้าผลเป็น 0
      จะถือว่า 'คู่')
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
      <div>เวลา/ระยะเวลา</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      （หมายถึงระยะเวลาการแข่งขัน/เวลาการแข่งขัน
      ระยะเวลาของเกมขึ้นอยู่กับเวลาที่แสดงบนกระดานคะแนนอย่างเป็นทางการหลังการแข่งขัน
      หากไม่มีป้ายบอกคะแนน เวลาในเกมจะมีผลเหนือกว่า หากเวลาที่แสดงมากกว่าหรือ
      เท่ากับเวลาที่แสดงในตลาด จะถือว่า 'เกิน'
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
      <div>สังหารทั้งหมด</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      จำนวนการฆ่าทั้งหมดในเกมเดียว
      หมายเลขบนกระดานคะแนนอย่างเป็นทางการหลังจากจบเกมจะมีผลเหนือกว่า
      หากไม่มีป้ายบอกคะแนน ให้ใช้การแสดงในเกม
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
      <div>จำนวนหอคอยที่ถูกทำลาย</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      สำหรับป้อมปราการทั้งหมดในแผนที่หากทีมที่เข้าร่วมยอมแพ้ก่อนจบเกม
      เป้าหมายทั้งหมดที่ถูกทำลายก่อนการยอมแพ้จะถูกนับ
      เป้าหมายที่ถูกทำลายโดยทหารขนาดเล็กจะถูกนับด้วย
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
      <div>สถานที่ทำลายหอคอยแห่งแรก</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      เกี่ยวข้องกับที่ตั้งของหอคอย (เลนบน/เลนกลาง/เลนล่าง) รวมทั้งหมด 6 หอคอย
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
      <div>การสังหาร</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      หมายถึงจำนวนการสังหารโดยผู้เล่น
      คะแนนที่แสดงบนกระดานคะแนนอย่างเป็นทางการจะมีผลเหนือกว่าเสมอ
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
      <div>สังหารครั้งแรก</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      คนแรกที่ได้รับคะแนนจะได้รับการสังหารก่อน
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
      <div>หอคอยแรกถูกทำลาย</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      ทีมแรกที่ทำลายหอคอย (หากหอคอยถูกปฏิเสธหรือถูกทำลายโดยมินเนี่ยน
      จะยังถือว่าใช้ได้)
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
      <div>การแข่งขันเพื่อ N Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      เกี่ยวข้องกับจำนวนการฆ่าที่แสดงบนกระดานคะแนนที่ทำโดยทีม ตัวอย่างเช่น:
      ทีมแรกที่สังหารถึง 5 คน- ทีมแรกที่ได้สังหาร 5 คนบนกระดานคะแนน
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
      <div>การสังหารที่ N</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      เกี่ยวข้องกับทีมที่เพิ่งได้รับการสังหารครั้งที่ N (ครั้งที่ 1, 2, 3, 4, 5
      เป็นต้น) ตัวอย่างเช่น: Third Kill- ทีมที่ได้รับการฆ่าครั้งที่ 3
      ในการแข่งขัน
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
      <div>ภายใน N นาที</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      เมื่อตัวจับเวลาเกมถึง N นาที จะไม่รวมอยู่ในการคำนวณ
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
        <div>การตัดการเชื่อมต่อ</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        สถานการณ์ A: หากผู้เล่นตัดการเชื่อมต่อก่อนการสังหารครั้งแรกจะเกิดขึ้น
        แต่สามารถเชื่อมต่อใหม่ได้สำเร็จ เกมจะถือว่าใช้ได้และจะตัดสินตามปกติ
      </div>
      <div style="padding: 14px 14px 14px 40px">
        สถานการณ์ B: หากผู้เล่นตัดการเชื่อมต่อหลังจากการสังหารครั้งแรกเกิดขึ้น
        ผลลัพธ์ที่ชัดเจนและถูกต้องทั้งหมดจะถูกตัดสินตามปกติ
      </div>
      <div style="padding: 14px 14px 14px 40px">
        สถานการณ์ C:
        หากผู้เล่นถูกตัดการเชื่อมต่อและไม่สามารถเชื่อมต่อใหม่ได้สำเร็จจนกว่าจะสิ้นสุดเกม
        เพื่อให้เกิดความเป็นธรรม เกมจะถือว่าไม่มีผล
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
        <div>การสนับสนุนบทบาทในการฆ่าครั้งแรก</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับตำแหน่งสนับสนุน (ตำแหน่ง 4 หรือ 5) ที่ได้รับ First Kill
        ตราบใดที่มีการระบุชื่อผู้เล่น Support
        ไม่ว่าจะหมายความว่าอย่างไรก็ถือว่าใช่
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
        <div>การฆ่าครั้งแรกเกิดขึ้นภายใน 3 นาที</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับการสังหารครั้งแรกที่เกิดขึ้นก่อนเวลา 3:00 น. (ไม่รวม 03:00
        น.)
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เมื่อหก (6) ค่ายทหารของทีมเดียวถูกทำลาย จะถือว่าใช่
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับทีมที่เพิ่งได้ Nth Kill ไม่ใช่ทีมแรกที่ได้ N Kills
        ตัวอย่างเช่น: 20th Kill- ทีมที่ได้รับการฆ่าครั้งที่ 20 ในการแข่งขัน
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ตามการสตรีมวิดีโออย่างเป็นทางการ
        เกี่ยวข้องกับจำนวนฮีโร่ทั้งหมดที่มีชีวิตอยู่สำหรับทั้งสองทีมในวินาทีแรกที่
        Ancient ถูกทำลาย (ฮีโร่ที่ยังคงนับถอยหลังจะไม่นับ)
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
      <div>ลีกออฟเลเจ็นดส์</div>
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
        <div>
          เลนบน/เลนกลาง/ป่า/ซัพพอร์ต/ADC ขึ้นอยู่กับเนื้อหาเกมจริง
        </div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ผู้บุกเบิกแคนยอน จะนับเฉพาะการฆ่าเท่านั้น
        ตราบใดที่ผู้บุกเบิกแคนยอนถูกฆ่าโดยทีมจะถูกนับ。
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
        <div>ป้อมปราการทั้งหมดถูกทำลาย คี่/คู่</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับป้อมปราการทั้งหมดที่ถูกทำลายบนแผนที่ก่อนที่เกมจะจบลง
        กระดานคะแนนเมื่อจบเกมจะมีผลเหนือกว่า
        หอคอยที่ถูกทำลายโดยมินเนี่ยนจะถูกนับ ในขณะที่ Creep Inhibitor และ Nexus
        จะไม่ถูกนับ
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
        <div>เกี่ยวกับ Elemental Drakes</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        นับเฉพาะมังกรธาตุเท่านั้น ไม่นับ Elder Dragon
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
        <div>ทั้งสองทีมได้สังหารบารอน</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับทั้งสองทีมที่สังหารบารอนอย่างน้อยหนึ่งครั้ง
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
        <div>สารยับยั้งการคืบคลานทั้งหมดถูกทำลาย</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        การทำลายคริสตัลจะถูกนับเพียงครั้งเดียว จะไม่นับคริสตัลที่เกิดใหม่
        เช่นเดียวกับ Nexus
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ทำลายคริสตัลมากที่สุด: หลังจากที่คริสตัลเดียวกันถูกทำลาย
        การฟื้นคืนชีพจะถูกทำลายอีกครั้ง รวมจะนับเป็น 1 คริสตัลเท่านั้น
        (คริสตัลเดียวกันนับเพียงครั้งเดียว คริสตัลหลักจะไม่ถูกนับ)
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
        <div>ฆ่าครั้งแรก</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        คนแรกที่ได้แต้มบนกระดานคะแนนจะได้ First Kill
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ตลาดตามเวลาทั้งหมดจะตัดสินตามเวลาในเกมตามกระดานคะแนนอย่างเป็นทางการ
        แผงสถิติหลังการแข่งขัน และสตรีมสดอย่างเป็นทางการ
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
        <div>การเดาคุณลักษณะของมังกรธาตุที่ N:</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        คุณลักษณะของมังกรธาตุถัดไปจะแสดงบนหน้าผา ตราบใดที่มีการประกาศคำทำนาย
        ก็หมายความว่ามีผลอยู่แล้ว
        การตั้งถิ่นฐานหรือการถ่ายทอดสดอย่างเป็นทางการตามผลเว็บไซต์อย่างเป็นทางการ
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
        <div>ผู้เฒ่ามังกรที่จะถูกสังหาร</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        หากผู้เฒ่ามังกรไม่ถูกสังหารในระหว่างการแข่งขัน จะถือว่าไม่มี
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
        <div>รับบัฟวิญญาณมังกร</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับว่าทีมได้รับบัฟวิญญาณมังกรหรือไม่ (ทีมที่ฆ่ามังกรธาตุ 4
        ตัวจะได้รับวิญญาณมังกร ประเภทมังกรธาตุที่สามคือวิญญาณมังกร)
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
        <div>สังหารทั้งหมด (00:00-10:00 นาที)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        การเดิมพันจะถือว่าใช้ได้ก็ต่อเมื่ออยู่ภายในระยะเวลาที่กำหนด
        หากเวลาการแข่งขันไม่เกินระยะเวลาที่กำหนด เช่น 15 นาที 0-15
        นาทีจะถือว่าโมฆะ การตั้งถิ่นฐานขึ้นอยู่กับเว็บไซต์ทางการหรือสตรีมแบบสด
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
        <div>สังหารทั้งหมด (หลักสุดท้าย)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        หมายถึงผลรวมของตัวเลขสุดท้ายของการสังหารทั้งหมดของทั้งสองทีม
        ตัวอย่างเช่น ผลการแข่งขันคือ 7:15 (จากนั้น 7+5=12)
        การตั้งถิ่นฐานจะขึ้นอยู่กับเว็บไซต์อย่างเป็นทางการ
        แผงสถิติหลังการแข่งขัน API หรือสตรีมสด
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

    <!-- </div>
    <div>CSGO</div>
  </div> -->
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
        <div>รอบปืนพกครั้งแรก</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับทีมที่ชนะรอบปืนพกรอบแรก
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
        <div>รอบแรกถึง 5/10 รอบ</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        เกี่ยวข้องกับทีมที่ชนะ 5/10 รอบ
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
        <div>ตลาดคี่/คู่</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        หากผลลัพธ์เป็น 0 จะถือว่า 'คู่'
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        จำนวนเฮดช็อตทั้งหมดในรอบที่ N: เฉพาะผู้ที่มีไอคอนเฮดช็อต/
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
        <div>ผู้ชนะครึ่งแรก</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ทีมที่มีคะแนนสูงกว่าในครึ่งแรก (12 รอบแรก) ของการแข่งขันจะเป็นฝ่ายชนะ
      </div>
    </div>
    <!-- 叶尾 -->
  </div>
</template>
