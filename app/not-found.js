import Link from 'next/link';

export const metadata = {
  title: '404 | Adfity',
};

export default function NotFound() {
  return (
    <section className="status-page">
      <div className="wrap">
        <div className="brut-box status-page__box">
          <span className="brut-box__label">FIG. 00 — ERROR</span>
          <p className="status-page__code">404</p>
          <h1 className="status-page__title">Page Not Found</h1>
          <p className="status-page__desc">
            Halaman yang kamu cari gak ada, sudah dipindah, atau URL-nya salah ketik.
          </p>
          <Link href="/" className="brut-btn brut-btn--primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}