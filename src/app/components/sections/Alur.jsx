import { bagianAlur, daftarLangkah } from "../../data/alur";

// Langkah-langkah pendaftaran dari daftar sampai berangkat.
export default function Alur() {
  return (
    <section id="alur" className="bagian" aria-labelledby="judul-alur">
      <div className="wadah">
        <h2 id="judul-alur" className="judul-bagian">
          {bagianAlur.judul}
        </h2>
        <p className="pengantar">{bagianAlur.pengantar}</p>

        <ol className="daftar-langkah">
          {daftarLangkah.map((langkah, urutan) => (
            <li key={langkah.id} className="langkah">
              <span className="langkah-nomor" aria-hidden="true">
                {urutan + 1}
              </span>
              <div>
                <h3>{langkah.judul}</h3>
                <p>{langkah.isi}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
