import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { HomePage, MyUpVotes } from "./components";
import { Redirect, Link, BrowserRouter, withRouter} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/homepage' component={HomePage}></Route>
                    <Route path='/myupvotes' component={MyUpVotes}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
    
}

export default App;