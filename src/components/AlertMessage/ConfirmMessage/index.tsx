import React from 'react';

import { ConfirmAlert } from '../../../images/index';
import Button from '../../Button';
import { Container, Content, ButtonsContainer } from '../styles';

const ConfirmMessage: React.FC = () => {
  return (
    <Container confirm>
      <Content>
        <h1>Excluir!</h1>

        <p>
          Você tem certeza que quer excluir <br /> Orf. Esperança?
        </p>

        <ButtonsContainer>
          <Button variant="pink">Confirmar</Button>
          <Button variant="green">Voltar para o mapa</Button>
        </ButtonsContainer>
      </Content>
      <ConfirmAlert />
    </Container>
  );
};

export default ConfirmMessage;
