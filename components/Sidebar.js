'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react'; 
import { Home as HomeIcon, User, FolderOpen, Mail } from 'lucide-react';

const ITEMS = [
  { id: 'hero', label: 'Home', Icon: HomeIcon },
  { id: 'about', label: 'About', Icon: User },
  { id: 'projects', label: 'Projects', Icon: FolderOpen },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const sections = ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio) {
              mostVisible = entry;
            }
          }
        });
        if (mostVisible) setActive(mostVisible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75, 1] }
    );

    // Di sini perubahannya, hapus "as Element"
    sections.forEach((section) => observer.observe(section)); 
    
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar" aria-label="Navigasi cepat di halaman Home">
      {ITEMS.map(({ id, label, Icon }) => (
        <a 
          key={id}
          href={`#${id}`}
          className="sidebar__item"
          aria-label={label}
          title={label}
        >
          {active === id && (
            <motion.span
              layoutId="sidebar-active-bg"
              className="sidebar__item-bg"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
          <Icon
            size={19}
            strokeWidth={2.25}
            className={`sidebar__item-icon${active === id ? ' sidebar__item-icon--active' : ''}`}
          />
        </a>
      ))}
    </aside>
  );
}