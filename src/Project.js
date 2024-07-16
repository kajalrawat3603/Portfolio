import React, { useState } from 'react';
import AllProjects from './AllProjects';

const Project = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

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
      if (popUp){
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
    <><h1 className='smallscreenaboutheading'>PROJECTS</h1>
    <section id="project">
      <h1 className="vertical-text">PROJECTS</h1>
      <div className="projectinfo">
        <div className="pro even">
          <div className="desc">
            <h2>E-Commerce Website</h2>
            <p>Designed and implemented a secure website with user login, registration, and access control for private information.</p>
            <p>Utilized front-end technologies (HTML, CSS, JavaScript) for a user-friendly interface and back-end tools (Node.js, Express.js, MongoDB) for efficient data processing.</p>
            <p>Implemented JWT for secure user authentication and Nodemailer for confirmation emails.</p>
            <button className="demo-button" onClick={() => openDemo("images/E-commerce-website-demo.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/E-Commerce-Website-Project"><button>Repository</button></a>
          </div>
          <img src="images/e.jpg" alt="E-Commerce Website" />
        </div>

        <div className="pro odd">
          <div className="desc">
            <h2>Image Security</h2>
            <p>Developed user-friendly interface for secure image data transmission using AES encryption.</p>
            <p>Implemented image pre-processing, encryption, and decryption algorithms.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/Image-Security-using-Encryption"><button>Repository</button></a>
          </div>
          <img src="images/image_security.png" alt="Image Security" />
        </div>

        <div className="pro even" >
          <div className="desc">
            <h2>Health Notifier</h2>
            <p>Developed a Health Notifier system leveraging SVM algorithms to predict diabetes, heart disease, and Parkinson's disease risks by analyzing user health reports and lifestyle data</p>
            <p>Ensured robust data security measures and user privacy protection through encryption techniques, access controls, and compliance with privacy regulations.</p>
            <p>Designed an intuitive user interface using Streamlit for personalized alerts, emphasizing transparency, ethical data handling, and user consent in the project implementation.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/Health-Notifier"><button>Repository</button></a>
          </div>
          <img src="images/healthnotifier.jpg" alt="Health Notifier" />
        </div>

        <div className="pro odd">
          <div className="desc">
            <h2>OCR-Optical Character Recognition to Text And Audio</h2>
            <p>Developed Flask-based app with PyTesseract for text extraction from images, PyMuPDF for PDF text extraction and Google Translate API for translation. Features include file handling and gTTS for audio.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/OCR-Optical-Character-Recognition-to-Text-And-Audio"><button>Repository</button></a>
          </div>
          <img src="images/OCR.png" alt="OCR-Optical Character Recognition" />
        </div>

        <button className="more-button odd" onClick={openAllProjects} style={{float:'left'}}>More...</button>
        
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
