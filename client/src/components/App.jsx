import React from 'react';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../style.css';

const App = () => {
  return (
    
    <div>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
    
  );
};

export default App;