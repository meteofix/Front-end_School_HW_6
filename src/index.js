import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const renderReactDom = () => {
  ReactDOM.render(<App />,  document.querySelector('#root'));
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}