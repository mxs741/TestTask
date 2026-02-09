'use client';

import type { Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppLink } from '@/components/common';
import { HEADER_NAV } from '../Nav/nav.config';
import { BurgerButton } from './BurgerButton';
import { useBurgerMenu } from './useBurgerMenu';
import { panelVariants, itemVariants } from './burger-menu.variants';
import classes from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
  const { close, toggle } = useBurgerMenu(isOpen, setIsOpen);

  return (
    <div className={classes.burger_wrapper}>
      <BurgerButton isOpen={isOpen} toggle={toggle} />

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={classes.mobile_menu}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className={classes.divider} />

            <ul className={classes.mobile_nav_list}>
              {HEADER_NAV.map((element) => (
                <motion.li
                  key={element.id}
                  variants={itemVariants}
                  onClick={close}
                >
                  <AppLink href={element.href} variant="nav">
                    {element.text}
                  </AppLink>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
