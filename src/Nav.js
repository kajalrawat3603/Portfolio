import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar top">
      <div className="logo">
        <a href="/"><h1>Kajal Rawat</h1></a>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/#intro" className="link" onClick={closeMenu}>
            <div className="text">INTRO</div>
            <div className="link-underline"></div>
          </a>
        </li>
        <li>
          <a href="/#about" className="link" onClick={closeMenu}>
            <div className="text">ABOUT</div>
            <div className="link-underline"></div>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/14B3jkMl9T3MdWTVWlNYnVtZyQ4uFOsoW/view?usp=sharing"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <div className="text">RESUME</div>
            <div className="link-underline"></div>
          </a>
        </li>
        <li>
          <a href="/#skills" className="link" onClick={closeMenu}>
            <div className="text">SKILLS</div>
            <div className="link-underline"></div>
          </a>
        </li>
        <li>
          <a href="/#project" className="link" onClick={closeMenu}>
            <div className="text">PROJECT</div>
            <div className="link-underline"></div>
          </a>
        </li>
        <li>
          <a href="/#contact" className="link" onClick={closeMenu}>
            <div className="text">CONTACT</div>
            <div className="link-underline"></div>
          </a>
        </li>
      </ul>
      <button className={`nav-icon menu ${click ? 'opened' : ''}`} onClick={handleClick} aria-label="Main Menu">
        <svg id='menu-icon'height="100" viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
