import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Dashboard from '../../../components/Dashboard';
import PropTypes from 'prop-types';

const AdminLayoutRoute = props => {
  const { component: YourComponent, ...remainProps } = props; // get name and remain props
  return (
    <Route
      {...remainProps} // path exact
      render={routeProps => {
        return (
          <Dashboard {...remainProps}>
            <YourComponent {...routeProps} />
          </Dashboard>
        );
      }}
    />
  ); // custom hiển thị đối từng cái route
};
export default withStyles(styles)(AdminLayoutRoute);

AdminLayoutRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
