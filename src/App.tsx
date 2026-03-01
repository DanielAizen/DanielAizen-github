import React from 'react';
import { ThreeScene } from './three/ThreeScene';
import { ScrollContainer } from './components/ScrollContainer';
import { useMouseParallax } from './hooks/useMouseParallax';

const App: React.FC = () => {
  const mousePosition = useMouseParallax();

  return (
    <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', background: '#0a0a14' }}>
      <ThreeScene mousePosition={mousePosition} />
      <ScrollContainer />
    </div>
  );
};

export default App;
