'use client';

import { motion } from 'motion/react';
import { Briefcase, Webhook, Database, GraduationCap, ExternalLink } from 'lucide-react';
import {
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,   // + baru
  SiPython,
  SiPandas,
  SiNumpy,
  SiNextdotjs,
  SiDjango,
  SiLeaflet,
  SiPostgresql,
  SiMongodb,      // + baru
} from 'react-icons/si';

const EXPERIENCE = [
  {
    role: 'Internship Staff Programmer',
    org: 'Diskominfo Jawa Barat',
    date: 'Apr 2024 – Des 2024',
    location: 'Bandung, Indonesia',
    points: [
      "Managed and maintained the office's web-based applications, including systems for booking, attendance, and other internal processes.",
      'Provided technical support and troubleshooting for web-related issues.',
      'Collaborated with team members to identify and resolve technical issues and ensure smooth operation of digital services.',
    ],
    // ganti '' dengan link Google Drive sertifikat internship ini
    certUrl: 'https://drive.google.com/file/d/1WVoEOfaj9Csf0rQ8X3Q-yG6sH0SGiNMj/view?usp=sharing',
  },
  {
    role: 'Internship IT Specialist',
    org: 'Badan Informasi Geospasial (MagangHub)',
    date: 'Nov 2025 – Mei 2026',
    location: 'Bogor, Indonesia',
    points: [
      'Supported the development of geospatial projects through spatial data processing and visualization.',
      'Developed WebGIS applications using Next.js, Leaflet, Django, and PostGIS.',
      'Collaborated with cross-functional teams to test and optimize geospatial applications.',
    ],
    certUrl: 'https://drive.google.com/file/d/11z0aEERV-N1aE8hxMpBGI8Ua-8sUoH_0/view?usp=sharing',
  },
];

const TRAINING = [
  {
    role: 'Backend Developer Bootcamp',
    org: 'Maxy Academy (MSIB Batch 7)',
    date: 'Sep 2024 – Des 2024',
    location: 'Grade: 87.61/100 (A)',
    // link Google Drive sertifikat / rapor bootcamp ini
    certUrl: 'https://drive.google.com/file/d/1dSZDUxZF4cXRJwKt3WbYVMD0-SQI-iWu/view?usp=sharing',
  },
  {
    role: 'Junior Web Programmer',
    org: 'Alhikmah Academy',
    date: 'Jan 2024',
    location: 'Grade: A',
    certUrl: 'https://drive.google.com/file/d/16DpH9Cr-YxQfeE-k9meKgAG6Mar7sb3d/view?usp=sharing',
  },
];

const TECH_STACK = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },   // + baru
  { name: 'PHP', icon: SiPhp },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'REST API', icon: Webhook },
  { name: 'SQL', icon: Database },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Django', icon: SiDjango },
  { name: 'Leaflet', icon: SiLeaflet },
  { name: 'PostGIS', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },         // + baru
  { name: 'Python', icon: SiPython },
  { name: 'Pandas', icon: SiPandas },
  { name: 'NumPy', icon: SiNumpy },
];

export default function About() {
  return (
    <section id="about" className="section--about">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 02 — RECORD</div>
        <h2 className="section__title">It's More About Me</h2>

        <motion.div
          className="split split--photo-left about__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="split__photo">
            <div className="split__photo-frame">
              <img src="/images/profile/abu3.jpg" alt="Adit Fitra Yoga" />
            </div>
          </div>

          <div className="split__text about__bio">
            <p>
              I am a <b>2025</b> Bachelor of Information Systems graduate from{' '}
              <b>Adhirajasa Reswara Sanjaya University</b> with a GPA of{' '}
              <b>3.76</b>, and have an interest and experience in{' '}
              <b>Web Development</b>. I have experience developing
              web applications and WebGIS systems through internship programs at
              the <b>West Java Communication and Information Office</b> and the{' '}
              <b>Geospatial Information Agency (BIG)</b>.
            </p>
            <p>
              I am proficient in using <b>Next.js, Django, Leaflet, PostGIS,
              JavaScript, HTML, CSS, and RESTful APIs</b> to build responsive and
              interactive applications. I also have a foundation in data
              processing using <b>Python</b> and am enthusiastic about learning
              new technologies to continuously improve my skills as a{' '}
              <b>Full Stack Web Developer</b>.
            </p>
          </div>
        </motion.div>

        {/* Work experience */}
        <div className="exp">
          <div className="section__eyebrow exp__eyebrow">FIG. 03 — WORK LOG</div>
          <h3 className="exp__title">My Experience</h3>

          <div className="exp__list">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.role + item.date}
                className="exp__card brut-box"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="exp__card-icon">
                  <Briefcase size={20} strokeWidth={2.5} />
                </div>
                <div className="exp__card-body">
                  <div className="exp__card-top">
                    <h4>{item.role}</h4>
                    <time>{item.date}</time>
                  </div>
                  <p className="exp__org">{item.org}</p>
                  <p className="exp__loc">{item.location}</p>
                  <ul className="exp__points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {item.certUrl && (
                    <a
                      href={item.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp__cert-link"
                    >
                      <ExternalLink size={14} strokeWidth={2.5} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training & Bootcamp */}
        <div className="exp">
          <div className="section__eyebrow exp__eyebrow">FIG. 04 — TRAINING & BOOTCAMP</div>
          <h3 className="exp__title">Training & Bootcamp</h3>

          <div className="exp__list">
            {TRAINING.map((item, i) => (
              <motion.div
                key={item.role + item.date}
                className="exp__card brut-box"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <div className="exp__card-icon">
                  <GraduationCap size={20} strokeWidth={2.5} />
                </div>
                <div className="exp__card-body">
                  <div className="exp__card-top">
                    <h4>{item.role}</h4>
                    <time>{item.date}</time>
                  </div>
                  <p className="exp__org">{item.org}</p>
                  <p className="exp__loc">{item.location}</p>
                  {item.certUrl && (
                    <a
                      href={item.certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp__cert-link"
                    >
                      <ExternalLink size={14} strokeWidth={2.5} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="stack">
          <h3 className="stack__title">Tech Stack That I Use</h3>
          <div className="tech-grid">
            {TECH_STACK.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  className="tech-card"
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
                >
                  <div className="tech-card__icon">
                    <Icon size={30} />
                  </div>
                  <span className="tech-card__label">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}