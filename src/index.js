import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


//React 18 createRoot API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// ReactDOM.render(
// <React.StrictMode>
// <App />
// </React.StrictMode>
// , container);

root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);
