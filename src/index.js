import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from '../registerServiceWorker';
import HomePage from "./HomePage";

ReactDOM.render(<HomePage /> , document.getElementById('root'));
registerServiceWorker();