import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from '../../src/registerServiceWorker';
import App from "./App";


ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker();