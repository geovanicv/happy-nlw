import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  height: 100%;
  margin-left: 200px;
  margin-right: 100px;
  padding: 20px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #4d6f80;
    }

    span {
      color: #8fa7b2;
    }
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;

  background: #d3e2e5;

  margin: 24px 0 34px 0;
`;

export const CardsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
`;
