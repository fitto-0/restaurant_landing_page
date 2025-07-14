import React, { useContext } from 'react';
import { LanguageContext } from './Navbar';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #0a2342 0%, #e7d7c1 100%);
  padding: 0;
  margin: 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
  overflow: hidden;
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1vw;
  }
`;

const WelcomeImage = styled.img`
  width: 350px;
  max-width: 40vw;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.13);
  object-fit: cover;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
`;

const Welcome = styled.h2<{ $dir?: string }>`
  color: #e7d7c1;
  font-size: 2.7rem;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  font-weight: 900;
  margin: 1.5rem 0 0.5rem 0;
  text-align: center;
  letter-spacing: -1.5px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p<{ $dir?: string }>`
  color: #0a2342;
  font-size: 1.45rem;
  max-width: 700px;
  margin: 0 auto 1.5rem auto;
  text-align: center;
  background: rgba(231, 215, 193, 0.25);
  border-radius: 1.2rem;
  padding: 1.5rem 2rem;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Inter', 'Roboto', Arial, sans-serif"};
  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.9rem 0.5rem;
  }
`;

const WelcomeTextBlock = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const welcomeContent = {
  en: {
    animated: 'Savor the Art of Moroccan Dining',
    title: 'Welcome to Nasma Moroccan Restaurant',
    desc: 'At Nasma, we believe dining is an immersive journey. Step into a world where Moroccan artistry meets modern elegance, and every moment is crafted to delight your senses. Our chefs blend classic techniques with contemporary creativity, presenting dishes that are as visually stunning as they are delicious.'
  },
  ar: {
    animated: 'استمتع بفن الضيافة المغربية',
    title: 'مرحبًا بكم في مطعم نسمة المغربي',
    desc: 'في نسمة، نؤمن أن تجربة الطعام رحلة غامرة. ادخل إلى عالم يجمع بين الفن المغربي والأناقة العصرية، حيث تُصنع كل لحظة لإسعاد حواسك. يمزج طهاتنا بين التقنيات الكلاسيكية والإبداع الحديث ليقدموا أطباقًا جميلة ولذيذة.'
  }
};

const WelcomeSection: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const typedLang = (lang === 'ar' ? 'ar' : 'en') as 'en' | 'ar';
  const dir = typedLang === 'ar' ? 'rtl' : 'ltr';
  const c = welcomeContent[typedLang];
  return (
    <Section dir={dir}>
      <WelcomeContent>
        <WelcomeTextBlock>
          <div style={{ width: '100%', minHeight: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatedText text={c.animated} />
          </div>
          <Welcome $dir={dir}>{c.title}</Welcome>
          <Description $dir={dir}>{c.desc}</Description>
        </WelcomeTextBlock>
        <WelcomeImage src="./src/assets/p1.png" alt={lang === 'ar' ? 'ديكور مطعم مغربي' : 'Elegant restaurant interior'} />
      </WelcomeContent>
    </Section>
  );
};

export default WelcomeSection;
