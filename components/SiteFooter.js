'use client';

import { usePathname } from 'next/navigation';

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer>© {new Date().getFullYear()} Adit Fitra Yoga · Dibuat dengan Next.js</footer>
  );
}