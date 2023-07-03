import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  color: #0153a2;
  font-size: 1rem;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: 0.085rem;
  position: relative;
  margin-right: 20px;

  &:after {
    content: '';
    position: absolute;
    /* top: 0; */
    right: -10px;
    width: 1px;
    height: 20px;
    background-color: gray;
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
