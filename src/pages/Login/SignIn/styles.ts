import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  background: #fff;
  color: #5c8599;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 600px;
  min-width: 500px;

  form {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 80%;
    height: 90%;

    > a {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;

      padding: 6px;
      border-radius: 12px;
      background: #ebf2f5;

      svg {
        stroke: #29b6d1;
        stroke-width: 2.4;
      }
    }
  }
`;

export const PasswordOptions = styled.div`
  color: #8fa7b2;
  margin-top: 18px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Remember = styled.div`
  label {
    cursor: pointer;
  }

  input {
    display: none;
  }
`;
