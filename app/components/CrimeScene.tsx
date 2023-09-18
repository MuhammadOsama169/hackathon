'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF, Environment } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('murder-scene.glb');
  return (
    <group scale={[5, 5, 5]} position={[-11, -5, -5]}>
      <primitive object={gltf.scene}></primitive>
      <Environment preset={'warehouse'} />
    </group>
  );
}

export const CrimeScene = () => {
  return (
    <>
      <div className="relative">
        <Canvas style={{ height: '100vh' }}>
          <OrbitControls />
          <ambientLight intensity={1.0} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
