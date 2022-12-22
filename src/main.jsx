import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://legendary-souffle-646afd.netlify.app";
