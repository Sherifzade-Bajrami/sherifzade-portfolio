import { useState } from "react";
import { motion } from "motion/react";

function ProjectCard({ project, index }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((current) =>
      current === project.images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setImageIndex((current) =>
      current === 0 ? project.images.length - 1 : current - 1,
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.09]
        bg-[#111318]
        transition
        duration-300
        hover:-translate-y-1
        hover:border-violet-400/30
      "
    >
      {/* TOP BAR */}
      <div
        className="
          flex
          h-10
          items-center
          gap-1.5
          border-b
          border-white/[0.06]
          bg-[#15171c]
          px-4
        "
      >
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />

        <span className="ml-auto font-mono text-[9px] text-zinc-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* IMAGE AREA */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={project.images[imageIndex]}
          alt={`${project.title} screenshot ${imageIndex + 1}`}
          className="
            h-full
            w-full
            object-cover
            object-top
            transition
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* ARROWS */}
        {project.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              className="
                absolute
                left-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/55
                text-sm
                text-white
                backdrop-blur-md
                transition
                hover:border-violet-400/40
                hover:bg-violet-500/15
              "
              aria-label="Previous screenshot"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="
                absolute
                right-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/55
                text-sm
                text-white
                backdrop-blur-md
                transition
                hover:border-violet-400/40
                hover:bg-violet-500/15
              "
              aria-label="Next screenshot"
            >
              →
            </button>
          </>
        )}

        {/* SCREEN COUNT */}
        {project.images.length > 1 && (
          <div
            className="
              absolute
              bottom-3
              right-3
              rounded-full
              border
              border-white/10
              bg-black/60
              px-2.5
              py-1
              font-mono
              text-[10px]
              text-zinc-300
              backdrop-blur-md
            "
          >
            {imageIndex + 1} / {project.images.length}
          </div>
        )}
      </div>

      {/* DOTS */}
      {project.images.length > 1 && (
        <div className="flex justify-center gap-2 px-6 pt-4">
          {project.images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setImageIndex(dotIndex)}
              aria-label={`Go to screenshot ${dotIndex + 1}`}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                imageIndex === dotIndex
                  ? "w-8 bg-violet-400"
                  : "w-2 bg-zinc-600 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-violet-400">
          {project.type}
        </p>

        <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.8px] text-zinc-100">
          {project.title}
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/[0.08]
                px-2.5
                py-1
                text-[10px]
                text-zinc-400
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 h-px w-8 bg-violet-400 transition-all duration-500 group-hover:w-16" />
      </div>
    </motion.article>
  );
}

export default ProjectCard;