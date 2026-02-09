'use client';

import { useEffect, type Dispatch, type SetStateAction } from 'react';

export const useBurgerMenu = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [close]);

  return { close, toggle };
};
