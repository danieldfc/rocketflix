import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Error404() {
  return (
    <Container>
      <Content>
        <h1>ERROR</h1>
        <p>Desculpem-nos do transtorno, alguma coisa deu errado.</p>
        <Link to="/">VOLTAR</Link>
      </Content>
    </Container>
  );
}
