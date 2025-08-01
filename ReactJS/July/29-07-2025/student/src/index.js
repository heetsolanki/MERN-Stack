import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <h3>Stuent 1: </h3>
  <App name = 'Liam' rollNo = '68' mern = '85' aiml = '78' />
  <h3>Stuent 2: </h3>
  <App name = 'Vidyut' rollNo = '57' mern = '45' aiml = '68' />
  <h3>Stuent 3: </h3>
  <App name = 'Rooh' rollNo = '76' mern = '97' aiml = '95' />
</>
);