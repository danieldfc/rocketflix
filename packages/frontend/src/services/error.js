import React from 'react';

import { RFButtonWhite } from '../styles/global';

import {
  Container,
  WrapperError,
  RFTitleError,
  RFContentError,
} from './styles';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    if (error) return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    this.getDerivedStateFromError(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Container>
          <WrapperError>
            <RFTitleError>ERROR</RFTitleError>
            <RFContentError>
              Desculpem-nos do transtorno, alguma coisa deu errado.
            </RFContentError>
            <RFButtonWhite>VOLTAR</RFButtonWhite>
          </WrapperError>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
