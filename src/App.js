import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import Nav from './Nav';
import Intro from './Home';
import About from './About';
import Edu from './Edu';
import Project from './Project';
import Contact from './Contact';
import ScrollToTopButton from './ScrollToTopButton';
import AllProjects from './AllProjects';
import './style.css';
import { initializeScrollAnimations } from './script';
import Cursoer from './Curseor';
import Skills from './Skills';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeScrollAnimations();

    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
        onComplete: () => setLoading(false),
      }
    );

    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Cursoer />
        {loading && <Loading />}
        {!loading && (
          <>
            <Nav />
            <Routes>
              <Route path="/" element={
                <>
                  <Intro />
                  <About />
                  <Edu />
                  <Skills />
                  <Project />
                  <Contact />
                  <ScrollToTopButton />
                </>
              } />
              <Route path="/all-projects" element={<><AllProjects /><ScrollToTopButton /></>} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
