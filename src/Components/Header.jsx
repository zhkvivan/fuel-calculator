import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const Heading = styled.h1`
  color: #0153a2;
  font-size: 1rem;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: 0.085rem;
  position: relative;
  margin-right: 20px;

  border-right: 1px solid gray;
  padding-right: 20px;

  @media (max-width: 540px) {
    border: none;
    padding-right: 0;
    margin-right: 0;
    letter-spacing: 7px;
  }
`;

const HeadingDescription = styled.span`
  color: #757575;
  font-size: 1rem;
  font-family: Inter;
  font-weight: 300;
  letter-spacing: 0.085rem;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Heading>Топливоденьгомер</Heading>
      <HeadingDescription>Держи деньги под контролем</HeadingDescription>
    </HeaderWrap>
  );
};

export default Header;
