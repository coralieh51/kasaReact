import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/css/main.css";
import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Housing from "./components/pages/Housing";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement/:id" element={<Housing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  rootElement
);
