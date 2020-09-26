import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/private/Home';
import Error404 from '../pages/public/404';
import Login from '../pages/public/SignIn';

import { PrivateRoute } from './private';
import { PublicRoute } from './public';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/login" component={() => <Login />} />

      <PublicRoute exact path="/signup" component={() => <h1>SignUp</h1>} />

      <PrivateRoute exact path="/" component={() => <Home />} />

      <PublicRoute path="*" component={() => <Error404 />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
