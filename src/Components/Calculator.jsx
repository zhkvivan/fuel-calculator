import React, { useEffect, useRef, useState } from 'react';
import ResultCard from './Result-card';
import styled from 'styled-components';
import car from '../Assets/car.png';

const ContentWrapper = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
`;

const FormWrapper = styled.div`
  color: #757575;
  padding-right: 4rem;
  font-size: 1.5rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 181.523%;
  border-right: 2px solid rgba(117, 117, 117, 0.13);

  @media (max-width: 700px) {
    border: none;
    padding: 0;
  }
`;

const Input = styled.input`
  border: none;
  width: 80px;
  padding: 0;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
  padding-bottom: 1px;
  letter-spacing: 3px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Car = styled.div`
  background-image: url(${car});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: content-box;
  padding-left: 1rem;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 5rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'first second'
      'third third';
    padding: 0;
  }
`;

const Calculator = () => {
  const LITRES_IN_GALLON = 4.546099265;

  const [mpg, setMpg] = useState(55);
  const [price, setPrice] = useState(152);
  const [miles, setMiles] = useState(100);

  const [pounds, setPounds] = useState(0);
  const [lkm, setLkm] = useState(0);
  const [litresConsumed, setLitresConsumed] = useState(0);

  const mpgRef = useRef();
  const priceRef = useRef();
  const milesRef = useRef();

  const getLkm = (mpg) => {
    if (+mpg !== 0) {
      return Math.round(((LITRES_IN_GALLON * 100) / (mpg * 1.6)) * 10) / 10;
    }
    return 0;
  };

  const getLitersConsumed = (miles, mpg) => {
    if (+mpg !== 0 && +miles !== 0) {
      return Math.round((LITRES_IN_GALLON * miles) / mpg);
    }
    return 0;
  };

  const getPounds = (price, litresConsumed) => {
    if (+price !== 0 && +litresConsumed !== 0) {
      return Math.round((litresConsumed * price) / 100);
    }
    return 0;
  };

  useEffect(() => {
    setLkm(getLkm(mpg));
    setLitresConsumed(getLitersConsumed(miles, mpg));
  }, [mpg, miles]);

  useEffect(() => {
    setPounds(getPounds(price, litresConsumed));
  }, [litresConsumed, price]);

  return (
    <ContentWrapper>
      <MainWrapper>
        <FormWrapper>
          <span>Моя машина потребляет </span>
          <Input
            ref={mpgRef}
            type="number"
            value={mpg}
            onChange={(e) => {
              mpgRef.current.style.width =
                String(+e.target.value).length * 15 + 15 + 'px';
              setMpg(() => {
                if (isNaN(e.target.value)) {
                  return '';
                }
                return e.target.value;
              });
            }}
          />
          <span> mpg, при этом стоимость топлива на заправке составляет </span>
          <Input
            ref={priceRef}
            type="number"
            value={price}
            onChange={(e) => {
              priceRef.current.style.width =
                String(+e.target.value).length * 15 + 15 + 'px';
              setPrice(e.target.value);
            }}
          />
          <span> пенсов, а пройденное количество миль - </span>
          <Input
            ref={milesRef}
            type="number"
            value={miles}
            onChange={(e) => {
              milesRef.current.style.width =
                String(+e.target.value).length * 15 + 15 + 'px';
              setMiles(e.target.value);
            }}
          />
        </FormWrapper>
        <Car />
      </MainWrapper>
      <CardsWrapper>
        <ResultCard
          gridArea={'first'}
          colour={'#0AA92D'}
          number={litresConsumed}
          measure={'литров'}
          description={
            'Столько топлива понадобится, чтобы проехать заданное количество миль'
          }
        />
        <ResultCard
          gridArea={'second'}
          colour={'#2066CE'}
          number={pounds}
          measure={'фунтов'}
          description={
            'Столько денег понадобится, чтобы проехать заданное количество миль'
          }
        />
        <ResultCard
          gridArea={'third'}
          colour={'#CE5F20'}
          number={lkm}
          measure={'литров на 100 километров'}
          description={'Расход топлива в литрах на сто километров'}
        />
      </CardsWrapper>
    </ContentWrapper>
  );
};

export default Calculator;
