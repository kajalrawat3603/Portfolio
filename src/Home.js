import React from 'react';
import './style.css';
import { useEffect } from 'react';
import { initializeScrollAnimations } from './script';
const Intro = () => {
  useEffect(() => {
    initializeScrollAnimations();
  }, []);

  return (
    <>
    <section id="smallintro">
    <div className="smallcontent odd" style={{ width: '500px' ,padding:'0 20px 30px 20px'}}>
              <div id="wrap" className='img-wrap'>
                <img src="images/image.png" alt="Kajal Rawat" />
              </div>
              <div className="smalllinks" style={{ display: 'flex', justifyContent: 'space-around', width: '70%', marginTop: '20px', marginBottom: '0' }}>
                <a href="https://github.com/kajalrawat3603"><i className="fab fa-github fa-2x" style={{ color: 'black' }}></i></a>
                <a href="www.linkedin.com/in/kajal-232004-rawat"><i className="fab fa-linkedin fa-2x" style={{ color: 'black' }}></i></a>
                <a href="https://leetcode.com/Kajal_rawat/"><i className="fas fa-code fa-2x" style={{ color: 'black' }}></i></a>
              </div>
              <h1 style={{ fontSize: '50px', marginTop: '20px' }}>HELLO</h1>
              <h2>I'm Kajal Rawat.</h2>
              <h2 style={{ fontSize: 'x-large' }}>Student of</h2>
              <h2 style={{ fontSize: 'x-large' }}>Bachelor's of Technology</h2>
              <h2 style={{ fontSize: 'x-large' }}>Computer Science & Engineering</h2>
              <h3> Welcome to my portfolio! Explore my projects and discover how I leverage my passion for technology to create innovative solutions.</h3>
              <a href="https://drive.google.com/file/d/1ByE_xANd6arMPa2PUjwUdbOvHWZlCIrO/view?usp=sharing" >
  <button>RESUME<div className='light'></div></button>
</a>

            </div>
    </section>
      <section id="intro">
        <div className="outercontainer" >
          <div className="innercontainer">
            <div className="info">
              <div id="wrap" className='img-wrap'>
                <img src="images/image.png" alt="Kajal Rawat" />
              </div>
              <h1 style={{ fontSize: 'xx-large', marginBottom: '5px' }}>KAJAL RAWAT</h1>
              <h2 style={{ fontSize: 'x-large', marginBottom: '5px' }}>Student of</h2>
              <h2 style={{ fontSize: 'x-large', marginBottom: '5px' }}>Bachelor's of Technology</h2>
              <h2 style={{ fontSize: 'x-large', marginBottom: '5px' }}>Computer Science & Engineering</h2>
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start'}}>
        <div className="content" style={{ width: '500px' }}>
          <h1>HELLO</h1>
          <h2>I'm Kajal Rawat.</h2>
          <h3> Welcome to my portfolio! Explore my projects and discover how I leverage my passion for technology to create innovative solutions. Let's connect and explore the exciting possibilities together!</h3>
          <div style={{ display: 'flex', gap: '50px', margin: '20px 0' }}>
            <a href="https://github.com/kajalrawat3603"><i className="fab fa-github fa-2x" style={{ color: 'black' }}></i></a>
            <a href="www.linkedin.com/in/kajal-232004-rawat"><i className="fab fa-linkedin fa-2x" style={{ color: 'black' }}></i></a>
            <a href="https://leetcode.com/Kajal_rawat/"><i className="fas fa-code fa-2x" style={{ color: 'black' }}></i></a>
          </div>
          <a href="https://drive.google.com/file/d/1ByE_xANd6arMPa2PUjwUdbOvHWZlCIrO/view?usp=sharing"><button>RESUME
            <div className='light'></div></button></a>
        </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
