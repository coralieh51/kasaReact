import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/css/main.css';
import Banner from './components/header/banner';
import Logo from "../../assets/img/background"


ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <{Logo}/>
  </React.StrictMode>,
  document.getElementById('root')
);