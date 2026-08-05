'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

const linksVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
  // saat tutup: link runtuh satu-satu, urutan dibalik
  exit: {
    transition: { staggerChildren: 0.06, staggerDirection: -1 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.2, ease: 'easeIn' } },
};

const topLine = { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 12 } };
const midLine = { closed: { opacity: 1 }, open: { opacity: 0 } };
const botLine = { closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -12 } };

// Lingkaran iris — durasi buka vs tutup dibuat sedikit beda biar
// tutupnya kerasa "snappy", tapi easing-nya sama persis (mirror).
const circleTransition = (isOpen) => ({
  duration: isOpen ? 0.6 : 0.45,
  ease: [0.65, 0, 0.35, 1],
});

function scrollToContact(e) {
  const target = document.getElementById('contact');
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '/#contact');
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  function handleToggle() {
    setOpen((v) => !v);
  }

  function handleLinkClick(e, href) {
    setOpen(false);
    if (href === '/#contact') scrollToContact(e);
  }

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
            onClick={handleToggle}
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

            {/* Lingkaran iris — sekarang 100% dikontrol motion (bukan
                CSS transition), jadi buka & tutup benar-benar mirror
                dan konsisten. Jangan tambahkan transform/transition
                untuk .menu-circle lagi di CSS. */}
            <motion.span
              className="menu-circle"
              aria-hidden="true"
              initial={false}
              animate={{ scale: open ? 1 : 0 }}
              transition={circleTransition(open)}
              style={{ pointerEvents: open ? 'auto' : 'none' }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu-overlay-content menu-overlay"
            // BUKA: konten muncul setelah lingkaran hampir penuh membesar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
            // TUTUP: wrapper ditahan sampai stagger-exit link kelar
            // (~0.06*3 + 0.2 = 0.38s), baru wrapper-nya fade cepat.
            exit={{ opacity: 0, transition: { delay: 0.38, duration: 0.12, ease: 'easeIn' } }}
          >
            <nav aria-label="Menu utama">
              <motion.ul variants={linksVariants} initial="hidden" animate="visible" exit="exit">
                {LINKS.map((link) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className={pathname === link.href ? 'menu-overlay__link--active' : ''}
                      onClick={(e) => handleLinkClick(e, link.href)}
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