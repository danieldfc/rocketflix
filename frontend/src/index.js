import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./services/error";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import App from "./App";

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
