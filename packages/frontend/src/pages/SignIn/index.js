import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImgWhite from '../../assets/img/logo-white.svg';

import { Container, Separator } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

export default function SignIn() {
  const formRef = useRef(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
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
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credências.',
        });
      }
    },
    [addToast, history, signIn],
  );

  return (
    <Container>
      <img src={logoImgWhite} alt="Rocketflix" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="EMAIL" />
        <Input name="password" type="password" placeholder="SENHA" />
        <Button bgWhite={false} type="submit">
          ENTRAR
        </Button>
      </Form>

      <Separator />

      <Link to="/signup">REGISTRAR</Link>
    </Container>
  );
}
