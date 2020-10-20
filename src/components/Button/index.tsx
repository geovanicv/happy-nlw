import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type,
  ...props
}) => (
  <Container type={type || 'button'} {...props}>
    {children}
  </Container>
);

export default Button;
