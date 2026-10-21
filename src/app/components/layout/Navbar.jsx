"use client";

import { useState } from "react";
import { situs, menu, whatsapp } from "../../data/site";

// Navigasi atas dengan menu lipat untuk layar HP.
export default function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  const tutupMenu = () => setMenuTerbuka(false);

  return (
    <header className="navbar">
      <div className="wadah navbar-isi">
        <a href="#" className="navbar-nama" onClick={tutupMenu}>
          {situs.nama}
        </a>

        <button
          type="button"
          className="navbar-tombol-menu"
          aria-expanded={menuTerbuka}
          aria-controls="menu-utama"
          aria-label={menuTerbuka ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuTerbuka(!menuTerbuka)}
        >
          <span className="garis-menu" />
          <span className="garis-menu" />
        </button>

        <nav
          id="menu-utama"
          className={`navbar-menu ${menuTerbuka ? "terbuka" : ""}`}
          aria-label="Menu utama"
        >
          <ul>
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.href} onClick={tutupMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsapp.tautan}
            className="tombol tombol-utama tombol-kecil"
            target="_blank"
            rel="noopener noreferrer"
            onClick={tutupMenu}
          >
            {whatsapp.labelSingkat}
          </a>
        </nav>
      </div>
    </header>
  );
}
