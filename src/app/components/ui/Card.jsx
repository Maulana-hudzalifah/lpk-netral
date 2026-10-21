// Kartu dasar: sudut halus, garis tepi tipis, dipakai ulang di semua bagian.
export default function Card({ children, className = "" }) {
  return <article className={`kartu ${className}`}>{children}</article>;
}
