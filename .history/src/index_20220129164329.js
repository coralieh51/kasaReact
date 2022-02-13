import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/style/css/main.css";
import Header from "../src/routes/index";
import Banner from "../"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/">
          <Banner />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
