import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { situs } from "./data/site";
import "./globals.css";

const hurufUtama = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-utama",
  display: "swap",
});

export const metadata = {
  title: situs.judulHalaman,
  description: situs.deskripsi,
};

// Kerangka halaman: huruf, metadata, navbar, dan footer.
export default function RootLayout({ children }) {
  return (
    <html lang="id" className={hurufUtama.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
