import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Intro from './Home';
import About from './About';
import Edu from './Edu';
import Project from './Project';
import Contact from './Contact';
import ScrollToTopButton from './ScrollToTopButton';
import AllProjects from './AllProjects';
import './style.css';
import { useEffect } from 'react';
import { initializeScrollAnimations } from './script';
import Cursoer from './Curseor';
import Skills from './Skills';
function App() {
  useEffect(() => {
    initializeScrollAnimations();
  }, []);
  
  return (
    <Router>
      <div className="App">
      <Cursoer/>
        <Nav />
        <Routes>
          <Route path="/" element={<>
            <Intro />
            <About />
            <Edu />
            <Skills/>
            <Project />
            <Contact />
            <ScrollToTopButton />
          </>} />
          <Route path="/all-projects" element={<><AllProjects/><ScrollToTopButton /></>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
