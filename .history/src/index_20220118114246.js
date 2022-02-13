import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/css/main.css';
import Banner from './components/header/banner';

ReactDOM.render(
  <React.StrictMode>
    <Banner className='h1' />
  </React.StrictMode>,
  document.getElementById('root')
);
