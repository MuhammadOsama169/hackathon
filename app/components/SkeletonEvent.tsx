'use client';
import Image from 'next/image';
import React, { useState } from 'react';

interface EventInput {
  id: string;
  title: string;
  content: string;
  image: string;
}

export const SkeletonEvent = ({ scenario }: EventInput[]) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <main>
      <section
        className={`cursor-pointer flex flex-col rounded-xl text-center justify-center border p-4 hover:scale-[0.98] ${
          isSelected ? 'border-green-500 shadow-md' : 'border-gray-300'
        }`}
        onClick={toggleSelection}
      >
        <div className="h-[300px] w-[300px] mx-auto flex justify-center mb-10">
          <Image
            src={scenario.image}
            width={200}
            height={100}
            sizes="100vw"
            className=""
            alt="image"
          />
        </div>

        <h1 className="text-xl text-[#e3411d] font-bold mb-5">
          {scenario.title}
        </h1>
        <h2 className="text-md  mb-5">{scenario.content}</h2>
      </section>
    </main>
  );
};