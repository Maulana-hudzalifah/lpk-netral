import { hero, whatsapp, situs } from "../../data/site";

// Bagian pembuka: alasan memilih lembaga dan dua tombol aksi.
export default function Hero() {
  return (
    <section className="hero">
      <div className="wadah">
        <p className="label-kecil">{hero.label}</p>
        <h1 className="hero-judul">{hero.judul}</h1>
        <p className="hero-pendukung">{hero.pendukung}</p>

        <div className="kelompok-tombol">
          <a
            href={whatsapp.tautan}
            className="tombol tombol-utama"
            target="_blank"
            rel="noopener noreferrer"
          >
            {whatsapp.labelTombol}
          </a>
          <a href="#program" className="tombol tombol-garis">
            {hero.tombolKedua}
          </a>
        </div>

        <p className="hero-izin teks-sekunder">{situs.izin}</p>
      </div>
    </section>
  );
}
