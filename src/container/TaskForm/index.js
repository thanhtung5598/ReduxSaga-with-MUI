import { Box, withStyles, MenuItem } from '@material-ui/core';
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
import renderSelectField from './../../components/FormFeild/Select';
import styles from './styles';
import validate from './validate';

const TaskForm = props => {
  const { classes, modalActions, invalid } = props;
  const { hideModal } = modalActions;
  const { handleSubmit } = props;

  const handleSubmitForm = data => {
    const { taskEditting } = props;
    const { addTaskRequrest, updateTaskRequrest } = props.taskActions;
    const { title, description, status } = data;
    if (taskEditting && taskEditting.id) {
      updateTaskRequrest({ title, description, status });
    } else {
      addTaskRequrest({ title, description });
    }
  };
  const renderTaskSelection = () => {
    let xhtml = null;
    const { taskEditting } = props;
    if (taskEditting && taskEditting.id) {
      xhtml = (
        <Field
          classes={classes.select}
          name="status"
          component={renderSelectField}
          label="Trạng thái"
        >
          <MenuItem value={0}>Ready</MenuItem>
          <MenuItem value={1}>In Progress</MenuItem>
          <MenuItem value={2}>Complete</MenuItem>
        </Field>
      );
    }
    return xhtml;
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
      {renderTaskSelection()}
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

const mapStateToProps = state => {
  return {
    taskEditting: state.tasks.taskEditting,
    initialValues: state.tasks.taskEditting
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};

const FORM_NAME = 'TASK_MANAGEMENT';

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func
  }),
  taskActions: PropTypes.shape({
    addTaskRequrest: PropTypes.func,
    updateTaskRequrest: PropTypes.func
  }),
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
  taskEditting: PropTypes.object
};
