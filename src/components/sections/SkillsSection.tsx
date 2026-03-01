import React from 'react';
import styled from 'styled-components';
import { GlowText } from '../ui/GlowText';
import { StatCard } from '../ui/StatCard';
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Category = styled.div`
  background: ${COLORS.cardBg};
  border: 1px solid ${COLORS.cardBorder};
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CategoryTitle = styled.h3`
  font-family: ${FONTS.heading};
  color: ${COLORS.purple};
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { skill: 'React', level: 90 },
      { skill: 'TypeScript', level: 85 },
      { skill: 'CSS / Styled', level: 80 },
      { skill: 'Three.js', level: 60 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { skill: 'Node.js', level: 75 },
      { skill: 'Python', level: 70 },
      { skill: 'SQL', level: 65 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { skill: 'Git', level: 90 },
      { skill: 'Docker', level: 65 },
      { skill: 'AWS', level: 60 },
    ],
  },
];

export const SkillsSection: React.FC = () => (
  <Section id="skills">
    <GlowText as="h2" fontSize="2.5rem">
      Skills
    </GlowText>
    <Grid>
      {skillCategories.map((cat) => (
        <Category key={cat.title}>
          <CategoryTitle>{cat.title}</CategoryTitle>
          {cat.skills.map((s) => (
            <StatCard key={s.skill} skill={s.skill} level={s.level} />
          ))}
        </Category>
      ))}
    </Grid>
  </Section>
);
