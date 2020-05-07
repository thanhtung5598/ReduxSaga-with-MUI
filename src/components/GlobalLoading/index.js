import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import loading from './../../assets/img/loading.gif';
import PropTypes from 'prop-types';
import styles from './styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

const GlobalLoading = props => {
  const { classes, showLoading } = props;
  const renderComps = showLoading => {
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img className={classes.icon} src={loading} alt="loading..." />
        </div>
      );
    }
    return xhtml;
  };
  return renderComps(showLoading);
};

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
