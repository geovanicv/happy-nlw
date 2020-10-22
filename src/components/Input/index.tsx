import React, { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const Icon = isVisible ? <FiEye size={26} /> : <FiEyeOff size={26} />;
  const passwordType = isVisible ? 'text' : 'password';

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer>
        <input
          type={type === 'password' ? passwordType : type}
          id={name}
          {...rest}
        />
        <button type="button" onClick={() => setIsVisible(prev => !prev)}>
          {type === 'password' && Icon}
        </button>
      </InputContainer>

      {children}
    </Container>
  );
};

export default Input;
