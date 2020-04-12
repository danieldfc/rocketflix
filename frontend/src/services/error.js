import React from "react";

import { Wrapper } from "./styles";

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
      errorInfo
    });
    this.getDerivedStateFromError(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Wrapper>
          <h1>Algo deu errado.</h1>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
