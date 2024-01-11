<script setup lang="ts" name="ViRule1"></script>

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
      <div>Dời lịch trận đấu</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Vì mục đích thanh toán, trừ khi trận đấu xác nhận được thời gian thay đổi trong vòng 12 giờ và trận đấu có thể diễn ra trong vòng 24 giờ kể từ thời gian dự kiến ban đầu, nếu không có thông tin chính thức về việc trận đấu đang được diễn ra, xác định là không thi đấu hoặc bị hoãn sẽ bị coi là vô hiệu / không có kết quả / không tham gia thi đấu. Đơn cược đội / tuyển thủ vào vòng trong thi đấu tranh giải hoặc vô địch luôn có hiệu lực.
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
      <div />
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Tất cả cược sẽ bị vô hiệu nếu thông tin đội được liệt kê cho sự kiện không
      chính xác. Nếu tên cầu thủ / đội bị viết sai chính tả hoặc biểu tượng của
      đội được hiển thị không đúng, công ty có quyền sửa lỗi và tất cả các cược
      vẫn có hiệu lực, trừ khi rõ ràng là sai đối tượng.
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
      <div>Thông tin kèo sai</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Nếu thông tin kèo được liệt kê không chính xác, tất cả các vévé cược đặt
      kèo này sẽ bị coi là vô hiệu. Nếu sai về tiêu đề và thời gian của trận đấu
      phù hợp với giải đấu/ người tham gia thi đấu / đội được thi đấu thực tế.
      Nhà cáicái có quyền sửa chính xác và tất cả các cược sẽ vẫn có hiệu lực và
      được thanh toán theo kết quả thi đấu thực tế.
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
      <div>Đội thay đổi tên hoặc đổi người</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Nếu người chơi hoặc đội thay đổi tên, chỉ cần có thể xác định đối
      tượng là trận nào hoặc ván nào, kèo dùng tên trước đó được cung cấp dưới
      tên trước đó sẽ có hiệu lực. Cược sẽ không bị hủy bỏ nếu một đội có cầu
      thủ thay thế hoặc thay thế cho trận đấu, nếu ban tổ chức trận đấu cho
      phép thay người và kết quả của trận đấu được công bố, thì tất cả vé cược
      sẽ được coi là bình thường.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b) Nếu một đội thay đổi tên nhưng có cùng đội hình, thì trong suốt trận
      đấu, tất cả các cược vào tên đội mới cũng như tên đội cũ. Tuy nhiên, nếu
      một đội được thay thế bằng một đội hình hoàn toàn mới và mỗi cầu thủ
      khác với đội tham gia ban đầu, tất cả các cược bị coi là vô hiệu.
      style="DISPLAY: FLEX; ALIGN-ITEMS: CENTER; COLOR: #FFF; FONT-SIZE: 16PX"
      >
      <div
        style="
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
      <div>Người tham gia không phải là tuyển thủ chính thức của đội</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Nếu có tuyển thủ tham gia không chính thức (hoặc một trong số đó), và
      việc thay đổi tuyển thủ chưa được thông báo trước khi lịch thi đấu được
      công bố, công ty có quyền hủy cược và tiền cược sẽ được hoàn lại.
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
      <div>
        Yếu tố bất khả kháng trong một bản đồ khiến trận đấu không thể diễn ra
        hoặc thi đấu lại
      </div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Trong một bản đồ nếu vì lý do bất khả kháng trận đấu không thể diễn
      ra. Cược đã thanh toán sẽ vẫn có hiệu lực và cược kèo chưa thanh toán
      kết quả sẽ hoàn tiền cược.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b. Trong một bản đồ nếu vì lý do bất khả kháng trận đấu phải thi đấu
      lại. Cược đã thanh toán sẽ vẫn có hiệu lực và cược kèo chưa thanh toán
      kết quả dựa theo kết quả thi đấu lại. Nếu trận đấu không được bắt đầu
      trong vòng 12 giờ, hủy tất cả cược chưa thanh toán.
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
      <div>Luật thanh toán khác</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Trong trường hợp không có bằng chứng nhất quán và độc lập hoặc trong
      trường hợp có bằng chứng mâu thuẫn rõ ràng, các cược sẽ được thanh toán
      dữ liệu độc lập có liên quan của riêng chúng tôi.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b. Việc thanh toán cược sẽ dựa trên kết quả chính thức được công bố bởi
      cơ quan quản lý có liên quan của giải đấu, chương trình phát sóng hoặc
      trò chơi được chỉ định. Các cược vô hiệu / không có kết quả / không tham
      gia thi sẽ bị coi là vô hiệu.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      c. Công ty có quyền đình chỉ việc thanh toán bất kỳ kèo nào vô thời hạn
      nếu có sự không chắc chắn về kết quả.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      d. Tất cả các kết quả đã công bố không thể thay đổi sau 36 giờ và không
      có yêu cầu nào khác sẽ được chấp nhận sau khoảng thời gian này. Công ty
      sẽ chỉ thay thế / sửa kết quả do lỗi của con người, lỗi của hệ thống,
      hoặc bằng cách tham khảo nguồn kết quả trong vòng 36 giờ sau khi kết quả
      được công bố, sau 12 giờ, chúng tôi sẽ hoàn trả tiền cược.
      <!-- 叶尾 -->
    </div>
  </div>
</template>
