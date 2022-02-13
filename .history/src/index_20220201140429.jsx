import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/css/main.css";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/404";
import Logement from "./components/pages/Logement";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Logement />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
