import React from 'react';
import { withStyles, Drawer, List, ListItem } from '@material-ui/core';
import Proptypes from 'prop-types';
import { ADMIN_ROUTES } from './../../../constants';
import styles from './styles';
import { NavLink } from 'react-router-dom';

const SideBar = props => {
  const { classes, showSidebar } = props;
  const list = ADMIN_ROUTES => {
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="nav">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuActiveClass}
              >
                <ListItem className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };
  return (
    <Drawer
      variant="persistent"
      open={showSidebar}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      {list(ADMIN_ROUTES)}
    </Drawer>
  );
};
export default withStyles(styles)(SideBar);

SideBar.propTypes = {
  classes: Proptypes.object,
  showSidebar: Proptypes.bool
};
