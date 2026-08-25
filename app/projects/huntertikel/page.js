import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'HunterTikel | Adfity',
  description:
    'Detail proyek HunterTikel — platform blogging responsif berbasis PHP.',
};

// Ganti / lengkapi data di bawah ini sesuai kebutuhan.
const PROJECT = {
  title: 'HunterTikel',
  year: '2023',
  stack: ['PHP', 'CSS', 'MySQL'],
  // TODO: ganti dengan link GitHub repo HunterTikel
  previewUrl: 'https://github.com/adfity/HunterTikel',
  description: [
    'A university project developed independently using PHP to explore blogging application development. The application provides key features such as post management, categories, comments, and user authentication to support structured content management.',
    'Through this project, I improved my skills in PHP web development, database management, and building organized and functional application structures. The project also provided experience in developing content management features and user interaction within a web application.',
  ],
  // Tambahkan path gambar lain di sini kalau sudah ada, urutan sesuai tampil di halaman.
  images: [
    '/images/project/hun1.png',
    '/images/project/hun2.png',
    '/images/project/hun3.png',
    '/images/project/hun4.png',
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