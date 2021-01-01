import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container maxWidth="md">
        <Typography >
          <Box fontWeight="fontWeightBold" textAlign="left">
            Portfolio
          </Box>
        </Typography>
      </Container>
    </div>
  );
};

export default Portfolio;