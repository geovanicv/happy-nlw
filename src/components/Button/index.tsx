import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'pink';
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant,
  ...props
}) => (
  <Container type={type || 'button'} variant={variant} {...props}>
    {children}
  </Container>
);

export default Button;
