import React from 'react';

import { RFButtonWhite } from '../../../styles/global';

import {
  Container,
  WrapperError,
  RFTitleError,
  RFContentError,
} from './styles';

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
