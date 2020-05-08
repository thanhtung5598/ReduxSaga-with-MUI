const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: '#FFF',
    width: 500
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.typography.textColor,
    width: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    cursor: 'pointer',
    fontSize: 30
  },
  title: {
    fontSize: 20
  },
  content: {
    width: '100%',
    padding: theme.spacing(4)
  }
});

export default styles;
