import React, { useEffect, useRef } from 'react';
import '../styles/about-me.css';
import '../styles/global.css';

const AboutMe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null); // 👈 useRef for the typewriter text span

  // === Intersection Observer for animation ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // === Typewriter effect ===

  useEffect(() => {
    const words = ["Developer. ", "Designer. "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];
      if (textRef.current) {
        textRef.current.textContent = currentWord.substring(0, charIndex);
      }

      // Calculate typing speed
      let typingSpeed = isDeleting ? 80 : 120;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      }

      // Word complete — pause before deleting
      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pause 2s before deleting
        isDeleting = true;
      }

      // Word deleted — move to next word
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      timeoutId = setTimeout(type, typingSpeed);
    };

    type();

    return () => clearTimeout(timeoutId); // cleanup on unmount
  }, []);

  return (
    <section className="about-me" id="about-me" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in-up">About Me</h2>
        <div className="about-me-wrapper">
          {/* ✅ Typewriter section */}
          <div className="typewriter" data-aos="zoom-in-up">
            <div>I am a&nbsp;<strong><span ref={textRef}></span></strong>
              <div className="cursor"></div>
            </div>
          </div>

          <div className="fade-card" data-aos="zoom-in-up">
            <div className="fade-card-front intro">
              <p className="description">
                A passionate Software Developer with a creative edge in UI/UX design and a strong foundation in full-stack development. I enjoy building smart, user-friendly digital solutions—from interactive web apps to innovative projects like augmented reality tools. With hands-on experience in both startup and tech-driven environments, I bring adaptability, attention to detail, and a constant drive to learn and grow.
              </p>
            </div>
            <div className="fade-card-back">
              <div className="profile-info">
                <div className="profile-name">Athul Nath M</div>
                <div className="profile-role">
                  Full Stack Developer
                  <span className="line"> | </span>ISRO - LPSC<br />
                  <span className="date-joined">2025 May - Present</span>
                </div>
              </div>
              <div className="profile-desc">
                Building scalable web applications from front-end interfaces to robust back-end APIs. Skilled in JavaScript, Python, React, Node.js.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
