import React, { useState } from 'react';
import {
  withStyles,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import Proptypes from 'prop-types';
import { ADMIN_ROUTES } from './../../../constants';
import styles from './styles';

const SideBar = props => {
  const { classes } = props;
  const [state, setState] = useState(true);
  const toggleDrawer = value => {
    setState(value);
  };
  const list = ADMIN_ROUTES => {
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="nav">
          {ADMIN_ROUTES.map((item, index) => {
            return (
              <ListItem key={index} className={classes.menuItem} button>
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };
  return (
    <Drawer
      open={state}
      onClose={() => toggleDrawer(false)}
      variant="permanent"
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
  classes: Proptypes.object
};
