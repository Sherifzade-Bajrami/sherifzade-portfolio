function ProjectCard({ project, index }) {
  const reverse = index % 2 !== 0;

  return (
    <article className="group border-t border-white/[0.08] py-14 lg:py-20">
      {/* TOP INFO */}
      <div className="mb-7 flex items-center justify-between">
        <span className="font-mono text-[14px] font-semibold text-violet-400">
          {project.number}
        </span>

        <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-zinc-500">
          {project.category}
        </span>
      </div>

      {/* PROJECT CARD */}
      <div
        className={`
          grid overflow-hidden rounded-[22px]
          border border-white/[0.08]
          bg-white/[0.025]
          transition duration-500
          hover:border-violet-400/25
          hover:bg-white/[0.035]
          lg:grid-cols-2
        `}
      >
        {/* PREVIEW */}
        <div
          className={`
            relative min-h-[340px] overflow-hidden
            ${reverse ? "lg:order-2" : ""}
          `}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="
                h-full w-full object-cover
                transition duration-700
                group-hover:scale-[1.025]
              "
            />
          ) : (
            <div
              className="
                flex h-full min-h-[340px]
                items-center justify-center
                bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.20),transparent_38%),linear-gradient(145deg,#16181e,#0d0f13)]
              "
            >
              <div className="relative text-center">
                <div className="mx-auto mb-6 h-[1px] w-12 bg-violet-400" />

                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-500">
                  Selected Project
                </p>

                <p className="mt-3 text-[30px] font-semibold tracking-[-1px] text-zinc-200">
                  {project.title}
                </p>
              </div>
            </div>
          )}

          {/* SUBTLE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* CONTENT */}
        <div
          className={`
            flex min-h-[340px] flex-col justify-center
            p-8 sm:p-10 lg:p-12
            ${reverse ? "lg:order-1" : ""}
          `}
        >
          <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.15em] text-violet-400">
            {project.category}
          </p>

          <h3 className="mt-5 text-[38px] font-semibold tracking-[-1.7px] text-zinc-100 sm:text-[44px]">
            {project.title}
          </h3>

          <p className="mt-5 max-w-[470px] text-[16px] leading-7 text-zinc-400">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border border-white/[0.09]
                  bg-white/[0.02]
                  px-3.5 py-2
                  text-[12px]
                  text-zinc-400
                  transition duration-300
                  group-hover:border-white/[0.14]
                  group-hover:text-zinc-300
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* DECORATIVE LINE */}
          <div className="mt-10 flex items-center gap-3">
            <div className="h-px w-10 bg-violet-400 transition-all duration-500 group-hover:w-16" />

            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-600">
              Case Study
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;