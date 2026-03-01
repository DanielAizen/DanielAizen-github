import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { RUNES } from '../constants/theme';

interface RuneData {
  char: string;
  radius: number;
  speed: number;
  phase: number;
  yOffset: number;
}

const runeData: RuneData[] = RUNES.map((char, i) => ({
  char,
  radius: 2.8 + (i % 5) * 0.34,
  speed: 0.003 + (i % 7) * 0.00086,
  phase: (i / RUNES.length) * Math.PI * 2,
  yOffset: Math.sin(i * 1.618) * 1.2,
}));

interface RuneMeshProps {
  data: RuneData;
  index: number;
}

const RuneMesh: React.FC<RuneMeshProps> = ({ data, index }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const angleRef = useRef(data.phase);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    angleRef.current += data.speed * delta * 60;
    groupRef.current.position.x = Math.cos(angleRef.current) * data.radius;
    groupRef.current.position.z = Math.sin(angleRef.current) * data.radius;
    groupRef.current.position.y =
      data.yOffset + Math.sin(angleRef.current * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Text
        fontSize={0.35}
        color="#f0c040"
        anchorX="center"
        anchorY="middle"
        fillOpacity={0.75}
      >
        {data.char}
      </Text>
    </group>
  );
};

const FloatingRunes: React.FC = () => (
  <>
    {runeData.map((data, i) => (
      <RuneMesh key={i} data={data} index={i} />
    ))}
  </>
);

export default React.memo(FloatingRunes);
