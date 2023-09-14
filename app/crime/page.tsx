'use client';
import React from 'react';
import CrimeBackground from '../../public/crime-scene.png';
import Image from 'next/image';
import { PointOfIntrest } from '../components/PointOfIntrest';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const CrimeScene = () => {
  return (
    <main className="flex justify-center mx-auto">
      <Image
        src={CrimeBackground}
        alt="Card Image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover absolute"
      />
      <InnerImageZoom
        src="../../public/crime-scene.png"
        zoomSrc="../../public/crime-scene.png"
      />
      {/* <section>
        <div className="relative top-[540px] left-[-652px]">
          <PointOfIntrest />
        </div>
        <div className="relative top-[540px] left-[-652px]">
          <PointOfIntrest />
        </div>
      </section> */}
    </main>
  );
};
export default CrimeScene;
