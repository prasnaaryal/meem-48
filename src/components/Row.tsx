import React, { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Row({
  imgUrl,
  reverse = false,
  title,
  content,
  link = null
}: {
  imgUrl: string;
  title: string;
  content: ReactNode | string;
  reverse?: boolean;
  link?: string | null;
}) {
  return (
    <div className="mt-24 flex flex-col flex-wrap justify-center gap-10 md:flex-row md:gap-28 lg:flex-nowrap">
      <div className={`${reverse ? 'lg:order-last' : 'order-first'} md:w-1/2`}>
        <img src={imgUrl} className=" h-full w-full object-cover" />
      </div>
      <div className="md:w-1/2">
        <div className="w-full  items-center  text-left ">
          <div>
            <h1 className="mb-6 text-4xl font-medium text-black">
              {title ?? ''}
            </h1>
            <p className=" mb-4 mt-4 text-sm font-normal text-grey">
              {content ?? ''}
            </p>
          </div>
          {link && (
            <div className="mt-6">
              <Link href={link}>
                <Button
                  className="w-36"
                  variant={'blue'}
                  size={'default'}
                >
                  Read More
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Row;
