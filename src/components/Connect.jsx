import React, { useState } from "react";
import "../styles/connect.css";
import "../styles/global.css";
import {SiBehance, SiGithub, SiInstagram, SiLinkedin, SiX,} from "react-icons/si";

const Connect = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: "",});
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("loading");
    try {
      const response = await fetch("https://formspree.io/f/mldlello",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({name: "", email: "", message: "",});
        setTimeout(() => {setStatus("idle");}, 2500);
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("idle");
    }
  };

  return (
    <section className="social-bar" id="connect">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in-up">Let's Connect</h2>

        <form className="contact-form" data-aos="zoom-in-up" onSubmit={handleSubmit}>
          <div className="form-input-wrapper">
            <fieldset>
              <legend>Name</legend>
              <input type="text" name="name" placeholder="e.g. Athul Nath M" value={formData.name} onChange={handleChange} autoComplete="name" required />
            </fieldset>

            <fieldset>
              <legend>Email</legend>
              <input type="email" name="email" placeholder="e.g. myself.athul@gmail.com" value={formData.email} onChange={handleChange} autoComplete="email" required />
            </fieldset>
          </div>

          <fieldset className="textarea-wrapper">
            <legend>Message</legend>
            <textarea name="message" placeholder="e.g. Hi there! I’d love to connect with you..." rows="5" value={formData.message} onChange={handleChange} required />

            <button type="submit" disabled={status === "loading"} className={`btn btn-submit ${status}`} >
              <span className="btn-content">
                {status === "idle" && "Send"}
                {status === "loading" && (<span className="spinner"></span>)}
                {status === "success" &&"Gotcha! I’ll get back to you soon."}
              </span>
            </button>
          </fieldset>
        </form>

        <div className="social-bar-wrapper" data-aos="flip-down">
          <div className="social-bar-container">            <a href="https://github.com/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item"><SiGithub/></a>
            <a href="https://www.linkedin.com/in/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item" ><SiLinkedin /></a>
            <a href="https://www.instagram.com/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item" ><SiInstagram /></a>
            <a href="https://x.com/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item" ><SiX /></a>
            <a href="https://behance.net/athulnath03" target="_blank" rel="noopener noreferrer" className="social-item" ><SiBehance /></a>
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
