'use client';

import { useState } from 'react';

interface Items {
  title: string;
  description?: string[] | null;
}

export const InfoCard = ({
  title,
  isDesc,
  items,
}: {
  title: string;
  isDesc: boolean;
  items: Items[];
}) => {
  const [isFold, setIsFold] = useState<boolean>(false);

  const handleFoldState = () => {
    setIsFold((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap-5 items-start'>
      <button
        className='text-2xl font-bold underline underline-offset-8 decoration-[#f7ab0a]/50 decoration-wavy'
        onClick={handleFoldState}
      >
        <span className='hover:bg-[#f7ab0a]/50 transition-colors'>{title}</span>
      </button>
      <div className={`flex flex-col transition-all duration-500 ease-in-out`}>
        {isDesc &&
          items.map(
            (item) =>
              item.description && (
                <div key={item.title} className='flex flex-col gap-2 mb-3'>
                  <h3 className='text-lg font-semibold'>{item.title}</h3>
                  <div>
                    {item.description && (
                      <ul>
                        {item.description.map((desc) => (
                          <li key={desc}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )
          )}
        {!isDesc && (
          <ul>
            {items.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
