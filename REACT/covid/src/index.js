import React from 'react';
import ReactDOM from 'react-dom/client';
import Covid from './component/Covid';
import Form from './component/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Covid/>
    <Form/>
  </React.StrictMode>
);

