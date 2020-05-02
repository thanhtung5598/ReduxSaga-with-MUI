import React, { useState } from 'react';
import PropTypes  from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';

import { STATUSES } from './../../constants';

const listTask = [
  {
    id: 1,
    title: 'read book',
    description: 'read material ui book',
    status: 0
  },
  {
    id: 2,
    title: 'Play footbal',
    description: 'Play it with my friends',
    status: 1
  },
  {
    id: 3,
    title: 'Play game',
    description: 'playgame alone',
    status: 2
  },
  {
    id: 4,
    title: 'read book',
    description: 'read react hook document',
    status: 0
  },
  {
    id: 5,
    title: 'read book',
    description: 'read eloquent JS book',
    status: 1
  },
  {
    id: 6,
    title: 'read book',
    description: 'read Redux document',
    status: 2
  }
];
const TaskBoard = props => {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2} >
        {
          STATUSES.map((status, index) => {
            const taskFilter = listTask.filter(task => task.status === status.status);
            return <TaskList key={index} tasks={taskFilter} status={status} />;
          })
        }
      </Grid>
    );
    return xhtml;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const renderModal = () => 
    <TaskForm open={open} handleClose={handleClose} />;

  return (
    <div className={classes.taskBoard} >
      <Button 
        variant='contained' 
        color='primary' 
        className={classes.button}
        onClick={handleClickOpen}
      >
        <AddIcon /> Add new task
      </Button>
      {renderBoard()}
      {renderModal()}
    </div>
  );
};

export default withStyles(styles)(TaskBoard);

TaskBoard.propTypes = {
  classes: PropTypes.object
};