import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Contact = () => {
  return (
    <div id="contact">
      <Container maxWidth="md">
        <Typography >
          <Box fontWeight="fontWeightBold" textAlign="left">
            Contact
          </Box>
        </Typography>
      </Container>
    </div>
  );
};

export default Contact;