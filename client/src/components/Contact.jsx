import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { theme } from './IconLabelButtons';
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'Name') {
      setName(e.target.value);
    }
    if (e.target.id === 'Email') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'Message') {
      setMessage(e.target.value)
    }
  }

  return (
    <div id="contact">
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          >
            <Typography variant="h3">
              <Box fontWeight="fontWeightBold" color="white">
                Contact
              </Box>
            </Typography>
            <form id="form" className={classes.root}>
              <Grid item>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="Name">Name</InputLabel>
                <OutlinedInput
                fullWidth 
                id="Name"
                value={name}
                onChange={handleChange}
                label="Name" />
              </FormControl>
              </Grid>
              <Grid item>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="Email">Email</InputLabel>
                <OutlinedInput
                fullWidth 
                id="Email"
                value={email}
                onChange={handleChange}
                label="Email" />
              </FormControl>
              </Grid>
              <Grid item>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="Message">Message</InputLabel>
                <OutlinedInput
                fullWidth 
                id="Message"
                multiline
                rows={6}
                value={message}
                onChange={handleChange}
                label="Message" />
              </FormControl>
              </Grid>
              <Grid container
              justify="flex-end"
              allignItems="center"
              >
              <ThemeProvider theme={theme}> 
                <Button
                  variant="outlined"
                  className={classes.button}
                  style={theme.palette.send}
                  endIcon={<SendIcon/>}
                >
                  Submit
                </Button>
              </ThemeProvider>
              </Grid>
            </form>
          </Grid>
      </Container>
    </div>
  );
};

export default Contact;