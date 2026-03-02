import React, { useState } from 'react';
import '../styles/connect.css';
import '../styles/global.css';
import { SiBehance, SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="social-bar" id="connect">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in-up">
          Let's Connect
        </h2>

        <form
          className="glass-card"
          data-aos="zoom-in-up"
          onSubmit={handleSubmit}
        >
          <div className="form-input-wrapper">
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

          <button type="submit" className="send-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Commit"}
          </button>

          {status === "success" && (
            <p className="success-message">Message sent successfully 🚀</p>
          )}
          {status === "error" && (
            <p className="error-message">Something went wrong. Try again.</p>
          )}
        </form>

        <div className="social-bar-wrapper" data-aos="flip-down">
          <div className="social-bar-container">
            <a title="GitHub" href="https://github.com/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item"><SiGithub/></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item"><SiLinkedin/></a>
            <a title="Instagram" href="https://www.instagram.com/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item"><SiInstagram/></a>
            <a title="Twitter" href="https://x.com/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item"><SiX/></a>
            <a title="Behance" href="https://behance.net/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item"><SiBehance/></a>
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
