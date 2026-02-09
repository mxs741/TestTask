'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import { Nav, BurgerMenu } from './components';
import classes from './Header.module.scss';

export const Header = () => {
  const isScrolled = useScroll(80);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    document.documentElement.style.setProperty(
      '--header-height',
      `${headerRef.current.offsetHeight}px`,
    );
  }, []);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`${classes.header} ${isScrolled ? classes.header_scrolled : ''} ${isMenuOpen ? classes.header_menu_open : ''}`}
    >
      <div className={classes.header_inner}>
        <img className={classes.logo} src="/icons/BlackWave.svg" alt="logo" />
        <img
          className={classes.logo_mobile}
          src="/icons/BlackLogo.svg"
          alt="logo"
        />
        <Nav />
        <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </motion.header>
  );
};
