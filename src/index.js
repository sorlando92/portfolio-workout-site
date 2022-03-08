import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Programming from './components/Programming.js';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Programming />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
