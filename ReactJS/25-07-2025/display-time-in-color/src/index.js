import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let time = new Date().getHours();
let greeting;

if(time >= 1 && time <= 11) {
  greeting = <h1 style={{ color: 'blue' }}>Good Morning</h1>
}
else if(time >= 12 && time <= 16) {
  greeting = <h1 style={{ color: 'orange' }}>Good Afternoon</h1>
}
else if(time >= 17 && time <= 20) {
  greeting = <h1 style={{ color: 'red' }}>Good Evening</h1>
}
else {
  greeting = <h1 style={{ color: 'black' }}>Good Night</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  {greeting}
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
