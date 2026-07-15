# Portfolio Adit Fitra Yoga — App Router + Brutalism

Portfolio 4 halaman nyata (bukan satu halaman panjang lagi): Home, About,
Projects, Contact — masing-masing punya route sendiri. Dibangun pakai
Next.js **App Router** (folder `app/`) + JavaScript murni, tema brutalist.

## Menjalankan di komputer kamu

Butuh Node.js 18.17+ (App Router butuh versi ini ke atas). Lalu:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Build produksi:

```bash
npm run build
npm run start
```

## PENTING — pasang foto kamu

Hero di halaman Home butuh foto asli kamu. Saat ini terpasang gambar
placeholder abu-abu bertuliskan "REPLACE ME" di:

```
public/images/profile.jpg
```

Tinggal **timpa file itu dengan foto kamu** (pertahankan nama file yang sama,
`profile.jpg`, format apa saja sebenarnya boleh — JPG/PNG — asal nama & path
sama, atau ubah path-nya di `components/Hero.js` kalau mau nama file lain).
Foto otomatis tampil grayscale (efek hitam-putih) sesuai referensi yang kamu
kirim — kalau mau warna asli, hapus baris `filter: grayscale(1)...` di
`app/globals.css` bagian `.hero__photo`.

## Struktur folder (App Router)

```
app/
  layout.js         -> layout utama: font, CSS global, Header, footer (dipakai semua halaman)
  globals.css        -> semua token warna, font, dan komponen
  page.js             -> route "/" (Home) — satu-satunya halaman yang render Sidebar
  about/page.js        -> route "/about"
  projects/page.js  -> route "/projects"
  contact/page.js  -> route "/contact"
components/
  Header.js  -> logo kiri + tombol hamburger kanan + overlay menu fullscreen
  Sidebar.js -> rel ikon (Home/About/Projects/Contact), HANYA muncul di halaman Home, hilang di mobile
  Hero.js    -> konten Home: foto + teks dengan animasi masuk
  About.js   -> konten halaman About
  Projects.js-> konten halaman Projects ("Work Log")
  Contact.js -> konten halaman Contact ("Transmission")
public/
  images/profile.jpg -> ganti dengan foto kamu (lihat bagian PENTING di atas)
```

## Yang saya sesuaikan dari referensi gambar kamu

- **Header**: cuma logo kiri + tombol hamburger kanan (tanpa menu inline),
  persis seperti referensi. Klik hamburger membuka overlay menu fullscreen
  berisi Home/About/Projects/Contact, dengan link aktif ditandai warna hazard.
  Tampilan overlay saya buat gelap solid (bukan semi-transparan lembut seperti
  referensi) supaya tetap konsisten dengan tema brutalist situs ini.
- **Sidebar ikon** (Home/person/folder/mail) cuma tampil di halaman Home,
  sesuai yang kamu minta, dan otomatis disembunyikan di layar mobile.
- **Foto hero**: dibingkai kotak dengan border tebal + bayangan keras
  (brutalist), bukan bentuk oval lembut seperti referensi — supaya konsisten
  dengan gaya garis tegas di seluruh situs. Kalau kamu tetap mau bentuk oval,
  bilang saja, gampang diubah.
- **Animasi masuk**: foto slide dari kiri + fade in, teks slide dari kanan +
  fade in (otomatis nonaktif untuk pengguna yang mengaktifkan "reduce motion"
  di sistem mereka).
- **Belum saya buatkan**: ikon chat bubble melayang di pojok kanan bawah
  (terlihat di screenshot mobile referensi) — itu sepertinya widget live-chat
  terpisah di situs referensi, bukan bagian dari CV kamu, jadi saya lewati
  dulu. Bilang kalau ternyata itu memang mau ditambahkan (misalnya link
  WhatsApp/email mengambang).

## Yang perlu kamu sesuaikan sendiri

- **Projects**: masih diisi dari pengalaman kerja & bootcamp di CV (array
  `LOGS` di `components/Projects.js`) karena belum ada proyek pribadi
  tercantum — ganti begitu ada.
- **Form kontak**: masih pakai `mailto:` (buka aplikasi email), belum
  terhubung ke backend/layanan email otomatis.
- **Warna/font/ketebalan garis**: semua token di `:root` pada
  `app/globals.css` (`--ink`, `--paper`, `--hazard`, `--alert`, `--wire`,
  `--line`, `--line-thick`).

## Deploy

Push ke GitHub lalu import di vercel.com, atau jalankan `npx vercel` dari
folder ini.
