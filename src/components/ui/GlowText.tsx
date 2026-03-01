import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS } from '../../constants/theme';

const pulse = keyframes`
  0%, 100% { text-shadow: 0 0 10px ${COLORS.gold}, 0 0 20px ${COLORS.gold}, 0 0 40px rgba(240,192,64,0.4); }
  50% { text-shadow: 0 0 15px ${COLORS.gold}, 0 0 30px ${COLORS.gold}, 0 0 60px rgba(240,192,64,0.6); }
`;

interface GlowTextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  fontSize?: string;
  children: React.ReactNode;
}

const StyledGlowText = styled.h1<{ $fontSize?: string }>`
  font-family: ${FONTS.heading};
  color: ${COLORS.gold};
  font-size: ${({ $fontSize }) => $fontSize || '3.5rem'};
  text-align: center;
  margin: 0;
  animation: ${pulse} 3s ease-in-out infinite;
  letter-spacing: 0.05em;

  @media (max-width: 820px) {
    font-size: ${({ $fontSize }) => $fontSize ? `calc(${$fontSize} * 0.6)` : '2rem'};
  }
`;

export const GlowText: React.FC<GlowTextProps> = ({ as = 'h1', fontSize, children }) => (
  <StyledGlowText as={as} $fontSize={fontSize}>
    {children}
  </StyledGlowText>
);
