import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, children, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />

      {children}
    </Container>
  );
};

export default Input;
