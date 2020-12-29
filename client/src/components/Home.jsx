import React from 'react';
import { Container } from '@material-ui/core';
import '../style.css';

const Home = () => {
  return (
    <div className="home">
      <Container maxWidth="md">
          <div className="homebox">
            <div className="homecover">
              <div className="hometxt">
                <h1>danny</h1>
                <h3>Software Engineer.</h3>
              </div>
            </div>
          </div>    
      </Container>
    </div>
  );
};

export default Home;