'use client';
import React from 'react';
import CrimeBackground from '../../public/crime-scene.png';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const CrimeScene = () => {
  return (
    <main className="flex justify-center mx-auto ">
      <InnerImageZoom
        src={CrimeBackground.src}
        zoomSrc={CrimeBackground.src}
        className=""
      />
    </main>
  );
};
export default CrimeScene;
