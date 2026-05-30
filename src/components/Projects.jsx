import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiMysql,
  SiGithub,
  SiOpencv,
  SiTailwindcss,
  SiTypescript,
  SiLeaflet,
} from "react-icons/si";

const projects = [
  {
    title: "KL15 Depots",
    year: "2026",
    description:
      "KL15 is a Progressive Web App built with Next.js, designed for KSRTC bus commuters in Kerala. It simplifies the experience of reaching out to bus depots — users can quickly call a specific depot for enquiry, discover nearby depots using location-based search, and filter buses by timing with a direct redirect to the official KSRTC site. Built as a PWA for a fast, app-like experience right from the browser — no installation needed.",
    github: "https://github.com/athulnath03/KL15",
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiLeaflet],
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
                  items-center
                  gap-4
                "
              >
                {/* Stack */}
                <div
                  className="
                    flex-1
                    overflow-x-auto
                    scrollbar-hide
                    pb-2
                  "
                >
                  <div
                    className="
                      flex
                      gap-3
                      w-max
                      pr-2
                      hint-scroll
                    "
                  >
                    {project.stack.map((Icon, i) => (
                      <div
                        key={i}
                        className="
                          shrink-0
                          flex items-center justify-center
                          rounded-lg
                          border border-neutral-700
                          bg-neutral-900
                          p-4
                          text-sm
                          transition
                          hover:bg-neutral-800
                        "
                      >
                        <Icon className="text-lg" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <button className="btn flex items-center gap-2">
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
