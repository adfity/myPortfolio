import SectionReveal from '@/components/SectionReveal';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';

const EMAIL = 'youremail@example.com'; // TODO: ganti dengan email kamu

const CONTACTS = [
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    external: false,
    Icon: FaEnvelope,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adfity',
    external: true,
    Icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/adfity/',
    external: true,
    Icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adit-fitra-yoga-50b161369/',
    external: true,
    Icon: FaLinkedin,
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/1379145663547183216',
    external: true,
    Icon: FaDiscord,
  },
];

export default function ContactTeaser() {
  return (
    <section id="contact" className="teaser">
      <div className="wrap">
        <div className="split split--photo-left">
          <SectionReveal from="left" className="split__photo">
            <div className="split__photo-frame">
              <img 
                src="/images/pak1.jpg" 
                alt="Foto kontak Adit Fitra Yoga" 
                loading="lazy" 
              />
            </div>
          </SectionReveal>

          <SectionReveal from="right" className="split__text">
            <div className="right-teaser__head">
              <div className="section__eyebrow">FIG. 04 — TRANSMISSION</div>
              <h2 className="section__title">Contact Me</h2>
            </div>

            <div className="brut-box teaser__box teaser__box--wide">
              <span className="brut-box__label">Channel</span>
              <p className="teaser__text">
                To keep our connection alive, mind lending me a hundred?
              </p>

              <div className="contact-icons">
                {CONTACTS.map(({ label, href, external, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="contact-icons__link"
                    aria-label={label}
                    title={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    <Icon size={50} />
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}