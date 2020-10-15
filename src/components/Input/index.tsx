import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  haveInput?: boolean;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({
  textarea = false,
  haveInput = true,
  label,
  name,
  children,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>

      {textarea ? (
        <textarea id={name} maxLength={300} />
      ) : (
        haveInput && <input type="text" id={name} {...rest} />
      )}

      {children}
    </Container>
  );
};

export default Input;
