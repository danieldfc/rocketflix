import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import AuthLayout from '../../pages/_layouts/auth';
import { isAuthenticated } from '../../services/auth';

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
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOf([PropTypes.func, PropTypes.element]).isRequired,
};
