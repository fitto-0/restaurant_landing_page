import React from 'react';
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(231, 215, 193, 0.12);
  border-radius: 2rem;
  box-shadow: 0 2px 24px rgba(10, 35, 66, 0.08);
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  @media (max-width: 700px) {
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
    max-width: 98vw;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 420px;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.13);
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #0a2342;
  margin: 0 0 0.7rem 0;
  letter-spacing: -1px;
  text-align: center;
`;

const Description = styled.p`
  font-family: 'Inter', 'Roboto', Arial, sans-serif;
  font-size: 1.15rem;
  color: #0a2342;
  text-align: center;
  margin: 0 0 0.5rem 0;
  line-height: 1.7;
`;

const ThreeDObject: React.FC = () => {
  return (
    <ResponsiveContainer>
      <StyledImage
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
        alt="Gourmet dish at Lumière Restaurant"
      />
      <Title>Signature Dish: Lumière Delight</Title>
      <Description>
        Our chef's signature creation, blending the finest ingredients with artistic presentation. Savor the harmony of flavors in every bite, crafted to delight your senses.
      </Description>
      <StyledImage
        src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80"
        alt="Elegant restaurant interior"
      />
      <Title>Modern Ambiance</Title>
      <Description>
        Experience dining in a space where deep blue and beige tones create a warm, inviting atmosphere. Perfect for memorable evenings and special occasions.
      </Description>
    </ResponsiveContainer>
  );
};

export default ThreeDObject;
