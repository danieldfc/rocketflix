import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />

    <Route path="/signup" component={SignUp} />

    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
