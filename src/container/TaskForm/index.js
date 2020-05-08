import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles, Box } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as modalActions from './../../actions/modal';
import { bindActionCreators } from 'redux';
import styles from './styles';

const TaskForm = props => {
  const { classes, modalActions } = props;
  const { hideModal } = modalActions;
  return (
    <form autoComplete="off">
      <Grid item md={12}>
        <TextField
          className={classes.textField}
          id="standard-basic"
          label="Title"
          placeholder="Title"
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          className={classes.textField}
          id="standard-basic"
          rows={4}
          multiline
          placeholder="description"
          label="Description"
        />
      </Grid>
      <Grid item md={12}>
        <Box display="flex" mt={2} justifyContent="flex-end">
          <Box mr={1}>
            <Button variant="contained" color="primary">
              Lưu Lại
            </Button>
          </Box>
          <Button variant="contained" onClick={hideModal}>
            Hủy bỏ
          </Button>
        </Box>
      </Grid>
    </form>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func
  })
};
