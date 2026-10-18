import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function ProjectSlider({ images, fit = "cover" }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  return (
    <>
      <div className="relative overflow-hidden bg-[#0d0f13]">
        {/* BROWSER BAR */}
        <div className="flex h-11 items-center gap-2 border-b border-white/[0.07] bg-[#15171c] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

          <span className="ml-auto font-mono text-[10px] text-zinc-400">
            {String(currentImage + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        {/* IMAGE */}
        <div
          onClick={() => setIsOpen(true)}
          className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden bg-[#0b0d11]"
        >
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
              className={`
                absolute
                inset-0
                h-full
                w-full
                transition
                duration-300
                group-hover:scale-[1.01]
                ${
                  fit === "contain"
                    ? "object-contain object-center p-3 sm:p-4"
                    : "object-cover object-top"
                }
              `}
            />
          </AnimatePresence>

          {/* ZOOM INDICATOR */}
          <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[11px] text-zinc-300 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            View full size ↗
          </div>

          {fit !== "contain" && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          )}

          {/* LEFT ARROW */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous screenshot"
              className="
                absolute
                left-4
                top-1/2
                z-10
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
          )}

          {/* RIGHT ARROW */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next screenshot"
              className="
                absolute
                right-4
                top-1/2
                z-10
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
          )}
        </div>

        {/* DOTS */}
        {images.length > 1 && (
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
        )}
      </div>

      {/* FULLSCREEN POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-md
              sm:p-6
              lg:p-10
            "
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close project preview"
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-[20px]
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              ×
            </button>

            {/* LARGE IMAGE */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                flex
                h-[85vh]
                w-full
                max-w-[1500px]
                items-center
                justify-center
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`popup-${currentImage}`}
                  src={images[currentImage]}
                  alt={`Project screenshot ${currentImage + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    max-h-full
                    max-w-full
                    rounded-xl
                    object-contain
                    shadow-2xl
                  "
                />
              </AnimatePresence>

              {/* POPUP LEFT */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous screenshot"
                  className="
                    absolute
                    left-2
                    top-1/2
                    flex
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-xl
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-violet-500/30
                    sm:left-5
                  "
                >
                  ←
                </button>
              )}

              {/* POPUP RIGHT */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                  className="
                    absolute
                    right-2
                    top-1/2
                    flex
                    h-12
                    w-12
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    text-xl
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-violet-500/30
                    sm:right-5
                  "
                >
                  →
                </button>
              )}

              {/* COUNTER */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-2 font-mono text-[11px] text-zinc-300 backdrop-blur-md">
                {String(currentImage + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectSlider;