import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Calculator from './Components/Calculator';

const MainWrapper = styled.section`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background: linear-gradient(225deg, #190977 0%, #0c99a3 100%);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 4rem 4rem 4rem;
  border-radius: 0 0 3rem 3rem;
  background-color: white;

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const App = () => {
  return (
    <MainWrapper>
      <Container>
        <Header></Header>
        <Calculator></Calculator>
      </Container>
    </MainWrapper>
  );
};

export default App;
