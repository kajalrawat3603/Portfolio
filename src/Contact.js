import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Connect');
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
    setLoading(true);
    setButtonText('Sending...');
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
          setButtonText('Sent');
          setFormData({ name: '', email: '', message: '' }); 
        } 
        else {
          setButtonText('Failed to send');
        }
      } 
      catch (error) {
        console.error('Error:', error);
        setButtonText('An error occurred');
      } 
      finally {
        setTimeout(() => {
          setButtonText('Connect');
          setLoading(false);
        }, 2000);
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
            <input type="email" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <input placeholder="Type Message..." id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></input>
          </div>
          <div className={loading ? 'box' : ''} style={{ display: 'flex', width: 'fit-content' }}>
            <button type="submit">
              {buttonText}<div className='light'></div>
            </button>
          </div>
        </form>
      </div>
      <div className="connectHeading">
        <h1 style={{ fontSize: '8.8vw', margin: '0', padding: '0' }}>LET'S </h1>
        <h1 style={{ fontSize: '8.8vw', margin: '0', textDecoration: 'underline' }}>CONNECT!</h1>
      </div>
    </section>
  );
};

export default Contact;
