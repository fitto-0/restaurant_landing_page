
import React from 'react';
import styled from 'styled-components';
import { LanguageContext } from './Navbar';

const ImagesSectionWrapper = styled.section<{ $dir?: string }>`
  width: 100vw;
  background: #0a2342;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const ImagesTitle = styled.h3<{ $dir?: string }>`
  color: #f7e9d1;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ImagesGrid = styled.div<{ $dir?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  direction: ${props => props.$dir};
`;

const ImageBlock = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.10);
  padding: 1.2rem 1rem 1.5rem 1rem;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const Title = styled.h3<{ $dir?: string }>`
  color: #0a2342;
  font-size: 1.3rem;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const Description = styled.p<{ $dir?: string }>`
  color: #444;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  font-family: inherit;
`;

const ImagesSection: React.FC = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const content = {
    en: {
      title: 'A Glimpse of Nasma',
      images: [
        {
          src: '/src/assets/elegant_restau_inter.jpg',
          alt: 'Nasma Interior',
          title: 'Traditional Moroccan Ambiance',
          desc: 'Experience the warmth and elegance of Moroccan décor in a cozy, inviting setting.'
        },
        {
          src: '/src/assets/logo.png',
          alt: 'Nasma Logo',
          title: 'Our Identity',
          desc: 'Nasma blends tradition and modernity, offering a unique culinary journey.'
        },
        {
          src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
          alt: 'Moroccan Dish',
          title: 'Signature Moroccan Dish',
          desc: 'Savor authentic Moroccan flavors, crafted with passion and heritage.'
        },
      ],
    },
    ar: {
      title: 'لمحات من نسمة',
      images: [
        {
          src: '/src/assets/elegant_restau_inter.jpg',
          alt: 'الداخلية في نسمة',
          title: 'أجواء مغربية تقليدية',
          desc: 'استمتع بدفء وأناقة الديكور المغربي في أجواء مريحة وجذابة.'
        },
        {
          src: '/src/assets/logo.png',
          alt: 'شعار نسمة',
          title: 'هويتنا',
          desc: 'تجمع نسمة بين الأصالة والحداثة لتقدم لكم تجربة طهي فريدة.'
        },
        {
          src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
          alt: 'طبق مغربي',
          title: 'طبق مغربي مميز',
          desc: 'تذوقوا النكهات المغربية الأصيلة المحضرة بشغف وإرث عريق.'
        },
      ],
    },
  };
  const c = content[lang];
  return (
    <ImagesSectionWrapper $dir={dir}>
      <ImagesTitle $dir={dir}>{c.title}</ImagesTitle>
      <ImagesGrid $dir={dir}>
        {c.images.map((img, i) => (
          <ImageBlock key={i}>
            <StyledImage src={img.src} alt={img.alt} />
            <Title $dir={dir}>{img.title}</Title>
            <Description $dir={dir}>{img.desc}</Description>
          </ImageBlock>
        ))}
      </ImagesGrid>
    </ImagesSectionWrapper>
  );
};

export default ImagesSection;
