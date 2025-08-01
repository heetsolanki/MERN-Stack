import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WelcomeMessage from './WelcomeMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <WelcomeMessage />
    </>
);

