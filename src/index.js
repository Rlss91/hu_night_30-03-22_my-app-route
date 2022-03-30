import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

// add bootstrap to react
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
//react-toastify
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//axios config
axios.defaults.baseURL = "http://localhost:3003/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenKey");
  if (token) {
    config.headers["x-user-token"] = token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
