import React from 'react';
import theme from './../../commons/Theme';
import { withStyles, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import configStore from './../../redux/store/configStore';
import { ToastContainer } from 'react-toastify';
import GlobalLoading from './../../components/GlobalLoading';
import Modal from './../../components/Modal';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute';
import { ADMIN_ROUTES } from './../../constants/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles';

const store = configStore();

const App = () => {
  const renderAdminRoute = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
          name={route.name}
        />
      );
    });
    return xhtml;
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <GlobalLoading />
          <Modal />
          <Switch>{renderAdminRoute()}</Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default withStyles(styles)(App);
