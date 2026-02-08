import { Inter, Poppins, Outfit, Public_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-poppins',
});

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-outfit',
});

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-public-sans',
});
