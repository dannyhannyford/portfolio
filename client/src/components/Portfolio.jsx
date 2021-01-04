import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom>
          <Box fontWeight="fontWeightBold" textAlign="center">
            Portfolio
          </Box>
        </Typography>
      </Container>
    </div>
  );
};

export default Portfolio;