'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="status-page">
      <div className="wrap">
        <div className="brut-box status-page__box">
          <span className="brut-box__label">FIG. 00 — CRASH</span>
          <p className="status-page__code status-page__code--alert">500</p>
          <h1 className="status-page__title">Something Went Wrong</h1>
          <p className="status-page__desc">
            Ada error yang gak terduga. Coba muat ulang halaman ini.
          </p>
          <button type="button" className="brut-btn brut-btn--primary" onClick={() => reset()}>
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}