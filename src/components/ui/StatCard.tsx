import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS } from '../../constants/theme';

const fillBar = (level: number) => keyframes`
  from { width: 0%; }
  to { width: ${level}%; }
`;

const CardWrapper = styled.div`
  background: ${COLORS.cardBg};
  border: 1px solid ${COLORS.cardBorder};
  border-radius: 6px;
  padding: 0.75rem 1rem;
  backdrop-filter: blur(8px);
`;

const SkillName = styled.div`
  font-family: ${FONTS.mono};
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
`;

const LevelText = styled.span`
  color: ${COLORS.gold};
`;

const BarTrack = styled.div`
  height: 6px;
  background: rgba(123, 47, 190, 0.2);
  border-radius: 3px;
  overflow: hidden;
`;

const BarFill = styled.div<{ $level: number }>`
  height: 100%;
  background: linear-gradient(90deg, ${COLORS.purple}, ${COLORS.gold});
  border-radius: 3px;
  animation: ${({ $level }) => fillBar($level)} 1.2s ease-out forwards;
`;

interface StatCardProps {
  skill: string;
  level: number;
}

export const StatCard: React.FC<StatCardProps> = ({ skill, level }) => (
  <CardWrapper>
    <SkillName>
      <span>{skill}</span>
      <LevelText>{level}</LevelText>
    </SkillName>
    <BarTrack>
      <BarFill $level={level} />
    </BarTrack>
  </CardWrapper>
);
