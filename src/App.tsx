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
  const aboutContent: Record<'en' | 'ar', { title: string; text1: string; text2: string }> = {
    en: {
      title: 'About Nasma',
      text1: `Nasma Restaurant is dedicated to providing a unique dining experience, blending modern elegance with culinary artistry. Our team is passionate about hospitality and creating memorable moments for every guest.<br /><br />Founded in the heart of Tangier, Nasma has become a destination for food lovers seeking both tradition and innovation. Our chefs are inspired by Moroccan heritage, sourcing the freshest local ingredients to craft dishes that surprise and delight.<br /><br />The restaurant’s interior is designed to evoke warmth and sophistication, with intricate tiles, lanterns, and rich colors. Whether you’re joining us for a romantic dinner, a family celebration, or a business lunch, our attentive staff ensures every detail is perfect.<br /><br />`,
      text2: `<b>Our Philosophy:</b> To create memories through Moroccan food, service, and ambiance. Every guest is family at Nasma.<br /><br /><b>Our Team:</b> Led by Chef Youssef El Fassi, our kitchen and service staff are dedicated to excellence and hospitality.`
    },
    ar: {
      title: 'عن مطعم نسمة',
      text1: `مطعم نسمة يجسد التقاليد المغربية الأصيلة مع لمسة عصرية. فريقنا شغوف بصنع لحظات لا تُنسى لكل ضيف.<br /><br />تأسس في قلب طنجة نسمة هو وجهة لعشاق الطعام الباحثين عن الأصالة والابتكار. يستلهم طهاتنا من التراث المغربي ويستخدمون أجود المكونات المحلية لإعداد أطباق مدهشة.<br /><br />تصميم المطعم يجمع بين الدفء والرقي، مع البلاط المزخرف والفوانيس والألوان الغنية. سواء كنت تحتفل مع العائلة أو في عشاء رومانسي، يضمن لك طاقمنا الاهتمام بكل التفاصيل.<br /><br />`,
      text2: `<b>فلسفتنا:</b> خلق الذكريات من خلال الطعام المغربي والخدمة والأجواء. كل ضيف هو فرد من عائلة نسمة.<br /><br /><b>فريقنا:</b> بإشراف الشيف يوسف الفاسي، يكرس فريق المطبخ والخدمة نفسه للتميز والضيافة.`
    }
  };
  const c = aboutContent[lang as 'en' | 'ar'];
  return (
    <PageSection $dir={dir}>
      <PageTitle $dir={dir}>{c.title}</PageTitle>
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text1 }} />
      <PageImage src="./public/images/elegant_restau_inter.jpg" alt={c.title} />
      <PageText $dir={dir} dangerouslySetInnerHTML={{ __html: c.text2 }} />
    </PageSection>
  );
};


const MenuGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0 1.5rem 0;
  width: 100%;
`;
const MenuCard = styled.div<{ $dir?: string }>`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.10);
  padding: 1.5rem 1.2rem 2rem 1.2rem;
  max-width: 340px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  direction: ${props => props.$dir};
`;
const MenuImg = styled.img`
  width: 100%;
  max-width: 220px;
  height: 160px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1.1rem;
`;
const MenuCardTitle = styled.h3<{ $dir?: string }>`
  color: #0a2342;
  font-size: 1.25rem;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  font-weight: 800;
  margin-bottom: 0.7rem;
  text-align: center;
`;
const MenuCardDesc = styled.p<{ $dir?: string }>`
  color: #444;
  font-size: 1.05rem;
  text-align: center;
  font-family: inherit;
