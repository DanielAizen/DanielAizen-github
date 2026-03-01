import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
`;

export const ScrollContainer: React.FC = () => (
  <Wrapper>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
    <Footer />
  </Wrapper>
);
