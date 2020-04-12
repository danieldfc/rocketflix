import React from "react";

import Routes from "./routes";

import ErrorBoundary from "./services/error";

import GlobalStyles from "~/styles/global";

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
