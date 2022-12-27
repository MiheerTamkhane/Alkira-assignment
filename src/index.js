import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { TeamsProvider } from "./context/TeamsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TeamsProvider>
    <App />
  </TeamsProvider>
);
