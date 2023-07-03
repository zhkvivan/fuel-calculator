import React, { useEffect, useRef, useState } from 'react';
import ResultCard from './Result-card';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
  padding-right: 4rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  border-right: 2px solid rgba(117, 117, 117, 0.13);
`;

const FormWrapper = styled.div`
  color: #757575;
  font-size: 1.5rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 181.523%;
`;

const Input = styled.input`
  border: none;
  width: 40px;
  padding: 0;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
  padding-bottom: 1px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CarWrapper = styled.div``;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const Calculator = () => {
  const LITRES_IN_GALLON = 4.546099265;

  const [mpg, setMpg] = useState(40);
  const [price, setPrice] = useState(140);
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
    <>
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
              setMpg(e.target.value);
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
      </MainWrapper>
      <CardsWrapper>
        <ResultCard
          colour={'#0AA92D'}
          number={litresConsumed}
          measure={'литров'}
          description={
            'Столько топлива понадобится, чтобы проехать заданное количество миль'
          }
        />
        <ResultCard
          colour={'#2066CE'}
          number={pounds}
          measure={'фунтов'}
          description={
            'Столько денег понадобится, чтобы проехать заданное количество миль'
          }
        />
        <ResultCard
          colour={'#CE5F20'}
          number={lkm}
          measure={'литров на 100 километров'}
          description={'Расход топлива в литрах на сто километров'}
        />
      </CardsWrapper>
    </>
  );
};

export default Calculator;
