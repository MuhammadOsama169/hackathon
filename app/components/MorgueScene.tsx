'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF, Environment } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('woman-doctor.glb');
  return (
    <group scale={[5, 5, 5]} position={[0, -8, 0]}>
      <primitive object={gltf.scene}></primitive>
      <Environment preset={'night'} />
    </group>
  );
}
function Morgue() {
  const gltf = useGLTF('morgue-room.glb');
  return (
    <group scale={[5, 5, 5]} position={[-1.5, -8, 1.4]}>
      <primitive object={gltf.scene}></primitive>
      <Environment preset={'night'} />
    </group>
  );
}

export const MorgueScene = () => {
  return (
    <>
      <div className="relative bg-black">
        <Canvas style={{ height: '100vh' }}>
          <OrbitControls />
          <ambientLight intensity={1.0} />
          <Morgue />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
