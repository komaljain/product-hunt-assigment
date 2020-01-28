import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, MyUpVotes } from "./components";
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/index.html' component={HomePage}></Route>
                    <Route path='/homepage' component={HomePage}></Route>
                    <Route path='/myupvotes' component={MyUpVotes}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
    
}

export default App;