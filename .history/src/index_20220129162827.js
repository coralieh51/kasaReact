import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./assets/style/css/main.css";
import Banner from "./components/header/banner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes></Routes>
      <Banner />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);