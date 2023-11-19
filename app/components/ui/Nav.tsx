'use client';

import { navLinks } from '@/app/data/navlinks';
import Link from 'next/link';
import { Avatar } from './Avatar';
import IconSearch from '../../Icons/IconSearch';
import IconApplemusic from '../../Icons/IconAppleMusic';
import IconGlobe from '../../Icons/IconGlobe';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Tooltip } from './Tooltip';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 left-0 h-24 px-10 text-lg flex justify-between items-center backdrop-blur-md mb-10 z-10 flex-shrink-0 w-full shadow-md'>
      <div className='flex justify-between items-center gap-10'>
        <Avatar />
        <div className='flex items-center gap-5 font-notosanskr'>
          {navLinks.map((nav) => (
            <Link
              href={nav.link}
              key={nav.title}
              className={`${
                pathname === nav.link ? 'before:w-full' : ''
              }  dark:text-[#fff] text-lg relative before:absolute before:h-1 before:bg-[#f7ab0a] before:w-[0%] before:-bottom-2 before:left-1/2 before:translate-x-[-50%] hover:before:w-full before:transition-all`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='hidden md:flex gap-5 text-[30px]'>
        <Tooltip dataTip='search'>
          <IconSearch className='dark:text-white hover:text-[#66b558] dark:hover:text-[#66b558]' />
        </Tooltip>
        <Tooltip dataTip='playlist'>
          <IconApplemusic className='transition-colors hover:text-[#ff5474] dark:text-[#fff] dark:hover:text-[#ff5474]' />
        </Tooltip>
        <Tooltip dataTip='language'>
          <IconGlobe className='transition-colors hover:text-[#4860ff] dark:text-white dark:hover:text-[#4860ff]' />
        </Tooltip>
        <ThemeSwitcher />
      </div>
      <div className='flex items-center text-[30px] md:hidden'>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
