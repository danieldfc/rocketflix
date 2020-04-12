import React from "react";

import {
  Wrapper,
  RFLogoWhite,
  RFInputText,
  RFButton,
  RFOu,
  RFButtonWhite
} from "./styles";

export default function SignIn() {
  /* SignIn para não retorna uma página branca sem identificação */
  return (
    <Wrapper>
      <RFLogoWhite />
      <RFInputText placeholder="EMAIL"></RFInputText>
      <RFInputText placeholder="SENHA"></RFInputText>
      <RFButton>ENTRAR</RFButton>
      <RFOu />
      <RFButtonWhite>REGISTRAR</RFButtonWhite>
    </Wrapper>
  );
}
