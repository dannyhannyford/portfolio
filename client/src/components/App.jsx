import React from 'react';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import '../style.css';

const App = () => {
  return (
    
    <div>
      <Nav />
      <Home />
      <About /> 
    </div>
    
  );
};

export default App;