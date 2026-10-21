// Data umum lembaga. Ubah file ini untuk setiap klien baru.
// Semua isi di bawah adalah CONTOH. Bagian [isi ...] wajib diganti data asli.

const nomorWhatsapp = "6281200000000"; // [isi nomor WhatsApp, format 62xxx tanpa + dan spasi]
const pesanWhatsapp = "Halo, saya ingin konsultasi tentang program pelatihan ke Jepang/Korea.";

export const situs = {
  nama: "LPK [Nama Lembaga]",
  judulHalaman: "LPK [Nama Lembaga] — Pelatihan Kerja ke Jepang & Korea",
  deskripsi:
    "Lembaga pelatihan bahasa dan kesiapan kerja untuk peserta magang dan kerja ke Jepang dan Korea. (Halaman demo, isi contoh.)",
  izin: "Izin LPK: [isi nomor izin resmi]",
  catatanContoh:
    "Halaman ini adalah demo. Seluruh nama, angka, dan testimoni di dalamnya adalah contoh.",
};

export const whatsapp = {
  nomor: nomorWhatsapp,
  tampilan: "+62 812-0000-0000", // [isi nomor yang ditampilkan]
  tautan: `https://wa.me/${nomorWhatsapp}?text=${encodeURIComponent(pesanWhatsapp)}`,
  labelTombol: "Konsultasi via WhatsApp",
  labelSingkat: "WhatsApp",
};

export const menu = [
  { id: "program", label: "Program", href: "#program" },
  { id: "alur", label: "Alur Daftar", href: "#alur" },
  { id: "kontak", label: "Kontak", href: "#kontak" },
];

export const hero = {
  label: "Pelatihan kerja ke Jepang & Korea",
  judul: "Siap berangkat dengan persiapan yang matang dan proses yang terbuka.",
  pendukung:
    "Kami melatih bahasa, keterampilan, dan kesiapan kerja Anda, lalu mendampingi setiap tahap pendaftaran dengan biaya dan jadwal yang dijelaskan sejak awal.",
  tombolKedua: "Lihat Program",
};

export const keunggulan = {
  judul: "Kenapa belajar di sini",
  pengantar:
    "Tiga hal yang kami jaga sejak hari pertama, supaya Anda tahu apa yang akan dijalani.",
  daftar: [
    {
      id: "pengajar",
      judul: "Pengajar berpengalaman",
      isi: "Kelas bahasa dan budaya kerja dibimbing pengajar dengan [isi kualifikasi pengajar, mis. sertifikat JLPT/TOPIK atau pengalaman kerja di luar negeri].",
    },
    {
      id: "transparan",
      judul: "Biaya dan alur yang jelas",
      isi: "Rincian biaya, jadwal pelatihan, dan syarat dokumen disampaikan tertulis sebelum Anda mendaftar. Tidak ada biaya yang muncul belakangan.",
    },
    {
      id: "pendampingan",
      judul: "Didampingi sampai berangkat",
      isi: "Satu pendamping membantu Anda dari konsultasi pertama, persiapan ujian, hingga pengurusan dokumen keberangkatan.",
    },
  ],
};

export const kontak = {
  judul: "Kunjungi atau hubungi kami",
  pengantar: "Datang langsung untuk konsultasi gratis, atau kirim pesan lebih dulu.",
  labelAlamat: "Alamat",
  alamat: "[isi alamat lengkap kantor LPK]",
  labelJam: "Jam buka",
  jamBuka: [
    { id: "senin-jumat", hari: "Senin – Jumat", jam: "[isi jam, mis. 08.00 – 16.00]" },
    { id: "sabtu", hari: "Sabtu", jam: "[isi jam, mis. 08.00 – 12.00]" },
    { id: "minggu", hari: "Minggu & hari libur", jam: "Tutup" },
  ],
  labelWhatsapp: "WhatsApp",
  // [isi tautan sematan Google Maps: Maps > Bagikan > Sematkan peta > salin isi src]
  petaEmbed: "https://www.google.com/maps?q=Jakarta&output=embed",
  // [isi tautan petunjuk arah ke lokasi LPK]
  petaArah: "https://www.google.com/maps/dir/?api=1&destination=Jakarta",
  judulPeta: "Peta lokasi LPK [Nama Lembaga]",
  labelArah: "Petunjuk Arah",
};

export const footer = {
  ringkas: "Pelatihan bahasa dan kesiapan kerja untuk Jepang & Korea.",
  medsos: [
    { id: "instagram", label: "Instagram", href: "https://instagram.com/" }, // [isi akun]
    { id: "facebook", label: "Facebook", href: "https://facebook.com/" }, // [isi akun]
    { id: "youtube", label: "YouTube", href: "https://youtube.com/" }, // [isi akun]
  ],
  kredit: "Dibuat oleh [isi nama pembuat]",
};
