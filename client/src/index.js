import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./style/main.scss";
import Store from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ToastContainer />
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
