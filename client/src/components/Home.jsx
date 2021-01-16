import React from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import '../style.css';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconLabelButtons from './IconLabelButtons';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Pacifico',
      'cursive',
    ].join(','),
  },
});

const useStyles = makeStyles(() => ({
  paper: {
    color: '#484545',
    backgroundColor: '#ebae97',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div id="home" className="home">
      <Container maxWidth="sm">
        <Paper
          className={classes.paper}
          color="#ebae97"
        >
          <ThemeProvider theme={theme}>
            <Typography gutterBottom>
              <Box>
                <h1>Danny</h1>
              </Box>
            </Typography>
            <Typography gutterBottom>
              <Box>
                <h3>Full-Stack Software Engineer. I work with beeps and boops.</h3>
              </Box>
            </Typography>
          </ThemeProvider>
        </Paper>
        <IconLabelButtons />
      </Container>
    </div>
  );
};

export default Home;
