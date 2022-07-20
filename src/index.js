import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/login_page/Login.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
