import React from 'react';

const AllProjects = () => {
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
    <section id="Allproject">
      <div className="projectinfo">
        <div className="pro">
          <div className="desc">
            <h2>E-Commerce Website</h2>
            <p>Designed and implemented a secure website with user login, registration, and access control for private information.</p>
            <p>Used HTML, CSS, and JavaScript for the frontend, and Node.js, Express.js, and MongoDB for backend data processing.</p>
            <p>Implemented JWT for secure authentication and Nodemailer for email confirmation.</p>
            <button className="demo-button" onClick={() => openDemo("images/E-commerce-website-demo.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/E-Commerce-Website-Project"><button>Repository</button></a>
          </div>
          <img src="images/e.jpg"/>
        </div>

        <div className="pro">
          <div className="desc">
            <h2>Image Security</h2>
            <p>Developed user-friendly interface for secure image data transmission using AES encryption.</p>
            <p>Implemented image pre-processing, encryption, and decryption algorithms.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/Image-Security-using-Encryption"><button>Repository</button></a>
          </div>
          <img src="images/image_security.png" />
        </div>

        <div className="pro">
          <div className="desc">
            <h2>Health Notifier</h2>
            <p>Developed a Health Notifier using SVM algorithms to predict diabetes, heart disease, and Parkinson's disease risks from user health reports and lifestyle data.</p>
            <p>Implemented encryption, access controls, and privacy compliance for data security.</p>
            <p>Created an intuitive interface with Streamlit for personalized alerts, focusing on transparency and ethical data handling.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/Health-Notifier"><button>Repository</button></a>
          </div>
          <img src="images/healthnotifier.jpg"/>
        </div>

        <div className="pro">
          <div className="desc">
            <h2>OCR-Optical Character Recognition to Text And Audio</h2>
            <p>Developed Flask-based app with PyTesseract for text extraction from images, PyMuPDF for PDF text extraction and Google Translate API for translation. Features include file handling and gTTS for audio.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/OCR-Optical-Character-Recognition-to-Text-And-Audio"><button>Repository</button></a>
          </div>
          <img src="images/OCR.png" alt="OCR-Optical Character Recognition" />
        </div>

        <div className="pro">
          <div className="desc">
            <h2>SymptomAI</h2>
            <p>This web application helps users to predict potential diseases based on symptoms they input. It utilizes machine learning models to make predictions for diabetes, heart disease, and Parkinson's disease. Additionally, users can sign up, log in, and provide symptoms for diagnosis.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/OCR-Optical-Character-Recognition-to-Text-And-Audio"><button>Repository</button></a>
          </div>
          <img src="images/OCR.png" alt="OCR-Optical Character Recognition" />
        </div>

        <div className="pro">
          <div className="desc">
            <h2>OCR-Optical Character Recognition to Text And Audio</h2>
            <p>Developed Flask-based app with PyTesseract for text extraction from images, PyMuPDF for PDF text extraction and Google Translate API for translation. Features include file handling and gTTS for audio.</p>
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo</button>
            <a href="https://github.com/kajalrawat3603/OCR-Optical-Character-Recognition-to-Text-And-Audio"><button>Repository</button></a>
          </div>
          <img src="images/OCR.png" alt="OCR-Optical Character Recognition" />
        </div>
      </div>

      <div className="pop-up">
        <span onClick={closePopUp}>&times;</span>
        <video src="images/production_id_4884244 (2160p).mp4" autoPlay controls></video>
        <div className="description"></div>
      </div>
    </section>
  );
};

export default AllProjects;
