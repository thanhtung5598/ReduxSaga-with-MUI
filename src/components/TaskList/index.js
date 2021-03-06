import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import TaskItem from './../../components/TaskItem';

const TaskList = props => {
  const { tasks, status, classes, onClickEdit, onClickDelete } = props;
  return (
    <Grid key={status.value} item md={4} xs={12}>
      <Box mt={1} mb={1}>
        <div className={classes.status}>{status.label}</div>
      </Box>
      <div className={classes.wrapperListTask}>
        {tasks.map(task => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              status={status}
              onClickEdit={() => onClickEdit(task)}
              onClickDelete={() => onClickDelete(task.id)}
            />
          );
        })}
      </div>
    </Grid>
  );
};
export default withStyles(styles)(TaskList);

TaskList.propTypes = {
  tasks: PropTypes.array,
  status: PropTypes.object,
  classes: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
};
