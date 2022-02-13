import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/css/main.css";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Logement from "./components/housing-content/Logement";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement/:id" element={<Logement />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  rootElement
);
