import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Text = styled(motion.h1)<{ $lang?: string }>`
  font-size: ${props => props.$lang === 'ar' ? '4.2rem' : '3.5rem'};
  font-family: ${props => props.$lang === 'ar' ? "'Amiri', 'Cairo', serif" : "'Playfair Display', serif"};
  font-weight: 900;
  letter-spacing: ${props => props.$lang === 'ar' ? '0' : '-2.5px'};
  margin: 0 auto;
  padding: 2.2rem 0 2.2rem 0;
  background: linear-gradient(90deg, #e7d7c1 0%, #f7e9d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 24px rgba(10, 35, 66, 0.10);
  max-width: 1100px;
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
  word-break: normal;
  line-height: 1.13;
  @media (max-width: 900px) {
    font-size: ${props => props.$lang === 'ar' ? '2.7rem' : '2.2rem'};
    padding: 1.2rem 0;
    max-width: 98vw;
  }
  @media (max-width: 600px) {
    font-size: ${props => props.$lang === 'ar' ? '1.7rem' : '1.3rem'};
    padding: 0.7rem 0;
    max-width: 100vw;
  }
`;

import { LanguageContext } from './Navbar';

interface AnimatedTextProps {
  text: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};



const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const { lang } = React.useContext(LanguageContext);
  // For Arabic, animate by word but keep each word connected (no per-letter split)
  if (lang === 'ar') {
    const words = text.split(' ');
    return (
      <Text
        $lang={lang}
        initial="hidden"
        animate="visible"
        variants={textVariants}
        dir="rtl"
        style={{ direction: 'rtl' }}
      >
        {words.map((word, wi) => (
          <React.Fragment key={wi}>
            <motion.span
              variants={letterVariants}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
              whileHover={{ scale: 1.12, color: '#f7e9d1', textShadow: '0 0 16px #e7d7c1' }}
            >
              {word}
            </motion.span>
            {wi !== words.length - 1 && (
              <span className="animated-text-space" style={{ display: 'inline-block', width: '0.7em' }}>&nbsp;</span>
            )}
          </React.Fragment>
        ))}
      </Text>
    );
  }
  // For English and other LTR, animate by word/letter as before
  const words = text.split(" ");
  return (
    <Text
      $lang={lang}
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char, i) =>
            <motion.span
              key={i}
              variants={letterVariants}
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.2, color: '#f7e9d1', textShadow: '0 0 16px #e7d7c1' }}
            >
              {char}
            </motion.span>
          )}
          {wi !== words.length - 1 && <span className="animated-text-space"> </span>}
        </span>
      ))}
    </Text>
  );
};

export default AnimatedText;

// Responsive space styling for AnimatedText
const style = document.createElement('style');
style.innerHTML = `
  .animated-text-space {
    display: inline-block;
    width: 0.5em;
  }
  @media (max-width: 900px) {
    .animated-text-space {
      width: 0.3em;
    }
  }
  @media (max-width: 600px) {
    .animated-text-space {
      width: 0.15em;
    }
  }
`;
if (typeof window !== 'undefined' && !document.head.querySelector('style[data-animated-text]')) {
  style.setAttribute('data-animated-text', 'true');
  document.head.appendChild(style);
}
