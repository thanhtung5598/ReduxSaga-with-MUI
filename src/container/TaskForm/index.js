import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import renderTextField from './../../components/FormFeild/TextFeild';
import styles from './styles';
import validate from './validate';

const TaskForm = props => {
  const { classes, modalActions, invalid } = props;
  const { hideModal } = modalActions;
  const { handleSubmit } = props;

  const handleSubmitForm = data => {
    const { addTaskRequrest } = props.taskActions;
    const { title, description } = data;
    addTaskRequrest({ title, description });
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
      <Grid item md={12}>
        <Field
          name="title"
          id="standard-basic"
          placeholder="Title"
          label="Title"
          className={classes.textField}
          component={renderTextField}
        />
      </Grid>
      <Grid item md={12}>
        <Field
          name="description"
          id="standard-basic"
          rows={4}
          multiline
          placeholder="description"
          label="Description"
          className={classes.textField}
          component={renderTextField}
        />
      </Grid>
      <Grid item md={12}>
        <Box display="flex" mt={2} justifyContent="flex-end">
          <Box mr={1}>
            <Button
              variant="contained"
              disabled={invalid}
              type="submit"
              color="primary"
            >
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
    modalActions: bindActionCreators(modalActions, dispatch),
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};

const form_Name = 'Task_Management';

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({
  form: form_Name,
  validate
});

export default compose(
  withReduxForm,
  withStyles(styles),
  withConnect
)(TaskForm);

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func
  }),
  taskActions: PropTypes.shape({
    addTaskRequrest: PropTypes.func
  }),
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func
};
