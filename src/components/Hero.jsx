//import React, { useEffect } from 'react';

import '../styles/hero.css';
import '../styles/global.css';

// React Icons imports
import { SiFigma, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiNodedotjs } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content" data-aos="zoom-in-up">
        {/* Profile Image */}
        <div className="profile-image">
          <img src="https://framerusercontent.com/images/tDVxbKA5BH2FH4wnZBagzTuJI.jpg?scale-down-to=512" alt="Athul"/>
        </div>

        {/* Greeting Text */}
        <p className="greeting">Hello, I'm</p>

        {/* Name */}
        <h1 className="name">ATHUL NATH M</h1>

        {/* Buttons */}
        <div className="button-container">
          <a href="#connect" className="button">
            <span>Let's Connect</span>
            <svg className="connect-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a  className="button" 
              href={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent('https://athulnath03.vercel.app/Resume_Athul_Nath_M.pdf')}`}
              target="_blank" rel="noopener noreferrer">
            <span>Resume</span> 
            <svg className="resume-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Logo Slider with React Icons */}
      <div className="logo-wrapper">
        <div data-aos="zoom-in-up" data-aos-delay="050"> <div className="logo-item logo-item1"> <SiFigma/> </div> </div>
        <div data-aos="zoom-in-up" data-aos-delay="100"> <div className="logo-item logo-item2"> <SiReact/> </div> </div>
        <div data-aos="zoom-in-up" data-aos-delay="150"> <div className="logo-item logo-item3"> <SiNextdotjs/> </div> </div>
        <div data-aos="zoom-in-up" data-aos-delay="200"> <div className="logo-item logo-item4"> <SiTailwindcss/> </div> </div>
        <div data-aos="zoom-in-up" data-aos-delay="250"> <div className="logo-item logo-item5"> <SiHtml5/> </div> </div>
        <div data-aos="zoom-in-up" data-aos-delay="300"> <div className="logo-item logo-item6"> <SiCss3/> </div> </div>
        <div data-aos="zoom-in-up" data-aos-delay="350"> <div className="logo-item logo-item7"> <SiJavascript/> </div> </div>
        <div> <div className="logo-item logo-item8"> <SiNodedotjs/> </div> </div>
      </div>
    </section>
  );
}

export default Hero;
