import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);
