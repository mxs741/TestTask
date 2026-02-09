import { ReactNode } from 'react';
import Link from 'next/link';
import classes from './AppLink.module.scss';

type AppLinkProps = {
  children: ReactNode;
  href: string;
  variant?: 'nav' | 'social' | 'footer';
};

export const AppLink = ({ href, children, variant = 'nav' }: AppLinkProps) => {
  return (
    <Link href={href} className={`${classes.link} ${classes[variant]}`}>
      {children}
    </Link>
  );
};
