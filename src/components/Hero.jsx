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
        <div className="mb-8 inline-flex items-center gap-3 text-base text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.08)]"></span>
          Available for opportunities
        </div>

        <h1 className="max-w-[760px] text-[52px] font-semibold leading-[0.98] tracking-[-3px] text-zinc-100 sm:text-[64px] lg:text-[76px] lg:tracking-[-4px]">
          I build modern web experiences that are{" "}
          <span className="font-serif font-normal italic text-violet-400">
            fast, polished & reliable.
          </span>
        </h1>

        <p className="mt-8 max-w-[640px] text-[18px] leading-8 text-zinc-400 lg:text-[17px]">
          I'm Sherifzade Bajrami, a developer focused on building modern,
          responsive and maintainable digital experiences with React,
          JavaScript, WordPress and modern web technologies.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-7">
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
            <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
          <a
            href="/cv/Sherifzade-Bajrami-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="
            group
            inline-flex
            items-center
            text-base
            text-zinc-300
            transition
            hover:text-violet-400
          "
          >
            View CV
            <span className="ml-2 inline-block transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:justify-self-end">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111318] shadow-2xl shadow-black/30">
          {/* WINDOW HEADER */}
          <div className="flex h-12 items-center gap-2 border-b border-white/[0.06] bg-[#15171c] px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

            <span className="ml-auto font-mono text-sm text-zinc-600">
              developer.js
            </span>
          </div>

          <TypingCode start={startAnimation} />

          {/* BOTTOM STATS */}
          <div className="grid grid-cols-3 border-t border-white/[0.06]">
            <div className="border-r border-white/[0.06] px-2 py-5 text-center">
              <p className="text-[12px] font-medium text-zinc-300">
                Responsive
              </p>
              <p className="mt-1 text-[11px] text-zinc-600">Desktop → Mobile</p>
            </div>

            <div className="border-r border-white/[0.06] px-2 py-5 text-center">
              <p className="text-[12px] font-medium text-zinc-300">
                Performance
              </p>
              <p className="mt-1 text-[11px] text-zinc-600">Speed focused</p>
            </div>

            <div className="px-2 py-5 text-center">
              <p className="text-[12px] font-medium text-zinc-300">
                Maintainable
              </p>
              <p className="mt-1 text-[11px] text-zinc-600">Clean structure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
