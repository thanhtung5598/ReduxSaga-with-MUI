import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import { connect } from 'react-redux';
import * as taskActions from './../../actions/task';
import { bindActionCreators } from 'redux';
import SearchBox from './../../components/SearchBox';

import { STATUSES } from './../../constants';

const TaskBoard = props => {
  const { classes, listTask } = props;
  const [open, setOpen] = useState(false);

  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFilter = listTask.filter(
            task => task.status === status.status
          );
          return <TaskList key={index} tasks={taskFilter} status={status} />;
        })}
      </Grid>
    );
    return xhtml;
  };

  useEffect(() => {
    const { fetchListTaskRequrest } = props.taskActionsCreators;
    fetchListTaskRequrest();
  }, [props.taskActionsCreators]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderModal = () => <TaskForm open={open} handleClose={handleClose} />;

  const onHandleChange = e => {
    console.log(e);
  };

  const renderSearchBox = () => {
    return <SearchBox handleChange={onHandleChange} />;
  };

  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
      >
        <AddIcon /> Add new task
      </Button>
      {renderSearchBox()}
      {renderBoard()}
      {renderModal()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listTask: state.tasks.listTasks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionsCreators: bindActionCreators(taskActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreators: PropTypes.shape({
    fetchListTaskRequrest: PropTypes.func
  }),
  listTask: PropTypes.array
};
