import { keunggulan } from "../../data/site";

// Tiga poin keunggulan lembaga, diberi nomor urut.
export default function Keunggulan() {
  return (
    <section className="bagian" aria-labelledby="judul-keunggulan">
      <div className="wadah">
        <h2 id="judul-keunggulan" className="judul-bagian">
          {keunggulan.judul}
        </h2>
        <p className="pengantar">{keunggulan.pengantar}</p>

        <ol className="daftar-keunggulan">
          {keunggulan.daftar.map((item, urutan) => (
            <li key={item.id} className="keunggulan-item">
              <span className="keunggulan-nomor">
                {String(urutan + 1).padStart(2, "0")}
              </span>
              <h3>{item.judul}</h3>
              <p>{item.isi}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
