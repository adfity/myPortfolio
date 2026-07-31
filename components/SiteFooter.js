'use client';

import { usePathname } from 'next/navigation';

export default function SiteFooter({ children }) {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <footer>
      {children ?? `© ${new Date().getFullYear()} - Adfity`}
    </footer>
  );
}