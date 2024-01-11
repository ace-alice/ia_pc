<script setup lang="ts" name="ViRule2"></script>

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
        一
      </div>
      <div>Đặt kèo trực tiếp</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Kèo trực tiếp có nghĩa là đặt cược vào một trận đấu đang diễn ra. Cược
      sẽ được chấp nhận trong thời gian diễn ra trận đấu và sẽ dừng sau khi
      đóng cược. Lưu ý: Miễn là trận đấu đã được chuyển sang trạng thái trực
      tiếp, bất kể trận đấu đã bắt đầu hay chưa, hệ thống sẽ tính tất cả cược
      là vé cược trực tiếp.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      1, Tất cả các vé cược trực tiếp đều phải tuân theo quy trình chấp nhận
      của hệ thống. Điều này có khả năng dẫn đến việc xác nhận đặt cược bị
      chậm trễ hoặc bị thất bại.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      2, Tất cả các cược sẽ đợi trong một khoảng thời gian nhất định để hệ
      thống chấp nhận xác định đặt cược có thành công hay không. Điều này có
      nghĩa là đặt cược có thể bị hủy bỏ hoặc được xác nhận.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      3, Trong trường hợp xảy ra sự cố kỹ thuật hoặc các trường hợp đặc biệt
      khác trong thời gian diễn ra trận đấu , tất cả các cược đang chờ xử lý
      sẽ không được xác nhận và xem như bị thất bại.
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
      <div>Thanh toán kèo trực tiếp</div>
    </div>
    <div style="padding: 14px 14px 14px 40px" />
    <div style="padding: 14px 14px 14px 40px">
      a, Trận đấu không thể diễn ra hoặc diễn ra lại do các yếu tố bất khả
      kháng trong một bản đồ. Nếu trận đấu không thể diễn ra vì lý do bất khả
      kháng trên một bản đồ, cược đã thanh toán vẫn có hiệu lực và tiền đặt
      cược trực tiếp cho cược chưa thanh toán cũng sẽ được hoàn trả tiền cược.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b, Nếu trận đấu được phát lại vì lý do bất khả kháng trên một bản đồ,
      cược đã được thanh toán vẫn có hiệu lực và việc đặt cược vào kết quả
      chưa được thanh toán sẽ phụ thuộc vào kết quả chơi lại, và trận đấu hoặc
      bản đồ được phát lại sẽ được coi là một trận đấu riêng biệt trò chơi, vì
      vậy các cược trực tiếp bị ảnh hưởng sẽ bị thu hồi để hoàn trả tiền cược.
    </div>
    <!-- 叶尾 -->
  </div>
</template>
