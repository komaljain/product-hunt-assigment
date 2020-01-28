import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, MyUpVotes } from "./components";
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/homepage' component={HomePage}></Route>
                    <Route exact path='/myupvotes' component={MyUpVotes}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
    
}

export default App;