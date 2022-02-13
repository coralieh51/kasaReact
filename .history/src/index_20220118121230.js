import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/css/main.css';
import Banner from './components/header/banner';
import logo from "../../assets/img/background"


ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <logo/>
  </React.StrictMode>,
  document.getElementById('root')
);