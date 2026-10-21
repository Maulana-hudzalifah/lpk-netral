import Card from "../ui/Card";
import { bagianProgram, daftarProgram } from "../../data/program";

// Kartu program pelatihan, masing-masing ditandai negara tujuannya.
export default function Program() {
  return (
    <section id="program" className="bagian bagian-kertas" aria-labelledby="judul-program">
      <div className="wadah">
        <h2 id="judul-program" className="judul-bagian">
          {bagianProgram.judul}
        </h2>
        <p className="pengantar">{bagianProgram.pengantar}</p>

        <div className="grid-kartu grid-dua">
          {daftarProgram.map((program) => (
            <Card key={program.id} className="kartu-program">
              <p className="label-tujuan">{program.tujuan}</p>
              <h3>{program.nama}</h3>
              <p className="program-durasi">
                <span className="teks-sekunder">{bagianProgram.labelDurasi}:</span>{" "}
                {program.durasi}
              </p>
              <p>{program.ringkasan}</p>
              <ul className="daftar-materi">
                {program.materi.map((materi) => (
                  <li key={materi.id}>{materi.teks}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
