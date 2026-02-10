'use client';

import { useState, useEffect, useCallback, type RefObject } from 'react';
import {
  SLIDER_BREAKPOINTS,
  type SliderBreakpoint,
} from './weekly-top-nft.config';

const getBreakpoint = (): SliderBreakpoint => {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1920;
  return (
    SLIDER_BREAKPOINTS.find((b) => w <= b.maxWidth) ??
    SLIDER_BREAKPOINTS.at(-1)!
  );
};

export const useSlider = (
  total: number,
  viewportRef: RefObject<HTMLDivElement | null>,
) => {
  const [bp, setBp] = useState(getBreakpoint);
  const [index, setIndex] = useState(0);
  const [, setResizeTick] = useState(0);

  useEffect(() => {
    const update = () => {
      setBp(getBreakpoint());
      setResizeTick((t) => t + 1);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { cardWidth, gap } = bp;
  const step = cardWidth + gap;

  const getTargetX = useCallback(
    (i: number) => {
      const vw = viewportRef.current?.offsetWidth ?? 0;
      const centerOffset = vw / 2 - cardWidth / 2;
      return centerOffset - i * step;
    },
    [viewportRef, cardWidth, step],
  );

  const goNext = () => setIndex((p) => p + 1);
  const goPrev = () => setIndex((p) => p - 1);

  return {
    index,
    setIndex,
    cardWidth,
    gap,
    step,
    getTargetX,
    goNext,
    goPrev,
  };
};
