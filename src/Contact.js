// portfolio/src/Contact.js
import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-f78y.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <section id="contact">
      <h1 className="smallscreenaboutheading">LET'S CONNECT</h1>
      <div className="contactForm">
        <div className="contactlinks">
          <a href="mailto:kajalrawat3603@gmail.com"><i className="icon_scroll fas fa-envelope fa-2x" style={{ color: 'black' }}></i></a>
          <a href="https://linkedin.com"><i className="icon_scroll fab fa-linkedin fa-2x" style={{ color: 'black' }}></i></a>
          <a href="https://linkedin.com/in/kajal-232004-rawat"><i className="icon_scroll fab fa-instagram fa-2x" style={{ color: 'black' }}></i></a>
          <a href="https://wa.me/9548596972"><i className="icon_scroll fab fa-whatsapp fa-2x" style={{ color: 'black' }}></i></a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Enter Full Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Type Message..." id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button className="submitButton" type="submit">Connect</button>
        </form>
      </div>
      <div className="connectHeading">
        <h1 style={{ fontSize: '8.8vw', margin: '0', padding: '0' }}>LET'S </h1>
        <h1 style={{ fontSize: '8.8vw', margin: '0', textDecoration: 'underline' }}>CONNECT!</h1>
      </div>
      <a href="#" id="scrollToTopButton" title="Go to top">&#8593;</a>
    </section>
  );
};

export default Contact;
