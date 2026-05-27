import React, { useEffect } from "react";
import TagCloud from "TagCloud";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    const container = ".tagcloud";

    const el = document.querySelector(container);
    if (el) el.innerHTML = "";

    const skillsArray = [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
      "Firebase",
      "Supabase",
      "GraphQL",
      "REST API",
      "AWS",
      "Vercel",
      "Netlify",
      "Figma",
      "Framer",
      "Photoshop",
      "Illustrator",
      "Canva",
      "Wix",
    ];

    const uniqueSkills = [...new Set(skillsArray)];

    const radius =
      window.innerWidth < 480 ? 180 : window.innerWidth < 768 ? 220 : 300;

    const tagCloud = TagCloud(container, uniqueSkills, {
      radius,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
      depth: 1,
    });

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const sphere = document.querySelector(container);

    const start = (e) => {
      dragging = true;

      lastX = e.touches ? e.touches[0].clientX : e.clientX;

      lastY = e.touches ? e.touches[0].clientY : e.clientY;
    };

    const move = (e) => {
      if (!dragging) return;

      const x = e.touches ? e.touches[0].clientX : e.clientX;

      const y = e.touches ? e.touches[0].clientY : e.clientY;

      tagCloud.angleX += (y - lastY) * 0.002;
      tagCloud.angleY += (x - lastX) * 0.002;

      lastX = x;
      lastY = y;
    };

    const end = () => {
      dragging = false;
    };

    sphere?.addEventListener("mousedown", start);
    sphere?.addEventListener("mousemove", move);
    document.addEventListener("mouseup", end);

    sphere?.addEventListener("touchstart", start, {
      passive: true,
    });

    sphere?.addEventListener("touchmove", move, {
      passive: true,
    });

    document.addEventListener("touchend", end);

    return () => {
      if (el) el.innerHTML = "";

      sphere?.removeEventListener("mousedown", start);

      sphere?.removeEventListener("mousemove", move);

      document.removeEventListener("mouseup", end);

      sphere?.removeEventListener("touchstart", start);

      sphere?.removeEventListener("touchmove", move);

      document.removeEventListener("touchend", end);
    };
  }, []);

  const skillGroups = [
    {
      title: "FRONTEND",
      skills: [
        { icon: <SiReact size={18} />, text: "React.JS" },
        { icon: <SiNextdotjs size={18} />, text: "Next.JS" },
        { icon: <SiTailwindcss size={18} />, text: "Tailwind CSS" },
        { icon: <SiJavascript size={18} />, text: "JavaScript" },
      ],
    },

    {
      title: "BACKEND",
      skills: [
        { icon: <SiPython size={18} />, text: "Python" },
        { icon: <SiNodedotjs size={18} />, text: "Node.JS" },
        { icon: <SiMysql size={18} />, text: "MySQL" },
      ],
    },

    {
      title: "TOOLS",
      skills: [
        { icon: <SiGit size={18} />, text: "Git" },
        { icon: <SiGithub size={18} />, text: "GitHub" },
      ],
    },
  ];

  const SkillTile = ({ icon, text }) => (
    <div
      className="
        flex items-center gap-2
        rounded-lg
        border border-neutral-700
        bg-neutral-900
        px-4 py-2
        text-sm
        transition
        hover:-translate-y-1
        hover:bg-neutral-800
      "
    >
      {icon}
      <span>{text}</span>
    </div>
  );

  return (
    <section
      id="skills"
      className="
        px-6
        md:px-24
        lg:px-32
        py-16
      "
    >
      <div className="max-w-7xl mx-auto">
        <h2
          data-aos="zoom-in-up"
          className="
            text-center
            text-4xl
            md:text-6xl
            font-black
            mb-0
            md:mb-14
            bg-gradient-to-r
            from-white
            to-zinc-500
            bg-clip-text
            text-transparent
          "
        >
          My Skills
        </h2>

        <div
          data-aos="zoom-in-up"
          className="
            flex
            flex-col-reverse
            lg:flex-row
            items-center
            justify-between            
            sm:gap-10  
          "
        >
          {/* Left - Skills List */}

          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-white font-bold text-center lg:text-left">
                  {group.title}
                </h3>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {group.skills.map((skill) => (
                    <SkillTile
                      key={skill.text}
                      icon={skill.icon}
                      text={skill.text}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Right - Sphere */}
          <div
            className="
              flex
              items-center
              justify-center
              overflow-hidden
              w-full
              lg:w-[550px]
              min-h-[420px]
            "
          >
            <span
              className="
                tagcloud
                cursor-grab
                select-none
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
