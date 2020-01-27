import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { HomePage } from "./components";
import { browserHistory } from "./utils/History";

function App() {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={HomePage}></Route>
        </Router>
    );
}

export default App;