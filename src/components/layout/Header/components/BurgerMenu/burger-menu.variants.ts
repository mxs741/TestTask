import type { Variants } from 'framer-motion';

const easeCustom: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const panelVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 0 100% 0)',
    transition: {
      duration: 0.2,
      ease: easeCustom,
      when: 'afterChildren',
    },
  },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.2,
      ease: easeCustom,
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};
