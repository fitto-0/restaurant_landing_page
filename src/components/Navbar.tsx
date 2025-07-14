import React, { useContext, useState } from 'react';
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

const NavLinks = styled.ul<{ $open?: boolean }>`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1.2rem;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #0a2342;
    z-index: 99;
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0 1.5rem 0;
    display: ${props => (props.$open ? 'flex' : 'none')};
    box-shadow: 0 8px 32px rgba(10,35,66,0.13);
  }
`;
const MobileMenuButton = styled.button`
  display: none;
  background: #e7d7c1;
  color: #0a2342;
  border: none;
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: 900;
  padding: 0.3rem 1.1rem;
  margin-left: 1.5rem;
  cursor: pointer;
  @media (max-width: 700px) {
    display: block;
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

const navItemsContent = {
  en: [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Reserve', path: '/reserve' },
  ],
  ar: [
    { label: 'الرئيسية', path: '/' },
    { label: 'القائمة', path: '/menu' },
    { label: 'من نحن', path: '/about' },
    { label: 'اتصل بنا', path: '/contact' },
    { label: 'الحجز', path: '/reserve' },
  ],
};

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
  const [menuOpen, setMenuOpen] = useState(false);
  // Ensure lang is typed as "en" | "ar"
  const typedLang = lang as "en" | "ar";
  // Close menu on route change
  React.useEffect(() => { setMenuOpen(false); }, [location.pathname, lang]);
  return (
    <Nav style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', fontFamily: lang === 'ar' ? "'Amiri', 'Cairo', serif" : undefined, position: 'relative' }}>
      <LogoContainer>
        <LogoImg src={logo} alt="Nasma logo" />
      </LogoContainer>
      <MobileMenuButton aria-label="Menu" onClick={() => setMenuOpen(v => !v)}>
        {menuOpen ? (lang === 'ar' ? '✕' : '✕') : (lang === 'ar' ? 'القائمة' : '☰')}
      </MobileMenuButton>
      <NavLinks dir={lang === 'ar' ? 'rtl' : 'ltr'} $open={menuOpen}>
        {navItemsContent[typedLang].map((item) => (
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
