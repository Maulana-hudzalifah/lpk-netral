import Card from "../ui/Card";
import { bagianTestimoni, daftarTestimoni } from "../../data/testimoni";

// Kartu testimoni alumni, masing-masing diberi label contoh.
export default function Testimoni() {
  return (
    <section className="bagian bagian-kertas" aria-labelledby="judul-testimoni">
      <div className="wadah">
        <h2 id="judul-testimoni" className="judul-bagian">
          {bagianTestimoni.judul}
        </h2>
        <p className="pengantar">{bagianTestimoni.pengantar}</p>

        <div className="grid-kartu grid-tiga">
          {daftarTestimoni.map((testimoni) => (
            <Card key={testimoni.id} className="kartu-testimoni">
              <p className="label-contoh">{bagianTestimoni.labelContoh}</p>
              <blockquote>
                <p>“{testimoni.kutipan}”</p>
              </blockquote>
              <p className="testimoni-nama">{testimoni.nama}</p>
              <p className="teks-sekunder">{testimoni.keterangan}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
