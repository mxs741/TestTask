import { Footer, Header } from '@/components/layout';
import { StoreProvider } from '@/store/StoreProvider';
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
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
