import React, { useContext } from 'react';
// Language context for toggling EN/AR
export const LanguageContext = React.createContext({ lang: 'en', setLang: (l: "en" | "ar") => {} });
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  width: 100%;
  background: #0a2342;
  color: #e7d7c1;
  padding: 1.2rem 8vw 1.2rem 8vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 16px rgba(10, 35, 66, 0.08);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const LogoImg = styled.img`
  height: 5.2rem;
  width: 5.2rem;
  object-fit: contain;
  display: block;
`;

const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -1.5px;
  color: #e7d7c1;
  font-family: 'Playfair Display', serif;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 700px) {
    gap: 1.2rem;
  }
`;

const NavLink = styled.li`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e7d7c1;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #f7e9d1;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-family: 'Inter', 'Roboto', Arial, sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    transition: color 0.2s;
    &:hover {
      color: #f7e9d1;
    }
  }
`;

import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Reserve', path: '/reserve' },
];

const LangButton = styled.button`
  background: #e7d7c1;
  color: #0a2342;
  border: none;
  border-radius: 1.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.5rem 1.2rem;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #0a2342;
    color: #e7d7c1;
    border: 1px solid #e7d7c1;
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <Nav>
      <LogoContainer>
        <LogoImg src={logo} alt="Nasma logo" />
      </LogoContainer>
      <NavLinks>
        {navItems.map((item) => (
          <NavLink key={item.path} style={{ borderBottom: location.pathname === item.path ? '2px solid #e7d7c1' : 'none' }}>
            <Link to={item.path}>{item.label}</Link>
          </NavLink>
        ))}
      </NavLinks>
      <LangButton onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
        {lang === 'en' ? 'العربية' : 'EN'}
      </LangButton>
    </Nav>
  );
};

export default Navbar;
