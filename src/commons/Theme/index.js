import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  color: {
    primary: '#C2185B',
    secondary: '#03A9F4',
    error: '#E64A19'
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 4,
    backgroundColor: 'white',
    textColor: '#FFF',
    border: '#CCC'
  }
});

export default theme;
