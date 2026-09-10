import { motion } from "motion/react";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.08] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-violet-400
            via-violet-300
            to-fuchsia-300
            px-8
            py-14
            text-zinc-950
            sm:px-12
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* DECORATIVE BACKGROUND */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-[100px]
              -top-[140px]
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-black/[0.08]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-[20px]
              -top-[60px]
              h-[260px]
              w-[260px]
              rounded-full
              border
              border-black/[0.06]
            "
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-[950px]">
            {/* SMALL LABEL */}
            <p
              className="
                font-mono
                text-[13px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-zinc-900/75
              "
            >
              Have a role or project in mind?
            </p>

            {/* TITLE */}
            <h2
              className="
                mt-7
                max-w-[900px]
                text-[44px]
                font-semibold
                leading-[1.03]
                tracking-[-2.5px]
                sm:text-[58px]
                lg:text-[72px]
                lg:tracking-[-4px]
              "
            >
              Let's build something that{" "}
              <span className="font-serif font-normal italic">
                works beautifully.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-[780px]
                text-[17px]
                leading-8
                text-zinc-900/75
                sm:text-[18px]
              "
            >
              I'm open to web development opportunities, remote roles and
              project-based collaborations. If you have something interesting
              in mind, feel free to reach out.
            </p>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              {/* EMAIL */}
              <a
                href="mailto:sherifzadeb@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#090b0e]
                  px-7
                  py-4
                  text-[15px]
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-zinc-900
                "
              >
                sherifzadeb@gmail.com
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  px-2
                  py-4
                  text-[16px]
                  font-semibold
                  text-zinc-950
                  transition
                  duration-300
                  hover:opacity-60
                "
              >
                LinkedIn

                <span
                  className="
                    ml-2
                    inline-block
                    transition
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Sherifzade-Bajrami"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  px-2
                  py-4
                  text-[16px]
                  font-semibold
                  text-zinc-950
                  transition
                  duration-300
                  hover:opacity-60
                "
              >
                GitHub

                <span
                  className="
                    ml-2
                    inline-block
                    transition
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* BOTTOM DECORATION */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[8%]
              h-px
              w-[84%]
              bg-gradient-to-r
              from-transparent
              via-black/20
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;