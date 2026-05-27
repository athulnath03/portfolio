import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiPython,
  SiFlask,
  SiMysql,
  SiGithub,
  SiOpencv,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "KL15 Depots",
    year: "2026",
    description:
      "Designed and developed a visually striking, fully responsive landing page inspired by YouTube using HTML and CSS. This project highlights skills in modern front-end layout, navigation, mobile-friendly design, and streamlined user interaction—all crafted to deliver an engaging user experience and showcase strong UI/UX capabilities.",
    github: "https://github.com/athulnath03/KL15",
    stack: [SiNextdotjs, SiHtml5, SiTailwindcss],
  },

  {
    title: "AR Whiteboard System",
    year: "2024",
    description:
      "An interactive system that merges physical gestures with digital whiteboarding using real-time hand tracking, computer vision, and AR. Enables immersive learning and collaboration for classrooms, remote teams, and creative professionals.",
    github: "https://github.com/athulnath03/Augmented-Whiteboard-Using-OpenCV",
    stack: [SiPython, SiOpencv, SiReact],
  },

  {
    title: "Automated Timetable Generation System",
    year: "2023",
    description:
      "A system that automates schedule creation for schools and colleges, reducing manual effort and improving efficiency by handling constraints like faculty availability and room capacity. It streamlines academic planning and minimizes conflicts for administrators, faculty, and students.",
    github:
      "https://github.com/athulnath03/automatic-timetable-and-schedule-generator",
    stack: [SiPython, SiFlask, SiMysql],
  },
];

function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-24 lg:px-[150px] py-14">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          data-aos="zoom-in-up"
          className="
            mb-14
            text-center
            text-[clamp(2.5rem,6vw,4rem)]
            font-extrabold
            bg-gradient-to-r
            from-white
            to-neutral-500
            bg-clip-text
            text-transparent
          "
        >
          Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.05]
                p-6
                md:p-10
                transition-all
                duration-300
                hover:border-[#00ff88]
                hover:bg-white/[0.08]
              "
            >
              {/* Top gradient line */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-[3px]
                  w-full
                  origin-center
                  scale-x-0
                  bg-gradient-to-r
                  from-[#00ff88]
                  to-[#00d4ff]
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />

              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <span
                  className="
                    pt-1
                    text-sm
                    font-semibold
                    text-[#00ff88]
                    whitespace-nowrap
                  "
                >
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p
                className="
                  mb-6
                  text-justify
                  text-[clamp(1rem,2.5vw,1.125rem)]
                  leading-7
                  text-neutral-300
                "
              >
                {project.description}
              </p>

              {/* Footer */}
              <div
                className="
                  flex
                  justify-between
                  gap-5
                "
              >
                {/* Stack */}
                <div className="flex gap-3">
                  {project.stack.map((Icon, i) => (
                    <div
                      key={i}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-xl
                        transition
                        hover:border-[#00ff88]
                        hover:text-[#00ff88]
                      "
                    >
                      <Icon />
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
                     btn
                    "
                  >
                    View
                    <SiGithub />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
