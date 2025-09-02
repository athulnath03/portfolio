import React, { useState } from 'react';
import '../styles/connect.css';
import '../styles/global.css';
import { SiBehance, SiGithub, SiInstagram, SiLeetcode, SiLinkedin, SiX } from 'react-icons/si';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="social-bar" id="connect">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in-up">Let's Connect</h2>          
        <form className="glass-card" data-aos="zoom-in-up" onSubmit={handleSubmit}>
          <div className='form-input-wrapper'>
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>

        <div className="social-bar-wrapper" data-aos="flip-down" >
          <div className="social-bar-container">
            <a title="GitHub" href="https://github.com/athulnath03" target="_blank" class="social-item"><SiGithub/></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/athulnath03" target="_blank" class="social-item"><SiLinkedin/></a>
            <a title="Instagram" href="https://www.instagram.com/athulnath03/" target="_blank" class="social-item"><SiInstagram/></a>
            <a title="Twitter" href="https://x.com/athulnath03" target="_blank" class="social-item"><SiX/></a>
            <a title="Behance" href="https://x.com/athulnath03" target="_blank" class="social-item"><SiBehance/></a>
          </div>
        
          <div className="social-handle">
            <div className="follow-text">
              <div className="rotating-text">
                <span>github.com</span>
                <span>linkedin.com</span>
                <span>instagram.com</span>
                <span>twitter.com</span>
                <span>behance.net</span>
              </div>
              <span className="username">/athulnath03</span>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default Connect;
