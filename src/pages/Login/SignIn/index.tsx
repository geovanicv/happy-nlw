/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Logotipo } from '../../../images/index';

import {
  Container,
  Background,
  Content,
  PasswordOptions,
  Remember,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background>
        <Logotipo />
      </Background>
      <Content>
        <form>
          <h1>Fazer login</h1>
          <Input label="E-mail" type="email" name="email" />

          <Input label="Senha" type="password" name="password" />

          <PasswordOptions>
            <Remember>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Lembrar-me</label>
            </Remember>
            <span>Esqueci minha senha</span>
          </PasswordOptions>

          <Button>Entrar</Button>

          <Link to="orphanages/create">
            <FiPlus size={32} color="#FFF" />
          </Link>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
