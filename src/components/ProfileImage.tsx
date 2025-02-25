'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative group">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-40 group-hover:opacity-60 transition duration-300"></div>
        <div className="relative h-48 w-48 sm:h-52 sm:w-52">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"></div>
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image
              src="/profile-photo.png"
              alt="Pranjal's portrait"
              fill
              priority
              className="rounded-full object-cover border-[0.15rem] border-white/20 shadow-lg hover:scale-[1.02] transition duration-300 object-center"
              sizes="(max-width: 768px) 192px, 208px"
              quality={95}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/208x208?text=P";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 