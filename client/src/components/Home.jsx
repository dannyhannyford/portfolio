import React from 'react';
import { Container } from '@material-ui/core';
import IconLabelButtons from './IconLabelButtons';
import Box from '@material-ui/core/Box';
import '../style.css';

// TODO how to keep my box within the background

const Home = () => {
  return (
    <Box height="100%">
      <div id="home" className="home">
        <Container maxWidth="md">
            <div className="homebox pad">
              <div className="homecover">
                <div className="hometxt">
                  <h1>danny</h1>
                  <h3>Full-Stack Software Engineer. I work with beeps and boops.</h3>
                </div>
              </div>
            </div>
            <IconLabelButtons /> 
        </Container>
      </div>
    </Box>
  );
};

export default Home;