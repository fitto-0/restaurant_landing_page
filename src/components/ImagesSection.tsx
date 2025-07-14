
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


// --- New Home Sections ---
const SectionWrapper = styled.section<{ $dir?: string; $bg?: string }>`
  width: 100vw;
  background: ${({ $bg }) => $bg || '#112d4e'};
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const SectionTitle = styled.h3<{ $dir?: string }>`
  color: #f7e9d1;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SectionText = styled.p<{
  $dir?: string;
  $weight?: number;
  $size?: string;
  $mb?: string;
  $color?: string;
  $maxWidth?: string;
}>`
  color: ${({ $color }) => $color || '#f7e9d1'};
  font-size: ${({ $size }) => $size || '1.15rem'};
  text-align: center;
  max-width: ${({ $maxWidth }) => $maxWidth || '700px'};
  margin: 0 auto ${({ $mb }) => $mb || '2rem'} auto;
  font-family: inherit;
  font-weight: ${({ $weight }) => $weight || 400};
`;

const TestimonialsGrid = styled.div<{ $dir?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  direction: ${props => props.$dir};
`;

const TestimonialCard = styled.div`
  background: #fff;
  color: #0a2342;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.10);
  padding: 1.5rem 1.2rem;
  max-width: 340px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventCard = styled.div<{ $dir?: string }>`
  background: rgba(10, 35, 66, 0.65); /* flou dark blue */
  color: #0a2342; /* blue text */
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(10, 35, 66, 0.10);
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 700px;
  font-size: 1.05rem;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  text-align: ${props => props.$dir === 'rtl' ? 'right' : 'left'};
  backdrop-filter: blur(8px);
`;

const TestimonialName = styled.div<{ $dir?: string }>`
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 1rem;
  color: #0a2342;
  font-family: ${props => props.$dir === 'rtl' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
`;

const ChefSectionImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #f7e9d1;
`;

const GalleryGrid = styled.div<{ $dir?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  direction: ${props => props.$dir};
`;

const GalleryImg = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(10, 35, 66, 0.10);
`;

const ImagesSection: React.FC = () => {
  const { lang } = React.useContext(LanguageContext);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  type Lang = 'en' | 'ar';
  const content: Record<Lang, {
    title: string;
    images: { src: string; alt: string; title: string; desc: string; }[];
    testimonials: { text: string; name: string; }[];
    chef: { name: string; story: string; img: string; };
    gallery: { src: string; alt: string; }[];
    events: { title: string; desc: string; }[];
  }> = {
    en: {
      title: 'A Glimpse of Nasma',
      images: [
        {
          src: '/src/assets/ma_ambiance.png',
          alt: 'Nasma Interior',
          title: 'Traditional Moroccan Ambiance',
          desc: 'Experience the warmth and elegance of Moroccan décor in a cozy, inviting setting.'
        },
        {
          src: '/src/assets/our_identity.png',
          alt: 'Nasma Logo',
          title: 'Our Identity',
          desc: 'Nasma blends tradition and modernity, offering a unique culinary journey.'
        },
        {
          src: '/src/assets/ma_dish.png',
          alt: 'Moroccan Dish',
          title: 'Signature Moroccan Dish',
          desc: 'Savor authentic Moroccan flavors, crafted with passion and heritage.'
        },
      ],
      testimonials: [
        {
          text: 'A magical Moroccan experience! The food, the ambiance, and the hospitality were all perfect.',
          name: 'Sarah M.'
        },
        {
          text: 'The best tagine I have ever tasted. Highly recommended for anyone visiting the city.',
          name: 'Omar B.'
        },
        {
          text: 'Nasma is a true gem. The decor transports you to Morocco, and the staff is so welcoming.',
          name: 'Emily R.'
        },
      ],
      chef: {
        name: 'Chef Youssef',
        story: 'With over 20 years of experience, Chef Youssef brings the heart of Moroccan cuisine to your table. His passion for authentic flavors and creative presentation makes every dish a celebration of tradition and innovation.',
        img: '/src/assets/chef_img.jpg',
      },
      gallery: [
        { src: '/src/assets/ma_ambiance.png', alt: 'Ambiance' },
        { src: '/src/assets/ma_dish.png', alt: 'Dish' },
        { src: '/src/assets/elegant_restau_inter.jpg', alt: 'Interior' },
        { src: '/src/assets/logo1.png', alt: 'Logo' },
      ],
      events: [
        {
          title: 'Live Oud Nights',
          desc: 'Enjoy live traditional Moroccan music every Friday and Saturday evening.'
        },
        {
          title: 'Moroccan Tea Ceremony',
          desc: 'Join us for a complimentary tea ceremony every Sunday afternoon.'
        },
      ],
    },
    ar: {
      title: 'لمحات من نسمة',
      images: [
        {
          src: '/src/assets/ma_ambiance.png',
          alt: 'الداخلية في نسمة',
          title: 'أجواء مغربية تقليدية',
          desc: 'استمتع بدفء وأناقة الديكور المغربي في أجواء مريحة وجذابة.'
        },
        {
          src: '/src/assets/our_identity.png',
          alt: 'شعار نسمة',
          title: 'هويتنا',
          desc: 'تجمع نسمة بين الأصالة والحداثة لتقدم لكم تجربة طهي فريدة.'
        },
        {
          src: '/src/assets/ma_dish.png',
          alt: 'طبق مغربي',
          title: 'طبق مغربي مميز',
          desc: 'تذوقوا النكهات المغربية الأصيلة المحضرة بشغف وإرث عريق.'
        },
      ],
      testimonials: [
        {
          text: 'تجربة مغربية ساحرة! كان الطعام والأجواء والضيافة كلها مثالية.',
          name: 'سارة م.'
        },
        {
          text: 'أفضل طاجين تذوقته في حياتي. أنصح الجميع بزيارة نسمة.',
          name: 'عمر ب.'
        },
        {
          text: 'مطعم نسمة جوهرة حقيقية. الديكور ينقلك إلى المغرب والطاقم ودود للغاية.',
          name: 'إيميلي ر.'
        },
      ],
      chef: {
        name: 'الشيف يوسف',
        story: 'بخبرة تزيد عن 20 عامًا، يجلب الشيف يوسف روح المطبخ المغربي إلى مائدتكم. شغفه بالنكهات الأصيلة وتقديمه الإبداعي يجعل كل طبق احتفالاً بالتقاليد والابتكار.',
        img: '/src/assets/chef_img.jpg',
      },
      gallery: [
        { src: '/src/assets/ma_ambiance.png', alt: 'الأجواء' },
        { src: '/src/assets/ma_dish.png', alt: 'طبق' },
        { src: '/src/assets/elegant_restau_inter.jpg', alt: 'الداخلية' },
        { src: '/src/assets/logo1.png', alt: 'شعار' },
      ],
      events: [
        {
          title: 'ليالي العود الحية',
          desc: 'استمتعوا بالموسيقى المغربية التقليدية الحية كل يوم جمعة وسبت مساءً.'
        },
        {
          title: 'طقوس الشاي المغربي',
          desc: 'انضموا إلينا في طقوس الشاي المغربي المجانية كل يوم أحد بعد الظهر.'
        },
      ],
    },
  };
  const c = content[lang as Lang];

  return (
    <>
      {/* Main Images Section */}
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

      {/* Chef's Story Section */}
      <SectionWrapper $dir={dir} $bg="#112d4e">
        <SectionTitle $dir={dir}>{lang === 'ar' ? 'قصة الشيف' : "Chef's Story"}</SectionTitle>
        <ChefSectionImg src={c.chef.img} alt={c.chef.name} />
        <SectionText $dir={dir} $weight={600} $size="1.2rem" $mb="0.5rem">{c.chef.name}</SectionText>
        <SectionText $dir={dir}>{c.chef.story}</SectionText>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper $dir={dir} $bg="#0a2342">
        <SectionTitle $dir={dir}>{lang === 'ar' ? 'آراء الزبائن' : 'Testimonials'}</SectionTitle>
        <TestimonialsGrid $dir={dir}>
          {c.testimonials.map((t, i) => (
            <TestimonialCard key={i}>
              <SectionText $dir={dir} $color="#0a2342" $size="1.05rem" $mb="0">{t.text}</SectionText>
              <TestimonialName $dir={dir}>{t.name}</TestimonialName>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </SectionWrapper>

      {/* Gallery Section */}
      <SectionWrapper $dir={dir} $bg="#112d4e">
        <SectionTitle $dir={dir}>{lang === 'ar' ? 'معرض الصور' : 'Gallery'}</SectionTitle>
        <GalleryGrid $dir={dir}>
          {c.gallery.map((img, i) => (
            <GalleryImg key={i} src={img.src} alt={img.alt} />
          ))}
        </GalleryGrid>
      </SectionWrapper>

      {/* Events Section */}
      <SectionWrapper $dir={dir} $bg="#0a2342">
        <SectionTitle $dir={dir}>{lang === 'ar' ? 'فعالياتنا' : 'Our Events'}</SectionTitle>
        {c.events.map((event, i) => (
          <EventCard $dir={dir} key={i}>
            <SectionText $dir={dir} $weight={600} $mb="0.5rem">{event.title}</SectionText>
            <SectionText $dir={dir}>{event.desc}</SectionText>
          </EventCard>
        ))}
      </SectionWrapper>
    </>
  );
};

export default ImagesSection;
