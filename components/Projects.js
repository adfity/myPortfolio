'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { FaExternalLinkAlt } from "react-icons/fa";

// Import named export secara dinamis untuk Next.js Client Component
const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'other', label: 'Other' },
];

const PROJECTS = [
  {
    id: 'webgis',
    year: '2026',
    category: 'web',
    title: 'GAPPS',
    meta: 'Internship IT Specialist · Bogor · Nov 2025 – Mei 2026',
    desc: 'Mengembangkan aplikasi WebGIS untuk mendukung proyek geospasial.',
    stack: ['Next.js', 'Leaflet', 'Django', 'PostGIS'],
    image: '/images/cek1.png',
    link: '/about',
  },
  {
    id: 'diskominfo',
    year: '2024',
    category: 'web',
    title: 'ITSO',
    meta: 'Internship Staff Programmer · Bandung · Apr – Des 2024',
    desc: 'Mengelola dan memelihara aplikasi web internal kantor.',
    stack: ['PHP', 'Laravel', 'SQL', 'RESTful API', 'Talwind'],
    image: '/images/cek1.png',
    link: '/about',
  },
  {
    id: 'maxy-bootcamp',
    year: '2024',
    category: 'web',
    title: 'LANDIFY',
    meta: 'Maxy Academy (MSIB Batch 7) · Sep – Des 2024 · Nilai 87.61 (A)',
    desc: 'Membangun layanan backend sebagai bagian dari program bootcamp intensif.',
    stack: ['PHP', 'SQL', 'RESTful API', 'Talwind', 'mysql'],
    image: '/images/cek1.png',
    link: '/about',
  },
];

function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });

    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

// Palet kalender — mengikuti nuansa brutalist (kuning hazard → merah alert)
const CALENDAR_THEME = {
  light: ['#efefe9', '#ffe066', '#ffd400', '#ff8a3d', '#ff3b1f'],
  dark: ['#1a1a1a', '#4a3a00', '#806300', '#b38600', '#ffd400'],
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="proj-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      <span className="proj-card__year">{project.year}</span>

      <Link
        href={project.link}
        className="proj-card__share"
        aria-label={`Buka ${project.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <FaExternalLinkAlt size={16} />
      </Link>

      {/* layer screenshot — samar di kondisi diam, full pas hover */}
      <motion.div
        className="proj-card__image"
        style={{ backgroundImage: `url(${project.image})` }}
        initial={false}
        animate={{ opacity: hovered ? 1 : 0.15, scale: hovered ? 1 : 1.04 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      <motion.div
        className="proj-card__image-overlay"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* konten teks: judul, desc, stack */}
      <motion.div
        className="proj-card__body"
        initial={false}
        animate={{ opacity: hovered ? 0 : 1, y: hovered ? 8 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <h3 className="proj-card__title proj-card__title--bold">{project.title}</h3>
        <p className="proj-card__desc">{project.desc}</p>
        <div className="proj-card__tags">
          {project.stack.map((tech) => (
            <span className="brut-tag proj-card__tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const isDark = useIsDark();
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section--projects">
      <div className="wrap">
        <div className="section__eyebrow">FIG. 03 — LOG</div>
        <h2 className="section__title">My Projects</h2>

        <div className="brut-box calendar-box">
          <span className="brut-box__label">FIG. 03A — CONTRIBUTIONS</span>
          <div className="calendar-scroll">
            <GitHubCalendar
              username="adfity"
              blockSize={15}
              blockMargin={4}
              blockRadius={0}
              fontSize={15}
              colorScheme={isDark ? 'dark' : 'light'}
              theme={CALENDAR_THEME}
            />
          </div>
        </div>

        <div className="proj-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`brut-btn proj-filter${
                activeCategory === cat.key ? ' proj-filter--active' : ''
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="log-note">Belum ada proyek untuk kategori ini.</p>
        )}
      </div>
    </section>
  );
}