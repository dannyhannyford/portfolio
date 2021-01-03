import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
            </form>
          </Grid>
      </Container>
    </div>
  );
};

export default Contact;