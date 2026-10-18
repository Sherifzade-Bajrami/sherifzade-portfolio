import { motion } from "motion/react";
import TypingCode from "./TypingCode";

function Hero({ startAnimation }) {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-88px)] max-w-[1240px] items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24"
    >
      {/* LEFT SIDE */}
      <div>
        {/* AVAILABILITY */}
        <div className="mb-8 inline-flex items-center gap-3 text-base text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.08)]" />
          Available for opportunities
        </div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-[780px] text-[52px] font-semibold leading-[0.98] tracking-[-3px] text-zinc-100 sm:text-[64px] lg:text-[76px] lg:tracking-[-4px]"
        >
          I build modern software from{" "}
          <span className="font-serif font-normal italic text-violet-400">
            idea to production.
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="mt-8 max-w-[660px] text-[18px] leading-8 text-zinc-400 lg:text-[17px]"
        >
          I'm Sherifzade Bajrami, a Full-Stack Engineer focused on building
          modern web applications, REST APIs and AI integrations using React,
          TypeScript, Node.js, PHP and MySQL.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.22,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-wrap items-center gap-7"
        >
          <a
            href="#projects"
            className="rounded-md bg-zinc-100 px-6 py-3.5 text-base font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            View selected work
          </a>

          <a
            href="#contact"
            className="group text-base text-zinc-300 transition hover:text-white"
          >
            Contact me
            <span className="ml-2 inline-block transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="/cv/Sherifzade-Bajrami-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center text-base text-zinc-300 transition hover:text-violet-400"
          >
            View CV

            <span className="ml-2 inline-block transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.18,
          ease: "easeOut",
        }}
        className="w-full lg:justify-self-end"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111318] shadow-2xl shadow-black/30">
          {/* WINDOW HEADER */}
          <div className="flex h-12 items-center gap-2 border-b border-white/[0.06] bg-[#15171c] px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

            <span className="ml-auto font-mono text-sm text-zinc-400">
              fullstack.js
            </span>
          </div>

          {/* TYPING CODE */}
          <TypingCode start={startAnimation} />

          {/* BOTTOM STATS */}
          <div className="grid grid-cols-3 border-t border-white/[0.06]">
            <div className="border-r border-white/[0.06] px-2 py-5 text-center">
              <p className="text-[12px] font-medium text-zinc-300">
                Full Stack
              </p>

              <p className="mt-1 text-[11px] text-zinc-400">
                Frontend → Backend
              </p>
            </div>

            <div className="border-r border-white/[0.06] px-2 py-5 text-center">
              <p className="text-[12px] font-medium text-zinc-300">
                API Driven
              </p>

              <p className="mt-1 text-[11px] text-zinc-400">
                REST & integrations
              </p>
            </div>

            <div className="px-2 py-5 text-center">
              <p className="text-[12px] font-medium text-zinc-300">
                AI Integration
              </p>

              <p className="mt-1 text-[11px] text-zinc-400">
                Intelligent features
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;