import { motion } from "motion/react";

const technologies = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "WooCommerce",
  "PHP",
  "ACF",
  "Elementor Pro",
  "Sass / SCSS",
  "Git",
  "HTML5",
  "CSS3",
];

function TechnologyGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {technologies.map((technology) => (
        <div
          key={technology}
          className="flex shrink-0 items-center"
        >
          <span
            className="
              whitespace-nowrap
              px-6
              text-[16px]
              font-normal
              tracking-[-0.02em]
              text-zinc-400
              transition-colors
              duration-300
              hover:text-zinc-100
              sm:px-8
              sm:text-[17px]
            "
          >
            {technology}
          </span>

          <span
            className="
              h-[4px]
              w-[4px]
              shrink-0
              rounded-full
              bg-violet-400
            "
          />
        </div>
      ))}
    </div>
  );
}

function TechMarquee() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.07]
        bg-white/[0.015]
        py-6
      "
    >
      {/* LEFT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-20
          bg-gradient-to-r
          from-[#090b0e]
          to-transparent
          sm:w-32
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-20
          bg-gradient-to-l
          from-[#090b0e]
          to-transparent
          sm:w-32
        "
      />

      {/* MARQUEE */}
      <motion.div
        className="flex w-max items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <TechnologyGroup />
        <TechnologyGroup />
      </motion.div>
    </section>
  );
}

export default TechMarquee;