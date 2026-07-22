'use client';

import { useEffect } from 'react';

export default function HomeScrollSnap() {
  useEffect(() => {
    document.documentElement.classList.add('home-snap');
    return () => document.documentElement.classList.remove('home-snap');
  }, []);

  return null;
}