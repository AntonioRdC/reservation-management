'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

export function Auth({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col items-center justify-between bg-muted p-10 text-white lg:flex">
        <p className="relative z-20 flex items-center text-lg font-medium">
          Lorem
        </p>
        <Image
          src={'/meela-pantalones.png'}
          alt="city"
          width={900}
          height={900}
          className="w-[300px] object-contain rounded-lg mt-32"
        />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
        </div>
      </div>
    </div>
  );
}
