<script setup lang="ts" name="InRule4"></script>

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
      <div>Pemenang</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pemenang didasarkan pada permainan/babak dan hasil akan didasarkan pada
      hasil pertandingan resmi yang dipublikasikan atau siaran langsung resmi
      (rekaman video).Jika jumlah permainan/babak acara salah atau telah diubah,
      semua taruhan dianggap tidak sah dan akan dikembalikan.
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
      <div>Handikap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Hasil handikap didasarkan dari hasil pertandingan resmi yang
      dipublikasikan atau siaran langsung resmi (rekaman video). Handikap
      termasuk map, jumlah babak, dan kill. Jika babak acara salah atau telah
      diubah, semua taruhan akan dianggap tidak valid dan akan dikembalikan.
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
      <div>hanya menyediakan opsi menang, kalah, saat hasil akhir seri</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Ketika hasil pertandingan terakhir adalah seri untuk pasar yang hanya
      menawarkan opsi menang atau kalah (jika ada perpanjangan waktu, hasil dari
      perpanjangan waktu terakhir akan dianggap sebagai hasil pertandingan
      akhir), semua taruhan di pasar itu akan dibatalkan dan akan dikembalikan.
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
      <div>Jika tidak ada panel statistik setelah pertandingan</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Di League of Legends (LOL), penyelesaian akan didasarkan pada hasil yang
      ditampilkan di halaman panel statistik pasca-pertandingan setelah
      pertandingan. Jika karena alasan tertentu tidak tersedia, penyelesaian
      hasil akan sesuai dengan siaran langsung resmi (rekaman video) atau dari
      hasil yang dipublikasikan di situs web resmi. Tata letak dan tampilan
      informasi dari panel statistik pasca-pertandingan dapat bervariasi
      berdasarkan wilayah yang berbeda.
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
      <div>Pemenang 2 way Handikap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Situasi 1: Ada kemungkinan seri (misalnya, BO2 main 2babak, BO1 tdk ada
      overtime) Pemain harus memprediksi pihak mana yang akan menang, tidak akan
      ada seri, untuk menang taruhan. Jika hasil pertandingannya seri, taruhan
      akan dikembalikan.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Situasi 2: Pemenang pertandingan dapat ditentukan， Pemain harus
      memprediksi siapa yang akan memenangkan permainan; segala bentuk
      perpanjangan waktu akan dihitung.
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
      <div>1x2 3way Handikap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Jenis taruhan ini cocok untuk seri (misalkan, BO2 main dua babak, BO1
      tidak ada perpanjangan waktu), pemain perlu prediksi hasil, barulah bisa
      memenangkan taruhan.
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
      <div>Handikap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Memprediksi hasil dengan benar setelah handikap dihitung, segala bentuk
      perpanjangan waktu akan dihitung.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Bilangan bulat (tidak berkoma)：Jika jumlah handicap adalah bilangan
      bulat, seperti "-1, -2, -3", dll., total skor akan dikurangi dari
      Handicap. Jika hasilnya genap, tidak akan ada yang menang atau kalah.
      Contoh: A-1 dan B+1, hasil kedua tim adalah A=3: B=2, karena A(3)-1=2:
      B(2), maka tidak ada tim yang menang atau kalah.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b. setengah：Jumlah handikap adalah setengah, seperti "-0.5, -1.5, -2.5,"
      dll., total skor akan dikurangi dari Handikap. Contoh: A-1.5 dan B+1.5,
      hasil kedua tim adalah A=3: B=2, karena A(3)-1.5=1.5 &lt; B(2), Tim B
      menang dan Tim A kalah.
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
      <div>Over/Under (besar/kecil）</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Prediksi dengan benar jumlah total gameplay berdasarkan nilai over atau
      under, segala bentuk overtime juga akan dihitung
    </div>
    <div style="padding: 14px 14px 14px 40px">
      a. Bilangan bulat (tidak berkoma). Skor handikap adalah bilangan bulat,
      seperti "26, 27, 28", dll., kurangi skor handikap dari jumlah total gol
      dalam pertandingan. Jika hasilnya adalah angka positif, itu lebih besar
      dari menang, jika hasilnya negatif, kurang dari menang, dan jika hasilnya
      nol, tidak menang atau kalah. Misalnya: ebih besar dari 26 dan kurang dari
      26 , jika total gol kedua tim = 26, maka 26-26=0, maka over dan under
      tidak menang/kalah.
    </div>
    <div style="padding: 14px 14px 14px 40px">
      b. Hidup/mati. Skor handikap adalah setengah, seperti "26.5, 27.5, 28.5,"
      dll., kurangi skor handikap dari jumlah total gol dalam permainan, jika
      hasilnya positif, itu lebih besar dari menang, dan jika hasilnya negatif,
      itu kurang dari menang. Misalnya: lebih besar dari 26,5 dan kurang dari
      26,5, jika jumlah total gol antara kedua tim adalah 26, karena
      26-26,5=-0,5, jadi kurang dari 26,5 = menang dan lebih besar dari 26,5 =
      kalah.
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
      <div>Ganjil genap</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Memprediksi dengan benar apakah hasilnya Ganjil atau Genap, segala bentuk
      perpanjangan waktu akan dihitung (Jika hasilnya 0 maka dianggap 'Genap')
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
      <div>Waktu /durasi</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Berkaitan dengan durasi/waktu pertandingan. Durasi permainan tergantung
      pada waktu yang ditampilkan di papan skor resmi setelah pertandingan. Jika
      papan skor tidak disediakan, waktu dalam permainan akan berlaku. Jika
      waktu yang ditampilkan lebih besar atau sama dengan waktu yang ditampilkan
      di pasar, maka akan dihitung.
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
      <div>Total Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Jumlah total pembunuhan dalam satu pertandingan; angka pada papan skor
      resmi setelah akhir pertandingan akan berlaku. Jika papan skor tidak
      disediakan, tampilan dalam pertandingan akan berlaku.
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
      <div>Jumlah tower yang Hancur</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Berkaitan dengan semua tower yang dihancurkan di babak sebelum permainan
      berakhir. tower yang dihancurkan oleh minion juga akan dihitung.
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
      <div>lokasi tower pertama hancur</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Berkaitan dengan lokasi Tower (Top Lane/Mid Lane/Bottom Lane), total 6
      tower.
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
      <div>Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Mengacu pada jumlah kill oleh para pemain dari tim yang berpartisipasi,
      dan papan skor akan benar.
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
      <div>First Kill</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Yang pertama mendapatkan kill, skor pertama adalah first kill.
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
      <div>tower Pertama Hancur</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Tim pertama yang menghancurkan Tower (Jika tower ditolak atau dihancurkan
      oleh minion, itu akan tetap dianggap sah).
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
      <div>N Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      jumlah n kill yang ditampilkan di papan skor yang dilakukan oleh sebuah
      tim, misalnya: First to 5 Kills- Tim pertama yang mendapatkan 5 kill.
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
      <div>Nth Kills</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Pertains to which team just got the Nth Kill (1st, 2nd, 3rd,4th,5th, and
      so on) For example: Third Kill- The team who got the 3rd kill in the
      match. Tim mana yang baru saja mendapatkan Kill ke-N (ke-1, ke-2, ke-3,
      ke-4, ke-5, dan seterusnya) Contoh: Kill-3, Tim yang mendapatkan kill ke-3
      dalam pertandingan.
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
      <div>Dalam n Menit</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Ketika pengatur waktu permainan mencapai n menit, itu tidak termasuk dalam
      perhitungan.
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
        <div>Koneksi terputus saat pertandingan berlangsung</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Situasi A: Jika koneksi terputus sebelum first blood dihasilkan, tetapi
        berhasil terkoneksi ulang selama permainan, maka, semua hasil valid yang
        diakui secara resmi akan diselesaikan secara normal.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Situasi B: Jika koneksi terputus setelah first blood dihasilkan, semua
        hasil valid yang diakui secara resmi akan diselesaikan secara normal.
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Situasi C: Jika suatu pihak terputus dan tidak dapat terhubung kembali
        dengan sukses sebelum first blood dihasilkan, dan terus gagal untuk
        menyambung kembali dengan sukses di waktu permainan berikutnya hingga
        akhir permainan, untuk memastikan keadilan dan keadilan dari permainan,
        taruhan akan dibatalkan.
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
        <div>Support role mendapatkan first kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Berkaitan dengan Posisi Support (Posisi 4 atau 5) mendapatkan First Kill
        Selama nama pemain Support tertera, apapun artinya, dianggap YA.
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
        <div>First blood terjadi dalam 3 menit</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        apakah 3 menit awal terjadi first blood (tidak termasuk dimenit 03:00).
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
        <div>Apakah ada mega creep</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Jika semua enam barak dari satu tim dihancurkan, itu dihitung sebagai
        "Ya".
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
        <div>
          Tim mana yang mendapatkan Nth Kill bukan duluan mendapatkan N Kills
        </div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Misalnya: tim yang mendapatkan Kill ke-20, artinya Tim yang mendapatkan
        kill ke-20.
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
          Jumlah hero yang masih bertahan/hidup saat tower terakhir hancur
        </div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        dari video pertandingan resmi, jumlah hero yang masih bertahan dari
        kedua tim akan dijumlahkan saat tower terakhir hancur. (Hero yang belum
        bangkit tidak dihitung).
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
      />
      <div>League of Legends</div>
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
        <div>Posisi pemain dalam permainan</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        （Top/Mid/Jungle/Support/ADC）Berdasarkan dalam aturan pertandingan.
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
        <div>Rift Herald Hanya kill yang dihitung</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        selama Rift Herald dibunuh oleh tim, itu dihitung..
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
        <div>Total Turret yang dihancurkan Ganjil/Genap</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        mengikuti papan skor setelah pertandingan selesai, total turret yang
        hancur 2 tim (termasuk nexus turret), Inhibitor & nexus/base tidak
        termasuk).
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
        <div>Hitungan semua naga</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        hanya hitung Elemental Drakes, bukan Elder Dragon.
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
        <div>Kedua tim membunuh baron:</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        merah dan biru membunuh naga
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
        <div>Ukuran total kristal yang dihancurkan</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Kristal yang dihancurkan dan diregenerasi tidak akan dihitung dalam
        jumlah kristal yang dihancurkan.
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
        <div>Hancurkan kristal paling banyak</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Setelah kristal yang sama dihancurkan, kebangkitan dihancurkan lagi, dan
        totalnya hanya dihitung 1 kristal (kristal yang sama hanya dihitung
        sekali, kristal utama tidak dihitung)
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
        <div>First blood</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        pihak yang duluan kill lawan jadi pemenang. Berdasarkan papan skor.
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
        <div>Semua taruhan berbasis waktu dan taruhan penyelesaian</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        diselesaikan sesuai dengan waktu kemajuan permainan, dan hasil kompetisi
        diselesaikan sesuai dengan skor di situs web resmi, hasil statistik
        pasca-pertandingan, dan siaran langsung resmi ( video demo).
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
        <div>Tipe Elemental Drake ke-n</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Atribut elemental dari Elemental Drake berikutnya akan ditampilkan di
        sudut kanan atas layar. Selama itu telah ditampilkan, sudah ada hasil
        yang jelas. Penyelesaian didasarkan pada streaming video langsung atau
        situs web resmi.
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
        <div>Elder Dragon terbunuh</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Jika tidak ada naga yang terbunuh dalam pertandingan, pertandingan akan
        diselesaikan menurut hasil 0-0 dari kedua tim sebagai "Tidak". video
        demo) untuk penyelesaian.
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
        <div>Dapatkan buff Jiwa Naga</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        sebuah tim menerima buff Dragon Soul (Tim yang membunuh 4 Elemental
        Drake mendapatkan Dragon Soul. Tipe Elemental Drake ketiga adalah Dragon
        Soul yang dikaitkan.
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
        <div>Total hero yang masih hidup saat Nexus dihancurkan O/U</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Berdasarkan video pertandingan resmi, berkaitan dengan jumlah total hero
        yang masih hidup untuk kedua tim pada saat pertama Nexus dihancurkan.
        (Hero yang masih CD tidak dihitung.)
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
        <div>Total Kills O/U (00:00-10:00 menit)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Taruhan hanya dianggap sah jika berada dalam jangka waktu yang
        ditentukan. Jika waktu pertandingan tidak melebihi jangka waktu yang
        ditentukan, misalnya: 15 menit, maka 0-15 menit dianggap tidak sah.
        Penyelesaian didasarkan pada situs web resmi atau streaming langsung.
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
        <div>Total Kills (O/U)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Jumlah kill dari kedua tim adalah total kill handikap. Misalnya: hasil
        pertandingan adalah 7:15 (maka 7+5=12). Penyelesaian didasarkan pada
        situs web resmi, panel statistik pasca-pertandingan, API, atau streaming
        langsung.
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
      />
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
        <div>Ronde pistol pertama</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        tim yang memenangkan ronde pistol pertama
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
        <div>Yang pertama memenangkan 5/10 ronde</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Tim pertama yang memenangkan 5/10 ronde
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
        <div>Market Genap ganjil</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Jika hasilnya 0 maka dianggap 'Genap'
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
        <div>Jumlah total headshots di ronde ke-N</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Hanya mereka yang memiliki ikon/prompt headshot yang dihitung sebagai
        headshot kill.
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
        <div>Cara memenangkan ronde ke-N</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Ada 4 cara untuk menang, yaitu kehabisan waktu / ledakan bom/menjinakan
        bom/kill semua tim lawan.
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
        <div>Mendapat first kill</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        harus membunuh tim lawan untuk dianggap sah. Jika bunuh diri atau
        dibunuh oleh rekan satu tim, ditentukan bahwa tidak ada first kill di
        ronde ini, dan taruhan yang relevan akan dikembalikan.
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
        <div>Pertama dibunuh</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Pemain pertama yang terbunuh di ronde, cara kematian apa pun dihitung.
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
        <div>Total kill dalam ronde N O/U</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Penyelesaian didasarkan pada streaming video langsung atau situs web
        resmi. Jika seorang pemain terbunuh oleh ledakan bom, itu tidak dihitung
        dalam total kill.
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
        <div>Kills berdasarkan market</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Penyelesaian didasarkan pada streaming video langsung atau situs web
        resmi.
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
        <div>Ronde Pistol dan ronde N Total Headshots O/U</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Penyelesaian didasarkan pada streaming video langsung atau situs web
        resmi. Kill headshot oleh rekan setim Anda sendiri dihitung.
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
        <div>CSGO definisi ronde</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Babak baru memasuki hitungan mundur pembelian, selesai di babak
        sebelumnya.
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
        <div>Pemenang babak pertama</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        dibabak pertama (15 putaran pertama) Tim dengan skor lebih tinggi
        dinyatakan menang.
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
        <div>Apakah terjadi kill menggunakan pisau (knife)</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        dironde pemanasan atau warmup tidak dihitung, jika dibunuh rekan dengan
        pisau, juga dihitung “ya”.
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
        <div>Apakah terjadi kill menggunakan Granat (Grenade )</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        dironde pemanasan atau warmup tidak dihitung, hanya kill "Granat" yang
        dihitung, "Bom pembakar" dan proyektil lainnya tidak dihitung, dan jika
        terbunuh oleh granat teman, itu juga akan dihitung sebagai "Ya".
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
        <div>Pemain mendapat assists terbanyak</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        dalam pertandingan, Semua jenis bantuan membunuh musuh dihitung, tidak
        termasuk flash bangs.
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
      />
      <div>KING OF GLORY</div>
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
        <div>Market tower</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Tim yang menghancurkan tower pertahanan pertama harus menghancurkan
        sebelum lawan melakukannya untuk dihitung. Base tidak dihitung.
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
        <div>First blood</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        pihak yang pertama membunuh lawan duluan yang dihitung (tunduk pada
        papan skor).
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
        <div>sebelum menit ke 02:30 apakah ada yang</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        membunuh tyrant (tidak dihitung pada menit 02:30)。
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
        <div>Total kill lord Genap/ganjil</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        Semua lord dihitung, termasuk Phophet overlord dan darklord
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
        <div>Total kill Tyrant genap ganjil</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        semua tyrant dihitung, , termasuk ordinary dan shadow.
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
      />
      <div>PUBG</div>
    </div>
    <div style="padding: 14px 14px 14px 40px">
      Poin Peringkat A vs B: Poin PUBG terdiri dari Survival Points dan Kill
      Points. Ketika kedua tim memiliki peringkat poin yang sama, tim dengan
      poin pembunuhan tertinggi menang. Misalnya, jika kedua tim memiliki poin
      yang sama dan membunuh sama, tim dengan peringkat kelangsungan hidup
      tertinggi menang.
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
        <div>pemenang babak pertama</div>
      </div>
      <div style="padding: 14px 14px 14px 40px">
        dibabak pertama pertandingan 【12 putaran pertama】Tim dengan skor lebih
        tinggi dinyatakan menang
      </div>
    </div>
    <!-- 叶尾 -->
  </div>
</template>
