import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import { MemoryRouter as Router } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#faaa8f'
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
              <IconButton
              edge="start"
              color="inherit"
              >  
                <BrightnessHighIcon />
              </IconButton>
              <Typography variant="h6">
                dannyhanny
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
                    color="inherit"
                  >
                    Home
                  </Button>
                
                  <Button
                  component={Link}
                  smooth to="#about"
                  color="inherit"
                  >
                    About
                  </Button>
                  <Button
                  component={Link}
                  smooth to="#portfolio"
                  color="inherit"
                  >
                    Portfolio
                  </Button>
                  <Button
                  component={Link}
                  smooth to="#contact"
                  color="inherit"
                  >
                    Contact
                  </Button>
                </Router>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>
    </>
  );
};

export default Nav;