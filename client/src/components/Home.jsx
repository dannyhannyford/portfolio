import React from 'react';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import '../style.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconLabelButtons from './IconLabelButtons';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Pacifico',
      'cursive',
    ].join(','),
  },
});

const Home = () => (
  <Box height="100%">
    <div id="home" className="home">
      <Container maxWidth="md">
        <div className="homebox pad">
          <div className="homecover">
            <div className="hometxt">
              <ThemeProvider theme={theme}>
                <Typography gutterBottom>
                  <Box>
                    <h1>Danny</h1>
                  </Box>
                </Typography>
              </ThemeProvider>
              <h3>Full-Stack Software Engineer. I work with beeps and boops.</h3>
            </div>
          </div>
        </div>
        <IconLabelButtons />
      </Container>
    </div>
  </Box>
);

export default Home;
