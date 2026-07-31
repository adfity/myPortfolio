'use client';

import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsSun, BsFillGearFill } from "react-icons/bs";
import { IoPaw, IoPawOutline } from "react-icons/io5";

export default function SettingsFab() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [petsHidden, setPetsHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedPets = localStorage.getItem('petsHidden') === 'true';
    const isDark = savedTheme === 'dark';

    setDark(isDark);
    setPetsHidden(savedPets);
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('pets-hidden', savedPets);
    setMounted(true);
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  function togglePets() {
    const next = !petsHidden;
    setPetsHidden(next);
    document.body.classList.toggle('pets-hidden', next);
    localStorage.setItem('petsHidden', String(next));
  }

  if (!mounted) return null;

  return (
    <div
      className={`settings-fab${open ? ' settings-fab--open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Gear HARUS jadi child pertama — di flex column-reverse, 
          child pertama akan jadi yang paling bawah secara visual */}
      <button
        type="button"
        className="settings-fab__gear"
        onClick={() => setOpen((o) => !o)}
        aria-label="Pengaturan"
        title="Pengaturan"
      >
        <BsFillGearFill size={29} />
      </button>

      <button
        type="button"
        className="settings-fab__item"
        onClick={togglePets}
        aria-label={petsHidden ? 'Tampilkan pet' : 'Sembunyikan pet'}
        title={petsHidden ? 'Tampilkan pet' : 'Sembunyikan pet'}
      >
        {petsHidden ? <IoPaw size={25} /> : <IoPawOutline size={25} />}
      </button>

      <button
        type="button"
        className="settings-fab__item settings-fab__item--spin"
        onClick={toggleDark}
        aria-label={dark ? 'Mode terang' : 'Mode gelap'}
        title={dark ? 'Mode terang' : 'Mode gelap'}
      >
        {dark ? <BsSun size={25} /> : <BsFillMoonStarsFill size={25} />}
      </button>

    </div>
  );
}