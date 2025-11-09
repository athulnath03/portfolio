import React from 'react';
import '../styles/project.css';
import '../styles/global.css';

import { SiFigma, SiReact, SiHtml5, SiCss3, SiPython, SiFlask, SiMysql, SiGithub, SiOpencv } from 'react-icons/si';

function  Projects(){
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in-up">Projects</h2>

        <div className="project-grid">
          {/* Project 3 */}
          <div className="project-card" data-aos="zoom-in-up">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 className="project-title">YouTube Clone</h3>
              <div className="project-year">2024</div>
            </div>
            <p className="project-description">
              Designed and developed a visually striking, fully responsive landing page inspired by YouTube using HTML and CSS. This project highlights skills in modern front-end layout, navigation, mobile-friendly design, and streamlined user interaction—all crafted to deliver an engaging user experience and showcase strong UI/UX capabilities.
            </p>
            <div className="card-footer">
              <div className="stack">
                <div className="skill-tile"><SiFigma /></div>
                <div className="skill-tile"><SiHtml5 /></div>
                <div className="skill-tile"><SiCss3 /></div>
              </div>
              <div className="view-btn">
                <a href="https://github.com/athulnath03/youtube-landing-page" target="_blank" rel="noopener noreferrer">
                  <button className="skill-tile send-btn">Goto <SiGithub /></button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card" data-aos="zoom-in-up">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 className="project-title">AR Whiteboard System</h3>
              <div className="project-year">2024</div>
            </div>
            <p className="project-description">
              An interactive system that merges physical gestures with digital whiteboarding using real-time hand tracking, computer vision, and AR. Enables immersive learning and collaboration for classrooms, remote teams, and creative professionals.
            </p>
            <div className="card-footer">
              <div className="stack">
                <div className="skill-tile"><SiPython /></div>
                <div className="skill-tile"><SiOpencv /></div>
                <div className="skill-tile"><SiReact /></div>
              </div>
              <div className="view-btn">
                <a href="https://github.com/athulnath03/Augmented-Whiteboard-Using-OpenCV" target="_blank" rel="noopener noreferrer">
                  <button className="skill-tile send-btn">Goto <SiGithub /></button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 1 */}
          <div className="project-card" data-aos="zoom-in-up">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 className="project-title">Automated Timetable Generation System</h3>
              <div className="project-year">2023</div>
            </div>
            <p className="project-description">
              A system that automates schedule creation for schools and colleges, reducing manual effort and improving efficiency by handling constraints like faculty availability and room capacity. It streamlines academic planning and minimizes conflicts for administrators, faculty, and students.
            </p>
            <div className="card-footer">
              <div className="stack">
                <div className="skill-tile"><SiPython /></div>
                <div className="skill-tile"><SiFlask /></div>
                <div className="skill-tile"><SiMysql /></div>
              </div>
              <div className="view-btn">
                <a href="https://github.com/athulnath03/automatic-timetable-and-schedule-generator" target="_blank" rel="noopener noreferrer">
                  <button className="skill-tile send-btn">Goto <SiGithub /></button>
                </a>
              </div>
            </div>

            

            {/* <div className="project-view-mask">
              <div className="project-view-gradient"></div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-view-btn send-btn">View on Github</button>
              </a>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}
export default Projects;