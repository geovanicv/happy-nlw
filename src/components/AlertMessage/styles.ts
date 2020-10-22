import styled, { css } from 'styled-components';

export const Container = styled.div<{ confirm: boolean }>`
  ${({ confirm }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background: ${confirm ? '#FF669D' : '#31B272'};
  `}

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    min-width: 450px;

    svg {
      width: 220px;
    }
  }
`;

export const Content = styled.div`
  margin-right: 122px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  text-align: center;
  max-width: 420px;
  max-height: 400px;
  height: 100%;

  h1 {
    font-size: 80px;
  }

  p {
    font-size: 24px;
  }

  button {
    max-width: 240px;
  }

  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

export const ButtonsContainer = styled.div``;
