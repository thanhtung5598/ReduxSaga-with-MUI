const styles = theme => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 99,
    height: '100%',
    position: 'relative'
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.defaultTextColor
  },
  menuActiveClass: {
    '&>div': {
      backgroundColor: theme.color.hover
    }
  }
});
export default styles;
