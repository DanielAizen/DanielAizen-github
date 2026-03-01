import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '../constants/theme';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  transition: background 0.3s, backdrop-filter 0.3s;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(10,10,20,0.85)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(8px)' : 'none'};
  border-bottom: ${({ $scrolled }) => $scrolled ? `1px solid ${COLORS.cardBorder}` : 'none'};
`;

const Brand = styled.a`
  font-family: ${FONTS.heading};
  color: ${COLORS.gold};
  font-size: 1rem;
  text-decoration: none;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(240,192,64,0.5);

  @media (max-width: 820px) {
    font-size: 0.75rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;

  @media (max-width: 820px) {
    gap: 1rem;
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-family: ${FONTS.mono};
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  transition: color 0.2s, text-shadow 0.2s;

  &:hover {
    color: ${COLORS.gold};
    text-shadow: 0 0 8px rgba(240,192,64,0.6);
  }
`;

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <Brand href="#hero">Daniel Aizenband</Brand>
      <NavLinks>
        {navItems.map((item) => (
          <NavItem key={item.label}>
            <NavLink href={item.href}>{item.label}</NavLink>
          </NavItem>
        ))}
      </NavLinks>
    </Nav>
  );
};
