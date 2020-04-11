import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "~/services/auth";

import AuthLayout from "~/pages/_layouts/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
