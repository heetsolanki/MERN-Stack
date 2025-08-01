import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <h1>List of TY subjects</h1>
  <ol>
    <li>MERN Stack</li>
    <li>Cloud Computing</li>
    <li>Python for Data Science</li>
    <li>Artificial Intelligence & Machine Learning</li>
    <li>Minor in Cyber Security</li>
  </ol>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
