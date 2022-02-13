import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/css/main.css";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Error from "./components/pages/Error";
import Logement from "./components/details/Logement";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
      <Route path='*' element={<NotFound />} />
              <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Logement />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);