`;

function MenuPage() {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const menuData = {
    en: [
      {
        title: 'Harira Soup',
        desc: 'A hearty tomato-based soup with lentils, chickpeas, and Moroccan spices.',
        img: '/public/images/harira.jpg',
        category: 'Starters',
      },
      {
        title: 'Zaalouk',
        desc: 'Smoky eggplant and tomato salad with garlic, olive oil, and spices.',
        img: '/public/images/zaalouk.jpg',
        category: 'Starters',
      },
      {
        title: 'Briouats',
        desc: 'Crispy pastry filled with spiced meat or cheese, fried to golden perfection.',
        img: '/public/images/briouat.jpg',
        category: 'Starters',
      },
      {
        title: 'Lamb Tagine with Prunes',
        desc: 'Slow-cooked lamb with prunes, almonds, and a blend of sweet and savory spices.',
        img: '/public/images/tajinlb.jpg',
        category: 'Mains',
      },
      {
        title: 'Chicken with Preserved Lemon & Olives',
        desc: 'Tender chicken braised with preserved lemons, olives, and saffron.',
        img: '/public/images/chickenlo.jpg',
        category: 'Mains',
      },
      {
        title: 'Vegetable Couscous',
        desc: 'Steamed semolina with a medley of fresh vegetables and aromatic broth.',
        img: '/public/images/couscous.jpg',
        category: 'Mains',
      },
      {
        title: 'Moroccan Orange Cake',
        desc: 'Moist cake infused with orange zest and a hint of cinnamon.',
        img: '/public/images/orange_cake.jpg',
        category: 'Desserts',
      },
      {
        title: 'Chebakia',
        desc: 'Sesame cookies fried and coated in honey, a Ramadan favorite.',
        img: '/public/images/chebakia.jpg',
        category: 'Desserts',
      },
      {
        title: 'Mint Tea Tray',
        desc: 'Refreshing sorbet made with Moroccan mint tea and citrus.',
        img: '/public/images/mint_tea.jpg',
        category: 'Desserts',
      },
    ],
    ar: [
      {
        title: 'حساء الحريرة',
        desc: 'حساء مغربي غني بالطماطم والعدس والحمص وتوابل مغربية أصيلة.',
        img: '/public/images/harira.jpg',
        category: 'المقبلات',
      },
      {
        title: 'زعلوك',
        desc: 'سلطة الباذنجان المدخن مع الطماطم والثوم وزيت الزيتون والتوابل.',
        img: '/public/images/zaalouk.jpg',
        category: 'المقبلات',
      },
      {
        title: 'بريوات',
        desc: 'فطائر مقرمشة محشوة باللحم أو الجبن ومقلية حتى تصبح ذهبية.',
        img: '/public/images/briouat.jpg',
        category: 'المقبلات',
      },
      {
        title: 'طاجين لحم بالبرقوق',
        desc: 'لحم مطهو ببطء مع البرقوق واللوز ومزيج من التوابل الحلوة والمالحة.',
        img: '/public/images/tajinlb.jpg',
        category: 'الأطباق الرئيسية',
      },
      {
        title: 'دجاج بالليمون المخلل والزيتون',
        desc: 'دجاج طري مطهو مع الليمون المخلل والزيتون والزعفران.',
        img: '/public/images/chickenlo.jpg',
        category: 'الأطباق الرئيسية',
      },
      {
        title: 'كسكس بالخضار',
        desc: 'سميد مطهو على البخار مع تشكيلة من الخضار الطازجة ومرق عطري.',
        img: '/public/images/couscous.jpg',
        category: 'الأطباق الرئيسية',
      },
      {
        title: 'كعكة البرتقال المغربية',
        desc: 'كعكة رطبة بنكهة قشر البرتقال ولمسة قرفة.',
        img: '/public/images/orange_cake.jpg',
        category: 'الحلويات',
      },
      {
        title: 'شباكية',
        desc: 'حلويات السمسم المقلية والمغطاة بالعسل، مفضلة في رمضان.',
        img: '/public/images/chebakia.jpg',
        category: 'الحلويات',
      },
      {
        title: 'صينية شاي بالنعناع',
        desc: 'تجربة مغربية أصيلة مع صينية شاي بالنعناع الطازج، تُقدم مع الحلويات التقليدية.',
        img: '/public/images/mint_tea.jpg',
        category: 'الحلويات',
      },
    ],
  };
  const c = lang === 'ar' ? {
    title: 'قائمة الطعام',
    text1: 'اكتشف نكهات المغرب مع أطباقنا المتنوعة والمكونات الطازجة والوصفات التقليدية. كل طبق هو احتفال بالتراث المغربي.',
    imgAlt: 'قائمة الطعام المغربية',
  } : {
    title: 'Our Menu',
    text1: 'Discover the flavors of Morocco with our diverse signature dishes, fresh ingredients, and traditional recipes. Each plate is a celebration of Moroccan heritage.',
    imgAlt: 'Moroccan menu',
  };
  return (
    <PageSection $dir={dir}>
      <PageTitle $dir={dir}>{c.title}</PageTitle>
      <PageText $dir={dir}>{c.text1}</PageText>
      <MenuGrid>
        {menuData[lang as 'en' | 'ar'].map((item, i) => (
          <MenuCard $dir={dir} key={i}>
            <MenuImg src={item.img} alt={item.title} />
            <MenuCardTitle $dir={dir}>{item.title}</MenuCardTitle>
            <MenuCardDesc $dir={dir}>{item.desc}</MenuCardDesc>
          </MenuCard>
        ))}
      </MenuGrid>
    </PageSection>
  );
}

const ContactPage = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const contactContent = {
    en: {
      title: 'Contact Us',
      text1: `Have questions or want to book a private event? Reach out to our team and we’ll be happy to assist you.<br /><br /><b>Address:</b> 123 Medina Street, Tangier<br /><b>Phone:</b> +212 5 24 44 44 44<br /><b>Email:</b> info@nasma-restaurant.com<br /><br /><b>Opening Hours:</b><br />Monday – Sunday: 12:00 – 23:00<br /><br /><b>Private Events:</b><br />Nasma offers private riad dining and event planning for weddings, birthdays, and corporate gatherings. Contact us for a custom quote.<br /><br /><b>Follow Us:</b><br />Instagram: @nasmamaroc &bull; Facebook: Nasma Restaurant`,
      imgAlt: 'Contact Nasma',
      text2: `<b>Directions:</b><br />We are located in the heart of Tangier, easily accessible by taxi and bus. Parking is available nearby.<br /><br /><b>Feedback:</b><br />We value your feedback! Please email or call us with your comments and suggestions.`
    },
    ar: {
      title: 'اتصل بنا',
      text1: `هل لديك أسئلة أو ترغب في حجز مناسبة خاصة؟ تواصل مع فريقنا وسنكون سعداء بمساعدتك.<br /><br /><b>العنوان:</b> 123 شارع المدينة، طنجة<br /><b>الهاتف:</b> +212 5 24 44 44 44<br /><b>البريد الإلكتروني:</b> info@nasma-restaurant.com<br /><br /><b>ساعات العمل:</b><br />الاثنين – الأحد: 12:00 – 23:00<br /><br /><b>الفعاليات الخاصة:</b><br />يقدم نسمة غرف طعام خاصة وتخطيط فعاليات للأعراس وأعياد الميلاد والاجتماعات. تواصل معنا للحصول على عرض خاص.<br /><br /><b>تابعنا:</b><br />إنستغرام: @nasmamaroc &bull; فيسبوك: مطعم نسمة`,
      imgAlt: 'اتصل بمطعم نسمة',
      text2: `<b>الاتجاهات:</b><br />نحن في قلب طنجة يسهل الوصول إلينا بسيارة الأجرة أو الحافلة. تتوفر مواقف سيارات قريبة.<br /><br /><b>ملاحظاتكم:</b><br />نقدّر ملاحظاتكم! يرجى مراسلتنا أو الاتصال بنا بملاحظاتكم واقتراحاتكم.`
    }
  };
  const c = contactContent[lang as 'en' | 'ar'];
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


import styled from 'styled-components';
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
      details: `<b>Opening Hours:</b> Mon–Sun, 12:00–23:00<br /><b>Location:</b> 123 Medina Street, Tangier<br /><b>Phone:</b> +212 5 24 44 44 44<br /><b>Private Dining & Events:</b> Available on request<br /><b>Special Requests:</b> Vegan, vegetarian, gluten-free, and allergies accommodated`,
    },
    ar: {
      title: 'احجز طاولتك',
      subtitle: 'استمتع بأفضل الأوقات في نسمة. احجز طاولتك لسهرة مغربية لا تُنسى.',
      details: `<b>ساعات العمل:</b> الاثنين – الأحد، 12:00–23:00<br /><b>العنوان:</b> 123 شارع المدينة، طنجة<br /><b>الهاتف:</b> +212 5 24 44 44 44<br /><b>الفعاليات الخاصة:</b> متوفرة عند الطلب<br /><b>الطلبات الخاصة:</b> نوفر خيارات نباتية وخالية من الغلوتين ونراعي جميع الحساسيات الغذائية`,
    }
  };
  const c = reservationContent[lang as 'en' | 'ar'];
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
