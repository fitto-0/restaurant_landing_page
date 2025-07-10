import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  width: 100%;
  background: #e7d7c1;
  padding: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(10, 35, 66, 0.10);
  padding: 2rem 2.5rem;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  color: #0a2342;
  font-weight: 700;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid #e7d7c1;
  font-size: 1rem;
  background: #f7e9d1;
  color: #0a2342;
`;

const Button = styled.button`
  padding: 0.9rem 2rem;
  background: linear-gradient(90deg, #0a2342 0%, #e7d7c1 100%);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #e7d7c1 0%, #0a2342 100%);
    color: #0a2342;
  }
`;

const SuccessMsg = styled.div`
  color: #0a2342;
  font-weight: 700;
  margin-top: 1rem;
  text-align: center;
`;

const ReservationSection: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <FormSection id="reserve">
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" required />
        <Label htmlFor="time">Time</Label>
        <Input id="time" name="time" type="time" required />
        <Label htmlFor="guests">Guests</Label>
        <Input id="guests" name="guests" type="number" min="1" max="20" required />
        <Button type="submit">Reserve</Button>
        {success && <SuccessMsg>Reservation successful! We look forward to welcoming you.</SuccessMsg>}
      </Form>
    </FormSection>
  );
};

export default ReservationSection;
