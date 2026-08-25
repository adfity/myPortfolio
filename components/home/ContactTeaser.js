import SectionReveal from '@/components/SectionReveal';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';

const EMAIL = 'aditfy06@gmail.com';

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
                src="/images/profile/abu4.jpg"
                alt="Foto kontak Adit Fitra Yoga"
                loading="lazy"
              />
            </div>
          </SectionReveal>

          <div className="split__text">
            <SectionReveal from="right" className="right-teaser__head">
              <div className="section__eyebrow">FIG. 04 — TRANSMISSION</div>
              <h2 className="section__title">Get In Touch</h2>
            </SectionReveal>

            <SectionReveal from="right" className="split__text-box">
              <div className="brut-box teaser__box teaser__box--wide">
                <span className="brut-box__label">Channel</span>

                <p className="teaser__text">
                  Feel free to contact me if you have any questions or just want to say hi.
                </p>
                <p className="teaser__text">
                  {EMAIL}
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
                      <Icon size={38} />
                      <span className="contact-icons__label">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal from="right" className="split__text-role">
              <span className="hero__role" style={{ fontSize: '16px' }}>
                To keep our connection alive, mind lending me a hundred?
              </span>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}