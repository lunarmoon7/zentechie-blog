import { Inter, Lato, Noto_Sans_KR } from 'next/font/google';
import { Black_Han_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
export const blackHanSans = Black_Han_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-blackHanSans',
});

export const notosanskr = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosanskr',
});

export const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});
// export const pretendard = localFont({
//   src: '../public/fonts/PretendardVariable.ttf',
//   display: 'swap',
//   variable: '--font-pretendard',
//   preload: true,
// });

// export const tossface = localFont({
//   src: '../public/fonts/TossFaceFontMac.ttf',
//   display: 'block',
//   variable: '--font-tossface',
//   preload: true,
// });
