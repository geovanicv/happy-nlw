import styled, { css } from 'styled-components';

import { ButtonProps } from './index';

const variants = {
  green: css`
    background: #37c77f;

    :hover {
      background: #3ee08f;
    }
  `,
  pink: css`
    background: #d6487b;

    :hover {
      background: #ff6da2;
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  height: 64px;
  border-radius: 20px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-weight: 600;
  margin-top: 16px;
  width: 100%;
  transition: background 0.4s;

  ${({ variant }) => variant && variants[variant]}

  cursor: pointer;
`;
