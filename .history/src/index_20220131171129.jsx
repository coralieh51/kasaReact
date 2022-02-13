import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/css/main.css";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/404";
import logements from "./assets/data/logements.json"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route name={logements.} path="/" element={<Home />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
