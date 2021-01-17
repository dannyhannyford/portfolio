import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { theme } from './IconLabelButtons';
import applications from './Utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
    'object-position': '0 5%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box: {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    height: '46px',
  },
  actionArea: {
    '&:hover $focusHighlight': {
      opacity: 0.2,
      color: '#484545',
      borderRadius: '4px',
    },
  },
  focusHighlight: {},
}));

const newTab = (link) => {
  window.open(link, '_blank');
};

const Portfolio = () => {
  const classes = useStyles();

  return (
    <div id="portfolio" className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          <Box fontWeight="fontWeightBold" textAlign="center" color={theme.palette.secondary.main}>
            Portfolio
          </Box>
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Grid container justify="center" spacing={1}>
          {applications.map((app) => (
            <Grid key={app.title} item xs={3}>
              <CardActionArea
                classes={{
                  root: classes.actionArea,
                  focusHighlight: classes.focusHighlight,
                }}
                onClick={() => newTab(app.link)}
              >
                <Paper
                  className={classes.paper}
                >
                  <Typography gutterBottom>
                    <Box variant="h3" fontWeight="fontWeightBold" textAlign="center" color={theme.palette.secondary.main}>
                      {app.title}
                    </Box>
                  </Typography>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={app.pic}
                    title={app.title}
                  />
                  <Typography variant="body1">
                    <Box textAlign="center" color={theme.palette.secondary.main} className={classes.box}>
                      {app.description}
                    </Box>
                  </Typography>
                </Paper>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
