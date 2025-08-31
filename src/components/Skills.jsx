import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiPython, SiNodedotjs, SiMysql, SiGit, SiGithub } from 'react-icons/si';
import "../styles/skills.css";
import "../styles/global.css";

const Skills = () => {
  useEffect(() => {
    const container = ".tagcloud";

    // Clear old sphere
    const el = document.querySelector(container);
    if (el) el.innerHTML = "";

    const skillsArray = [
      "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS", "Bootstrap", "Next.js",
      "Node.js", "Express.js", "Django", "Flask", "MongoDB", "MySQL", "PostgreSQL",
      "Git", "GitHub", "Docker", "Firebase", "Supabase", "GraphQL", "REST API",
      "AWS", "Vercel", "Netlify",
      "Figma", "Framer", "Photoshop", "Illustrator", "Canva", "Wix"
    ];
    const uniqueSkills = [...new Set(skillsArray)];

    const radius =
      window.innerWidth < 480 ? 180 :
      window.innerWidth < 768 ? 200 : 280;

    // Initialize sphere
    const tagCloudInstance = TagCloud(container, uniqueSkills, {
      radius,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
      depth: 1.0,
    });

    // ---- Drag Control ----
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    const sphereElement = document.querySelector(container);

    const onStart = (e) => {
      isDragging = true;
      lastX = e.touches ? e.touches[0].clientX : e.clientX;
      lastY = e.touches ? e.touches[0].clientY : e.clientY;
    };

    const onMove = (e) => {
      if (!isDragging) return;

      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      const deltaX = x - lastX;
      const deltaY = y - lastY;

      lastX = x;
      lastY = y;

      // Adjust TagCloud rotation based on drag movement
      tagCloudInstance.angleX += deltaY * 0.002;
      tagCloudInstance.angleY += deltaX * 0.002;
    };

    const onEnd = () => {
      isDragging = false;
    };

    sphereElement.addEventListener("mousedown", onStart);
    sphereElement.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onEnd);

    sphereElement.addEventListener("touchstart", onStart, { passive: true });
    sphereElement.addEventListener("touchmove", onMove, { passive: true });
    document.addEventListener("touchend", onEnd);

    // Cleanup
    return () => {
      if (el) el.innerHTML = "";
      sphereElement.removeEventListener("mousedown", onStart);
      sphereElement.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      sphereElement.removeEventListener("touchstart", onStart);
      sphereElement.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h1 className="section-title" data-aos="zoom-in-up">My Stacks</h1>
        <div className="skill-wrapper">
          <div className="skill-texts">
            <h3 data-aos="zoom-in-up">FRONTEND</h3>
            <div className="frontend-skills" data-aos="zoom-in-up">
              <div className="skill-tile button"><SiReact /> <span>React</span></div>
              <div className="skill-tile button"><SiNextdotjs /> <span>Next.js</span></div>
              <div className="skill-tile button"><SiTailwindcss /> <span>Tailwind CSS</span></div>
              <div className="skill-tile button"><SiJavascript /> <span>JavaScript</span></div>
            </div>
            <h3 data-aos="zoom-in-up">BACKEND</h3>
            <div className="backend-skills" data-aos="zoom-in-up">
              <div className="skill-tile button"><SiPython /> <span>Python</span></div>
              <div className="skill-tile button"><SiNodedotjs /> <span>Node.js</span></div>
              <div className="skill-tile button"><SiMysql /> <span>MySQL</span></div>
            </div>
            <h3 data-aos="zoom-in-up">TOOLS</h3>
            <div className="tools-used" data-aos="zoom-in-up">
              <div className="skill-tile button"><SiGit /> <span>Git</span></div>
              <div className="skill-tile button"><SiGithub /> <span>Github</span></div>
            </div>
          </div>

          {/* Sphere */}
          <div className="sphere-wrapper" data-aos="zoom-in">
            <span className="tagcloud"></span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Skills;
