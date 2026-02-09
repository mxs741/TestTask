import { Divider, FooterNav } from './components';
import classes from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_top}>
        <img
          className={classes.footer_logo}
          src="/icons/WhiteLogo.svg"
          alt="Wave"
        />
        <FooterNav />
      </div>

      <Divider />

      <p className={classes.footer_copyright}>© 2023</p>
      <p className={classes.footer_copyright_mobile}>
        © 2023 DiveSea All Rights Reserved.
      </p>
    </footer>
  );
};
