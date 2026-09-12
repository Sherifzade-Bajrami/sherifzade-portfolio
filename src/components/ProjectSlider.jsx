import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function ProjectSlider({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  return (
    <div className="relative overflow-hidden bg-[#0d0f13]">
      {/* BROWSER BAR */}
      <div className="flex h-11 items-center gap-2 border-b border-white/[0.07] bg-[#15171c] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

        <span className="ml-auto font-mono text-[10px] text-zinc-600">
          {String(currentImage + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>

      {/* IMAGE */}
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Project screenshot ${currentImage + 1}`}
            loading="lazy"
            decoding="async"
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.99,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </AnimatePresence>

        {/* SUBTLE OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* LEFT ARROW */}
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous screenshot"
          className="
            absolute
            left-4
            top-1/2
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/55
            text-white
            backdrop-blur-md
            transition
            duration-300
            hover:border-violet-400/40
            hover:bg-violet-500/20
          "
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          type="button"
          onClick={nextImage}
          aria-label="Next screenshot"
          className="
            absolute
            right-4
            top-1/2
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/55
            text-white
            backdrop-blur-md
            transition
            duration-300
            hover:border-violet-400/40
            hover:bg-violet-500/20
          "
        >
          →
        </button>
      </div>

      {/* DOTS */}
      <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] bg-[#111318] px-5 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Show screenshot ${index + 1}`}
            className={`
              h-[5px]
              rounded-full
              transition-all
              duration-300
              ${
                currentImage === index
                  ? "w-8 bg-violet-400"
                  : "w-4 bg-zinc-700 hover:bg-zinc-500"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSlider;
