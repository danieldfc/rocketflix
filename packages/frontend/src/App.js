import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';
import ErrorBoundary from './services/error';

function App() {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </>
  );
}

export default App;
