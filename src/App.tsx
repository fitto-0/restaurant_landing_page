import { useEffect } from 'react';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar, { LanguageContext } from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import ImagesSection from './components/ImagesSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';



const PageSection = styled.section<{ $dir?: string }>`
  width: 100vw;
  min-height: 100vh;
  background: #f7e9d1;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 900px) {
    padding: 0;
  }
`;
const PageTitle = styled.h2<{ $dir?: string }>`
  color: #0a2342;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  font-weight: 900;
  letter-spacing: -1.5px;
  width: 100vw;
`;
const PageText = styled.p<{ $dir?: string }>`
  color: #444;
  max-width: 900px;
  margin: 1.5rem auto;
  text-align: center;
  font-size: 1.55rem;
  line-height: 2.1;
  background: rgba(231, 215, 193, 0.25);
  border-radius: 1.2rem;
  padding: 1.5rem 2rem;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Inter', 'Roboto', Arial, sans-serif"};
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 1.15rem;
    padding: 0.9rem 0.5rem;
  }
`;
const PageImage = styled.img`
  display: block;
  margin: 2rem auto 1.5rem auto;
  border-radius: 1.5rem;
  max-width: 500px;
  width: 100vw;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.10);
`;

const AboutPage = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const aboutContent = {
    en: {
      title: 'About Nasma',
      text1: `Nasma Restaurant is dedicated to providing a unique dining experience, blending modern elegance with culinary artistry. Our team is passionate about hospitality and creating memorable moments for every guest.<br /><br />Founded in the heart of Marrakech, Nasma has become a destination for food lovers seeking both tradition and innovation. Our chefs are inspired by Moroccan heritage, sourcing the freshest local ingredients to craft dishes that surprise and delight.<br /><br />The restaurant’s interior is designed to evoke warmth and sophistication, with intricate tiles, lanterns, and rich colors. Whether you’re joining us for a romantic dinner, a family celebration, or a business lunch, our attentive staff ensures every detail is perfect.<br /><br />`,
      text2: `<b>Our Philosophy:</b> To create memories through Moroccan food, service, and ambiance. Every guest is family at Nasma.<br /><br /><b>Our Team:</b> Led by Chef Youssef El Fassi, our kitchen and service staff are dedicated to excellence and hospitality.`
    },
    ar: {
      title: 'عن مطعم نسمة',
      text1: `مطعم نسمة يجسد التقاليد المغربية الأصيلة مع لمسة عصرية. فريقنا شغوف بصنع لحظات لا تُنسى لكل ضيف.<br /><br />تأسس في قلب مراكش، نسمة هو وجهة لعشاق الطعام الباحثين عن الأصالة والابتكار. يستلهم طهاتنا من التراث المغربي ويستخدمون أجود المكونات المحلية لإعداد أطباق مدهشة.<br /><br />تصميم المطعم يجمع بين الدفء والرقي، مع البلاط المزخرف والفوانيس والألوان الغنية. سواء كنت تحتفل مع العائلة أو في عشاء رومانسي، يضمن لك طاقمنا الاهتمام بكل التفاصيل.<br /><br />`,
      text2: `<b>فلسفتنا:</b> خلق الذكريات من خلال الطعام المغربي والخدمة والأجواء. كل ضيف هو فرد من عائلة نسمة.<br /><br /><b>فريقنا:</b> بإشراف الشيف يوسف الفاسي، يكرس فريق المطبخ والخدمة نفسه للتميز والضيافة.`
    }
  };
  const c = aboutContent[lang];
  return (
    <PageSection $dir={dir}>
      <PageTitle $dir={dir}>{c.title}</PageTitle>
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text1 }} />
      <PageImage src="./src/assets/elegant_restau_inter.jpg" alt={c.title} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text2 }} />
    </PageSection>
  );
};

