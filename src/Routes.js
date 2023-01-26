import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function Routes() {
return (
    <Switch>
<Route exact path="/"> <Home /> </Route>
<Route path="/login"> <Login /> </Route>
<Route path="/signup"> <Signup /> </Route>
<Route path="/Dashboard"> <Dashboard /> </Route>
</Switch>
);}

export default Routes;