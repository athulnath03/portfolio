import React, { useEffect, useRef } from 'react';
import '../styles/about-me.css';
import '../styles/global.css';

const AboutMe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null); // Typewriter text span

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter
  useEffect(() => {
    const words = ['Developer. ', 'Designer. '];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIndex];
      if (textRef.current) textRef.current.textContent = currentWord.substring(0, charIndex);

      let typingSpeed = isDeleting ? 80 : 120;
      if (!isDeleting && charIndex < currentWord.length) charIndex++;
      else if (isDeleting && charIndex > 0) charIndex--;

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000;
        isDeleting = true;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      timeoutId = setTimeout(type, typingSpeed);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="about-me" id="about-me" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in-up">
          About Me
        </h2>

        <div className="about-me-wrapper">
          <div className="glass-container" data-aos="zoom-in-up">
            <div className="sphere sphere1" />
            <div className="sphere sphere2" />
            <div className="sphere sphere3" />
            <div className="sphere sphere4" />

            <div className="about-me-glass-card">
              <div className="typewriter">
                <div>
                  I am a&nbsp;
                  <strong>
                    <span ref={textRef} />
                  </strong>
                  <div className="cursor" />
                </div>
              </div>

              <p className="intro-text">
                A passionate Software Developer with a creative edge in UI/UX design and a strong foundation in full-stack development. I enjoy building smart, user-friendly digital solutions from interactive web apps to innovative projects like augmented reality tools. With hands-on experience in both startup and tech-driven environments, I bring adaptability, attention to detail, and a constant drive to learn and grow.
              </p>

              <div className="footer">
                <div className="footer-header">
                  <p className="current-role">Current Role</p>
                  <h4>Full Stack Developer | ISRO - LPSC</h4>
                  <p>2025 May - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
