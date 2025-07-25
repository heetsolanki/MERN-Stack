import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let height = 10;
let width = 5;

let area = height * width;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <center>
    <h1>Area of Rectangle</h1>
    <p>Height: {height}</p>
    <p>Width: {width}</p>
    <p>Area: {area}</p>
  </center>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
