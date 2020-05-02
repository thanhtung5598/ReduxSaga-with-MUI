import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const TaskForm = props => {
  const { open, handleClose } = props;
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add new work</DialogTitle>
      <DialogContent>
        <form autoComplete="off">
          <FormControl fullWidth>
            <TextField id="standard-basic" label="Title" />
          </FormControl>
          <FormControl fullWidth>
            <TextField id="standard-basic" rows={4} multiline label="Description" />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        <Button onClick={handleClose} color="primary">
          OK
          </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(TaskForm);

TaskForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
};
