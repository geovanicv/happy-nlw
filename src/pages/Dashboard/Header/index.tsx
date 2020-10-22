import React from 'react';
import { FiAlertCircle, FiMapPin, FiPower } from 'react-icons/fi';
// import { NavLink } from 'react-router-dom';

import { LogoMarker } from '../../../images';

import { Container, NavMenu, LogoutButton, Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoMarker style={{ width: 48 }} />

      <NavMenu>
        <li>
          <Nav to="/dashboard">
            <FiMapPin size={24} />
          </Nav>
        </li>
        <li>
          <Nav hasUnread to="/dashboard2">
            <FiAlertCircle size={24} />
          </Nav>
        </li>
      </NavMenu>

      <LogoutButton type="button">
        <FiPower size={24} color="#FFF" />
      </LogoutButton>
    </Container>
  );
};

export default Header;
