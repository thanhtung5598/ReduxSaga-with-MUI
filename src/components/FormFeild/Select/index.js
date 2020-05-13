import React from 'react';
import Proptypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select
} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export default withStyles(styles)(renderSelectField);

renderSelectField.propTypes = {
  label: Proptypes.string,
  input: Proptypes.object,
  meta: Proptypes.object,
  children: Proptypes.array,
  classes: Proptypes.object
};
