import React from 'react';

import Routes from './routes';
import ErrorBoundary from './services/error';

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
