'use client';

import { useState, useLayoutEffect, type RefObject } from 'react';

export const useEqualHeight = (
  slideRefs: RefObject<(HTMLDivElement | null)[]>,
  itemCount: number,
): number | undefined => {
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    if (itemCount === 0 || !slideRefs.current) return;

    const heights = slideRefs.current.map((el) => el?.offsetHeight ?? 0);
    const max = Math.max(...heights);
    if (max > 0) setMaxHeight(max);
  }, [itemCount, slideRefs]);

  return maxHeight;
};
