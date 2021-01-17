import React, { useState, createRef } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ReCAPTCHA from 'react-google-recaptcha';
import { theme } from './IconLabelButtons';
import { captchaSiteKey } from '../../../config';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  label: {
    background: '#484545',
    paddingRight: theme.spacing(0.5),
    '&.Mui-focused': {
      color: '#ebae97',
    },
  },
  textField: {
    color: '#FFFFFF',
  },
}));

const useOutlineStyle = makeStyles({
  root: {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ebae97',
    },
  },
});

const theme1 = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: '#6b615f',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#ebae97',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: '#ebae97',
          },
        },
      },
      focused: {},
      notchedOutline: {},
    },
  },
});

const Contact = () => {
  const classes = useStyles();
  const outlineStyle = useOutlineStyle();
  const recaptchaRef = createRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === 'Name') {
      setName(e.target.value);
    }
    if (e.target.id === 'Email') {
      setEmail(e.target.value);
    }
    if (e.target.id === 'Message') {
      setMessage(e.target.value);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onChange = (value) => {
    console.log('captcha complete');
    console.log('onchange value', value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    recaptchaRef.current.execute();
    console.log('recaptcha val', recaptchaValue);
    axios.post('/email', {
      name,
      email,
      message,
      recaptchaValue,
    })
      .then(() => {
        setOpen(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="black"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div id="contact">
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h3" gutterBottom>
            <Box color="white" fontWeight="fontWeightBold">
              Contact
            </Box>
          </Typography>
          <form id="form" className={classes.root}>
            <Grid item>
              <FormControl size="medium" fullWidth variant="outlined">
                <ReCAPTCHA
                  sitekey={captchaSiteKey}
                  size="invisible"
                  ref={recaptchaRef}
                  onChange={onChange}
                />
                <InputLabel
                  className={classes.label}
                  htmlFor="Name"
                >
                  Name
                </InputLabel>
                <MuiThemeProvider theme={theme1}>
                  <OutlinedInput
                    classes={outlineStyle}
                    className={classes.textField}
                    fullWidth
                    id="Name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                  />
                </MuiThemeProvider>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  className={classes.label}
                  htmlFor="Email"
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  classes={outlineStyle}
                  className={classes.textField}
                  fullWidth
                  id="Email"
                  value={email}
                  onChange={handleChange}
                  label="Email"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  className={classes.label}
                  htmlFor="Message"
                >
                  Message
                </InputLabel>
                <OutlinedInput
                  classes={outlineStyle}
                  className={classes.textField}
                  fullWidth
                  id="Message"
                  multiline
                  rows={6}
                  value={message}
                  onChange={handleChange}
                  label="Message"
                />
              </FormControl>
            </Grid>
            <Grid
              container
              justify="flex-end"
              allignItems="center"
            >
              <ThemeProvider theme={theme}>
                <Button
                  onClick={(e) => handleSubmit(e)}
                  variant="outlined"
                  className={classes.button}
                  style={theme.palette.send}
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </ThemeProvider>
            </Grid>
          </form>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          color={theme.palette.snack}
          onClose={handleClose}
        >
          <SnackbarContent
            style={{
              backgroundColor: '#fff5ee',
              color: '#484545',
            }}
            message="Message sent successfully. Thanks!"
            action={action}
          />
        </Snackbar>
      </Container>
    </div>
  );
};

export default Contact;
