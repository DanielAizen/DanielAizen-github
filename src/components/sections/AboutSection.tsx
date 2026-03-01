import React from 'react';
import styled from 'styled-components';
import { GlowText } from '../ui/GlowText';
import { COLORS, FONTS } from '../../constants/theme';

const Section = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  gap: 2rem;
`;

const Card = styled.div`
  max-width: 720px;
  width: 100%;
  background: ${COLORS.cardBg};
  border: 1px solid ${COLORS.cardBorder};
  border-radius: 12px;
  padding: 2.5rem;
  backdrop-filter: blur(8px);
`;

const Bio = styled.p`
  font-family: ${FONTS.body};
  font-style: italic;
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.2rem 0;
`;

const Highlight = styled.span`
  color: ${COLORS.gold};
  font-style: normal;
  font-weight: 600;
`;

const Rune = styled.span`
  font-size: 1.4rem;
  color: ${COLORS.purple};
  margin-right: 0.5rem;
`;

export const AboutSection: React.FC = () => (
  <Section id="about">
    <GlowText as="h2" fontSize="2.5rem">
      About
    </GlowText>
    <Card>
      <Bio>
        <Rune>ᚠ</Rune>
        In the realm of code and circuits, I am <Highlight>Daniel Aizenband</Highlight> —
        a full-stack engineer who forges software from both logic and lore. By day, I craft
        scalable web applications with <Highlight>React, TypeScript, and Node.js</Highlight>;
        by night, I lose myself in vast fantasy worlds and epic RPG campaigns.
      </Bio>
      <Bio>
        <Rune>ᚷ</Rune>
        Born in the age of the internet, I see every codebase as a dungeon to explore
        and every bug as a dragon to slay. My quest is to build experiences that feel
        alive — from pixel-perfect UIs to resilient backend systems. I believe that
        great software, like great storytelling, is built on clarity, craft, and just
        a touch of <Highlight>magic</Highlight>.
      </Bio>
      <Bio>
        <Rune>ᛏ</Rune>
        When not wielding a keyboard, you may find me theorycrafting character builds,
        exploring open-world games, or debating the lore of Elder Scrolls and The Witcher.
        The same curiosity that drives me through fictional worlds fuels my passion for
        <Highlight> continuous learning</Highlight> and <Highlight>clean architecture</Highlight>.
      </Bio>
    </Card>
  </Section>
);
