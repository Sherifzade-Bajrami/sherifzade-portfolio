import profileImage from "../assets/sherifzadeb.jpeg";

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
          <p className="whitespace-nowrap pt-2 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">01</span> / About
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:items-start md:gap-8 lg:grid-cols-[320px_1fr] lg:gap-14">
            {" "}
            {/* PROFILE IMAGE */}
            <div className="group">
              <div className="relative overflow-hidden rounded-[18px] border border-white/[0.09] bg-white/[0.02]">
                <img
                  src={profileImage}
                  alt="Sherifzade Bajrami"
                  className="aspect-[4/5] w-full object-cover object-center grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />{" "}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Web Developer
                </span>
              </div>
            </div>
            {/* ABOUT TEXT */}
            <div>
              <h2 className="max-w-[760px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
                Web development with a practical{" "}
                <span className="font-serif font-normal italic text-violet-400">
                  product mindset.
                </span>
              </h2>

              <div className="mt-9 max-w-[760px] space-y-5">
                <p className="text-[18px] leading-8 text-zinc-400">
                  I build modern websites and digital experiences from design
                  implementation through development, launch and maintenance. My
                  work combines frontend development with WordPress, ecommerce
                  and custom web solutions.
                </p>

                <p className="text-[18px] leading-8 text-zinc-400">
                  I enjoy working beyond visual implementation — understanding
                  how a project is structured, solving technical problems,
                  improving performance and creating experiences that remain
                  maintainable as they grow.
                </p>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-12 grid border-y border-white/[0.08] sm:grid-cols-2">
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
                <span className="font-mono text-[14px] font-semibold text-violet-400">
                  0{index + 1}
                </span>

                <span className="text-[16px] text-zinc-300 transition duration-300 group-hover:text-white">
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
