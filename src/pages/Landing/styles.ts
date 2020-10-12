import styled from 'styled-components';

import Ilustra from '../../images/ilustra.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
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
