import {
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

const icons = [
  { Icon: SiFigma, label: "Figma" },
  { Icon: SiReact, label: "React.js" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTailwindcss, label: "Tailwind CSS" },
  { Icon: SiHtml5, label: "HTML5" },
  { Icon: SiCss, label: "CSS3" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
];

export default function Hero() {
  return (
    <section
      className="
        relative isolate
        min-h-screen
        flex flex-col
        items-center
        justify-center
        overflow-hidden
        text-center
      "
    >
      
      {/* Ghost Text */}
      <div
        className="
          hidden sm:flex

          absolute inset-0
          items-center justify-center
          pointer-events-none
          select-none
          z-0
        "
      >
        <h2
          className="
            flex flex-col
            items-center
            leading-[0.82]
            font-black
            uppercase
            text-transparent
            opacity-80
            tracking-[-0.08em]

            text-[7rem]
            md:text-[10rem]
            lg:text-[14rem]
            xl:text-[18rem]

            [-webkit-text-stroke:1.5px_rgba(255,255,255,0.08)]

            [mask-image:radial-gradient(circle_at_center,transparent_14%,black_48%)]
            [-webkit-mask-image:radial-gradient(circle_at_center,transparent_14%,black_48%)]
          "
        >
          <span>FULLSTACK</span>
          <span>DEVELOPER</span>
        </h2>
      </div>

      {/* Content */}
      <div
        className="relative z-20 px-5"
        data-aos="zoom-in-up"
      >
        {/* Avatar */}
        <div
          className="
            w-[150px]
            h-[150px]
            rounded-full
            overflow-hidden
            border-[3px]
            border-[#00ff88]
            mx-auto
            animate-fadeIn1
          "
        >
          <img
            src="https://framerusercontent.com/images/tDVxbKA5BH2FH4wnZBagzTuJI.jpg?scale-down-to=512"
            alt="Athul Nath"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-4 text-[#888] animate-fadeIn2">
          Hello, I'm
        </p>

        <h1
          className="
            text-[clamp(2.5rem,6vw,4rem)]
            font-black
            tracking-[-0.02em]
            bg-gradient-to-r
            from-[#00ff88]
            to-[#00d4ff]
            bg-clip-text
            text-transparent
            animate-fadeIn3
          "
        >
          ATHUL NATH M
        </h1>

        <p
          className="
            mt-1
            text-sm
            tracking-[0.18em]
            uppercase
            text-[#00ff88]/60
            
          "
        >
          Full Stack Developer
        </p>

        {/* Buttons */}
        <div 
          className="
            flex 
            items-center
            justify-center 
            flex-row 
            md:items-center 
            gap-4
            sm:gap-6 
            mt-5
        ">
          <a 
            href="#connect" 
            className="btn flex-1 justify-center text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3">
            Let's Connect
          </a>

          <a
            href="/Resume_Athul_Nath_M.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn flex-1 justify-center text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-3"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Tech Slider */}
      <div data-aos="zoom-in-up" className="logo-wrapper overflow-visible">
        {icons.map(({ Icon, label }, i) => (
          <div key={label} className="relative group">
            <span
              className="
                absolute
                -top-9
                left-1/2
                -translate-x-1/2
                opacity-0
                group-hover:opacity-100
                transition
                bg-[#1a1a1a]
                text-[11px]
                px-2 py-1
                rounded
                border
                border-white/10
              "
            >
              {label}
            </span>

            <div
              className="
                logo-item
                transition
                group-hover:text-[#00ff88]
                group-hover:scale-110
              "
              style={{
                animationDelay: `calc(15s / 8 * (${8 - (i + 1)}) * -1)`,
              }}
            >
              <Icon />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <svg
          className="w-5 h-5 text-white/20 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
