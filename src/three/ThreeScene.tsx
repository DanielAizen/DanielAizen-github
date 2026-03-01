import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import ParticleField from './ParticleField';
import RuneSphere from './RuneSphere';
import FloatingRunes from './FloatingRunes';

interface MousePosition {
  x: number;
  y: number;
}

interface CameraRigProps {
  mousePosition: MousePosition;
}

const CameraRig: React.FC<CameraRigProps> = ({ mousePosition }) => {
  useFrame(({ camera }) => {
    camera.position.x += (mousePosition.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mousePosition.y * 0.3 - camera.position.y) * 0.05;
  });
  return null;
};

interface ThreeSceneProps {
  mousePosition: MousePosition;
}

export const ThreeScene: React.FC<ThreeSceneProps> = ({ mousePosition }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#0a0a14',
      }}
      gl={{ antialias: true, alpha: false }}
    >
      <ambientLight intensity={0.2} />
      <CameraRig mousePosition={mousePosition} />
      <ParticleField />
      <RuneSphere />
      <Suspense fallback={null}>
        <FloatingRunes />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} intensity={1.2} radius={0.4} />
      </EffectComposer>
    </Canvas>
  );
};
