import styled from 'styled-components';

import Ilustra from '../../images/ilustra.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
`;

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${Ilustra}) no-repeat 80% center;

  @media (max-width: 900px) {
    max-height: 1000px;

    background: url(${Ilustra}) no-repeat 90% 93%;
    background-size: 360px;

    justify-content: flex-start;
  }
`;

export const Main = styled.main`
  max-width: 35rem;

  h1 {
    font-size: 7.6rem;
    font-weight: 800;
    line-height: 7rem;
  }

  p {
    margin-top: 4rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  @media (max-width: 900px) {
    max-width: 30rem;

    h1 {
      margin-top: 40px;
    }

    p {
      margin-top: 20px;
    }
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 2.4rem;
  line-height: 3.4rem;

  display: flex;
  flex-direction: column;

  text-align: right;

  @media (max-width: 900px) {
    position: absolute;
    text-align: left;
    top: auto;
    left: 0;
    bottom: 0;
  }
`;

export const EnterApp = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 8rem;
  height: 8rem;
  background: #ffd666;
  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  :hover {
    background: #96feff;
  }

  a {
    display: flex;

    svg {
      stroke-width: 0.4rem;
    }
  }
`;
