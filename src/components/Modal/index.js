import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, Modal } from '@material-ui/core';
import * as modalActions from './../../actions/modal';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';

const ModalClass = props => {
  const { classes, component, showModal, title, modalActions } = props;
  const { hideModal } = modalActions;
  return (
    <Modal open={showModal} onClose={hideModal} className={classes.modal}>
      <Grid container className={classes.paper}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <CloseIcon onClick={hideModal} className={classes.icon} />
        </div>
        <div className={classes.content}>{component}</div>
      </Grid>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    showModal: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(ModalClass);

ModalClass.propTypes = {
  classes: PropTypes.object,
  component: PropTypes.object,
  showModal: PropTypes.bool,
  title: PropTypes.string,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func
  })
};
