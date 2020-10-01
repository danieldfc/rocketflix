import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import { Button, Input } from '../../components';

import logoImgWhite from '../../assets/img/logo-white.svg';

import { Container, Separator } from './styles';

export default function SignUp() {
  const formRef = useRef(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo de 6 dígitos'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você já pode fazer seu logon, na RocketFlix!',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastrar',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <img src={logoImgWhite} alt="Rocketflix" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="NOME COMPLETO" />
        <Input name="email" type="email" placeholder="EMAIL" />
        <Input name="password" type="password" placeholder="SENHA" />
        <Button bgWhite={false} type="submit">
          REGISTRAR
        </Button>
      </Form>

      <Separator />

      <Link to="/">VOLTAR PARA LOGIN</Link>
    </Container>
  );
}
