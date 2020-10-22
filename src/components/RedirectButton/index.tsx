import React from 'react';

import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';

import { Container } from './styles';

type Props = {
  icon: React.ComponentType<IconBaseProps>;
  to: string;
};

const RedirectButton: React.FC<Props> = ({ to, icon: Icon }) => (
  <Container>
    <Link to={to}>
      <Icon size={20} />
    </Link>
  </Container>
);

export default RedirectButton;
