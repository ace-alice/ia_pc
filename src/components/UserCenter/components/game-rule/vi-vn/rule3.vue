<script setup lang="ts" name="ViRule3"></script>

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
      <div>Những lưu ý của cược xiên</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a, Cược xiên là chọn 3 hoặc nhiều trận đấu trong 1 vé cược. Tất cả trận
      đấu trong cược xiên thắng ,vé cược mới được coi là “thắng”. Nếu 1 cược
      trong tổ hợp cược xiên thắng, sẽ thêm vào kèo cược tiếp theo, cho đến
      khi tất cả cược của cược xiên đều thắng hoặc có 1 trận thua là kết thúc.
      Nếu cược xiên có trận đấu cược vô hiệu hoặc hòa, cược xiên này vẫn hợp
      lệ, kèo hòa/vô hiệu tính là “1”.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b, Chỉ phương thức đặt cược kết hợp 3 hoặc nhiều trận đấu. Nếu tất cả
      lựa chọn đều thắng, cược xiên thắng giành tỷ lệ cược gộp của 3 cược. Nếu
      1 (hoặc nhiều) lựa chọn bị thua, cược “ Cược xiên” thua cuộc. Nếu 1
      (hoặc nhiều) lựa chọn bị rút lại hoặc bị hủy bỏ, tỷ lệ cược cho lựa chọn
      đó sẽ khôi phục về 1.00. Cược xiên cược tối đa 15 cược.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      c, Giải thưởng của mỗi một vé cược xiên cao nhất lên đến 100.000 nhân
      dân tệ.
    </div>
    <!-- 叶尾 -->
  </div>
</template>
