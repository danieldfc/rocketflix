import React from "react";
import { Route } from "react-router-dom";

import DefaultLayout from "~/pages/_layouts/default";

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);
