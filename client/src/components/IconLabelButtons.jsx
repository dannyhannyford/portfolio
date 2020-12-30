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
      main: '#444444'
    },
  },
});

const IconLabelButtons = () => {
  const classes = useStyles();
  return (
    <div className="homebox">
      <Button
        href="https://www.linkedin.com/in/dannyhanford"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<LinkedInIcon />}
      >
        LinkedIn
      </Button>
      <ThemeProvider theme={theme}>
        <Button
          href="https://github.com/dannyhannyford"
          target="_blank"
          rel="noopener noreferrer"
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
