import React from 'react';

import { Container, Content, Separator, CardsContainer } from './styles';

import Header from '../Header';
import OrphanageCard from '../OrphanageCard';

const RegistredOrphanages: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Orfanatos Cadastrados</h1>

          <span>2 orfanatos</span>
        </header>
        <Separator />

        <CardsContainer>
          <OrphanageCard isEditable />
          <OrphanageCard isEditable />
          <OrphanageCard isEditable />
          <OrphanageCard isEditable />
          <OrphanageCard isEditable />
          <OrphanageCard isEditable />
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default RegistredOrphanages;
