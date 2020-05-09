import React from 'react';
import Proptypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default withStyles(styles)(renderTextField);

renderTextField.propTypes = {
  label: Proptypes.string,
  input: Proptypes.object,
  meta: Proptypes.object
};
