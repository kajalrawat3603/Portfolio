import React from 'react';
import './style.css';
import { useEffect } from 'react';
import { initializeScrollAnimations } from './script';
const About = () => {
  useEffect(() => {
    initializeScrollAnimations();
  }, []);
    return (
      <>
      <h1 className="smallscreenaboutheading">ABOUT</h1>
      <section id="about">
        <div className="aboutinfo">
        <p>Hey there! I'm a dedicated Computer Science and Engineering student pursuing my Bachelor's at Graphic Era Hill University. My journey into technology began with a curiosity for understanding how things work and a drive to innovate.</p>
        <p>In my academic journey, I've explored various domains—from web development to machine learning—focusing on languages like C, C++, Python, and Java. Participating in coding contests and hackathons sharpened not only my technical skills but also my teamwork and leadership abilities. Beyond academics, I'm part of the PwC Launchpad program for data analytics, gaining hands-on industry experience.</p>
        <p>When not coding, I'm exploring outdoors on my bicycle, playing volleyball, or capturing moments with my camera. Photography isn't just a hobby; it's a way to express creativity and capture memories.</p>
        <p>I'm passionate about using technology to solve real-world problems and make a positive impact. From crafting intuitive interfaces to developing smart algorithms and capturing the perfect shot, I embrace challenges with enthusiasm.</p>
                  
        </div>
        <div className="about_heading" style={{ borderLeft: '20px solid', fontSize: '35px', background: 'black', color: 'whitesmoke' }}>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>A</h1>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>B</h1>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>O</h1>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>U</h1>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>T</h1>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>M</h1>
          <h1 style={{ padding: '0', margin: '0', paddingLeft: '20px' }}>E</h1>
        </div>
      </section>
      </>
    );
  };
  
  export default About;