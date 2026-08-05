'use client';

import { useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'projects', 'contact'];

export default function HomeScrollSnap() {
  useEffect(() => {
    document.documentElement.classList.add('home-snap');

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // ambil section yang paling banyak keliatan di layar
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const id = visible.target.id;
        const newUrl = id === 'hero' ? '/' : `/#${id}`;
        const currentUrl = window.location.pathname + window.location.hash;

        if (currentUrl !== newUrl) {
          window.history.replaceState(null, '', newUrl);
        }
      },
      { threshold: [0.6] } // section dianggap "aktif" kalau 60% udah keliatan
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      document.documentElement.classList.remove('home-snap');
      observer.disconnect();
    };
  }, []);

  return null;
}