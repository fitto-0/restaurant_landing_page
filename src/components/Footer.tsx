
import React from 'react';
import styled from 'styled-components';
import { LanguageContext } from './Navbar';

const FooterWrapper = styled.footer<{ $dir?: string }>`
  width: 100vw;
  background: #0a2342;
  color: #f7e9d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0 1.2rem 0;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  direction: ${props => props.$dir};
`;

const FooterLinks = styled.div<{ $dir?: string }>`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
  direction: ${props => props.$dir};
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const FooterLink = styled.a<{ $dir?: string }>`
  color: #f7e9d1;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  margin: 0 0.5rem;
  font-family: inherit;
  direction: ${props => props.$dir};
  &:hover {
    color: #e7d7c1;
  }
`;

const FooterText = styled.p<{ $dir?: string }>`
  color: #f7e9d1;
  font-size: 1.15rem;
  margin: 0.2rem 0;
  text-align: center;
  letter-spacing: 0.2px;
  font-family: inherit;
`;

type Lang = 'en' | 'ar';

interface FooterContent {
  links: { label: string; href: string }[];
  copyright: string;
  address: string;
  phone: string;
  made: string;
}

const Footer: React.FC = () => {
  const { lang } = React.useContext(LanguageContext) as { lang: Lang };
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const content: Record<Lang, FooterContent> = {
    en: {
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Menu', href: '/menu' },
        { label: 'Contact', href: '/contact' },
        { label: 'Reserve', href: '/reserve' },
      ],
      copyright: `© ${new Date().getFullYear()} Nasma Moroccan Restaurant. All rights reserved.`,
      address: '123 Medina Street, Tangier',
      phone: '+212 5 24 44 44 44',
      made: 'Made with passion in Morocco',
    },
    ar: {
      links: [
        { label: 'الرئيسية', href: '/' },
        { label: 'من نحن', href: '/about' },
        { label: 'القائمة', href: '/menu' },
        { label: 'اتصل بنا', href: '/contact' },
        { label: 'الحجز', href: '/reserve' },
      ],
      copyright: `© ${new Date().getFullYear()} مطعم نسمة المغربي. جميع الحقوق محفوظة.`,
      address: '123 شارع المدينة، طنجة',
      phone: '+212 5 24 44 44 44',
      made: 'بكل شغف في المغرب',
    },
  };
  const c = content[lang];
  return (
    <FooterWrapper $dir={dir}>
      <FooterLinks $dir={dir}>
        {c.links.map((link, i) => (
          <FooterLink $dir={dir} key={i} href={link.href}>{link.label}</FooterLink>
        ))}
      </FooterLinks>
      <FooterText $dir={dir}>{c.address} | {c.phone}</FooterText>
      <FooterText $dir={dir}>{c.made}</FooterText>
      <FooterText $dir={dir}>{c.copyright}</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
