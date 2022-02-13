import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/style/css/main.css";
import Home from "./components/pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/about" element={<Ab/>}>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);