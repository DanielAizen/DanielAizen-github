import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const isMobile = navigator.maxTouchPoints > 0;
const POINT_COUNT = isMobile ? 1000 : 3000;

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(POINT_COUNT * 3);
    const colors = new Float32Array(POINT_COUNT * 3);

    const purple = new THREE.Color('#7b2fbe');
    const gold = new THREE.Color('#f0c040');
    const midnight = new THREE.Color('#0d0d3a');

    for (let i = 0; i < POINT_COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const roll = Math.random();
      const c = roll < 0.5 ? purple : roll < 0.75 ? gold : midnight;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < POINT_COUNT; i++) {
      pos[i * 3 + 1] += delta * 0.08;
      if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = -15;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={POINT_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={POINT_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export default React.memo(ParticleField);
