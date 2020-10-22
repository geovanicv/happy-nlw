import React from 'react';

import { SuccessAlert, ConfirmAlert } from '../../../images/index';
import Button from '../../Button';
import { Container, Content } from '../styles';

const SuccessMessage: React.FC = () => {
  return (
    <Container confirm={false}>
      <Content>
        <h1>Ebaaa!</h1>

        <p>
          O cadastro deu certo e foi enviado ao administrador para ser aprovado.
          Agora é só esperar :)
        </p>

        <Button variant="green">Voltar para o mapa</Button>
      </Content>
      <SuccessAlert />
    </Container>
  );
};

export default SuccessMessage;
