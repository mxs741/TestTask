'use client';

import { useRef, useCallback } from 'react';
import { type MotionValue, animate } from 'framer-motion';

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];

interface UseDragOptions {
  x: MotionValue<number>;
  step: number;
  getTargetX: (i: number) => number;
  setIndex: (i: number) => void;
}

export const useDrag = ({ x, step, getTargetX, setIndex }: UseDragOptions) => {
  const pointerStartX = useRef(0);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const animateTo = useCallback(
    (i: number) => animate(x, getTargetX(i), { duration: 0.4, ease: EASE }),
    [x, getTargetX],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      isDragging.current = true;
      dragStartX.current = x.get();
      pointerStartX.current = e.clientX;

      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [x],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      x.set(dragStartX.current + (e.clientX - pointerStartX.current));
    },
    [x],
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (step === 0) return;

    const rawIndex = Math.round((getTargetX(0) - x.get()) / step);
    setIndex(rawIndex);
    animateTo(rawIndex);
  }, [x, step, getTargetX, setIndex, animateTo]);

  return {
    animateTo,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
};
