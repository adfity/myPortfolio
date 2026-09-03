import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'MonetKey | Adfity',
  description:
    'Detail proyek MonetKey — aplikasi pelacakan pengeluaran offline.',
};

// Ganti / lengkapi data di bawah ini sesuai kebutuhan.
const PROJECT = {
    title: 'MonetKey',
    year: '2024',
    stack: ['Flutter', 'Dart', 'Hive', 'Provider', 'FL Chart'],
    // TODO: ganti dengan link GitHub repo MonetKey
    previewUrl: 'https://github.com/adfity/MonetKey',
    description: [
        'A university project involving an offline-first personal expense tracker mobile application built with Flutter. The app allows users to manage income and expenses locally without requiring an internet connection or backend server, featuring category management, interactive financial analytics with FL Chart, biometric authentication, PDF/CSV report exports, and automatic currency formatting.',
        'Through this project, I gained practical experience in mobile app development using Flutter and Dart, implementing state management with Provider, structuring code using Clean Architecture (data-domain-presentation), and handling local database persistence using Hive.',
    ],
    // Tambahkan path gambar lain di sini kalau sudah ada, urutan sesuai tampil di halaman.
    images: [
        '/images/project/mon1.png',
        '/images/project/mon2.png',
        '/images/project/mon3.png',
        '/images/project/mon4.png',
    ],
};

export default function HunterTikelPage() {
  const { title, year, stack, previewUrl, description, images } = PROJECT;

  return (
    <section className="project-detail py-14 sm:py-20">
      <div className="wrap">
        <Link
          href="/projects"
          className="brut-btn mb-10"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          Back to Projects
        </Link>

        <div className="grid gap-x-16 gap-y-10 md:grid-cols-[0.85fr_1.15fr]">
          {/* Kolom kiri: identitas proyek */}
          <div>
            <p className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] mb-2 text-[color:var(--wire)]">
              Project
            </p>
            <h1 className="text-[clamp(28px,3.5vw,40px)] leading-[0.95] mb-8">
              {title}
            </h1>

            <div className="mb-6">
              <p className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] mb-2 text-[color:var(--wire)]">
                Technology
              </p>
              <p className="font-mono text-[16px] leading-[1.6] text-[color:var(--ink)]">
                {stack.join(', ')}
              </p>
            </div>

            <div className="mb-6">
              <p className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] mb-2 text-[color:var(--wire)]">
                Year
              </p>
              <p className="font-mono text-[16px] text-[color:var(--ink)]">
                {year}
              </p>
            </div>

            <div>
              <p className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] mb-2 text-[color:var(--wire)]">
                Preview
              </p>
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono font-bold text-[16px] uppercase tracking-[0.03em] underline underline-offset-4 decoration-2 text-[color:var(--ink)] hover:text-[color:var(--alert)] transition-colors"
              >
                Preview
                <ExternalLink size={16} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Kolom kanan: deskripsi */}
          <div>
            <p className="font-mono text-[13px] font-bold uppercase tracking-[0.15em] mb-2 text-[color:var(--wire)]">
              Description
            </p>
            {description.map((paragraph, i) => (
              <p
                key={i}
                className="font-mono text-[16px] leading-[1.7] text-[color:var(--ink)] mb-4 last:mb-0 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Galeri gambar — 2 kolom sejajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-14 sm:mt-16">
        {images.map((src, i) => (
            <div
            key={`${src}-${i}`}
            className="brut-box p-0 overflow-hidden"
            >
              <span className="brut-box__label">
                FIG. {String(i + 1).padStart(2, '0')} — SCREENSHOT
              </span>
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}