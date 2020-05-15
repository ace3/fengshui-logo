const fengshui = [
  {
    NO: 1,
    TITLE: 'SEMPURNA',
    IS_GOOD: 1,
    DETAIL:
      'Dengan upaya yang tekun dan tekad yang kuat, usaha yang dijalankan akan mendapat reputasi dan nama baik. Kejujuran akan menuai kepercayaan sehingga karir akan sukses dan lancar. Sebaiknya, bersikaplah tenang dan jangan terlalu banyak merasa bimbang/perubahan.',
  },
  {
    NO: 2,
    TITLE: 'LENYAP/SIRNA',
    IS_GOOD: 0,
    DETAIL:
      'Nasib tidak menentu, kemajuan hanya pada waktu awal dan kemudian memudar. Cita-cita sulit terwujud dan banyak problem di semua sektor. Bekerja keras tetapi tidak mendapat hasil.',
  },
  {
    NO: 3,
    TITLE: 'KEBAIKAN',
    IS_GOOD: 1,
    DETAIL:
      'Bisa Memiliki reputasi baik dan nama terkenal. Dengan tekad dan usaha yang benar, akhirnya bisa mengubah yang buruk menjadi bernasib baik. Utamakan sikap toleransi dan kebijaksanaan agar selalu mendapat dukungan/bantuan sehingga harapan bisa terwujud menjadi nyata.',
  },
  {
    NO: 4,
    TITLE: 'BERUBAH TIDAK BAIK',
    IS_GOOD: 0,
    DETAIL:
      'Tidak bisa mandiri karena bimbang mengambil keputusan. Kalau menemui siklus yang buruk, bisa mengubah keadaan menjadi semakin terpuruk. Usaha hanya jalan ditempat, maju tidak mati pun segan.',
  },
  {
    NO: 5,
    TITLE: 'PANJANG UMUR',
    IS_GOOD: 1,
    DETAIL:
      'Ada kesempatan baik untuk meraih sukses, segala yang dikerjakan akan lancar kalau dilakukan dengan pikiran/logika yang sehat dan semangat yang tinggi. Dimanapun usaha dikembangkan akan menuai reputasi yag baik dan menguntungkan.',
  },
  {
    NO: 6,
    TITLE: 'STABIL',
    IS_GOOD: 1,
    DETAIL:
      'Dibutuhkan pikiran dan tindakan yang tenang (namun penuh perhitungan) untuk meraih sukses, selanjutnya nasib akan berbuah baik selamanya. Kalau waktunya tepat, pertolongan/bantuan akan didapat sehingga usaha akan berkembang dengan sangat maju.',
  },
  {
    NO: 7,
    TITLE: 'SENDIRIAN',
    IS_GOOD: 0,
    DETAIL:
      'Punya semangat, kuasa, dan jiwa kepemimpinan yang tinggi untuk meraih keberhasilan, sayangnya terlalu individual atau bertindak mengikuti ide yang subjektif. Kalau bisa membuka diri, sukses akan diraih.',
  },
  {
    NO: 8,
    TITLE: 'TEKAD TINGGI',
    IS_GOOD: 1,
    DETAIL:
      'Dengan tekad yang kuat dan mau bekerja keras, sukses besar akan didapat. Walaupun perjalan tidak mulus, asalkan punya kesabaran, semua rintangan dapat dilalui dah nasib pun menjadi baik.',
  },
  {
    NO: 9,
    TITLE: 'TIDAK BAIK',
    IS_GOOD: 0,
    DETAIL:
      'Ada bakat tetapi tidak punya kesempatan, ada keberhasilan tidak bisa mengelola sehingga kembali gagal. Tidak mendapat bantuan dan sering menghadapi kendala. Usaha sulit berkembang.',
  },
  {
    NO: 10,
    TITLE: 'GELAP',
    IS_GOOD: 0,
    DETAIL:
      'Segala usaha dan tindakan silit berhasil bahkan memungkinkan untuk gagal total. Sulit berkembang dan harapan tidak sesuai dengan impian karena selalu berpikir dengan cara yang salah.',
  },
  {
    NO: 11,
    TITLE: 'KEMBALI',
    IS_GOOD: 1,
    DETAIL:
      'Kalau punya tekad yang kuat, keberhasilan dengan mudah bisa didapat. Dengan kamuan, nasib buruk bisa diubah menjadi baik. Angka ini cocok untuk yang punya tekad baja.',
  },
  {
    NO: 12,
    TITLE: 'TIDAK CUKUP',
    IS_GOOD: 0,
    DETAIL:
      'Tidak bisa berjalan dengan lancar karena harapan tidak sesuai kenyataan. Kekuatan dan kemampuan tidak memadai sehingga usaha sulit berhasil. Bekerjalah sesuai realitas bukan berdasarkan keinginan.',
  },
  {
    NO: 13,
    TITLE: 'BIJAKSANA',
    IS_GOOD: 1,
    DETAIL:
      'Cocok untuk usaha bidang pendidikan atau jasa yang mengutamakan kepandaian. Dengan kesabaran, semua kesulitan bisa diatasi dan diganti dengan kemajuan atau sukses yang berarti.',
  },
  {
    NO: 14,
    TITLE: 'RUSAK',
    IS_GOOD: 0,
    DETAIL:
      'Simbol nasib buruk, usaha banyak mengalami hambatan. Bila mengalami siklus yang buruk, akan menjadi lebih buruk. Bila bertemu nasib baik, sukses dan tidaknya bergantung pada kemauan.',
  },
  {
    NO: 15,
    TITLE: 'UMUR PANJANG',
    IS_GOOD: 1,
    DETAIL:
      'Punya kesempatan baik sehingga usaha bisa maju dan lancar. Bila mau menghormati orang lain dalam bekerja, usaha akan berjalan lancar dan kejayaan akan bertahan lama.',
  },
  {
    NO: 16,
    TITLE: 'MURAH HATI',
    IS_GOOD: 1,
    DETAIL:
      'Utamakan kelembutan dan murah hati makan segala masalah bisa diubah menjadi kebaikan. Kalau bisa menanamkan kepercayaan secara benar, keberhasilan dalam reputasi dan kejayaan akan dimiliki.',
  },
  {
    NO: 17,
    TITLE: 'BAJA',
    IS_GOOD: 1,
    DETAIL:
      'Dengan tekad atau semangat bisa membawa keberhasilan dan mengalahkan segala rintangan. Kalau bisa menggunakan kesempatan usaha akan bertambah sukses.',
  },
  {
    NO: 18,
    TITLE: 'BERHASIL/SUKSES',
    IS_GOOD: 1,
    DETAIL:
      'Dengan semangat yang tinggi, keberhasilan yang besar akan mudah diraih. Kalau dapat melewati rintangan dengan cerdik, reputasi dan kekayaan akan diperoleh.',
  },
  {
    NO: 19,
    TITLE: 'BANYAK KESULITAN',
    IS_GOOD: 0,
    DETAIL:
      'Dengan kepandaian bisa mendapat sukses, tetapi faktor intern sering mengalami masalah. Persaingan keras, sulit mendapat kepercayaan atau bantuan. Kalau bisa tahan mental, baru bisa meraih sukses.',
  },
  {
    NO: 20,
    TITLE: 'NASIB JELEK',
    IS_GOOD: 0,
    DETAIL:
      'Usaha banyak hambatan dan mendapat banyak masalah/bencana yang akhirnya menuai kegagalan besar. Pumya impian besar, tetapi bertemu banyak rintangan. Maju tak bisa, mundur pun sulit.',
  },
  {
    NO: 21,
    TITLE: 'TERANG BULAN',
    IS_GOOD: 1,
    DETAIL:
      'Dengan sikap hati-hati saat bertindak, usaha akan lancar dan akhirnya bisa mewujudkan semua harapan. Menjadi pemimpin yang disegani, punya reputasi dan nama baik.',
  },
  {
    NO: 22,
    TITLE: 'MUSIM GUGUR',
    DETAIL:
      'Problem sering menghambat karena tidak memiliki tekad yang kuat sehingga usaha menjadi terhambat. Kualitas juangnya lemah, akhirnya meninggalkan impian di tengah jalan.',
  },
  {
    NO: 23,
    TITLE: 'KUAT',
    IS_GOOD: 1,
    DETAIL:
      'Setelah melalui berbagai proes, akhirnya berhasil menjadi kokoh dan bernasib baik. Punya reputasi nama yang baik, terkenal, dan pandai mencari terobosan untuk maju.',
  },
  {
    NO: 24,
    TITLE: 'MELIMPAH',
    IS_GOOD: 1,
    DETAIL:
      'Memiliki siasat yang cerdik untuk mengatasi rintangan. Sukses dapat diraih lewat usaha dan kecerdikan diri sendiri. Asalkan kepintaran yang dimiliki disertai tindak kebaikan, dukungan pun akan banyak diperoleh dan kejayaan bisa bertahan lama.',
  },
  {
    NO: 25,
    TITLE: 'CAKAP',
    IS_GOOD: 1,
    DETAIL:
      'Asal bisa menjaga diri dan mau terus belajar dengan lebih tekun, usaha yang dirintis akan meraih kejayaan dan reputasi yang besar. Akan tetapi, kalau bertindak salah/angkuh, nasib yang baik akan berubah buruk.',
  },
  {
    NO: 26,
    TITLE: 'BERUBAH ANEH',
    IS_GOOD: 0,
    DETAIL:
      'Kurang memiliki tekad sehingga usaha tidak bisa berkembang tapi justru mengalami kegagalan. Sering terjerumus dalam penipuan sehingga kena masalah/urusan.',
  },
  {
    NO: 27,
    TITLE: 'BERGELOMBANG',
    IS_GOOD: 0,
    DETAIL:
      'Sering kena masalah dan urusan akibat ucapan dan tindakan. Kurang konsentrasi dan banyak membuang waktu sehingga kesempatan baik lewat begitu saja tnpa membuahkan hasil. Awalnya ada keberhasilan, tapi kemudian gagal.',
  },
  {
    NO: 28,
    TITLE: 'BERPISAH',
    IS_GOOD: 0,
    DETAIL:
      'Sulit menghindari gosip dan nasib buruk. Banyak bencana, rintangan, perselisihan, dan masalah berat lainnya. Sebaiknya, belajarlah dari kegagalan untuk meraih keberhasilan.',
  },
  {
    NO: 29,
    TITLE: 'DAYAHIDUP',
    IS_GOOD: 1,
    DETAIL:
      'Punya kemampuan dan ide kreatif untuk menjadi sukses. Kalau ingin maju, pandai-pandailah membaca keadaan dan jangan terlalu berpikir subjektif.',
  },
  {
    NO: 30,
    TITLE: 'NASIB BURUK',
    IS_GOOD: 0,
    DETAIL:
      'Timbul tenggalam tidak stabil, bisa gagal dan bisa pula sukses, semuanya bergantung pada keadaan dan kemauan. Kalau kurang memiliki perhitungan, biasanya akan menemui hambatan dan kegagalan.',
  },
  {
    NO: 31,
    TITLE: 'BERANI & BIJAKSANA',
    IS_GOOD: 1,
    DETAIL:
      'Memiliki keberanian untuk menghadapi semua masalah atau rintangan sehingga berkesempatan meraih sukses besar. Angka ini sangat baik untuk nama dan kejayaan.',
  },
  {
    NO: 32,
    TITLE: 'BAHAGIA',
    IS_GOOD: 1,
    DETAIL:
      'Banyak kesempatan untuk berkembang maju dan mendapat bantuan dari lingkungan. Angka ini sangat baik untuk menuju kemakmuran dan kebahagiaan asalkan tidak lupa diri.',
  },
  {
    NO: 33,
    TITLE: 'NAIK KE LANGIT',
    IS_GOOD: 1,
    DETAIL:
      'Punya kuasa dan tujuan yang pasti, mendapat reputasi nama yang baik dan karir yang sukses. Yang penting bisa bertindak secara benar sesuai kemampuan dan bukan berdasarkan impian.',
  },
  {
    NO: 34,
    TITLE: 'MERUSAK KELUARGA',
    IS_GOOD: 0,
    DETAIL:
      'Banyak susah dan menderita, usaha pun sulit berhasil. Banyak perselisihan, beda pendapat hingga perpecahan. Nasib baik sulit berpihak pada angka ini.',
  },
  {
    NO: 35,
    TITLE: 'TENTERAM',
    IS_GOOD: 1,
    DETAIL:
      'Hanya memiliki keramahan tetapi kurang menggunakan upaya, hanya mendapat kemajuan biasa. Batin mendapat ketenangan dan kebahagiaan. Kalau ingin maju, gunakan akal sehat.',
  },
  {
    NO: 36,
    TITLE: 'RUSAK',
    IS_GOOD: 0,
    DETAIL:
      'Terlalu banyak ide dan pergerakan menyebabkan konsentrasi kerja menjadi buruk. Punya bakat tetapi tidak digunakan. Usaha selalu timbul tenggelam tak menentu. Angka ini hanya cocok untuk kegiatan sosial.',
  },
  {
    NO: 37,
    TITLE: 'BERKUASA',
    IS_GOOD: 1,
    DETAIL:
      'Usaha lancar dan sukses, punya kedudukan dan reputasi tinggi. Bila bijaksana, akan mendapat bantuan dan dukungan dari empat penjuru; bila egois, akan merusak kesempatan.',
  },
  {
    NO: 38,
    TITLE: 'LEMAH',
    IS_GOOD: 0,
    DETAIL:
      'Tanda lemah dan kurang semangat, punya bakat tetapi tidak punya kemauan, sehingga usahanya pun tidak berkembang. Sulit menjapai tujuan karena tidak mendapat pekercayaan. Belajarlah bertanggung jawab!',
  },
  {
    NO: 39,
    TITLE: 'KAYA',
    IS_GOOD: 1,
    DETAIL:
      'Punya kesempatan baik menuju sukses yang besar. Kalau bertindak benar akan mendapat reputasi nama baik dan kejayaan yang tahan lama. Angka ini cocok untuk keberhasilan.',
  },
  {
    NO: 40,
    TITLE: 'KURANG TENTERAM',
    IS_GOOD: 0,
    DETAIL:
      'Usaha timbul tenggelam tidak stabil, banyak bahaya mengancam, dan selalu terbentur urusan yang memusingkan. Lebih baik mundur dan sabar bila bertemu kesulitan sehingga kesulitan itu dapat berkurang.',
  },
  {
    NO: 41,
    TITLE: 'ADA KEBAJIKAN',
    IS_GOOD: 1,
    DETAIL:
      'Dengan kebajikan dan tindakan yang benar, usaha yang besar dapat dilakukan. Punya reputasi nama baik dan usaha yang lancar. Bila giat berusaha, masa depan akan cerah.',
  },
  {
    NO: 42,
    TITLE: 'BANYAK KEMAMPUAN',
    IS_GOOD: 1,
    DETAIL:
      'Punya bakat tetapi tidak percaya diri sehingga usaha banyak mengalami hambatan dan kegagalan. Kalau bisa konsentrasi dan memiliki tekad, kegagalan bisa dihindari.',
  },
  {
    NO: 43,
    TITLE: 'HARTA HILANG',
    IS_GOOD: 0,
    DETAIL:
      'Usaha tidak berjalan lancar bahkan sering gagal. Punya bakat dan kemampuan tetapi tidak memiliki kekuatan dan kesempatan. Sebaiknya, bergerak di bidang jasa.',
  },
  {
    NO: 44,
    TITLE: 'PUSING',
    IS_GOOD: 0,
    DETAIL:
      'Usaha tidak lancar, sering menghadapi masalah yang merugikan. Banyak konflik dan terjadi perpecahan, segalanya tidak bisa berjalan sesuai keinginan. Angka ini tidak cocok untuk bisnis.',
  },
  {
    NO: 45,
    TITLE: 'LANCAR',
    IS_GOOD: 1,
    DETAIL:
      'Punya kecerdasan dan bisa melakukan pekerjaan besar. Ketengan hati dan pikiran sangat dibutuhkan untuk meraih sukses dan kejayaan karir. Kalau ceroboh, akan gagal.',
  },
  {
    NO: 46,
    TITLE: 'BERUBAH ANEH',
    IS_GOOD: 0,
    DETAIL:
      'Punya modal dan kemampuan tetapi tidak memiliki kesempatan baik sehingga usaha sering gagal. Ketika kesempatan tiba, ada kemungkinan bisa meraih sukses.',
  },
  {
    NO: 47,
    TITLE: 'MEKAR',
    IS_GOOD: 1,
    DETAIL:
      'Pandai mengelola dan mendapat bantuan dari lingkungan sehingga semua rintangan dapat dilewati dan usaha terus berkembang maju. Semakin banyak teman semakin terbuka peluang untuk maju.',
  },
  {
    NO: 48,
    TITLE: 'BIJAKSANA',
    IS_GOOD: 1,
    DETAIL:
      'Memiliki bakat dan kepintaran untuk mengelola usaha. Asal bisa mawas diri, kesempatan untuk berhasil akan sangat besar. Punya reputasi dan nama besar.',
  },
  {
    NO: 49,
    TITLE: 'BERUBAH',
    IS_GOOD: 1,
    DETAIL:
      'Bila bertemu dengan teman/waktu yang baik, usaha akan sukses besar. Bila bertemu teman yang salah, usaha akan menemui masalah. Bila bertemu keberuntungan yang besar, yang buruk bisa berubah menjadi baik.',
  },
  {
    NO: 50,
    TITLE: 'MENJAUHI KESEDIHAN',
    IS_GOOD: 1,
    DETAIL:
      'Sukses dan gagal akan silih berganti. Dalam nasib buruk ada kebaikan dan sebaliknya. Kalau langkah awalnya salah, akhirnya akan gagal. Apabila bisa mengedalikan diri, sukses pun akan diraih.',
  },
  {
    NO: 51,
    TITLE: 'TIMBUL TENGGELAM',
    IS_GOOD: 0,
    DETAIL:
      'Naik dan turun, gagal dan berhasil selalu silih berganti karena tindakan yang selalu bimbang sehingga usaha sulit berkembang. Kalau pandai membawa diri, sukses besar bisa dimiliki.',
  },
  {
    NO: 52,
    TITLE: 'TERCAPAI KEINGINAN',
    IS_GOOD: 1,
    DETAIL:
      'Dengan kecerdikan bisa melakukan usaha besar dan membawa usaha semakin terkenal. Punya reputasi nama baik dan kekuasaan. Angka ini sangat cocok untuk usaha dengan organisasi besar.',
  },
  {
    NO: 53,
    TITLE: 'SEDIH',
    IS_GOOD: 0,
    DETAIL:
      'Diluar kelihatannya sangat berhasil padahal dalamnya rapuh. Usaha awalnya cukup berhasil tetapi akhirnya gagal total. Sebaiknya tidak berspekulasi dengan keadaan dan bisa membaca situasi.',
  },
  {
    NO: 54,
    TITLE: 'KECELAKAAN & MATI',
    IS_GOOD: 0,
    DETAIL:
      'Keadaan tidak pernah damai dan baik, selalu tertimpa urusan dan rintangan, akhirnya rugi dan gagal total. Angka ini tidak pernah mendatangkan nasib baik. Mengganti nama akan lebih baik.',
  },
  {
    NO: 55,
    TITLE: 'BAIK & BURUK',
    IS_GOOD: 1,
    DETAIL:
      'Diluar kelihatannya sangat makmur, tapi didalam banyak susah. Banyak masalah dan perselisihan. Nasib baik dan buruk selalu silih berganti. Kalau punya tekad yang kuat, mungkin akan sukses.',
  },
  {
    NO: 56,
    TITLE: 'BURUK',
    IS_GOOD: 0,
    DETAIL:
      'Ada awal tidak ada akhir, nasib buruk dan bencana selalu hadir. Tidak ada keberanian untuk bertindak karena tidak memiliki semangat. Segalanya tidak bisa berjalan lancar.',
  },
  {
    NO: 57,
    TITLE: 'BAIK',
    IS_GOOD: 1,
    DETAIL:
      'Punya kemauan kuat untuk sukses dan meraih kejayaan nama serta kedudukan. Ketika menghadapi kesulitan, bisa mengatasi dengan segera.',
  },
  {
    NO: 58,
    TITLE: 'BENCANA',
    IS_GOOD: 0,
    DETAIL:
      'Karir banyak masalah, naik turun tidak menentu. Ada keberhasilan namun akhirnya akan gagal total. Angka yang kurang baik untuk usaha.',
  },
  {
    NO: 59,
    TITLE: 'BANGKRUT',
    IS_GOOD: 0,
    DETAIL:
      'Kurang tekad dan tidak berani mengambil keputusan, selalu ragu-ragu. Tidak memiliki bakat yang tepat untuk berhasil. Andai berani mengambil keputusan yang tepat, ada kemungkinan untuk berhasil.',
  },
  {
    NO: 60,
    TITLE: 'TIDAK PUNYA VISI',
    IS_GOOD: 0,
    DETAIL:
      'Tidak memiliki rencana dan tujuan secara benar dan pasti sehingga sulit berhasil. Banyak menuai kegagalan daripada kesuksesan, sering bertemu urusan yang rumit.',
  },
  {
    NO: 61,
    TITLE: 'NAMA & KEKUASAAN',
    IS_GOOD: 1,
    DETAIL:
      'Punya reputasi nama dan kekuasaan tetapi kurang pandai mentur manajemen, akhirnya tidak bisa berkembang dengan baik dan benar. Kalau bisa melatih diri dengan lebih baik, ada kemungkinan berhasil.',
  },
  {
    NO: 62,
    TITLE: 'LEMAH',
    IS_GOOD: 0,
    DETAIL:
      'Usaha tidak bisa berkembang dengan baik karena tidak mendapat kepercayaan, tidak punya tekad sehingga cita-cita sulit tercapai. Sebaiknya, latihlah diri dengan mental yang teguh agar bisa berhasil',
  },
  {
    NO: 63,
    TITLE: 'MAKMUR',
    IS_GOOD: 1,
    DETAIL:
      'Asal mau tekun dan berkonsentrasi, semua usaha akan sukses dan sukses karena mendapat dukungan dari banyak orang. Kalau tidak waspada/lupa diri, yang baik bisa berubah menjadi buruk.',
  },
  {
    NO: 64,
    TITLE: 'KEHILANGAN NYAWA',
    IS_GOOD: 0,
    DETAIL:
      'Angka yang tidak baik untuk sebuah usaha, hanya akan menuai kegagalan, keributan, perpecahan, dan mendatangkan berbagai ancaman. Sebaiknya, gunakan nama lain.',
  },
  {
    NO: 65,
    TITLE: 'PANJANG UMUR',
    IS_GOOD: 1,
    DETAIL:
      'Apabila dikerjakan dengan benar dan sesuai kemampuan yang dimiliki, kesempatan yang baik akan terus berdatangan dan segalanya akan menghasilkan sukses.',
  },
  {
    NO: 66,
    TITLE: 'TIDAK DAMAI',
    IS_GOOD: 0,
    DETAIL:
      'Kurang percaya diri dan tidak mendapat kepercayaan, semua yang dikerjakan akan selalu maju mundur sehingga tidak memiliki kedamaian. Banyak menghadapi kendala dan urusan.',
  },
  {
    NO: 67,
    TITLE: 'MAKMUR JAYA',
    IS_GOOD: 1,
    DETAIL:
      'Akan mendapat banyak dukungan dan bantuan untuk mewujudkan impian. Bila dijalankan dengan benar, keberhasilan besar dengan mudah akan didapatkan.',
  },
  {
    NO: 68,
    TITLE: 'PENEMU',
    IS_GOOD: 1,
    DETAIL:
      'Punya ide kreatif dan mendapat kepercayaan banyak orang. Kalau bisa berjalan sesuai rencana, pasti akan berhasil dengan gemilang.',
  },
  {
    NO: 69,
    TITLE: 'TIDAK BERHASIL',
    IS_GOOD: 0,
    DETAIL:
      'Kurang semangat, kurang tekad, dan konsentrasi buruk sehingga semua yang dikerjakan akan menemui kegagalan. Punya kesempatan tetapi selalu diabaikan, inilah penyebab sebuah kegagalan.',
  },
  {
    NO: 70,
    TITLE: 'LENYAP',
    IS_GOOD: 0,
    DETAIL:
      'Tidak memiliki kemampuan untuk berkembang maju, selalu manjadi bagian yang salah dan dihadapkan pada situasi yang dirugikan. Angka yang tidak baik; paling baik ganti nama.',
  },
  {
    NO: 71,
    TITLE: 'SUSAH',
    IS_GOOD: 0,
    DETAIL:
      'Walaupun ada tanda keberhasilan, selalu ragu dan tidak berani mengambil keputusan. Kalau bisa meningkatkan keberanian, ada harapan untuk memajukan usaha.',
  },
  {
    NO: 72,
    TITLE: 'NASIB YANG MENDERITA',
    IS_GOOD: 0,
    DETAIL:
      'Awalnya sangat baik kemudian menyusut turun. Diluar kelihatannya berkembang baik, tapi didalam mengalami masalah. Apa yang sudah diraih hilang kembali.',
  },
  {
    NO: 73,
    TITLE: 'TAKUT',
    IS_GOOD: 0,
    DETAIL:
      'Tidak ada bakat untuk meraih sukses walau sudah memiliki modal kuat, maka hasilnya hanya ketengan bukan kemakmuran. Kalau mau lebih berusaha, pasti akan lebih berhasil.',
  },
  {
    NO: 74,
    TITLE: 'RINTANGAN',
    IS_GOOD: 0,
    DETAIL:
      'Tidak punya kebijaksanaan dan jiwa kepimpinan. Saat membuat usaha sering mendapat rintangan dan kegagalan. Bila tidak punya rencana/visi, akan sulit berhasil.',
  },
  {
    NO: 75,
    TITLE: 'BERTAHAN',
    IS_GOOD: 1,
    DETAIL:
      'Walau bernasib baik, keinginan sulit dicapai sebab rencana-rencananya kurang tepat. Lebih baik bertahan. Kalau bakatnya tepat, semua akan lancar dan sukses.',
  },
  {
    NO: 76,
    TITLE: 'BERPISAH',
    IS_GOOD: 0,
    DETAIL:
      'Luar dalam tidak pernah damai, sering menemui masalah atau konflik sehingga terjadi perpecahan. Usaha banyak hambatan. Lebih baik ganti nama agar menjadi lebih baik.',
  },
  {
    NO: 77,
    TITLE: 'BURUK',
    IS_GOOD: 0,
    DETAIL:
      'Kalau awal usahanya maju, dikemudian hari dapat terpuruk. Kalau awalnya sulit tetapi kemudian berjuang dengan gigih, akhirnya akan mendapat kejayaan. Harus bisa menjaga yang sudah baik.',
  },
  {
    NO: 78,
    TITLE: 'SUSAH DI AKHIR',
    IS_GOOD: 0,
    DETAIL:
      'Maju mundur silih berganti tetapi hasil terakhirnya akan mengalami kegagalan dan kehilangan. Harus bisa mempertahankan yang sudah ada agar terhindar dari bencana.',
  },
  {
    NO: 79,
    TITLE: 'TIDAK BISA MAJU',
    IS_GOOD: 0,
    DETAIL:
      'Sudah berusaha tetapi sulit mendapat hasil yang baik karena tidak mendapat dukungan atau bantuan dari linkugnan, akhirnya susah, frustasi, dan kehilangan semangat. Cepat cari upaya yang lain',
  },
  {
    NO: 80,
    TITLE: 'JADI BAIK',
    IS_GOOD: 1,
    DETAIL:
      'Pada awalnya mungkin kurang baik, tetapi harus terus berjuang dengan semangat yang gigih. Kalau bisa melewati semua ini, akan berubah menjadi sangat baik dan berhasil.',
  },
  {
    NO: 81,
    TITLE: 'KAYA RAYA',
    IS_GOOD: 1,
    DETAIL:
      'Nasib yang baik mudah didapat, usaha bisa maju dan sukses. Mendapat kembali modal yang hilang, akhirnya akan bahagia dan makmur.',
  },
];

module.exports = { fengshui };
