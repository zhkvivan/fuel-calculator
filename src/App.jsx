import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Calculator from './Components/Calculator';

const MainWrapper = styled.section`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: darkslategrey;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 50px;
  background-color: white;
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
