import { inter, outfit, poppins, publicSans } from './fonts';
import '@/styles/main.scss';

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
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  );
}
