import React, { useContext } from 'react';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import Navbar, { LanguageContext } from './Navbar';
import { motion } from 'framer-motion';

const SectionImage = styled.img`
  width: 100%;
  max-width: 420px;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.13);
  margin: 2.5rem 0 1.5rem 0;
  object-fit: cover;
  @media (max-width: 900px) {
    margin: 1.5rem 0 1rem 0;
  }
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 90vh;
  padding: 5rem 10vw 3rem 10vw;
  background: linear-gradient(120deg, #0a2342 0%, #e7d7c1 100%);
  gap: 2vw;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem 2vw;
    text-align: center;
  }
`;

const HeroCol = styled.div<{ $marginRight?: boolean }>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.$marginRight ? 'margin-right: 2vw;' : ''}
  @media (max-width: 1200px) {
    margin-right: 0;
    align-items: stretch;
  }
`;


const SubTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: #e7d7c1;
  margin: 2rem 0 1.5rem 0;
  letter-spacing: -1px;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: #e7d7c1;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  background: rgba(10, 35, 66, 0.25);
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 24px rgba(10, 35, 66, 0.08);
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1.1rem 2.8rem;
  background: linear-gradient(90deg, #e7d7c1 0%, #0a2342 100%);
  color: #0a2342;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(10, 35, 66, 0.15);
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  border: 2px solid #e7d7c1;
  &:hover {
    background: linear-gradient(90deg, #0a2342 0%, #e7d7c1 100%);
    color: #e7d7c1;
    border: 2px solid #0a2342;
  }
`;


const moroccanImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Moroccan interior
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Moroccan dish
  'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80', // Moroccan tea
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', // Staff/guests
];

const content = {
  en: {
    animated: 'Savor the Flavors of Morocco',
    subtitle: 'Welcome to Nasma Moroccan Restaurant',
    about: 'Step into Nasma and discover the magic of Morocco. Our restaurant blends traditional Moroccan hospitality with a modern twist, offering a feast for the senses. From aromatic tagines to sweet mint tea, every detail is crafted to transport you to Tangier.',
    menu: 'Enjoy a warm, inviting ambiance with intricate lanterns, colorful tiles, and authentic Moroccan cuisine. Whether you are celebrating or simply savoring, Nasma is your destination for unforgettable moments.',
    contact: 'Explore our menu of couscous, tagines, pastilla, and more. Our team is dedicated to making your visit exceptional, from the first greeting to the last sip of tea.',
    cta: 'Reserve a Table',
    alt1: 'Moroccan restaurant interior',
    alt2: 'Moroccan dish',
    alt3: 'Moroccan tea',
    alt4: 'Restaurant staff and guests',
  },
  ar: {
    animated: 'استمتع بنكهات المغرب الأصيلة',
    subtitle: 'مرحبًا بكم في مطعم نسمة المغربي',
    about: 'ادخل إلى مطعم نسمة واكتشف سحر المغرب. يجمع مطعمنا بين الضيافة المغربية التقليدية واللمسة العصرية، لنقدم لك وليمة للحواس. من الطواجن العطرية إلى شاي النعناع الحلو، كل التفاصيل مصممة لتنقلك إلى طنجة.',
    menu: 'استمتع بأجواء دافئة مع الفوانيس المزخرفة والبلاط الملون والمأكولات المغربية الأصيلة. سواء كنت تحتفل أو ترغب فقط في التذوق، نسمة هي وجهتك للحظات لا تُنسى.',
    contact: 'اكتشف قائمة الطعام لدينا من الكسكس والطواجن والبسطيلة والمزيد. فريقنا ملتزم بجعل زيارتك استثنائية من أول ترحيب حتى آخر رشفة شاي.',
    cta: 'احجز طاولتك',
    alt1: 'ديكور مطعم مغربي',
    alt2: 'طبق مغربي',
    alt3: 'شاي مغربي',
    alt4: 'طاقم المطعم والضيوف',
  }
};

const HeroSection: React.FC = () => {
  const { lang } = useContext(LanguageContext) as { lang: 'en' | 'ar' };
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  return (
    <div dir={dir} style={lang === 'ar' ? { fontFamily: 'Tajawal, Cairo, Arial, sans-serif' } : {}}>
      <Navbar />
      <HeroContainer>
        <HeroCol id="home" $marginRight>
          <AnimatedText text={content[lang].animated} />
          <SubTitle
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {content[lang].subtitle}
          </SubTitle>
        </HeroCol>
        <HeroCol id="about">
          <SectionImage
            src={moroccanImages[0]}
            alt={content[lang].alt1}
          />
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {content[lang].about}
          </Description>
        </HeroCol>
        <HeroCol id="menu">
          <SectionImage
            src={moroccanImages[1]}
            alt={content[lang].alt2}
          />
          <Description>
            {content[lang].menu}
          </Description>
        </HeroCol>
        <HeroCol id="contact">
          <SectionImage
            src={moroccanImages[2]}
            alt={content[lang].alt3}
          />
          <Description>
            {content[lang].contact}
          </Description>
          <CTAButton
            id="reserve"
            href="#reserve"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            {content[lang].cta}
          </CTAButton>
        </HeroCol>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
