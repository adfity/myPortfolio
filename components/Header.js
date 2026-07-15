'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <header className={`site-header${open ? ' site-header--menu-open' : ''}`}>
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo brut-btn" onClick={() => setOpen(false)}>
            Adfity
          </Link>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="site-header__icon site-header__icon--close">✕</span>
            ) : (
              <span className="site-header__icon">
                <span />
                <span />
                <span />
              </span>
            )}
          </button>
        </div>
      </header>

      <div className={`menu-overlay${open ? ' menu-overlay--open' : ''}`}>
        <nav aria-label="Menu utama">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'menu-overlay__link--active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
