'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const overlayVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut', staggerChildren: 0.06, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: 'easeIn' } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

const topLine = { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 10 } };
const midLine = { closed: { opacity: 1 }, open: { opacity: 0 } };
const botLine = { closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -10 } };

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
            <span className="site-header__icon">
              <motion.span
                variants={topLine}
                animate={open ? 'open' : 'closed'}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              />
              <motion.span
                variants={midLine}
                animate={open ? 'open' : 'closed'}
                transition={{ duration: 0.15, ease: 'easeInOut' }}
              />
              <motion.span
                variants={botLine}
                animate={open ? 'open' : 'closed'}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay menu-overlay--open"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav aria-label="Menu utama">
              <motion.ul>
                {LINKS.map((link) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className={pathname === link.href ? 'menu-overlay__link--active' : ''}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}