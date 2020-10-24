import React from 'react';

import {
  Container,
  Content,
  Separator,
  CardsContainer,
} from '../RegistredOrphanages/styles';

import Header from '../Header';
import OrphanageCard from '../OrphanageCard';

const PendingOrphanages: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <h1>Cadastros Pendentes</h1>

          <span>2 orfanatos</span>
        </header>
        <Separator />

        <CardsContainer>
          <OrphanageCard />
          <OrphanageCard />
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default PendingOrphanages;
