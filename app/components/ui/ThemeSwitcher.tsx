'use client';
import IconMoon from '@/app/Icons/IconMoon';
import IconSun from '@/app/Icons/IconSun';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className='tooltip tooltip-bottom cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md hover:bg-[#c1c1c12f]'
      data-tip='theme'
    >
      <div className='flex justify-center items-center'>
        {resolvedTheme === 'dark' ? (
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              className='theme-controller'
              value='synthwave'
            />
            <IconSun
              className='swap-on fill-current text-[#ffde49]'
              onClick={() => setTheme('dark')}
            />
            <IconMoon
              className='swap-off fill-current text-[#8046ff]'
              onClick={() => setTheme('light')}
            />
          </label>
        ) : (
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              className='theme-controller'
              value='synthwave'
            />
            <IconSun
              className='swap-on fill-current text-[#ffde49]'
              onClick={() => setTheme('dark')}
            />
            <IconMoon
              className='swap-off fill-current text-[#8046ff]'
              onClick={() => setTheme('light')}
            />
          </label>
        )}
      </div>
    </div>
  );
};
