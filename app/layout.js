import { Archivo_Black, IBM_Plex_Mono } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Adfity | Portfolio',
  description:
    'Portfolio Adit Fitra Yoga, lulusan Sistem Informasi yang fokus pada Web Development dan Data Analysis.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${archivoBlack.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Adit Fitra Yoga · Dibuat dengan Next.js</footer>
      </body>
    </html>
  );
}
