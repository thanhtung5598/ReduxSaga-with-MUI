import React from 'react';
import styles from './styles';
import TaskBoard from './../TaskBoard';
import theme from './../../commons/Theme';
import { withStyles, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import configStore from './../../redux/store/configStore';

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    </Provider>
  );
};

export default withStyles(styles)(App);
