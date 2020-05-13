import React from 'react';
import { withStyles } from '@material-ui/core';
import Proptypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import styles from './styles';

const Dashboard = props => {
  const { classes, children, name } = props;
  return (
    <div className={classes.dashboard}>
      <Header name={name} />
      <div className={classes.wrapper}>
        <SideBar />
        <div className={classes.wrapperContent}>{children}</div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Dashboard);

Dashboard.propTypes = {
  children: Proptypes.object,
  classes: Proptypes.object,
  name: Proptypes.string
};
