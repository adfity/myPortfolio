'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="id">
      <body className="status-page-body">
        <section className="status-page">
          <div className="wrap">
            <div className="brut-box status-page__box">
              <span className="brut-box__label">FIG. 00 — FATAL</span>
              <p className="status-page__code status-page__code--alert">500</p>
              <h1 className="status-page__title">Critical Error</h1>
              <p className="status-page__desc">
                Aplikasi mengalami error fatal. Silakan muat ulang halaman.
              </p>
              <button
                type="button"
                className="brut-btn brut-btn--primary"
                onClick={() => reset()}
              >
                Reload
              </button>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}