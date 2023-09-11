import React from 'react';
import Image from 'next/image';

export const Skeleton = ({ imageSrc }) => {
  console.log(imageSrc);
  return (
    <div className=" mx-auto bg-white rounded-sm shadow-md overflow-hidden hover:scale-[1.2] ">
      <div className="md:flex">
        <div className="relative">
          <Image
            src={imageSrc}
            alt="Card Image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[100px] h-[100px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
