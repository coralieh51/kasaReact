import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/style/css/main.css";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/404";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>        </Route>

        <Route path="/error" element={<ErrorPage/>}>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
