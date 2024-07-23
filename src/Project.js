import React, { useState, useRef } from 'react';
import AllProjects from './AllProjects';

const Project = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const a1Refs = useRef([]);

  const openAllProjects = () => {
    setShowAllProjects(true);
  };

  const closeAllProjects = () => {
    setShowAllProjects(false);
  };

  const openDemo = (src) => {
    const video = document.querySelector('.pop-up video');
    if (video) {
      video.src = src;
      const popUp = document.querySelector('.pop-up');
      if (popUp) {
        popUp.style.display = 'flex';
        popUp.style.justifyContent = 'center';
      }
    }
  };

  const closePopUp = () => {
    const video = document.querySelector('.pop-up video');
    if (video) video.pause();
    const popUp = document.querySelector('.pop-up');
    if (popUp) popUp.style.display = 'none';
  };

  const handleMouseEnter = (index) => {
    const h2Element = document.querySelectorAll('.card h2')[index];
    const a1Height = a1Refs.current[index].offsetHeight;
    h2Element.style.inset = `auto auto ${a1Height}px 30px`;
  };

  const handleMouseLeave = (index) => {
    const h2Element = document.querySelectorAll('.card h2')[index];
    h2Element.style.inset = 'auto auto 30px 30px';
  };

  return (
    <>
      <h1 className='smallscreenaboutheading'>PROJECTS</h1>
      <section id="project">
        <h1 className="vertical-text">PROJECTS</h1>
        <div className="projectinfo">
          <div className='pro odd'>
            <div className="card" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
              <img src="images/symptomai.png" alt="Card Image" />
              <div className="card-content">
                <h2 className='ch2'>SymptomAI</h2>
                <div className='a1 white' ref={(el) => a1Refs.current[0] = el} style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>This web application helps users to predict potential diseases based on symptoms they input. It utilizes machine learning models to make predictions for diabetes, heart disease, and Parkinson's disease. Additionally, users can sign up, log in, and provide symptoms for diagnosis.</p>
                  <div style={{ display: 'flex' }}>
                    <a href="https://symptomai.onrender.com">
                      <button>Demo<div className='light'></div></button>
                    </a>
                    <a href="https://github.com/kajalrawat3603/SymptomAI">
                      <button>Repository<div className='light'></div></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pro even'>
            <div className="card even" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
              <img src="images/encryptify.png" alt="Card Image" />
              <div className="card-content">
                <h2>Encryptify</h2>
                <div className='a1 white' ref={(el) => a1Refs.current[1] = el} style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>This web application helps users to predict potential diseases based on symptoms they input. It utilizes machine learning models to make predictions for diabetes, heart disease, and Parkinson's disease. Additionally, users can sign up, log in, and provide symptoms for diagnosis.</p>
                  <div style={{ display: 'flex' }}>
                    <a href="https://encryptify.onrender.com">
                      <button>Demo<div className='light'></div></button>
                    </a>
                    <a href="https://github.com/kajalrawat3603/Encryptify">
                      <button>Repository<div className='light'></div></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pro odd'>
            <div className="card odd" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
              <img src="images/e.jpg" alt="E-Commerce Website" />
              <div className="card-content">
                <h2>E-Commerce Website</h2>
                <div className='a1 white' ref={(el) => a1Refs.current[2] = el} style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>Designed and implemented a secure website with user login, registration, and access control for private information. Utilized HTML, CSS, and JavaScript for a user-friendly interface and Node.js, Express.js, and MongoDB for efficient data processing. Integrated JWT for secure authentication and Nodemailer for confirmation emails.</p>
                  <div style={{ display: 'flex' }}>
                    <button className="demo-button" onClick={() => openDemo("images/E-commerce-website-demo.mp4")}>Demo<div className='light'></div></button>
                    <a href="https://github.com/kajalrawat3603/E-Commerce-Website-Project">
                      <button>Repository<div className='light'></div></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pro even'>
            <div className="card even" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
              <img src="images/OCR.png" alt="OCR-Optical Character Recognition" />
              <div className="card-content">
                <h2>OCR-Optical Character Recognition to Text And Audio</h2>
                <div className='a1 white' ref={(el) => a1Refs.current[3] = el} style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>This Flask-based application extracts text from images using PyTesseract and from PDFs using PyMuPDF. It also translates text via the Google Translate API and generates audio using gTTS. The app supports file handling, user authentication, and provides comprehensive text processing features.</p>
                  <div style={{ display: 'flex' }}>
                    <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo<div className='light'></div></button>
                    <a href="https://github.com/kajalrawat3603/OCR-Optical-Character-Recognition-to-Text-And-Audio">
                      <button>Repository<div className='light'></div></button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="more-button odd" onClick={openAllProjects} style={{ float: 'left' }}>More...<div className='light'></div></button>
        </div>

        <div className="pop-up">
          <span onClick={closePopUp}>&times;</span>
          <video src="images/production_id_4884244 (2160p).mp4" autoPlay controls></video>
          <div className="description"></div>
        </div>

        {showAllProjects && (
          <div className="all-projects-popup">
            <span onClick={closeAllProjects}>&times;</span>
            <AllProjects />
          </div>
        )}
      </section>
    </>
  );
};

export default Project;
