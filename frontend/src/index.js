import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./services/error";

import App from "./App";

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
