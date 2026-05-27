import React, { useEffect, useRef } from "react";

const AboutMe = () => {
  const textRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const words = ["Developer.", "Designer."];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const currentWord = words[wordIndex];

      // Update index first
      if (!deleting) {
        charIndex++;
      } else {
        charIndex--;
      }

      // Render text
      if (textRef.current) {
        textRef.current.textContent = currentWord.substring(0, charIndex);
      }

      let speed = deleting ? 80 : 120;

      // Finished typing
      if (!deleting && charIndex === currentWord.length) {
        speed = 2000;
        deleting = true;
      }

      // Finished deleting
      if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about-me" className="px-5 md:px-24 lg:px-[150px] py-12 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          data-aos="zoom-in-up"
          className="
            text-center
            text-4xl
            md:text-6xl
            font-black
            mb-14
            bg-gradient-to-r
            from-white
            to-zinc-500
            bg-clip-text
            text-transparent
          "
        >
          About Me
        </h2>

        <div data-aos="zoom-in-up" className="flex justify-center">
          {/* Container */}
          <div className="relative w-full flex justify-center">
            {/* Sphere 1 */}
            <div
              className="
                absolute
                top-0
                -right-2
                w-[100px]
                h-[100px]
                md:w-[180px]
                md:h-[180px]
                rounded-full
                blur-[1px]
                opacity-70
                animate-[float_20s_ease-in-out_infinite]
                md:block
              "
              style={{
                background: "linear-gradient(135deg,#8b7355,#4a3f36,#2a2520)",
              }}
            />
            {/* Sphere 2 */}
            <div
              className="
                absolute
                top-0
                -right-2
                w-[80px]
                h-[80px]
                md:w-[120px]
                md:h-[120px]
                rounded-full
                blur-[1px]
                opacity-70
                animate-[float_20s_ease-in-out_infinite]
                md:block
              "
              style={{
                background: "linear-gradient(135deg,#8b7355,#4a3f36,#2a2520)",
              }}
            />

            {/* Sphere 3 */}
            <div
              className="
                absolute
                bottom-0
                -left-2
                w-[120px]
                h-[120px]
                md:w-[220px]
                md:h-[220px]
                rounded-full
                opacity-70
                animate-[float_20s_ease-in-out_infinite]
                md:block
              "
              style={{
                animationDelay: "-5s",
                background: "linear-gradient(135deg,#8b7355,#4a3f36,#2a2520)",
              }}
            />
            
            {/* Sphere 4 */}
            <div
              className="
                absolute
                bottom-0
                -left-2
                w-[60px]
                h-[60px]
                md:w-[120px]
                md:h-[120px]
                rounded-full
                opacity-70
                animate-[float_20s_ease-in-out_infinite]
                md:block
              "
              style={{
                animationDelay: "-5s",
                background: "linear-gradient(135deg,#8b7355,#4a3f36,#2a2520)",
              }}
            />

            {/* Glass Card */}
            <div
              className="
                relative
                z-10
                w-full
                rounded-[24px]
                border
                border-white/15
                bg-white/[0.04]
                backdrop-blur-l
                shadow-[0_8px_40px_rgba(0,0,0,0.45)]
                p-6
                md:p-10
              "
            >
              {/* Typewriter */}
              <div className="mb-8">
                <h3 className="flex flex-wrap items-center text-2xl md:text-5xl font-semibold">
                  I am a&nbsp;
                  <span ref={textRef} className="text-emerald-400" />
                  <span
                    className="
                      ml-1
                      h-[1em]
                      w-[2px]
                      bg-emerald-400
                      animate-pulse
                    "
                  />
                </h3>
              </div>

              {/* Description */}
              <p
                className="
                  text-zinc-300
                  leading-8
                  text-base
                  md:text-lg
                  text-justify
                "
              >
                A passionate Software Developer with a creative edge in UI/UX
                design and a strong foundation in full-stack development. I
                enjoy building smart, user-friendly digital solutions—from
                interactive web apps to innovative projects like augmented
                reality tools. With hands-on experience in startup and
                tech-driven environments, I bring adaptability, attention to
                detail, and a constant drive to learn and grow.
              </p>

              {/* Footer */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex md:flex-col justify-between gap-4">
                  <div>
                    <p className="font-semibold text-zinc-300">Current Role</p>

                    <h4 className="text-white text-lg font-bold">
                      Full Stack Developer | ISRO - LPSC
                    </h4>

                    <p className="text-zinc-400">May 2025 – Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(10px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
