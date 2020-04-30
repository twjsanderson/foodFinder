import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Home from './pages/home';
import About from './pages/about';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Redirect path="*" to="/" />
    </Switch>
)