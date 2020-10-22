import styled from 'styled-components';

export const Container = styled.div`
  width: 48px;
  height: 48px;

  border: 0;

  background: #12afcb;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: #17d6eb;
  }
`;
