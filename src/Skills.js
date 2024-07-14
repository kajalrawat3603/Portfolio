import React, { useEffect } from 'react';
import './style.css';

const Scroll = ({ isActive }) => {
  useEffect(() => {
    const root = document.documentElement;
    const elementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--scroll-elements-displayed"));
    const scrollContent = document.querySelector(".scroll-content");

    // Total number of elements in the scroll content
    const totalElements = scrollContent.children.length;
    root.style.setProperty("--scroll-elements", totalElements);

    if (isActive) {
      // Clone elements to fill the viewport width seamlessly
      for (let i = 0; i < elementsDisplayed; i++) {
        scrollContent.appendChild(scrollContent.children[i].cloneNode(true));
      }
      scrollContent.classList.add('scroll-active');
    } else {
      // Remove cloned elements and reset scroll state
      const originalChildren = Array.from(scrollContent.children).slice(0, totalElements);
      scrollContent.innerHTML = ''; // Clear current content
      originalChildren.forEach(child => scrollContent.appendChild(child));
      scrollContent.classList.remove('scroll-active');
    }

    return () => {
      // Cleanup function to remove active class
      scrollContent.classList.remove('scroll-active');
    };
  }, [isActive]);
  return (
    <div id='skills'>
      <h1 className="smallscreenaboutheading">SKILLS</h1>
      <div className="scroll odd">
        <h1 className="skills-title">Skills</h1>
        <ul className="scroll-content">
          <li>
            <i className="fab fa-github" title="GitHub"></i>
            <span className="icon-caption">GitHub</span>
          </li>
          <li>
            <i className="fas fa-robot" title="Machine Learning"></i>
            <span className="icon-caption">Machine Learning</span>
          </li>
          <li>
            <i className="fas fa-brain" title="Artificial Intelligence"></i>
            <span className="icon-caption">Artificial Intelligence</span>
          </li>
          <li>
            <i className="fab fa-html5" title="HTML"></i>
            <span className="icon-caption">HTML</span>
          </li>
          <li>
            <i className="fab fa-css3-alt" title="CSS"></i>
            <span className="icon-caption">CSS</span>
          </li>
          <li>
            <i className="fab fa-js-square" title="JavaScript"></i>
            <span className="icon-caption">JavaScript</span>
          </li>
          <li>
            <i className="fas fa-database" title="MySQL"></i>
            <span className="icon-caption">MySQL</span>
          </li>
          <li>
            <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
            <span className="icon-caption">MongoDB</span>
          </li>
          <li>
            <i className="devicon-oracle-original colored" title="Oracle"></i>
            <span className="icon-caption">Oracle</span>
          </li>
          <li>
            <i className="fab fa-node-js" title="Node.js"></i>
            <span className="icon-caption">Node.js</span>
          </li>
          <li>
            <i className="devicon-express-original colored" title="Express.js"></i>
            <span className="icon-caption">Express.js</span>
          </li>
          <li>
            <i className="fab fa-react" title="React.js"></i>
            <span className="icon-caption">React.js</span>
          </li>
          <li>
            <i className="devicon-flask-original colored" title="Flask" style={{color:'white'}}></i>
            <span className="icon-caption">Flask</span>
          </li>
          <li>
            <i className="fab fa-php" title="PHP"></i>
            <span className="icon-caption">PHP</span>
          </li>
          <li>
            <i className="devicon-c-plain colored" title="C"></i>
            <span className="icon-caption">C</span>
          </li>
          <li>
            <i className="devicon-cplusplus-plain colored" title="C++"></i>
            <span className="icon-caption">C++</span>
          </li>
          <li>
            <i className="fab fa-python" title="Python"></i>
            <span className="icon-caption">Python</span>
          </li>
          <li>
            <i className="fab fa-java" title="Java"></i>
            <span className="icon-caption">Java</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scroll;
