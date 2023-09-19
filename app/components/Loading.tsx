'use client';
import React from 'react';
import Lottie from 'react-lottie-player';
import animation from '../../public/animation-loading.json';

export const Loading = () => {
  return (
    <div>
      {' '}
      <Lottie
        loop
        animationData={animation}
        play
        className="w-full h-[500px] z-100"
      />
      <h1 className="text-center text-2xl">Loading...</h1>
    </div>
  );
};
