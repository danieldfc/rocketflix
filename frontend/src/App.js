import React from "react";

import Routes from "./routes";

import ErrorBoundary from "./services/error";

import "antd/dist/antd.less"; // or 'antd/dist/antd.css'

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
