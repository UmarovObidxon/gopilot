import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Nav from './components/nav';
import reportWebVitals from './reportWebVitals';
import { obj } from './api/user';
import Nav from './components/nav';
import Main123 from './components/footer/main123';
import Router from './router/router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav data={obj}/>
<Router/>
<Main123 data={obj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