const MenuPage = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const menuContent = {
    en: {
      title: 'Our Menu',
      text1: `Discover the flavors of Morocco with our signature dishes, fresh ingredients, and traditional recipes. Each plate is a celebration of Moroccan heritage.`,
      starters: `<b>Starters:</b><br />- Harira Soup<br />- Zaalouk (Eggplant Salad)<br />- Briouats (Savory Pastries)`,
      mains: `<b>Main Courses:</b><br />- Lamb Tagine with Prunes<br />- Chicken with Preserved Lemon & Olives<br />- Vegetable Couscous`,
      desserts: `<b>Desserts:</b><br />- Moroccan Orange Cake<br />- Chebakia (Sesame Cookies)<br />- Mint Tea Sorbet`,
      drinks: `<b>Drinks:</b><br />Enjoy Moroccan mint tea, fresh juices, and a curated selection of Moroccan wines.`,
      tasting: `<b>Chef’s Tasting Menu:</b><br />Experience a multi-course Moroccan feast, available by reservation.`,
      allergies: `<b>Allergies & Dietary Needs:</b><br />Please inform our staff of any allergies or dietary preferences. We are happy to accommodate vegan, vegetarian, and gluten-free guests.`,
      imgAlt: 'Moroccan menu',
    },
    ar: {
      title: 'قائمة الطعام',
      text1: `اكتشف نكهات المغرب مع أطباقنا المميزة والمكونات الطازجة والوصفات التقليدية. كل طبق هو احتفال بالتراث المغربي.`,
      starters: `<b>المقبلات:</b><br />- حساء الحريرة<br />- زعلوك (سلطة الباذنجان)<br />- بريوات (فطائر مالحة)`,
      mains: `<b>الأطباق الرئيسية:</b><br />- طاجين لحم بالبرقوق<br />- دجاج بالليمون المخلل والزيتون<br />- كسكس بالخضار`,
      desserts: `<b>الحلويات:</b><br />- كعكة البرتقال المغربية<br />- شباكية<br />- سوربيه الشاي بالنعناع`,
      drinks: `<b>المشروبات:</b><br />استمتع بشاي النعناع المغربي والعصائر الطازجة ومجموعة مختارة من النبيذ المغربي.`,
      tasting: `<b>قائمة التذوق الخاصة بالشيف:</b><br />استمتع بوليمة مغربية متعددة الأطباق متوفرة بالحجز المسبق.`,
      allergies: `<b>الحساسية والاحتياجات الغذائية:</b><br />يرجى إبلاغ طاقمنا بأي حساسية أو تفضيلات غذائية. يسعدنا تلبية احتياجات النباتيين والخاليين من الغلوتين.`,
      imgAlt: 'قائمة الطعام المغربية',
    }
  };
  const c = menuContent[lang];
  return (
    <PageSection $dir={dir}>
      <PageTitle $dir={dir}>{c.title}</PageTitle>
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text1 }} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.starters }} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.mains }} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.desserts }} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.drinks }} />
      <PageImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt={c.imgAlt} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.tasting }} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.allergies }} />
    </PageSection>
  );
};

const ContactPage = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const contactContent = {
    en: {
      title: 'Contact Us',
      text1: `Have questions or want to book a private event? Reach out to our team and we’ll be happy to assist you.<br /><br /><b>Address:</b> 123 Medina Street, Marrakech<br /><b>Phone:</b> +212 5 24 44 44 44<br /><b>Email:</b> info@nasma-restaurant.com<br /><br /><b>Opening Hours:</b><br />Monday – Sunday: 12:00 – 23:00<br /><br /><b>Private Events:</b><br />Nasma offers private riad dining and event planning for weddings, birthdays, and corporate gatherings. Contact us for a custom quote.<br /><br /><b>Follow Us:</b><br />Instagram: @nasmamaroc &bull; Facebook: Nasma Restaurant`,
      imgAlt: 'Contact Nasma',
      text2: `<b>Directions:</b><br />We are located in the heart of Marrakech, easily accessible by taxi and bus. Parking is available nearby.<br /><br /><b>Feedback:</b><br />We value your feedback! Please email or call us with your comments and suggestions.`
    },
    ar: {
      title: 'اتصل بنا',
      text1: `هل لديك أسئلة أو ترغب في حجز مناسبة خاصة؟ تواصل مع فريقنا وسنكون سعداء بمساعدتك.<br /><br /><b>العنوان:</b> 123 شارع المدينة، مراكش<br /><b>الهاتف:</b> +212 5 24 44 44 44<br /><b>البريد الإلكتروني:</b> info@nasma-restaurant.com<br /><br /><b>ساعات العمل:</b><br />الاثنين – الأحد: 12:00 – 23:00<br /><br /><b>الفعاليات الخاصة:</b><br />يقدم نسمة غرف طعام خاصة وتخطيط فعاليات للأعراس وأعياد الميلاد والاجتماعات. تواصل معنا للحصول على عرض خاص.<br /><br /><b>تابعنا:</b><br />إنستغرام: @nasmamaroc &bull; فيسبوك: مطعم نسمة`,
      imgAlt: 'اتصل بمطعم نسمة',
      text2: `<b>الاتجاهات:</b><br />نحن في قلب مراكش، يسهل الوصول إلينا بسيارة الأجرة أو الحافلة. تتوفر مواقف سيارات قريبة.<br /><br /><b>ملاحظاتكم:</b><br />نقدّر ملاحظاتكم! يرجى مراسلتنا أو الاتصال بنا بملاحظاتكم واقتراحاتكم.`
    }
  };
  const c = contactContent[lang];
  return (
    <PageSection $dir={dir}>
      <PageTitle $dir={dir}>{c.title}</PageTitle>
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text1 }} />
      <PageImage src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" alt={c.imgAlt} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text2 }} />
    </PageSection>
  );
};


