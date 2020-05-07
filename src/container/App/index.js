import React from 'react';
import TaskBoard from './../TaskBoard';
import theme from './../../commons/Theme';
import { withStyles, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import configStore from './../../redux/store/configStore';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles';

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <TaskBoard />
      </ThemeProvider>
    </Provider>
  );
};

export default withStyles(styles)(App);
