import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input {
    border: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    color: #5c8599;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background: #f5f8fa;
  border: 1px solid #a1e9c5;
  border-radius: 20px;
  outline: none;
  height: 64px;
  padding: 0 16px;

  button {
    display: flex;
    background: transparent;
    border: 0;
    color: #5c8599;
  }
`;
