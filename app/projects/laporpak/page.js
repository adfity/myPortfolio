import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'LaporPak.com | Adfity',
  description:
    'Detail proyek LaporPak.com — platform pengaduan publik untuk kondisi darurat.',
};

// Ganti / lengkapi data di bawah ini sesuai kebutuhan.
const PROJECT = {
  title: 'LaporPak.com',
  year: '2024',
  stack: ['Laravel', 'Tailwind', 'MySQL'],
  // TODO: ganti dengan link GitHub repo LaporPak.com
  previewUrl: 'https://github.com/adfity/LaporPak',
  description: [
    'A project developed during the Maxy Academy Bootcamp, consisting of a public complaint application built using Laravel, Bootstrap CSS, and MySQL. The application is designed to make it easier for citizens to submit reports related to various incidents, such as fires, medical emergencies, and theft.',
    'Through this project, I gained experience in Laravel web development, MySQL database management, and building responsive and user-friendly interfaces. The project also helped me understand user requirements and develop application features through teamwork and collaboration.',
  ],
  // Tambahkan path gambar lain di sini kalau sudah ada, urutan sesuai tampil di halaman.
  images: [
    '/images/project/lap1.png',
    '/images/project/lap2.png',
    '/images/project/lap3.png',
    '/images/project/lap4.png',
  ],
};

export default function LaporPakPage() {
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

        {/* Galeri gambar — disusun ke bawah, ukuran seragam */}
        <div className="flex flex-col gap-8 mt-14 sm:mt-16">
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