import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../style.css';

const styles = () => ({
  '@global': {
    '#home': {
      backgroundImage: 'url(https://portfoliodan.s3-us-west-2.amazonaws.com/oceanBeach3.webp)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      height: '90vh',
    },
    html: {
      height: '100%',
    },
    '#app': {
      height: '100%',
    },
  },
});

const App = () => (
  <div>
    <CssBaseline />
    <Nav />
    <Home />
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default withStyles(styles)(App);
