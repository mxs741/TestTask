'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import { Nav, BurgerMenu } from './components';
import classes from './Header.module.scss';

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
const PADDING_DEFAULT = 46;
const PADDING_SCROLLED = 18;

export const Header = () => {
  const isScrolled = useScroll(40);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const paddingY = useMotionValue(PADDING_DEFAULT);

  useEffect(() => {
    const target = isMenuOpen
      ? PADDING_DEFAULT
      : isScrolled
        ? PADDING_SCROLLED
        : PADDING_DEFAULT;
    animate(paddingY, target, { duration: 0.3, ease: EASE });
  }, [isScrolled, isMenuOpen, paddingY]);

  useEffect(() => {
    if (!headerRef.current) return;

    const update = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerRef.current!.offsetHeight}px`,
      );
    };

    const unsubscribe = paddingY.on('change', update);
    window.addEventListener('resize', update);
    update();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', update);
    };
  }, [paddingY]);

  return (
    <>
      <motion.div
        ref={headerRef}
        className={`
          ${classes.header}
          ${isScrolled && !isMenuOpen ? classes.header_scrolled : ''}
          ${isMenuOpen ? classes.header_menu_open : ''}
        `}
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        <motion.div
          className={classes.header_inner}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <img className={classes.logo} src="/icons/BlackWave.svg" alt="logo" />
          <img
            className={classes.logo_mobile}
            src="/icons/BlackLogo.svg"
            alt="logo"
          />
          <Nav />
          <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </motion.div>
      </motion.div>

      <div className={classes.spacer} />
    </>
  );
};
