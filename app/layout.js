import { Archivo_Black, IBM_Plex_Mono } from 'next/font/google';
import Header from '@/components/Header';
import SiteFooter from '@/components/SiteFooter';
import { WebPet } from '@/components/web-pet';
import SettingsFab from '@/components/SettingsFab';
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
    <html
      lang="id"
      className={`${archivoBlack.variable} ${plexMono.variable}`}
      data-scroll-behavior="smooth" // <-- Atribut ditambahkan di sini
    >
      <body>
        <Header />
        <main>{children}</main>
        <SiteFooter />
        <WebPet animal="chicken" color="white" initialX={260} hoverText="Hidup Jokowi!" speed={4.5} scale={0.65} />
        <WebPet animal="chicken" color="brown" initialX={800} hoverText="Hidup Jokowi!!" speed={4.5} scale={0.65} />
        <WebPet animal="chicken" color="white" initialX={440} hoverText="Hidup Jokowi!" speed={4.5} scale={0.65} />
        <WebPet animal="chicken" color="brown" initialX={980} hoverText="Hidup Jokowi!" speed={4.5} scale={0.65} />
        <SettingsFab />
      </body>
    </html>
  );
}