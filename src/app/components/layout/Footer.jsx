import { situs, footer } from "../../data/site";

// Kaki halaman: nama lembaga, media sosial, catatan contoh, dan kredit.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wadah footer-isi">
        <div>
          <p className="footer-nama">{situs.nama}</p>
          <p className="teks-sekunder">{footer.ringkas}</p>
        </div>

        <ul className="footer-medsos">
          {footer.medsos.map((item) => (
            <li key={item.id}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="wadah footer-bawah">
        <p>{situs.catatanContoh}</p>
        <p>{footer.kredit}</p>
      </div>
    </footer>
  );
}
