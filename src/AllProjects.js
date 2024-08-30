import React, { useRef, useState } from 'react';

const AllProjects = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const a1Refs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
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

  return (
    <section id="Allproject">
      <div className="projectinfo">
        <div
          className='pro odd'
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card">
            <img src="images/symptomai.png" alt="Card Image" />
            <div className="card-content">
              <h2
                className='ch2'
                style={{
                  inset: hoveredCardIndex === 0 ? `auto auto ${a1Refs.current[0]?.clientHeight + 5}px 30px` : 'auto auto 30px 30px',
                }}
              >
                SymptomAI
              </h2>
              <div className='a1 white' ref={(el) => (a1Refs.current[0] = el)} style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div
          className='pro even'
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card even">
            <img src="images/encryptify.png" alt="Card Image" />
            <div className="card-content">
              <h2
                style={{
                  inset: hoveredCardIndex === 1 ? `auto auto ${a1Refs.current[1]?.clientHeight + 5}px 30px` : 'auto auto 30px 30px',
                }}
              >
                Encryptify
              </h2>
              <div className='a1 white' ref={(el) => (a1Refs.current[1] = el)} style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div
          className='pro odd'
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card">
            <img src="images/portfolio.png" alt="Portfolio" />
            <div className="card-content">
              <h2
                className='ch2'
                style={{
                  inset: hoveredCardIndex === 2 ? `auto auto ${a1Refs.current[2]?.clientHeight + 5}px 30px` : 'auto auto 30px 30px',
                }}
              >
                Portfolio
              </h2>
              <div className='a1 white' ref={(el) => (a1Refs.current[2] = el)} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>Built with React for dynamic frontend, styled with CSS, and deployed on Vercel, it ensures a responsive, seamless user experience, with robust integration and performance optimization.</p>
                <div style={{ display: 'flex' }}>
                  <a href="https://kajal-portfolio-rawat.vercel.app">
                    <button>Demo<div className='light'></div></button>
                  </a>
                  <a href="https://github.com/kajalrawat3603/Portfolio">
                    <button>Repository<div className='light'></div></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='pro even'
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card odd">
            <img src="images/e-commerce-website.png" alt="E-Commerce Website" />
            <div className="card-content">
              <h2
                style={{
                  inset: hoveredCardIndex === 3 ? `auto auto ${a1Refs.current[3]?.clientHeight + 5}px 30px` : 'auto auto 30px 30px',
                }}
              >
                E-Commerce Website
              </h2>
              <div className='a1 white' ref={(el) => (a1Refs.current[3] = el)} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>This is a full-stack e-commerce web application built with React and Node.js. The application allows users to browse products, add them to a cart, and manage their orders. The project includes user authentication, product management, cart functionality, and blog submission features.</p>
                  <div style={{ display: 'flex' }}>
                  <a href="https://kr-e-commerce.vercel.app">
                    <button className="demo-button">Demo<div className='light'></div></button>
                  </a>
                  <a href="https://github.com/kajalrawat3603/E-Commerce-Website-Project">
                    <button>Repository<div className='light'></div></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='pro odd'
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card even">
            <img src="images/OCR.png" alt="OCR-Optical Character Recognition" />
            <div className="card-content">
              <h2
                style={{
                  inset: hoveredCardIndex === 4 ? `auto auto ${a1Refs.current[4]?.clientHeight + 5}px 30px` : 'auto auto 30px 30px',
                }}
              >
                OCR-Optical Character Recognition to Text And Audio
              </h2>
              <div className='a1 white' ref={(el) => (a1Refs.current[4] = el)} style={{ display: 'flex', flexDirection: 'column' }}>
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
      </div>
      <div className="pop-up">
        <span onClick={closePopUp}>&times;</span>
        <video src="images/production_id_4884244 (2160p).mp4" autoPlay controls></video>
       
      </div>
    </section>
  );
};

export default AllProjects;
