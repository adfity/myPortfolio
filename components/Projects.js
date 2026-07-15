const LOGS = [
  {
    title: 'WebGIS Geospasial — Badan Informasi Geospasial',
    status: 'ONGOING',
    meta: 'Internship IT Specialist · Bogor · Nov 2025 – Mei 2026',
    desc:
      'Mengembangkan aplikasi WebGIS untuk mendukung proyek geospasial, mencakup pemrosesan dan visualisasi data spasial bersama tim lintas fungsi.',
    stack: ['Next.js', 'Leaflet', 'Django', 'PostGIS'],
  },
  {
    title: 'Sistem Layanan Internal — Diskominfo Jawa Barat',
    status: 'COMPLETED',
    meta: 'Internship Staff Programmer · Bandung · Apr – Des 2024',
    desc:
      'Mengelola dan memelihara aplikasi web internal kantor, termasuk sistem booking dan presensi, serta memberikan dukungan teknis untuk isu-isu web.',
    stack: ['PHP', 'Laravel', 'SQL', 'RESTful API'],
  },
  {
    title: 'Proyek Akhir Backend Developer Bootcamp',
    status: 'COMPLETED',
    meta: 'Maxy Academy (MSIB Batch 7) · Sep – Des 2024 · Nilai 87.61 (A)',
    desc:
      'Membangun layanan backend sebagai bagian dari program bootcamp intensif, memperdalam praktik REST API dan manajemen basis data.',
    stack: ['PHP', 'SQL', 'RESTful API'],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 03 — LOG</div>
        <h2 className="section__title">Proyek &amp; Pengalaman</h2>

        <div className="log-list">
          {LOGS.map((log, i) => (
            <div className="brut-box log-card" key={log.title}>
              <span className="log-card__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="log-card__top">
                  <span className="log-card__title">{log.title}</span>
                  <span className="brut-stamp">{log.status}</span>
                </div>
                <div className="log-card__meta">{log.meta}</div>
                <p className="log-card__desc">{log.desc}</p>
                <div className="log-card__rewards">Stack:</div>
                <div>
                  {log.stack.map((tech) => (
                    <span className="brut-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="log-note">
          * Daftar ini disusun dari pengalaman kerja &amp; pelatihan di CV karena
          belum ada bagian Projects tersendiri. Ganti dengan proyek pribadi/portofolio
          nyata (lengkap dengan link dan screenshot) begitu tersedia.
        </p>
      </div>
    </section>
  );
}
