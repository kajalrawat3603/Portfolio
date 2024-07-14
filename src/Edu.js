import React from 'react';
import './style.css';
const Edu = () => {
  return (
    <>    
    <h1 className="smallscreenaboutheading">EDUCATION</h1>
    <h1 className="education_heading">EDUCATION</h1>
    <section id="education">
      <div className="edu grid-item top">
        <div className="desc">
          <h2>Secondary School (10th)</h2>
          <h1 style={{ marginBottom: 0 }}>Kendriya Vidyalaya Indian Military Academy Dehradun</h1>
          <h2>Year: 2018 - 2019</h2>
          <h4 style={{ textDecoration: 'underline', fontSize: '20px', marginTop: '3px' }}>CGPA: 9.59</h4>
        </div>
      </div>
      <div className="edu grid-item down">
        <div className="desc">
          <h2>Higher Secondary School (12th)</h2>
          <h1 style={{ marginBottom: 0 }}>Kendriya Vidyalaya Indian Military Academy Dehradun</h1>
          <h2>Year: 2020 - 2021</h2>
          <h4 style={{ textDecoration: 'underline', fontSize: '20px', marginTop: '3px' }}>CGPA: 9.61</h4>
        </div>
      </div>
      <div className="edu grid-item top">
        <div className="desc">
          <h2>Bachelor of Technology (CSE)</h2>
          <h1 style={{ marginBottom: 0 }}>Graphic Era Hill University Dehradun Campus</h1>
          <h2>Year: 2021 - 2025</h2>
          <h4 style={{ textDecoration: 'underline', fontSize: '20px', marginTop: '3px' }}>CGPA: 8.80</h4>
        </div>
      </div>
    </section>
    </>
  );
};

export default Edu;
