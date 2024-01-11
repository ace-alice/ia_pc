<script setup lang="ts" name="ViRule4"></script>

<template>
  <div
    style="
        background: #262d34;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        padding: 24px;
      "
  >
    <div style="display: flex; align-items: center; color: #fff; font-size: 16px">
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
      <div>Cược đội thắng</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Kèo đội thắng là trận đấu và bản đồ, theo kết quả trận đấu chính thức, trang mạng tỷ số chính thức hoặc truyền
      hình trực tiếp chính thức . Nếu số ván của trận đấu không chính xác hoặc có thay đổi, khác với các trang mạng
      chính thức khác,vé cược bị coi là vô hiệu và hoàn tiền cược.
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
        2
      </div>
      <div>Kèo chấp</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Về kèo chấp dựa trên kết quả trận đấu chính thức, theo kết quả trận đấu chính thức, trang mạng tỷ số chính thức
      hoặc truyền hình trực tiếp chính thức, kèo chấp bao gồm bản đồ,số ván,số lần hạ gục, Nếu bản đồ của trận đấu không
      chính xác hoặc có thay đổi, khác với trang mạng chính thức khác, vé cược sẽ bị coi là vô hiệu và hoàn lại tiền
      cược.
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
        3
      </div>
      <div>Khi kèo chỉ có tùy chọn thắng hoặc thua trường hợp kết quả trận đấu là hòa</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Khi kèo chỉ có tùy chọn thắng hoặc thua trường hợp kết quả trận đấu là hòa (Nếu có hiệp phụ, kết quả hiệp phụ cuối
      cùng là kết quả cuối cùng), tất cả cược kèo đó bị xem là vô hiệu và hoàn tiền cược.
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
      <div>Nếu không có bảng thống kê sau trận đấu</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Trong các trò chơi Liên Minh Huyền Thoại（LOL）các khoản thanh toán sẽ dựa trên kết quả hiển thị trên bảng thống kê
      sau khi trận đấu kết thúc. Nếu không có bảng thống kê sau trận đấu, Chúng tôi sẽ thanh toán kết quả theo kênh phát
      sóng trực tiếp chính thức (video demo). Cách bố trí và hiển thị thông tin của bảng thống kê sau trận đấu có thể
      khác nhau tùy theo các khu vực khác nhau.
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
      <div> Kèo Đội thắng trận 2 cửa</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Trường hợp 1: cược trận đấu có thể hòa (ví dụ: B02 chỉ đánh 2 hiệp, B01 không bao gồm hiệp phụ).

      Người chơi cần dự đoán 1 bên sẽ thắng, không hòa mới thắng được tiền thưởng. Nếu kết quả là hòa, hoàn lại tiền
      cược.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Trường hợp 2:Trận đấu sẽ phải phân định thắng thua.

      Người chơi cần dự đoán ai sẽ thắng trận đấu, bất kỳ hình thức bù giờ nào đều được tính.
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
      <div>Kèo 1X2 3 cửa thắng, hòa và thua:</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Loại cược này áp dụng cho các trò chơi có tỷ số hòa, (ví dụ: B02 chỉ đánh 2 hiệp, B01 không bao gồm hiệp phụ),
      Người chơi cần dự đoán chính xác kết quả của trận đấu mới giành được tiền thưởng.
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
      <div> Kèo chấp</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Dự đoán kết quả sau khi tính số chấp, mọi hình thức hiệp phụ hoặc thời gian bù giờ sẽ được tính.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、Kèo số nguyên:Nếu số điểm chấp là một số nguyên, ví dụ "-1, -2, -3", v.v., lấy điểm bên chấp trừ số chấp, lớn
      hơn điểm bên được chấp là thắng, nhỏ hơn là thua, bằng là không thắng không thua (Hòa kèo).

      Ví dụ: A-1 và B+1, kết quả thi đấu của 2 đội là A=3, B=2, A(3)-1=2=B(2) nên 2 đội AB không thắng không thua.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、Kèo sống chết:Số chấp là nửa số, ví dụ -0.5, -1.5, -2.5 v.v, lấy điểm bên chấp trừ số chấp, lớn hơn điểm bên
      được chấp là thắng, nhỏ hơn là thua.

      Ví dụ: A-1.5 và B+1.5, kết quả thi đấu của 2 đội là A=3, B=2, A(3)-1.5=1.5 &lt; B(2) nên đội B thắng. Đội A
      thua.
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
      <div>Kèo trên dưới/lớn nhỏ</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Dự đoán tổng tỷ số của trận đấu lớn hoặc nhỏ hơn giá trị kèo, mọi hình thức thêm giờ hoặc bù giờ sẽ được
      tính.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a、Kèo số nguyên:Giá trị kèo là số nguyên, ví dụ 26, 27, 28 v.v, lấy tổng bàn thắng trong trận đấu trừ giá
      trị kèo, kết quả là số dương là trên thắng, số âm là dưới thắng, 0 là không thắng không thua (Hòa kèo)

      Ví dụ:Trên 26 và Dưới 26, tổng bàn thắng của 2 đội là 26, 26-26=0 nên Trên 26 và Dưới 26 không thắng không
      thua.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b、Kèo sống chết :Giá trị kèo là nửa số, ví dụ 26.5, 27.5, 28.5, v.v, lấy tổng bàn thắng trong trận đấu trừ
      giá trị kèo, kết quả là số dương là Trên thắng, số âm là Dưới thắng.

      Ví dụ: Trên 26.5 và Dưới 26.5, tổng bàn thắng của 2 đội là 26, 26-26.5=-0.5 nên Dưới 26.5 thắng, Trên 26.5
      Thua.
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
      <div>Lẻ Chẵn</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Dự đoán số lượng lẻ chẵn trong kết quả cuối cùng của trận đấu, bao gồm mọi hình thức thêm giờ hoặc hiệp phụ.
      (Nếu kết quả có 0, thanh toán là số "Chẵn").
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
      <div>Kèo thời gian</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      （ (Thời gian trận đấu/thời gian sự kiện) Thời gian thi đấu 1 trận/thời gian xảy ra sự kiện trận đấu; thời
      gian thi đấu 1 trận dựa theo thời gian trên bảng điểm chính thức sau khi trận đấu kết thúc; nếu không có
      bảng điểm dựa vào thời gian trong trận đấu làm chuẩn; kèo thời gian trận đấu tính theo thời gian xảy ra thực
      tế; thời lượng 2 loại kèo thời gian trên lớn hơn hoặc bằng thời gian đánh dấu của kèo là trên.
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
      <div>Tổng số mạng hạ gục</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Số lần hạ gục trong 1 trận; dựa vào số trên bảng điểm chính thức sau khi trận đấu kết thúc làm chuẩn. Nếu
      không có bảng điểm, dựa theo hiển thị trong trò chơi.
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
      <div>Số trụ bị phá hủy</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Trong bản đồ, nếu đội thi đấu đầu hàng trước khi trận đấu kết thúc, tính tất cả trụ bảo vệ bị phá hủy
      trướctrước khi có đội đầu hàng. Mục tiêu do lính phá hủy hoặc tự phá hủy cũng được tính.
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
      <div>Vị trí phá hủy trụ đầu tiên</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Chỉ vị trí của trụ bảo vệ, gồm đường trên/đường giữa/đường dưới, tổng cộng 6 trụ 1 tầng.
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
      <div>Mạng hạ gục</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Chỉ số lần hạ gục của tuyển thủ các đội tham gia, dựa theo bảng điểm.
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
      <div> Chiến công đầu</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Dựa theo bảng điểm, giành điểm đầu tiên là chiến công đầu.
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
      <div>Trụ đầu</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Đội phá hủy trụ bảo vệ đầu tiên ( tự phá hủy hoặc lính của đối thủ phá hủy đều được tính).
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
      <div>N mạng</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Chỉ 1 đội giành N mạng trước. Ví dụ : 5 mạng: Chỉ 1 đội giành 5 mạng trước.。
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
      <div> Lần hạ gục thứ N</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Chỉ đội giành lần hạ gục thứ N, Ví dụ: Lần hạ gục thứ 5: Chỉ đội nào
      giành lần hạ gục thứ 5.
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
      <div> Kèo trước phút N</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Trận đấuđấu vừa đạt được phút thứ X thì không được tính.
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
        <div>Rớt mạng trong DOTA2</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Trường hợp A: Nếu rớt mạng trước chiến công đầu, nhưng kết nối lại trong khi chơi, tất cả kết quả hợp lệ
        được chính thức công nhận đều thanh toán bình thường.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Trường hợp B: Nếu rớt mạng sau chiến công đầu và trận đấu đang diễn ra bình thường, tức là không có ai bỏ
        cuộc, tất cả kết quả hợp lệ được chính thức công nhận đều thanh toán bình thường.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Trường hợp C: Trước chiến công đầu nếu một bên rớt mạng và cho đến khi trận đấu kết thúc cũng không thể
        kết nối lại, để đảm bảo công bằng, vé cược của trận đấu bị coi là vô hiệu.
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
        <div>Vị trí trợ thủ đoạt chiến công đầu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        hỉ người chơi vị trí 4 và 5 của trung tâm thông tin tổ đội có thể nhận được máu đầu tiên hay không. Ngay
        cả khi “trợ thủ” giành được chiến công đầu, chỉ cần bảng điểm hiển thị tính điểm sẽ được tính là 'Có'.
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
        <div> Trong vòng 3 phút đầu có xuất hiện chiến công đầu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        phút đầu tiên có xuất hiện lần hạ gục đầu không ( không bao gồm 03:00)
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
        <div>Xuất hiện Lính siêu cấp</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Nếu 6 nhà lính của một đội bị hủy tính là “Có”
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
        <div>Đội giành lần hạ gục thứ N</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Chỉ bên nào giành lần hạ gục thứ N, không phải bên đầu tiên giành N lần hạ gục.(VD: Đội giành lần hạ gục
        thứ 20, chỉ bên nào giành lần hạ gục thứ 20).
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
        <div>Tổng số anh hùng sống sót khi căn cứ phát nổ</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Theo video chính thức của trận đấu, tổng số anh hùng sống sót của người chiến thắng và người thua cuộc
        được tính ở "thời điểm đầu tiên" sau khi hoàn thành tấn công căn cứ của quân địch. (Những anh hùng vẫn
        đang đếm ngược trong "khoảnh khắc đầu tiên" sau khi phá hủy căn cứ của quân địch của thành tích chính được
        tính sẽ không được hồi sinh).
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
      <div>Liên Minh Huyền Thoại </div>
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
        <div>Vị trí của người chơi trong trò chơi</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Đường trên/ Đường giữa/ Đi rừng/Trợ thủ/ADC dựa vào tình hình thi đấu thực tế của trận đấu.
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
        <div>Sứ Giả Khe Nứt</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Chỉ tính hạ gục, đội này hạ gục là thắng.
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
        <div>Tổng số trụ bị phá hủy Lẻ/ Chẵn</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Dựa theo bảng điểm cuối trận, tổng số trụ bị phá hủy của 2 đội ( bao gồm trụ nhà chính ), không tính nhà
        lính và nhà chính căn cứ.
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
        <div>Định nghĩa thanh toán cho tất cả kèo Rồng nhỏ</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Chỉ tính Rồng nguyên tố, không tính Rồng cổ đại.
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
        <div>Số lượng Baron được 2 đội giết</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Tính bình quân đội đỏ và đội xanh giết qua Rồng lớn.
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
        <div>Tổng số tháp thủy tinh bị phá hủy Đại/ Xỉu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Việc phá hủy các tháp thủy tinhtinh tái sinh sẽ không được tính gấp đôi trong số lần phá hủy.
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
        <div>Phá hủy nhiều tháp thủy tinh nhất</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Sau khi cùng một tháp thủy tinhtinh bị phá hủy, phục sinh lại bị phá hủy, tổng cộng chỉ được tính là 1
        tinh thể (cùng một tinh thể chỉ được tính một lần, tinh thể chính là không được tính).
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
        <div>Chiến công đầu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Bên đầu tiên hạ gục đối thủ là bên thắng dựa theo bảng điểm.
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
        <div>Thanh toán vé cược dựa trên thời gian</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Thanh toán theo thời gian diễn biến trận đấu kết quả trận đấu dựa theo tỷ số trên trang mạng chính thức,
        thanh toán theo kết quả của trang mạng chính thức và truyền hình trực tiếp chính thức ( Video demo ).
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
        <div>Đoán thuộc tính Rồng nguyên tố thứ N</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        thuộc tính Rồng nguyên tố tiếp theo sẽ hiển thị trên vách đá, chỉ cần thông báo là đã có kết quả. Thanh
        toán theo kết quả của trang mạng chính thức hoặc truyền hình trực tiếp chính thức ( Video demo ).
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
        <div>Rồng lớn bị cướp không</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Nếu trận đấu không có Rồng lớn bị tiêu diệt thì thanh toán theo kết quả 2 đội 0:0 là “Không”, kết quả
        trận đấu thanh toán theo tỷ số của trang mạng chính thức hoặc truyền hình trực tiếp chính thức ( Video
        demo ).
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
        <div>Có được linh hồn Rồng</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Trong 1 bản đồ thi đấu xuất hiện đội có được linh hồn Rồng ( chỉ 1 đội giành sớm nhất 4 con Rồng nhỏ sẽ
        được tính là linh hồn Rồng, thuộc tính Rồng nhỏ thứ 3 là thuộc tính của linh hồn Rồng ).
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
        <div>Tổng số anh hùng sống sót khi căn cứ phát nổ</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Theo video chính thức của trận đấu, tổng số anh hùng sống sót của người chiến thắng và người thua cuộc
        được tính ở "thời điểm đầu tiên" sau khi hoàn thành tấn công căn cứ của quân địch. (Những anh hùng vẫn
        đang đếm ngược trong "khoảnh khắc đầu tiên" sau khi phá hủy căn cứ của quân địch của thành tích chính
        được tính sẽ không được hồi sinh).
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
        <div>Tổng hạ gục Đại/ Xỉu: ( Phút 00:00-10:00, trong thời gian quy định )</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Cược hợp lệ trong thơid gian quy định, nếu thời gian thi đấu không vượt quá thời gian quy định, VD:
        15:00 phút, khoảng thời gian 0-15 phút là vô hiệu. Theo đồng hồ tính giờ trong trò chơi, kết quả trận
        đấu thanh toán theo tỷ số của trang mạng chính thức hoặc truyền hình trực tiếp chính thức ( Video demo
        ).
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
          15
        </div>
        <div>Tổng số cuối hạ gục Đại/ Xỉu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Số cuối số lần hạ gục của 2 bên cộng lại so với giá trị kèo. VD kết quả trận đấu là 7:15 ( số cuối số
        lần hạ gục của 2 bên cộng lại 7+5= 12 ) kết quả trận đấu dựa theo tỷ số trang mạng chính thức và bảng
        thống kê sau trện đấu, APi hoặc truyền hình trực tiếp chính thức ( Video demo ).
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
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Triple Kill hiển thị sau khi hạ gục 3 tướng địch liên tiếp, Quadra Kil hiển thị sau khi hạ gục 4 tướng
        địch liên tiếp.
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
        <div>Quét sạch</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Tất cả thành viên của một đội bị hạ gục hoặc trò chơi có thông báo quét sạch đều tính là Quét sạch.
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
        <div>Thắng vòng 1 súng lục</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        đội thắng ở vòng đấu súng lục đầu tiên
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
        <div>Đội đầu tiên thắng 5/10 vòng</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Đội thắng 5/10 vòng đấu sớm nhất.
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
        <div>Đối với cược Lẻ/ Chẵn</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        khi kết quả là “0”, tính là chẵn.
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
        <div>Tổng số Headshot vòng N</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Xuất hiện biểu tượng/ thông báo Headshot (bắn trúng đầu) mới được tính là hạ gục bằng Headshot, tính tất cả
        Headshot được tạo ra trong vòng đấu.
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
        <div>Cách thắng vòng N</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        ó 4 cách thắng: Hết thời gian/ Nổ bom/ Gỡ bom/ Quét sạch đối phương, phán đoán phương thức thắng của vòng này.
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
        <div>Hạ gục đầu tiên</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        phải hạ gục đối thủ, nếu tự sát hoặc đồng đội hạ gục, ván này được coi là không có hạ gục đầu tiên, hoàn lại
        tiền cược liên quan.
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
        <div>Bị hạ gục đầu tiên</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Người đầu tiên bị hạ gục trong 1 vòng, bất kỳ phương pháp chết nào cũng được tính.
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
        <div>Tổng hạ gục vòng súng lục và vòng N Tài/ Xỉu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        thanh toán theo kết quả của trang mạng chính thức, truyền hình trực tiếp chính thức (Video demo).
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
        <div>Kèo hạ gục</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        thanh toán theo tỷ số trên trang mạng chính thức, truyền hình trực tiếp chính thức (Video demo).
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
        <div>Tổng hạ gục vòng súng lục và vòng N Tài/ Xỉu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        thanh toán theo kết quả của trang mạng chính thức, truyền hình trực tiếp chính thức (Video demo). Lưu ý: Bị
        bom hạ gục không tính vào tổng hạ gục.
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
        <div>Định nghĩa các vòng CSGO</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Khi 1 vòng mới bắt đầu đếm ngược thời gian, vòng trước đó coi như kết thúc.
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
        <div>Đội thắng hiệp 1</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Trong CSGO, đội có số điểm cao hơn trong hiêp 1 (15 ván đầu) thắng cược.
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
        <div>Hạ gục bằng dao</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Chọn bên và khởi động không tính là hợp lệ, nếu bị hạ gục bằng dao của đồng đội, cũng tính là “Có”.
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
        <div>Ha gục bằng lựu đạn</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Chọn bên và khởi động không tính là hợp lệ, chỉ tính hạ gục bằng “Lựu đạn” ,”Bom cháy” và các loại vật ném
        khác không được tính, nếu bị đồng đội hạ gục bằng lựu đạn, cũng tính là “Có”.
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
          15
        </div>
        <div>Người chơi được nhiều trợ công nhất</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        trong trận đấu CSGO, tất cả các loại trợ công hạ gục đối phương tính vào trợ công của người chơi. Lưu ý: không
        tính trợ công bom choáng.
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
        IV
      </div>
      <div> Vương Giả Vinh Diệu</div>
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
        <div>Phá hủy trụ</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        đối phương phá hủy trụ bảo vệ đầu tiên mới được tính. Lưu ý không tính nhà chính.
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
        <div>Chiến công đầu</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        bên đầu tiên hạ gục đối thủ là bên thắng ( theo bảng điểm).
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
        <div />
      </div>
      <div style="padding: 14px 14px 14px 40px">
        2 phút 30 giây đầu tiên tiêu diêt Tyrant đầu tiên (02:30 tính là
        không)
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
        <div>Tổng số Overlord bị tiêu diệt Lẻ/ Chẵn</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Tính tấ cả Overlord, bao gồm Tyrant và Dark Tyrant.
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
        <div>Tổng số Tyrant bị tiêu diệt Lẽ/ Chẵn</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Tính tất cả Tyrant bao gồm Dark Tyrant.
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
        V
      </div>
      <div>PUBG</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      1. Xếp hạng điểm A vs B: Điểm PUBG bao gồm điểm sinh tồn và điểm tiêu diệt. Khi hai đội có cùng điểm xếp hạng,
      đội có điểm hạ gục cao nhất sẽ thắng. Ví dụ: nếu hai đội có cùng điểm và mạng hạ gục giống nhau, đội nào có thứ
      hạng sống sót cao nhất sẽ chiến thắng.
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
        Ⅵ
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
        <div>Đội thắng hiệp 1</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Trong CSGO, đội có số điểm cao hơn trong hiệp ( 12 ván đầu) thắng cược
      </div>
    </div>
    <!-- 叶尾 -->
  </div>
</template>
