import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import { TokenProvider } from './context/TokenContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TokenProvider>
      <App />
    </TokenProvider>
  </BrowserRouter>
);

