import React from 'react';
import { withStyles } from '@material-ui/core';
import Proptypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';
import styles from './styles';
import { bindActionCreators, compose } from 'redux';
import * as uiACtions from './../../actions/ui';
import { connect } from 'react-redux';
import cn from 'classnames';

const Dashboard = props => {
  const { classes, children, name, showSidebar, uiActionsCreators } = props;
  const handleToggleSidebar = value => {
    const { toggleSidebar } = uiActionsCreators;
    toggleSidebar(value);
  };
  return (
    <div className={classes.dashboard}>
      <Header
        name={name}
        showSidebar={showSidebar}
        onToggleSidebar={handleToggleSidebar}
      />
      <div className={classes.wrapper}>
        <SideBar showSidebar={showSidebar} />
        <div
          className={cn(classes.wrapperContent, {
            [classes.shiftLeft]: showSidebar === false
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showSidebar: state.ui.showSidebar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uiActionsCreators: bindActionCreators(uiACtions, dispatch)
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);

Dashboard.propTypes = {
  children: Proptypes.object,
  classes: Proptypes.object,
  name: Proptypes.string,
  showSidebar: Proptypes.bool,
  uiActionsCreators: Proptypes.shape({
    toggleSidebar: Proptypes.func
  })
};
