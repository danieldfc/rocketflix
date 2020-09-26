import React from 'react';

import {
  RFInputText,
  RFInputTextPassword,
  RFButton,
  RFButtonWhite,
} from '../../../styles/global';

import { Wrapper, RFLogoWhite, RFOu } from './styles';

export default function SignIn() {
  /* SignIn para não retorna uma página branca sem identificação */
  return (
    <Wrapper>
      <RFLogoWhite />
      <RFInputText placeholder="EMAIL" />
      <RFInputTextPassword placeholder="SENHA" />
      <RFButton>ENTRAR</RFButton>
      <RFOu />
      <RFButtonWhite>REGISTRAR</RFButtonWhite>
    </Wrapper>
  );
}
