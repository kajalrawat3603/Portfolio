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
      <div className='pro odd'>
      <div className="card">
        <img 
          src="images\symptomai.png" 
          alt="Card Image" 
        />
        <div className="card-content">
          <h2 className='ch2'>SymptomAI</h2>
          <div  className='a1 white' style={{display:'flex', flexDirection:'column'}}>
          <p>This web application helps users to predict potential diseases based on symptoms they input. It utilizes machine learning models to make predictions for diabetes, heart disease, and Parkinson's disease. Additionally, users can sign up, log in, and provide symptoms for diagnosis.</p>
            <div style={{display:'flex'}}>
            <a href="https://symptomai.onrender.com">
              <button>Demo
                <div className='light'></div>
              </button>
            </a>
            <a href="https://github.com/kajalrawat3603/SymptomAI">
              <button>Repository
                <div className='light'></div>
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='pro even'>
      <div className="card even">
        <img 
          src="images\encryptify.png" 
          alt="Card Image" 
        />
        <div className="card-content">
          <h2>Encryptify</h2>
          <div  className='a1 white' style={{display:'flex', flexDirection:'column'}}>
          <p>This web application helps users to predict potential diseases based on symptoms they input. It utilizes machine learning models to make predictions for diabetes, heart disease, and Parkinson's disease. Additionally, users can sign up, log in, and provide symptoms for diagnosis.</p>
            <div style={{display:'flex'}}>
            <a href="https://encryptify.onrender.com">
              <button>Demo
                <div className='light'></div>
              </button>
            </a>
            <a href="https://github.com/kajalrawat3603/Encryptify">
              <button>Repository
                <div className='light'></div>
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='pro odd'>
      <div className="card even">
        <img 
          src="images\portfolio.png" 
          alt="Portfolio" 
        />
        <div className="card-content">
          <h2>Portfolio</h2>
          <div  className='a1 white' style={{display:'flex', flexDirection:'column'}}>
          <p>Built with React for dynamic frontend, styled with CSS, and deployed on Vercel, it ensures a responsive, seamless user experience, with robust integration and performance optimization.</p>
          <div style={{display:'flex'}}>
            <a href="https://kajal-portfolio-rawat.vercel.app">
              <button>Demo
                <div className='light'></div>
              </button>
            </a>
            <a href="https://github.com/kajalrawat3603/Portfolio">
              <button>Repository
                <div className='light'></div>
              </button>
            </a>
            </div>

          </div>
        </div>
      </div>
      </div>
      <div className='pro odd'>
      <div className="card odd">
        <img 
          src="images/e.jpg" 
          alt="E-Commerce Website" 
        />
        <div className="card-content">
          <h2>E-Commerce Website</h2>
          <div  className='a1 white' style={{display:'flex', flexDirection:'column'}}>
          <p>Designed and implemented a secure website with user login, registration, and access control for private information. Utilized HTML, CSS, and JavaScript for a user-friendly interface and Node.js, Express.js, and MongoDB for efficient data processing. Integrated JWT for secure authentication and Nodemailer for confirmation emails..</p>
            <div style={{display:'flex'}}>
            
            <button className="demo-button" onClick={() => openDemo("images/E-commerce-website-demo.mp4")}>Demo<div className='light'></div></button>
          
            <a href="https://github.com/kajalrawat3603/E-Commerce-Website-Project">
              <button>Repository
                <div className='light'></div>
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='pro odd'>
      <div className="card even">
        <img 
          src="images/OCR.png" 
          alt="OCR-Optical Character Recognition" 
        />
        <div className="card-content">
          <h2>OCR-Optical Character Recognition to Text And Audio</h2>
          <div  className='a1 white' style={{display:'flex', flexDirection:'column'}}>
          <p>This Flask-based application extracts text from images using PyTesseract and from PDFs using PyMuPDF. It also translates text via the Google Translate API and generates audio using gTTS. The app supports file handling, user authentication, and provides comprehensive text processing features.</p>
            <div style={{display:'flex'}}>
            
            <button className="demo-button" onClick={() => openDemo("images/coming soon.mp4")}>Demo<div className='light'></div></button>
         
            <a href="https://github.com/kajalrawat3603/OCR-Optical-Character-Recognition-to-Text-And-Audio">
              <button>Repository
                <div className='light'></div>
              </button>
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
        <div className="description"></div>
      </div>
    </section>
  );
};

export default AllProjects;
