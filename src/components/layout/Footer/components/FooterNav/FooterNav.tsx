import { AppLink } from '@/components/common';
import { FOOTER_NAV } from './nav.config';
import classes from './FooterNav.module.scss';

export const FooterNav = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav_list}>
        {FOOTER_NAV.map((element) => (
          <li key={element.id}>
            <AppLink href={element.href} variant="footer">
              {element.text}
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
