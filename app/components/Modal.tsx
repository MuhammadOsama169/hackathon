'use client';
import React from 'react';
import Lottie from 'react-lottie-player';
import animation from '../../public/animation-winner.json';

export const Modal = ({
  win,
  setWin,
}: {
  win: boolean;
  setWin: (newValue: boolean) => void;
}) => {
  const handleModal = () => {
    setWin(!win);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-[#071952] rounded-xl p-6 shadow-md">
        <Lottie
          loop
          animationData={animation}
          play
          className="w-full h-[200px] z-100"
        />
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Congratulations You Won!
        </h2>
        <div className="flex justify-center mx-auto">
          <button
            className="px-4 py-2 bg-[#e3411d] text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleModal}
          >
            Continue Questioning
          </button>
        </div>
      </div>
    </div>
  );
};
