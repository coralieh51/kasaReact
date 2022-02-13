import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/css/main.css';
import Banner from './components/header/banner';
import Background from './components/header/background';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>,
  document.getElementById('root')
);