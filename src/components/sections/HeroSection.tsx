import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Typed from 'typed.js';
import { GlowText } from '../ui/GlowText';
import { SocialLinks } from '../ui/SocialLinks';
import { FONTS, COLORS } from '../../constants/theme';

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  text-align: center;
`;

const NameWrapper = styled.div`
  animation: ${fadeDown} 1.2s ease-out forwards;
`;

const Subtitle = styled.span`
  font-family: ${FONTS.mono};
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.65);
  min-height: 2rem;
  display: block;
  animation: ${fadeUp} 1.4s ease-out 0.3s both;

  @media (max-width: 820px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  width: 120px;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${COLORS.purple}, transparent);
  animation: ${fadeUp} 1.4s ease-out 0.5s both;
`;

const LinksWrapper = styled.div`
  animation: ${fadeUp} 1.4s ease-out 0.7s both;
  padding-top: 0.5rem;
`;

export const HeroSection: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Software Developer',
        'Full Stack Engineer',
        'Gamer',
        'Fantasy Lover',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1800,
      loop: true,
      startDelay: 1000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <Section id="hero">
      <NameWrapper>
        <GlowText as="h1" fontSize="3.75rem">
          Daniel Aizenband
        </GlowText>
      </NameWrapper>
      <Divider />
      <Subtitle ref={typedRef} />
      <LinksWrapper>
        <SocialLinks />
      </LinksWrapper>
    </Section>
  );
};
