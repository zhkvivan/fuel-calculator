import React from 'react';
import { styled } from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${({ colour }) => colour};
  color: white;
`;

const Number = styled.span`
  font-weight: 700;
  font-size: 4rem;
`;

const Measure = styled.span``;

const Description = styled.span`
  text-align: center;
`;

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
