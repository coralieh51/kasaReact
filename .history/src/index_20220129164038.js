import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/style/css/main.css";
import Header from "../src/routes/index";
import Banner from "./components/header/banner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <Header />
        <Banner/>
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
