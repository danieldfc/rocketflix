import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Login from '../pages/SignIn';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Login} />

    <Route path="/signup" component={<h1>SignUp</h1>} />

    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
