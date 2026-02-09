'use client';

import { motion } from 'framer-motion';
import classes from './BurgerMenu.module.scss';

interface BurgerButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export const BurgerButton = ({ isOpen, toggle }: BurgerButtonProps) => (
  <button className={classes.burger_button} onClick={toggle}>
    <motion.span
      className={classes.burger_line}
      animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className={classes.burger_line}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className={classes.burger_line}
      animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3 }}
    />
  </button>
);
