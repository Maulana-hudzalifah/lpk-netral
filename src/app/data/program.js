// Daftar program pelatihan. Semua isi adalah CONTOH, sesuaikan dengan program asli klien.

export const bagianProgram = {
  judul: "Program pelatihan",
  pengantar:
    "Pilih program sesuai negara tujuan. Durasi dan materi di bawah adalah contoh dan akan disesuaikan dengan jadwal angkatan.",
  labelDurasi: "Durasi",
};

export const daftarProgram = [
  {
    id: "magang-jepang",
    tujuan: "Jepang",
    nama: "Persiapan Magang Jepang",
    durasi: "± 4–6 bulan (contoh)",
    ringkasan:
      "Untuk peserta yang menyiapkan diri mengikuti program pemagangan teknis di Jepang.",
    materi: [
      { id: "magang-jepang-1", teks: "Bahasa Jepang dasar hingga percakapan kerja" },
      { id: "magang-jepang-2", teks: "Budaya dan etika kerja Jepang" },
      { id: "magang-jepang-3", teks: "Latihan fisik dan kedisiplinan" },
    ],
  },
  {
    id: "ssw-jepang",
    tujuan: "Jepang",
    nama: "Persiapan Tokutei Ginou (SSW)",
    durasi: "± 3–4 bulan (contoh)",
    ringkasan:
      "Persiapan ujian bahasa dan ujian keterampilan untuk jalur pekerja berketerampilan khusus.",
    materi: [
      { id: "ssw-jepang-1", teks: "Persiapan ujian bahasa Jepang (JFT-Basic / JLPT)" },
      { id: "ssw-jepang-2", teks: "Latihan soal ujian keterampilan bidang [isi bidang]" },
      { id: "ssw-jepang-3", teks: "Simulasi wawancara kerja" },
    ],
  },
  {
    id: "eps-korea",
    tujuan: "Korea",
    nama: "Persiapan Ujian EPS-TOPIK",
    durasi: "± 3 bulan (contoh)",
    ringkasan:
      "Kelas intensif untuk menghadapi ujian bahasa Korea dalam program EPS.",
    materi: [
      { id: "eps-korea-1", teks: "Kosakata dan tata bahasa Korea sesuai kisi-kisi ujian" },
      { id: "eps-korea-2", teks: "Latihan membaca dan mendengar" },
      { id: "eps-korea-3", teks: "Simulasi ujian berkala" },
    ],
  },
  {
    id: "budaya-korea",
    tujuan: "Korea",
    nama: "Bahasa & Budaya Kerja Korea",
    durasi: "± 2 bulan (contoh)",
    ringkasan:
      "Kelas lanjutan untuk membiasakan diri dengan bahasa dan suasana kerja di Korea.",
    materi: [
      { id: "budaya-korea-1", teks: "Percakapan sehari-hari dan di tempat kerja" },
      { id: "budaya-korea-2", teks: "Aturan keselamatan dan budaya kerja" },
      { id: "budaya-korea-3", teks: "Persiapan uji keterampilan dasar" },
    ],
  },
];
