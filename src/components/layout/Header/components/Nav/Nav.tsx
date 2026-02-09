import { AppLink } from '@/components/common';
import { HEADER_NAV } from './nav.config';
import classes from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav_list}>
        {HEADER_NAV.map((element) => (
          <li key={element.id}>
            <AppLink href={element.href} variant="nav">
              {element.text}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
