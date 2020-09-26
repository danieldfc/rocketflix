import React from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import DefaultLayout from '../../pages/_layouts/default';

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

PublicRoute.propTypes = {
  component: PropTypes.oneOf([PropTypes.func, PropTypes.element]).isRequired,
};
