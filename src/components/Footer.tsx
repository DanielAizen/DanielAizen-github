import React from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '../constants/theme';

const FooterWrapper = styled.footer`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  border-top: 1px solid ${COLORS.cardBorder};
  background: rgba(10, 10, 20, 0.85);
  backdrop-filter: blur(8px);
`;

const RuneGlyph = styled.span`
  color: ${COLORS.purple};
  font-size: 1rem;
`;

const FooterText = styled.span`
  font-family: ${FONTS.mono};
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.8rem;
`;

const FooterLink = styled.a`
  font-family: ${FONTS.mono};
  color: ${COLORS.gold};
  font-size: 0.8rem;
  text-decoration: none;
  transition: text-shadow 0.2s;

  &:hover {
    text-shadow: 0 0 8px rgba(240,192,64,0.7);
  }
`;

export const Footer: React.FC = () => (
  <FooterWrapper>
    <RuneGlyph>ᚠ</RuneGlyph>
    <FooterText>Forged by Daniel Aizenband</FooterText>
    <FooterText>·</FooterText>
    <FooterLink
      href="https://github.com/DanielAizen/DanielAizen.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      Source Code
    </FooterLink>
    <RuneGlyph>ᚠ</RuneGlyph>
  </FooterWrapper>
);
