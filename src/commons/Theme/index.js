import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  color: {
    primary: '#3f51b5',
    secondary: '#03A9F4',
    error: '#E64A19',
    defaultTextColor: '#000',
    hover: 'rgba(0, 0, 0, 0.04)'
  },
  typography: {
    fontFamily: 'Roboto',
    textColor: '#FFF'
  },
  shape: {
    borderRadius: 4,
    backgroundColor: 'white',
    textColor: '#FFF',
    border: '#CCC'
  }
});

export default theme;
