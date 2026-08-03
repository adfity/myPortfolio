'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

const FRAME_COUNT = 10;
const WIGGLE_MS = 300;

const CLICKS_PER_FRAME = [3, 4, 3, 5, 4, 3, 5, 4, 3];

export default function PoopingChicken({ className = '' }) {
  const [frame, setFrame] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [isWiggling, setIsWiggling] = useState(false);
  const wiggleTimeoutRef = useRef(null);

  useEffect(() => {
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/images/ayam/ayam${i}.png`;
    }
  }, []);

  useEffect(() => () => clearTimeout(wiggleTimeoutRef.current), []);

  const triggerWiggle = useCallback(() => {
    setIsWiggling(false);
    requestAnimationFrame(() => {
      setIsWiggling(true);
      clearTimeout(wiggleTimeoutRef.current);
      wiggleTimeoutRef.current = setTimeout(() => setIsWiggling(false), WIGGLE_MS);
    });
  }, []);

  const handleClick = useCallback(() => {
    // sudah di frame terakhir → diam permanen, tidak diapa-apakan lagi
    if (frame >= FRAME_COUNT) return;

    triggerWiggle();

    const needed = CLICKS_PER_FRAME[frame - 1] ?? 3;
    const nextCount = clickCount + 1;

    if (nextCount >= needed) {
      setFrame((prev) => prev + 1);
      setClickCount(0);
    } else {
      setClickCount(nextCount);
    }
  }, [frame, clickCount, triggerWiggle]);

  const isDone = frame >= FRAME_COUNT;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`poop-chicken ${isWiggling ? 'poop-chicken--wiggle' : ''} ${className}`}
      aria-label={isDone ? 'Animasi selesai' : 'Klik berulang untuk lihat animasi ayam'}
    >
      <img
        src={`/images/ayam/ayam${frame}.png`}
        alt="Ayam animasi"
        className="poop-chicken__img"
        draggable={false}
      />
    </button>
  );
}