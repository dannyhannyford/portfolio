import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4591a1',
    },
    secondary: {
      main: '#484545',
    },
    accent: {
      backgroundColor: '#f4dcb5',
      color: '#484545',
    },
    send: {
      backgroundColor: '#484545',
      color: '#FFFFFF',
      borderColor: '#ffffff',
    },
  },
});

const IconLabelButtons = () => {
  const classes = useStyles();
  return (
    <div className="homebox">
      <ThemeProvider theme={theme}>
        <Button
          href="https://portfoliodan.s3-us-west-2.amazonaws.com/DannyHanford.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          style={theme.palette.accent}
          className={classes.button}
          startIcon={<GetAppIcon />}
        >
          Resume
        </Button>
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

export { theme };
