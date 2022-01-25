import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Article from './Components/Article';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="article/:article_id" element={ <Article /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);