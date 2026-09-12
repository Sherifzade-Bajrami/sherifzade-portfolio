const experience = [
  {
    period: "2022 — Present",
    role: "Web Developer",
    company: "Sidora AG",
    description:
      "Developing and maintaining production websites and ecommerce solutions across different industries. My work includes custom WordPress development, Elementor Pro, WooCommerce, PHP and modern frontend technologies, with a focus on responsive interfaces, dynamic content, performance and maintainable solutions.",
    technologies: [
      "WordPress",
      "PHP",
      "WooCommerce",
      "Elementor Pro",
      "ACF",
      "JavaScript",
      "React",
      "Gatsby",
      "GraphQL",
      "Tailwind CSS",
      "Bootstrap",
      "Sass / SCSS",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.08] px-6 py-20 md:py-24 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* LEFT LABEL */}
        <div>
          <p className="whitespace-nowrap pt-2 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">04</span> / Experience
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="max-w-[900px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
            Experience shaped through{" "}
            <span className="font-serif font-normal italic text-violet-400">
              real projects and continuous development.
            </span>
          </h2>

          <div className="mt-10 border-t border-white/[0.08] md:mt-14">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="
                  group
                  grid
                  gap-5
                  border-b
                  border-white/[0.08]
                  py-8
                  md:py-10
                  lg:grid-cols-[180px_1fr]
                  lg:gap-6
                  lg:py-12
                "
              >
                {/* PERIOD */}
                <div>
                  <p className="font-mono text-[14px] text-violet-400">
                    {item.period}
                  </p>
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-[26px] font-semibold tracking-[-1px] text-zinc-100 sm:text-[30px]">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-[16px] text-zinc-500">
                    {item.company}
                  </p>

                  <p className="mt-5 max-w-[760px] text-[16px] leading-7 text-zinc-400 sm:mt-6">
                    {item.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/[0.09]
                          px-3.5
                          py-2
                          text-[12px]
                          text-zinc-400
                          transition
                          duration-300
                          group-hover:border-violet-400/20
                          group-hover:text-zinc-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* DECORATIVE LINE */}
                  <div className="mt-7 h-px w-10 bg-violet-400 transition-all duration-500 group-hover:w-16 sm:mt-9" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;