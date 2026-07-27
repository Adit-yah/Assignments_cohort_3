import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CounterProvider } from "./context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);