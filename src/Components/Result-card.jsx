import React from 'react';
import { styled } from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
  background-color: ${({ colour }) => colour};
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 1rem;
`;

const Number = styled.span`
  font-weight: 700;
  font-size: 4rem;
`;

const Measure = styled.span`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.span``;

const ResultCard = ({ colour, number, measure, description }) => {
  return (
    <CardWrapper colour={colour}>
      <Number>{number}</Number>
      <Measure>{measure}</Measure>
      <Description>{description}</Description>
    </CardWrapper>
  );
};

export default ResultCard;
