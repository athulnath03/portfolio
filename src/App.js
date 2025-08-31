import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css"

import Hero from './components/Hero';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
    AOS.refreshHard();

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');
      
      let current = '';
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 50) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.backgroundColor = '#00ff88';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '1';
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = window.innerHeight + 'px';
      particle.style.opacity = '0.7';
      document.body.appendChild(particle);

      const animation = particle.animate(
        [
          { transform: 'translateY(0px)', opacity: 0.7 },
          {
            transform: `translateY(-${window.innerHeight + 100}px)`,
            opacity: 0,
          },
        ],
        {
          duration: 15000 + Math.random() * 10000,
          easing: 'linear',
        }
      );

      animation.addEventListener('finish', () => {
        particle.remove();
      });
    };

    const particleInterval = setInterval(createParticle, 3000);
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <div className="App bg-gradient">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
