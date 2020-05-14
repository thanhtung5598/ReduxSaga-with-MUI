const styles = theme => ({
  wrapper: {
    paddingTop: 15,
    display: 'flex',
    height: '100vh'
  },
  wrapperContent: {
    width: '100%',
    paddingLeft: 10,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  shiftLeft: {
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});
export default styles;
