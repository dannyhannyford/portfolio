import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../style.css';
import { theme } from './IconLabelButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const PinkTypography = withStyles({
  root: {
    color: '#ee4a7f',
  },
})(Typography);

const About = () => {
  const classes = useStyles();
  return (
    <div id="about" className="about">
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid
            justify="center"
            alignItems="center"
            container
            spacing={3}
          >
            <Grid item sm={2}>
              <img alt="flamingo" src="https://portfoliodan.s3-us-west-2.amazonaws.com/flamingo.png" />
            </Grid>
            <Grid item sm={7}>
              <PinkTypography variant="h3" gutterBottom>
                <Box fontWeight="fontWeightBold" textAlign="center">
                  About
                </Box>
              </PinkTypography>
              <Typography variant="body1" gutterBottom>
                <Box textAlign="left" color={theme.palette.secondary.main}>
                  This past year I taught myself Python creating
                  a Discord Bot plugin for my friends.
                  I picked up Javascript to attend and complete
                  the Software Engineering bootcamp Hack Reactor.
                  I'm currently working on an application to
                  track and teach dance moves with Tensorflow.js called Tensor Tango.
                  Looking for a team with good mentorship that will push me towards new horizons.
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
