import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "./index.css";
import App from './App';

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render( <BrowserRouter>
  <App />
</BrowserRouter>);
