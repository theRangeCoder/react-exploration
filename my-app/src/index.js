import React from 'react'; // React class from the 'react' package
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App function from App.js
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // render the App.js component in the element which has the id='root'
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
