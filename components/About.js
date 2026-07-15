const SKILL_GROUPS = [
  {
    title: 'Web Development',
    items: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'RESTful API', 'SQL'],
  },
  {
    title: 'Data Tools',
    items: ['Python', 'Pandas', 'NumPy', 'Data Mining'],
  },
  {
    title: 'Lainnya',
    items: ['Information Systems Management', 'Team Collaboration', 'Microsoft Office', 'Technical Support'],
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 02 — RECORD</div>
        <h2 className="section__title">Tentang Saya</h2>

        <div className="about__grid">
          <div className="brut-box about__bio">
            <span className="brut-box__label">Bio</span>
            <p>
              Halo, saya Adit Fitra Yoga, lahir di Indramayu pada 6 Desember 2003.
              Saya lulusan Sistem Informasi dari Universitas Adhirajasa Reswara Sanjaya
              dengan IPK 3.76/4.00.
            </p>
            <p>
              Saya ingin membangun karier di bidang teknologi, khususnya sebagai Web
              Developer dan Data Analyst. Saya cepat mempelajari hal baru terkait
              teknologi dan terbiasa bekerja secara kolaboratif dalam tim.
            </p>

            <div className="about__timeline">
              <div className="about__timeline-item">
                <time>2021–25</time>
                <div>
                  <h4>Bachelor of Information Systems</h4>
                  <p>Universitas Adhirajasa Reswara Sanjaya, Bandung · IPK 3.76/4.00</p>
                </div>
              </div>
              <div className="about__timeline-item">
                <time>2021</time>
                <div>
                  <h4>High School Diploma (IPA)</h4>
                  <p>SMAN 1 Anjatan, Indramayu · Nilai 86.07</p>
                </div>
              </div>
              <div className="about__timeline-item">
                <time>2024</time>
                <div>
                  <h4>Backend Developer Bootcamp</h4>
                  <p>Maxy Academy (MSIB Batch 7) · Nilai 87.61/100 (A)</p>
                </div>
              </div>
              <div className="about__timeline-item">
                <time>2024</time>
                <div>
                  <h4>Junior Web Programmer</h4>
                  <p>Alhikmah Academy · Nilai A</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="brut-box" style={{ marginBottom: 32 }}>
              <span className="brut-box__label">Status</span>

              <div className="brut-stat">
                <div className="brut-stat__row">
                  <span>GPA</span>
                  <b>3.76 / 4.00</b>
                </div>
                <div className="brut-meter">
                  <div
                    className="brut-meter__fill"
                    style={{ width: '94%', '--fill-color': 'var(--hazard)' }}
                  />
                </div>
              </div>

              <div className="brut-stat">
                <div className="brut-stat__row">
                  <span>Bahasa Indonesia</span>
                  <b>Native</b>
                </div>
                <div className="brut-meter">
                  <div
                    className="brut-meter__fill"
                    style={{ width: '100%', '--fill-color': 'var(--ink)' }}
                  />
                </div>
              </div>

              <div className="brut-stat" style={{ marginBottom: 0 }}>
                <div className="brut-stat__row">
                  <span>English</span>
                  <b>Intermediate</b>
                </div>
                <div className="brut-meter">
                  <div
                    className="brut-meter__fill"
                    style={{ width: '60%', '--fill-color': 'var(--ink)' }}
                  />
                </div>
              </div>
            </div>

            <div className="brut-box">
              <span className="brut-box__label">Skill Tree</span>
              {SKILL_GROUPS.map((group) => (
                <div className="skills__group" key={group.title}>
                  <h4>{group.title}</h4>
                  <div>
                    {group.items.map((item) => (
                      <span className="brut-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
