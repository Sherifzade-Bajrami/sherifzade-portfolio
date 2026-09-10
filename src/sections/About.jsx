function About() {
  const highlights = [
    "Modern frontend development",
    "WordPress & custom solutions",
    "Debugging & performance",
    "Responsive UI implementation",
  ];

  return (
    <section
      id="about"
      className="border-t border-white/[0.08] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* LEFT LABEL */}
        <div>
          <p className="pt-2 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">01</span> / About
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="max-w-[900px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
            Web development with a practical{" "}
            <span className="font-serif font-normal italic text-violet-400">
              product mindset.
            </span>
          </h2>

          <div className="mt-9 max-w-[900px] space-y-5">
            <p className="text-lg leading-8 text-zinc-400">
              I build modern websites and digital experiences from design
              implementation through development, launch and maintenance.
              My work combines frontend development with WordPress,
              eCommerce and custom web solutions.
            </p>

            <p className="text-lg leading-8 text-zinc-400">
              I enjoy working beyond visual implementation — understanding
              how a project is structured, solving technical problems,
              improving performance and creating experiences that remain
              maintainable as they grow.
            </p>
          </div>

          <div className="mt-10 grid border-y border-white/[0.08] sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item}
                className={`
                  group flex items-center gap-4 py-5
                  transition duration-300
                  ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/[0.08] sm:pr-6"
                      : "sm:pl-6"
                  }
                  ${index < 2 ? "border-b border-white/[0.08]" : ""}
                `}
              >
                <span className="font-mono text-base font-semibold text-violet-400">
                  0{index + 1}
                </span>

                <span className="text-base text-zinc-300 transition duration-300 group-hover:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;