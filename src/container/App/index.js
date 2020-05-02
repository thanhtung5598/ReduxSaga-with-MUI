import React from 'react';
import styles from './styles';
import TaskBoard from './../TaskBoard';
import theme from './../../commons/Theme';
import { withStyles, ThemeProvider } from '@material-ui/core';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);
