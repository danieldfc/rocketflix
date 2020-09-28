import React from 'react';

import { Container } from './styles';

export default function Button({ loading, children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
}
