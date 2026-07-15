'use client';

import { useEffect, useState } from 'react';
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar" aria-label="Navigasi cepat di halaman Home">
      {ITEMS.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`sidebar__item${active === id ? ' sidebar__item--active' : ''}`}
          aria-label={label}
          title={label}
        >
          <Icon size={19} strokeWidth={2.25} />
        </a>
      ))}
    </aside>
  );
}