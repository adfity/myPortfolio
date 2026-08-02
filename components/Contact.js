'use client';

import { motion } from 'motion/react';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from 'react-icons/fa';

const MotionDiv = motion.div;

const EMAIL = 'aditfy06@gmail.com';

const CHANNELS = [
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    external: false,
    Icon: FaEnvelope,
    tilt: -2,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/adfity', // TODO: ganti
    external: true,
    Icon: FaGithub,
    tilt: 1.5,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/adfity/', // TODO: ganti
    external: true,
    Icon: FaInstagram,
    tilt: -1.5,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adit-fitra-yoga-50b161369/', // TODO: ganti
    external: true,
    Icon: FaLinkedin,
    tilt: 2,
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/1379145663547183216', // TODO: ganti
    external: true,
    Icon: FaDiscord,
    tilt: -2.5,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <MotionDiv
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section__eyebrow">FIG. 04 — TRANSMISSION</div>
          <h2 className="section__title">Get In Touch</h2>
          <p className="contact__intro">
            Feel free to contact me if you have any questions or just want to say
            hi.
          </p>
          <p className="contact__intro">
            {EMAIL}
          </p>
        </MotionDiv>

        <div className="contact-cards">
          {CHANNELS.map((channel, i) => {
            const Icon = channel.Icon;
            const fromLeft = i % 2 === 0;

            return (
              <MotionDiv
                key={channel.label}
                initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: 0 }}
                style={{ rotate: channel.tilt }}
                className="contact-card"
              >
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noreferrer' : undefined}
                  className="contact-card__link"
                  aria-label={channel.label}
                >
                  <span className="contact-card__icon">
                    <Icon size={26} />
                  </span>
                  <span className="contact-card__label">{channel.label}</span>
                </a>
              </MotionDiv>
            );
          })}
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="contact__joke">
            To keep our connection alive, mind lending me a hundred?
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}