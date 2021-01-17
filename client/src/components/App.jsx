import React, { lazy, Suspense } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Nav from './Nav';
import '../style.css';

const Home = lazy(() => import('./Home'));
const CssBaseline = lazy(() => import('@material-ui/core/CssBaseline'));
const About = lazy(() => import('./About'));
const Portfolio = lazy(() => import('./Portfolio'));
const Contact = lazy(() => import('./Contact'));

const styles = () => ({
  '@global': {
    '#home': {
      backgroundImage: 'url(https://portfoliodan.s3-us-west-2.amazonaws.com/oceanBeach4.webp)',
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
    <Nav />
    <Suspense fallback={<h1>loading Background, About, Portfolio, Contacts...</h1>}>
      <Home />
      <About />
      <CssBaseline />
      <Portfolio />
      <Contact />
    </Suspense>
  </div>
);

export default withStyles(styles)(App);
