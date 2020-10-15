import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { LogoMarker } from '../../images';

import { Container } from './styles';

const HeaderSideBar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <LogoMarker />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Container>
  );
};

export default HeaderSideBar;
