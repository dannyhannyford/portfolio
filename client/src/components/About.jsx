import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import '../style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#fff5ee',
    color: theme.palette.text.secondary,
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container id="about" maxWidth="md">
      <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <Paper className={classes.paper}>
                <h2>About me</h2>
                <h3></h3>
              </Paper>
            </Grid>
            <Grid item sm={2}>
              <Paper className={classes.paper}>
                <img src="https://portfoliodan.s3-us-west-2.amazonaws.com/flamingo.png"></img>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
  )
}

export default About;