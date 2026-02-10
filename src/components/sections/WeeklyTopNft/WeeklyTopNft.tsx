'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNfts } from '@/store/nft';
import { LOOP_COUNT } from './weekly-top-nft.config';
import { useSlider } from './useSlider';
import { useDrag } from './useDrag';
import { NftCard, SliderControls } from './components';
import classes from './WeeklyTopNft.module.scss';

export const WeeklyTopNft = () => {
  const dispatch = useAppDispatch();
  const { cards, error, loading, page, hasMore, isBlocked } = useAppSelector(
    (state) => state.nft,
  );

  const loopedCards =
    cards.length > 0
      ? [...cards.slice(-LOOP_COUNT), ...cards, ...cards.slice(0, LOOP_COUNT)]
      : [];

  const viewportRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const { index, setIndex, cardWidth, gap, step, getTargetX, goNext, goPrev } =
    useSlider(loopedCards.length, viewportRef);

  const x = useMotionValue(0);

  const {
    animateTo,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  } = useDrag({ x, step, getTargetX, setIndex });

  useEffect(() => {
    if (cards.length > 0 && !initialized.current) {
      initialized.current = true;
      requestAnimationFrame(() => {
        setIndex(LOOP_COUNT);
        x.jump(getTargetX(LOOP_COUNT));
      });
    }
  }, [cards.length, setIndex, getTargetX, x]);

  useEffect(() => {
    if (loading || isBlocked) return;

    if (cards.length === 0) {
      dispatch(fetchNfts({ page: 1, perPage: 30 }));
      return;
    }

    if (!hasMore) return;

    const realIndex = index - LOOP_COUNT;

    if (realIndex >= cards.length - 8) {
      dispatch(fetchNfts({ page, perPage: 30 }));
    }
  }, [index, cards.length, hasMore, loading, page, dispatch]);

  const teleport = useCallback(() => {
    if (cards.length === 0) return;

    const realStart = LOOP_COUNT;
    const realEnd = LOOP_COUNT + cards.length - 1;
    let newIndex: number | null = null;

    if (index > realEnd) {
      newIndex = realStart + (index - realEnd - 1);
    } else if (index < realStart) {
      newIndex = realEnd - (realStart - index - 1);
    }

    if (newIndex !== null) {
      x.jump(getTargetX(newIndex));
      setIndex(newIndex);
    }
  }, [index, cards.length, getTargetX, x, setIndex]);

  useEffect(() => {
    if (
      !isDragging.current &&
      initialized.current &&
      loopedCards.length > 0 &&
      step > 0
    ) {
      const controls = animateTo(index);
      controls.then(() => teleport());
    }
  }, [index, step, loopedCards.length, animateTo, isDragging, teleport]);

  if (error) {
    return (
      <section className={classes.section}>
        <h2 className={classes.title}>Weekly - Top NFT</h2>
        <p className={classes.status}>Error: {error}</p>
      </section>
    );
  }

  if (cards.length === 0) return null;

  return (
    <motion.section
      className={classes.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className={classes.title}>Weekly - Top NFT</h2>

      <div ref={viewportRef} className={classes.viewport}>
        <motion.div
          className={classes.track}
          style={{ x, gap }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {loopedCards.map((card, i) => (
            <div
              key={`${card.id}-${i}`}
              className={classes.slide}
              style={{ width: cardWidth, minWidth: cardWidth }}
            >
              <NftCard card={card} />
            </div>
          ))}
        </motion.div>
      </div>

      <SliderControls onPrev={goPrev} onNext={goNext} canGoPrev canGoNext />
    </motion.section>
  );
};
