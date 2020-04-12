import React from "react";

import {
  Container,
  WrapperError,
  RFTitleError,
  RFContentError
} from "./styles";

import { RFButtonWhite } from "~/styles/global";

export default () => {
  return (
    <Container>
      <WrapperError>
        <RFTitleError>404</RFTitleError>
        <RFContentError>Página não encontrada.</RFContentError>
        <RFButtonWhite>VOLTAR</RFButtonWhite>
      </WrapperError>
    </Container>
  );
};
