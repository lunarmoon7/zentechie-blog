import React from 'react';
import IconBxCalendarStar from '../../_icons/IconBxCalendarStar';
import IconTimerSand from '../../_icons/IconTimerSand';
import { CoverImage } from '@/types/type';
import Image from 'next/image';
import IconNoImage from '@/app/_icons/IconNoImage';
import { motion } from 'framer-motion';
import Badge from '../common/Badge';

interface PostCardProps {
  date: string;
  time: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  coverImage?: CoverImage;
  readTimeMinutes: string;
  onClickPost: (path: string) => void;
}

export default function PostSideCard({
  date,
  time,
  title,
  description,
  path,
  tags,
  coverImage,
  readTimeMinutes,
  onClickPost,
}: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='card rounded-lg m-0 font-notosanskr dark:text-white hover:bg-hover-light hover:dark:bg-hover-dark cursor-pointer transition-colors ease-in-out duration-300'
    >
      <div className='card-body p-2' onClick={() => onClickPost(path)}>
        <div className='flex flex-row gap-5'>
          <div className='relative w-32 h-32 flex-shrink-0 rounded-lg'>
            {coverImage && (
              <Image
                src={coverImage.url}
                alt={coverImage.fileName}
                layout='fill'
                objectFit='cover'
                className='absolute rounded-lg grayscale'
              />
            )}
            {!coverImage && (
              <IconNoImage className='rounded-lg w-full h-full text-[#9c9c9c] dark:text-[#7b7b7b]' />
            )}
          </div>
          <div className='flex flex-col gap-2 grow w-full min-w-0'>
            <div className='flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between'>
              <div className='font-medium text-[10px] text-gray-700 flex gap-2 items-center dark:text-white'>
                <IconBxCalendarStar />
                {date}
              </div>
              <div className='font-medium text-[10px] text-gray-700 flex gap-1 items-center dark:text-white'>
                <IconTimerSand />
                {time} - {readTimeMinutes} min read
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-sm w-full truncate'>{title}</h2>
              <p className='text-xs w-full truncate'>{description}</p>
            </div>
            <div className='grow flex items-end gap-2 '>
              {tags.map((tag) => (
                <Badge key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </motion.div>
  );
}
