import { kontak, whatsapp } from "../../data/site";

// Informasi kontak, jam buka, dan peta lokasi.
export default function Kontak() {
  return (
    <section id="kontak" className="bagian" aria-labelledby="judul-kontak">
      <div className="wadah">
        <h2 id="judul-kontak" className="judul-bagian">
          {kontak.judul}
        </h2>
        <p className="pengantar">{kontak.pengantar}</p>

        <div className="kontak-grid">
          <div className="kontak-info">
            <div>
              <h3>{kontak.labelAlamat}</h3>
              <p>{kontak.alamat}</p>
            </div>

            <div>
              <h3>{kontak.labelJam}</h3>
              <dl className="daftar-jam">
                {kontak.jamBuka.map((item) => (
                  <div key={item.id}>
                    <dt>{item.hari}</dt>
                    <dd>{item.jam}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3>{kontak.labelWhatsapp}</h3>
              <p>{whatsapp.tampilan}</p>
            </div>

            <div className="kelompok-tombol">
              <a
                href={whatsapp.tautan}
                className="tombol tombol-utama"
                target="_blank"
                rel="noopener noreferrer"
              >
                {whatsapp.labelTombol}
              </a>
              <a
                href={kontak.petaArah}
                className="tombol tombol-garis"
                target="_blank"
                rel="noopener noreferrer"
              >
                {kontak.labelArah}
              </a>
            </div>
          </div>

          <div className="peta">
            <iframe
              src={kontak.petaEmbed}
              title={kontak.judulPeta}
              className="peta-bingkai"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
