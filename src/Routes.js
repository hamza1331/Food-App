import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Admin from "./components/Admin";
import Home from "./components/Home";
import Info from "./components/Info";
import history from './History'
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/info' component={Info} />
                    <Route exact path='/admin' component={Admin} />
                </div>
            </Router>
        )
    }
}

export default Routers;