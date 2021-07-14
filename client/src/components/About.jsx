import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    color: "#484545",
  },
}));

const PinkTypography = withStyles({
  root: {
    color: "#ee4a7f",
  },
})(Typography);

const About = () => {
  const classes = useStyles();
  return (
    <div id="about" className="about">
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid alignItems="center" container spacing={3}>
            <Grid justify="flex-start" sm={2}>
              <img
                alt="flamingo"
                src="https://portfoliodan.s3-us-west-2.amazonaws.com/flamingo.png"
              />
            </Grid>
            <Grid item justify="center" sm={8}>
              <PinkTypography variant="h3" gutterBottom>
                <Box fontWeight="fontWeightBold" textAlign="center">
                  About
                </Box>
              </PinkTypography>
              <Typography variant="body1" gutterBottom>
                <Box textAlign="left" className={classes.box}>
                  I am currently enrolled in Vizio's Cloud Platform Engineer
                  internship. I'm working with the Mapping & Management team
                  (M&M's) to ensure Vizio cloud services are properly integrated
                  with customer's TV's. After my internship(June 21st - August
                  30th) I'm looking for a team with good mentorship that will
                  push me towards new horizons.
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
