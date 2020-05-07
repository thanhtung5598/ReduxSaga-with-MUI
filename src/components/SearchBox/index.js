import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import { TextField } from '@material-ui/core';

const SearchBox = props => {
  const { classes, handleChange } = props;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        placeholder="search..."
        className={classes.textFeild}
        margin="normal"
        onChange={handleChange}
      />
    </form>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func
};

export default withStyles(styles)(SearchBox);
