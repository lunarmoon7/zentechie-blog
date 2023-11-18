import type { Metadata } from 'next';
import { Nav } from './components/ui/Nav';
import './globals.css';
import {
  blackHanSans,
  inter,
  lato,
  notosanskr,
  pretendard,
  tossface,
} from './fonts';
import { Footer } from './components/ui/Footer';
import Script from 'next/script';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <meta
          name='google-site-verification'
          content='JaVz1bemB3VUWEFyLRmR9RLOBNr4hybV8S5GWvJZkr4'
        />
      </Head>
      <body
        className={`${inter.variable} ${blackHanSans.variable} ${notosanskr.variable} ${lato.variable} ${pretendard.variable} ${tossface.variable}`}
      >
        <div className='flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark'>
          <Nav />
          <main className='flex-grow flex flex-col items-center w-full px-12 md:flex-row md:items-baseline font-notosanskr'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
