import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Login from "../pages/public/SignIn";
import { PrivateRoute } from "./private";
import { PublicRoute } from "./public";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/login" component={() => <Login />} />

      <PublicRoute exact path="/signup" component={() => <h1>SignUp</h1>} />

      <PrivateRoute exact path="/" component={() => <div>HomePage</div>} />

      <PublicRoute path="*" component={<p>Error 404 Page not Found</p>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
