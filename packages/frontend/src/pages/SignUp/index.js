import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';

import logoImgWhite from '../../assets/img/logo-white.svg';

import { Container, Separator } from './styles';

export default function SignUp() {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <img src={logoImgWhite} alt="Rocketflix" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="NOME COMPLETO" />
        <Input name="email" type="email" placeholder="EMAIL" />
        <Input name="password" type="password" placeholder="SENHA" />
        <Button bgWhite={false} type="submit">
          REGISTRAR
        </Button>
      </Form>

      <Separator />

      <Link to="/signin">VOLTAR PARA LOGIN</Link>
    </Container>
  );
}
