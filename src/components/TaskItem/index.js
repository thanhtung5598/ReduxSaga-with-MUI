import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import styles from './styles';

const TaskItem = props => {
  const { task, status, classes } = props;
  const { id, title, description } = task;
  return (
    <Box mb={1}>
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab size="small" color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
        </CardActions>
      </Card>
    </Box>
  );
};

export default withStyles(styles)(TaskItem);