import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./assets/style/css/main.css";
import Banner from "./components/header/banner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = "/">
          <Home />
        </Route>
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
