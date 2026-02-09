import { Footer, Header } from '@/components/layout';
import { inter, outfit, poppins, publicSans } from './fonts';
import '@/styles/main.scss';
import classes from '@/styles/layout.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          inter.variable,
          poppins.variable,
          outfit.variable,
          publicSans.variable,
          classes.layout,
        ].join(' ')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
