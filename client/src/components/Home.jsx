import React from 'react';
import { Container } from '@material-ui/core';
import IconLabelButtons from './IconLabelButtons';
import '../style.css';

// TODO how to keep my box within the background

const Home = () => {
  return (
    <div className="home">
      <Container maxWidth="md">
          <div className="homebox pad">
            <div className="homecover">
              <div className="hometxt">
                <h1>danny</h1>
                <h3>Software Engineer. I work with beeps and boops.</h3>
                <h3>Looking for a team that will push me towards new horizons.</h3>
              </div>
            </div>
          </div>
          <IconLabelButtons /> 
      </Container>
    </div>
  );
};

export default Home;