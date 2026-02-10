'use client';

import { useState, useEffect } from 'react';

export const useCountdown = (ms: number) => {
  const [left, setLeft] = useState(ms);

  useEffect(() => {
    const id = setInterval(() => setLeft((p) => Math.max(p - 1000, 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const s = Math.floor(left / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');

  return `${h}h ${m}m ${sec}s`;
};
