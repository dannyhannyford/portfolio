import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Box } from '@material-ui/core';
import { MemoryRouter as Router } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import { theme as theme2 } from './IconLabelButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#home');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#ebae97',
    },
    title: {
      color: '#484545',
    },
  },
});

const Nav = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HideOnScroll {...props}>
          <AppBar
          color="secondary"
          >
            <Toolbar>
              <ThemeProvider theme={theme2}>
              <IconButton
              edge="start"
              color="secondary"
              >  
                <BrightnessHighIcon />
              </IconButton>
              </ThemeProvider>
              <Typography variant="h6">
                <Box color={theme.palette.title.color}>
                  dannyhanny
                </Box>
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                >
                <Router>
                  <Button
                    component={Link}
                    smooth to="#home"
                    color="secondary"
                  >
                    Home
                  </Button>
                
                  <Button
                  component={Link}
                  color="secondary"
                  smooth to="#about"
                  >
                    About
                  </Button>
                  <Button
                  component={Link}
                  color="secondary"
                  smooth to="#portfolio"
                  >
                    Portfolio
                  </Button>
                  <Button
                  component={Link}
                  color="secondary"
                  smooth to="#contact"
                  >
                    Contact
                  </Button>
                </Router>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
};

export default Nav;
