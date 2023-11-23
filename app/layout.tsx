import type { Metadata } from 'next';
import { Nav } from './_components/ui/Nav';
import '@/app/_styles/globals.css';
import { blackHanSans, inter, lato, notosanskr } from '../assets/fonts';
import { Footer } from './_components/ui/Footer';
import { Providers } from './_provider/providers';
import AuthProvider from './_provider/AuthProvider';

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://coggie.dev')
      : new URL('http://localhost:3000'),
  title: {
    template: '%s | Coggie',
    default: 'coggie.dev',
  },
  description: '프론트엔드 개발 관련 포스팅이 올라오는 coggie.dev입니다.',
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
  },
  other: {
    'google-site-verification': 'JaVz1bemB3VUWEFyLRmR9RLOBNr4hybV8S5GWvJZkr4',
    'naver-site-verification': '59f5471d35d15f99c1a7841c357220db014e240c',
  },
  openGraph: {
    title: 'coggie.dev',
    description: '프론트엔드 개발 관련 포스팅이 올라오는 coggie.dev입니다.',
    url: 'https://coggie.dev',
    siteName: 'coggie.dev',
    images: [
      {
        url: 'https://i.ibb.co/87LtM03/profile.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'coggie.dev',
    description: '프론트엔드 개발 관련 포스팅이 올라오는 coggie.dev입니다.',
    creator: '@coggie',
    images: ['https://i.ibb.co/87LtM03/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${blackHanSans.variable} ${notosanskr.variable} ${lato.variable}  dark:bg-[#212121] transition-all ease-in-out overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80`}
      >
        <AuthProvider>
          <Providers>
            <div className='flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark'>
              <Nav />
              <main className='flex-grow flex flex-col items-center w-full px-5 md:px-12 md:flex-row md:items-baseline font-notosanskr'>
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
