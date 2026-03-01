import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/theme';
import { CV } from '../../assests/CV';
import { Email } from '../../assests/Email';
import { Github } from '../../assests/Github';
import { Linkedin } from '../../assests/Linkedin';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 25%;
  color: white;
  text-decoration: none;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  .icon {
    width: 3.5rem;
    height: 3.5rem;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .label {
    font-size: 0.7rem;
    color: ${COLORS.gold};
    opacity: 0;
    position: absolute;
    bottom: -1.2rem;
    white-space: nowrap;
    transition: opacity 0.2s;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 12px 6px rgba(240,192,64,0.15);

    .icon { opacity: 1; }
    .label { opacity: 1; }
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 820px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const links = [
  {
    href: 'https://www.linkedin.com/in/daniel-aizenband-8117391b9/',
    icon: <Linkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/DanielAizen',
    icon: <Github />,
    label: 'GitHub',
  },
  {
    href: 'mailto:aiz.dani@gmail.com',
    icon: <Email />,
    label: 'Email',
  },
  {
    href: 'https://drive.google.com/file/d/19rkjCec2QLZ4CyaBfwcI8pUaPBO3EgJQ/view?usp=drive_link',
    icon: <CV />,
    label: 'Open CV',
  },
];

export const SocialLinks: React.FC = () => (
  <Container>
    {links.map((link) => (
      <LinkButton
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon">{link.icon}</div>
        <span className="label">{link.label}</span>
      </LinkButton>
    ))}
  </Container>
);
