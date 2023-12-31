'use client';

import { Fallback } from '../common/Fallback';
import {
  formatCreatedAt,
  formatCreatedTime,
  formatReadingMinutes,
} from '@/utils/formatTime';
import PostSideCard from './PostSideCard';

export const PostSection = ({
  posts,
  title,
  onClickPost,
}: {
  posts: any;
  title: string;
  onClickPost: (path: string) => void;
}) => {
  return (
    <section className='w-full p-3 grow rounded-lg font-mono border border-item-border-light bg-item-light dark:bg-item-dark dark:border-item-border-dark'>
      <div className='flex items-center mb-5 gap-2'>
        <h1 className='text-lg font-semibold dark:text-white min-w-fit'>
          {title}
        </h1>
        <div className='h-[1px] bg-[#00000047] w-full dark:bg-[#5d5d5d]'></div>
      </div>

      <div className='flex flex-col gap-5'>
        {posts.length === 0 && <Fallback title={'아직 포스트가 없습니다.'} />}
        {posts.map(({ node }: { node: any }) => (
          <PostSideCard
            key={node.id}
            date={formatCreatedAt(node.date)}
            time={formatCreatedTime(node.date)}
            title={node.title}
            description={node.description}
            path={node.id}
            tags={node.tags}
            coverImage={node.coverImage}
            readTimeMinutes={formatReadingMinutes(node.content)}
            onClickPost={() => onClickPost(node.id)}
          />
        ))}
      </div>
    </section>
  );
};