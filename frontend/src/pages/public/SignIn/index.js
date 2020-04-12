import React from "react";

import { Wrapper, RFLogoWhite, RFOu } from "./styles";

import {
  RFInputText,
  RFInputTextPassword,
  RFButton,
  RFButtonWhite
} from "~/styles/global";

export default function SignIn() {
  /* SignIn para não retorna uma página branca sem identificação */
  return (
    <Wrapper>
      <RFLogoWhite />
      <RFInputText placeholder="EMAIL"></RFInputText>
      <RFInputTextPassword placeholder="SENHA"></RFInputTextPassword>
      <RFButton>ENTRAR</RFButton>
      <RFOu />
      <RFButtonWhite>REGISTRAR</RFButtonWhite>
    </Wrapper>
  );
}
