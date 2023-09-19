'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useGLTF, Environment } from '@react-three/drei';

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