const HomePage = () => (
  <>
    <WelcomeSection />
    <ImagesSection />
  </>
);


import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const ReservationBg = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a2342 60%, #f7e9d1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
`;

const ReservationCard = styled(motion.div)`
  background: rgba(247, 233, 209, 0.98);
  border-radius: 2.5rem;
  box-shadow: 0 8px 48px 0 rgba(10, 35, 66, 0.18);
  padding: 3.5rem 2.5rem 2.5rem 2.5rem;
  max-width: 480px;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    padding: 2rem 0.5rem 1.5rem 0.5rem;
    border-radius: 1.2rem;
  }
`;

const ReservationTitle = styled.h2`
  color: #0a2342;
  font-family: 'Playfair Display', serif;
  font-size: 2.3rem;
  font-weight: 900;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const ReservationSubtitle = styled.p`
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 2.2rem;
  text-align: center;
  font-family: 'Inter', 'Roboto', Arial, sans-serif;
`;

const ReservationDetails = styled.div`
  color: #0a2342;
  font-size: 1.05rem;
  margin-bottom: 2.2rem;
  text-align: left;
  width: 100%;
  background: rgba(10, 35, 66, 0.07);
  border-radius: 1rem;
  padding: 1.1rem 1.2rem;
  font-family: 'Inter', 'Roboto', Arial, sans-serif;
`;

const Glow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #f7e9d1 0%, #0a2342 80%);
  opacity: 0.18;
  filter: blur(80px);
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ReservationSectionPage = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const reservationContent = {
    en: {
      title: 'Reserve Your Table',
      subtitle: 'Experience the best of Nasma. Book your table for a memorable evening of fine dining and hospitality.',
      details: `<b>Opening Hours:</b> Mon–Sun, 12:00–23:00<br /><b>Location:</b> 123 Medina Street, Marrakech<br /><b>Phone:</b> +212 5 24 44 44 44<br /><b>Private Dining & Events:</b> Available on request<br /><b>Special Requests:</b> Vegan, vegetarian, gluten-free, and allergies accommodated`,
    },
    ar: {
      title: 'احجز طاولتك',
      subtitle: 'استمتع بأفضل الأوقات في نسمة. احجز طاولتك لسهرة مغربية لا تُنسى.',
      details: `<b>ساعات العمل:</b> الاثنين – الأحد، 12:00–23:00<br /><b>العنوان:</b> 123 شارع المدينة، مراكش<br /><b>الهاتف:</b> +212 5 24 44 44 44<br /><b>الفعاليات الخاصة:</b> متوفرة عند الطلب<br /><b>الطلبات الخاصة:</b> نوفر خيارات نباتية وخالية من الغلوتين ونراعي جميع الحساسيات الغذائية`,
    }
  };
  const c = reservationContent[lang];
  return (
    <ReservationBg dir={dir} style={{ fontFamily: dir === 'rtl' ? "'Amiri', 'Cairo', serif" : undefined }}>
      <Glow />
      <ReservationCard
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <ReservationTitle>{c.title}</ReservationTitle>
        <ReservationSubtitle>{c.subtitle}</ReservationSubtitle>
        <ReservationDetails dangerouslySetInnerHTML={{ __html: c.details }} />
        <ReservationSection />
      </ReservationCard>
    </ReservationBg>
  );
};


const App: React.FC = () => {
  const [lang, setLang] = React.useState<'en' | 'ar'>('en');
  useEffect(() => {
    document.title = lang === 'en' ? 'Nasma Moroccan Restaurant' : 'مطعم نسمة المغربي';
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reserve" element={<ReservationSectionPage />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
