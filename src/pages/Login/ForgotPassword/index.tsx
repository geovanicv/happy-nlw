/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Logotipo } from '../../../images/index';

import { Container, Background, Content } from '../styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Background>
        <Logotipo />
      </Background>
      <Content>
        <form>
          <h1>Esqueci a senha</h1>

          <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>

          <Input label="E-mail" type="email" name="email" />

          <Button variant="green">Enviar</Button>

          <Link to="/login">
            <FiArrowLeft size={32} color="#FFF" />
          </Link>
        </form>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
