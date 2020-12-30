import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#24292e'
    },
  },
});

const IconLabelButtons = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<LinkedInIcon />}
      >
        LinkedIn
      </Button>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </ThemeProvider>
      
    </div>
  );
};

export default IconLabelButtons;
