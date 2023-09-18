'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useGLTF, Environment } from '@react-three/drei';
import background from '../../public/scene-crime.jpg';

import Image from 'next/image';
// function Model() {
//   const gltf = useGLTF('/person.glb');
//   return (
//     <group scale={[1, 1, 1]} position={[0, -0.5, 4]}>
//       <primitive object={gltf.scene}></primitive>
//       <Environment preset={'city'} />
//     </group>
//   );
// }
function Model() {
  const gltf = useGLTF('/nuirter_real-time.glb');
  return (
    <group scale={[6, 6, 6]} position={[0, -6.8, -1]}>
      <primitive object={gltf.scene}></primitive>
      <Environment preset={'city'} />
    </group>
  );
}
function Room() {
  const gltf = useGLTF('room.glb');
  return (
    <group scale={[1, 1, 1]} position={[-5, -5, -10]}>
      <primitive object={gltf.scene}></primitive>
      <Environment preset={'night'} />
    </group>
  );
}

export const ThreeDimScene = () => {
  return (
    <>
      {/* <div className="absolute">
        <Image
          src={background}
          width={0}
          height={0}
          alt="background"
          sizes="100vw"
          className="w-[100vw] h-[100vh]"
        />
      </div> */}
      <div className="relative">
        <Canvas style={{ height: '100vh' }}>
          <OrbitControls />
          <ambientLight intensity={1.0} />
          <Room />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
