/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Logotipo } from '../../../images/index';

import { Container, Background, Content } from '../styles';

const ResetPassword: React.FC = () => {
  return (
    <Container>
      <Background>
        <Logotipo />
      </Background>
      <Content>
        <form>
          <h1>Redefinição de senha</h1>

          <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>
          <Input label="Nova senha" type="password" name="new_password" />

          <Input
            label="Repetir senha"
            type="password"
            name="confirm_password"
          />

          <Button variant="green">Redefinir</Button>

          <Link to="orphanages/create">
            <FiPlus size={32} color="#FFF" />
          </Link>
        </form>
      </Content>
    </Container>
  );
};

export default ResetPassword;
