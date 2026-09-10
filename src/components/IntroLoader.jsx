import { motion } from "motion/react";
import profileImage from "../assets/sherifzadeb.jpeg";

function IntroLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100%",
      }}
      transition={{
        duration: 1.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#090b0e]
      "
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/[0.10]
          blur-[150px]
        "
      />

      {/* SUBTLE SECOND GLOW */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[30%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-violet-400/[0.05]
          blur-[120px]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[1100px]
          flex-col
          items-center
          justify-center
          gap-10
          px-6
          lg:flex-row
          lg:gap-20
        "
      >
        {/* PHOTO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
            x: -40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[360px]
            w-[270px]
            shrink-0
            overflow-hidden
            rounded-[22px]
            border
            border-white/[0.08]
            bg-[#111318]
            shadow-2xl
            shadow-black/40
            sm:h-[420px]
            sm:w-[315px]
          "
        >
          <img
            src={profileImage}
            alt="Sherifzade Bajrami"
            className="
              block
              h-full
              w-full
              object-cover
              object-top
              grayscale
            "
          />

          {/* PHOTO OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#090b0e]/40
              via-transparent
              to-black/10
            "
          />

          {/* VIOLET BORDER */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[22px]
              ring-1
              ring-inset
              ring-violet-400/[0.10]
            "
          />
        </motion.div>

        {/* NAME SIDE */}
        <div className="text-center lg:text-left">
          {/* SMALL INTRO */}
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.5,
            }}
            className="
              mb-5
              font-mono
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Portfolio
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[650px]
              text-[50px]
              font-semibold
              leading-[0.94]
              tracking-[-3px]
              text-zinc-100
              sm:text-[66px]
              lg:text-[86px]
              lg:tracking-[-5px]
            "
          >
            Sherifzade

            <span
              className="
                block
                font-serif
                font-normal
                text-violet-400
              "
            >
              Bajrami.
            </span>
          </motion.h1>

          {/* VIOLET LINE */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 110,
              opacity: 1,
            }}
            transition={{
              delay: 0.95,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-8
              h-[2px]
              rounded-full
              bg-violet-400
              shadow-[0_0_20px_rgba(167,139,250,0.55)]
              lg:mx-0
            "
          />

          {/* ROLE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
            className="
              mt-6
              font-mono
              text-base
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Web Developer
          </motion.p>
        </div>
      </div>

      {/* BOTTOM PROGRESS LINE */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-violet-500
          via-violet-400
          to-transparent
        "
      />

      {/* TOP SUBTLE LINE */}
      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 1.2,
        }}
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-violet-400/20
          to-transparent
        "
      />
    </motion.div>
  );
}

export default IntroLoader;