import React, { useState } from "react";
import { SiBehance, SiGithub, SiInstagram, SiLinkedin, SiX,} from "react-icons/si";

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status !== "idle") return;

    setStatus("loading");

    const form = e.currentTarget;

    try {
      console.log("Submitting...");
      const response = await fetch("https://formspree.io/f/mldlello", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 2500);
      } else {
        console.log(await response.text());
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  const socials = [
    {
      icon: SiGithub,
      href: "https://github.com/athulnath03",
    },
    {
      icon: SiLinkedin,
      href: "https://linkedin.com/in/athulnath03",
    },
    {
      icon: SiInstagram,
      href: "https://instagram.com/athulnath03",
    },
    {
      icon: SiX,
      href: "https://x.com/athulnath03",
    },
    {
      icon: SiBehance,
      href: "https://behance.net/athulnath03",
    },
  ];

  return (
    <section id="connect" className="px-5 md:px-24 lg:px-32 py-16">
      <div className="max-w-7xl mx-auto">
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
          Let's Connect
        </h2>

        <form
          onSubmit={handleSubmit}
          data-aos="zoom-in-up"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row gap-5">
            {["name", "email"].map((field) => (
              <fieldset
                key={field}
                className="flex-1 rounded-xl border border-white/15 bg-white/[0.04]
                backdrop-blur-xl px-5 py-4
                focus-within:border-[#00ff88]
                focus-within:shadow-[0_0_20px_rgba(0,255,136,.18)]"
              >
                <legend className="px-2 text-sm text-white/80 capitalize">
                  {field}
                </legend>

                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  autoComplete={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "name"
                      ? "e.g. Athul Nath M"
                      : "e.g. myself.athul@gmail.com"
                  }
                  className="w-full bg-transparent outline-none text-white placeholder:text-white/35"
                />
              </fieldset>
            ))}
          </div>

          <fieldset
            className="rounded-xl border border-white/15 bg-white/[0.04]
            backdrop-blur-xl px-5 py-4
            focus-within:border-[#00ff88]
            focus-within:shadow-[0_0_20px_rgba(0,255,136,.18)]"
          >
            <legend className="px-2 text-sm text-white/80">Message</legend>

            <textarea
              rows="5"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Hi there! I'd love to connect with you..."
              className="w-full resize-none bg-transparent outline-none text-white placeholder:text-white/35"
            />

            {/* <button
              disabled={status === "loading"}
              className={`
              mt-5 ml-auto flex items-center justify-center
              rounded-xl border px-8 py-3
              transition-all duration-300
              overflow-hidden relative

              ${
                status === "success"
                  ? "w-full border-[#00ff88] text-[#00ff88]"
                  : "border-white/10 hover:border-[#00ff88] hover:text-[#00ff88]"
              }
              `}
            >
              {status === "loading" ? (
                <span className="spinner" />
              ) : status === "success" ? (
                "Gotcha! I'll get back to you soon."
              ) : (
                "Send"
              )}
            </button> */}

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`
                  relative overflow-hidden
                  transition-all duration-500

                  ${
                    status === "success"
                      ? `
                        absolute
                        inset-0
                        w-full
                        h-full
                        flex items-center justify-center
                        rounded-xl
                        border border-[#00ff88]
                        bg-white/[0.04]
                        backdrop-blur-xl
                        text-[#00ff88]
                      `
                      : `
                        btn
                      `
                  }
                `}
              >
                {status === "loading" ? (
                  <span className="spinner" />
                ) : status === "success" ? (
                  "Gotcha! I'll get back to you soon."
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </fieldset>
        </form>

        <div
          data-aos="flip-down"
          className="
            mt-10
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6

            flex flex-col-reverse
            lg:flex-row
            items-center
            justify-between
            gap-6
            flex-wrap-reverse
            
          "
        >
          <div className="flex gap-4">
            {socials.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  relative
                  overflow-hidden

                  w-14 h-14
                  rounded-xl

                  flex items-center justify-center

                  bg-white/[0.05]
                  border border-white/10

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:scale-105
                  hover:border-[#00ff88]
                  hover:bg-white/[0.08]

                  before:absolute
                  before:top-0
                  before:left-[-100%]
                  before:w-full
                  before:h-full

                  before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]

                  before:transition-all
                  before:duration-700

                  hover:before:left-[100%]
                "
              >
                <Icon 
                  className="
                    relative
                    z-10
                    text-2xl
                    text-white
                    transition-all
                    duration-300
                    group-hover:text-[#00ff88]
                    group-hover:scale-110
                  "
                />
              </a>
            ))}
          </div>

          <div className="flex text-lg">
            <div className="relative h-[28px] w-[140px] overflow-hidden text-right text-[#00ff88]">
              <span className="rotate-text">github.com</span>

              <span className="rotate-text delay-2">linkedin.com</span>

              <span className="rotate-text delay-4">instagram.com</span>

              <span className="rotate-text delay-6">twitter.com</span>

              <span className="rotate-text delay-8">behance.net</span>
            </div>

            <span className="text-white">/athulnath03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
