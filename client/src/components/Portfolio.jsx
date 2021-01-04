import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import applications from './Utils';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './IconLabelButtons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div id="portfolio" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          <Box fontWeight="fontWeightBold" textAlign="center" color={theme.palette.secondary.main}>
            Portfolio
          </Box>
        </Typography>
        <Grid container justify="center" spacing={1}>
          {applications.map((app) => (
            <Grid key={app.title} item xs={3}>
              <Paper className={classes.paper}>
                <Box variant="h3" fontWeight="fontWeightBold" textAlign="center">
                  {app.title}
                </Box>
                <Box variant="body1" textAlign="center">
                  {app.description}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* put project link pic */}
      </Container>
    </div>
  );
};

export default Portfolio;