import React from "react";
import ErrorBoundary from "./services/error";

import Routes from "./routes";

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
