const expertise = [
  {
    label: "FRONTEND",
    title: "Frontend Development",
    description:
      "Responsive and maintainable interfaces built with JavaScript, React, HTML5, CSS3, Tailwind CSS, Bootstrap and Sass/SCSS.",
  },
  {
    label: "WORDPRESS",
    title: "Custom WordPress Development",
    description:
      "Custom themes, tailored functionality, PHP development, Gutenberg and structured WordPress solutions built around real project requirements.",
  },
  {
    label: "DYNAMIC CONTENT",
    title: "Elementor Pro + ACF",
    description:
      "Flexible WordPress websites using Elementor Pro, ACF, custom post types and reusable dynamic content structures.",
  },
  {
    label: "COMMERCE",
    title: "WooCommerce",
    description:
      "Ecommerce solutions covering product systems, digital products, checkout customization, payment workflows and responsive shopping experiences.",
  },
  {
    label: "HEADLESS",
    title: "Headless WordPress",
    description:
      "WordPress used as a content backend with modern frontend technologies including React, Gatsby and GraphQL integrations.",
  },
  {
    label: "QUALITY",
    title: "Performance + Debugging",
    description:
      "Troubleshooting, performance optimization, responsive testing, technical SEO, staging, deployment and production maintenance.",
  },
];

function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-white/[0.08] px-6 py-20 md:py-24 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* LEFT LABEL */}
        <div>
          <p className="pt-2 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">02</span> / Expertise
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="max-w-[900px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
            Technologies and approaches I use to build{" "}
            <span className="font-serif font-normal italic text-violet-400">
              modern web experiences.
            </span>
          </h2>

          {/* CARDS */}
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            {" "}
            {expertise.map((item) => (
              <article
                key={item.title}
                className="
  group
  rounded-2xl
  border border-white/[0.09]
  bg-white/[0.025]
  p-6
  transition duration-300
  hover:-translate-y-1
  hover:border-violet-400/30
  hover:bg-white/[0.04]
  md:min-h-[220px]
  md:p-7
"
              >
                <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-violet-400">
                  {item.label}
                </p>
                <h3 className="mt-7 text-[22px] font-semibold tracking-[-0.8px] text-zinc-100 md:mt-10">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[430px] text-base leading-6 text-zinc-400">
                  {item.description}
                </p>
                <div className="mt-5 h-px w-0 bg-violet-400 transition-all duration-500 group-hover:w-12 md:mt-7" />{" "}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
