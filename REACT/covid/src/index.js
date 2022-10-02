import React from 'react';
import ReactDOM from 'react-dom/client';
import Covid from './component/Covid';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Covid/>
  </React.StrictMode>
);

