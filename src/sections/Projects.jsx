import customThemeScreenshots from "../data/projects";
import ProjectSlider from "../components/ProjectSlider";
import elementorScreenshots from "../data/elementorProjects";
import woocommerceScreenshots from "../data/woocommerceProjects";

function Projects() {
  const technologies = ["WordPress", "PHP", "ACF", "JavaScript", "SCSS"];

  return (
    <section
      id="projects"
      className="border-t border-white/[0.08] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* LEFT SECTION LABEL */}
        <div>
          <p className="whitespace-nowrap pt-2 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">03</span> / Selected Work
          </p>
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div>
          {/* SECTION TITLE */}
          <h2 className="max-w-[900px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
            A selection of work across{" "}
            <span className="font-serif font-normal italic text-violet-400">
              modern web development.
            </span>
          </h2>

          <p className="mt-8 max-w-[720px] text-[17px] leading-8 text-zinc-400">
            A selection of custom WordPress projects focused on responsive
            frontend development, flexible content and maintainable solutions.
          </p>

          {/* PROJECT SHOWCASE */}
          <div
            className="
              mt-14
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.09]
              bg-[#111318]
              lg:grid
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* LEFT - SCREENSHOT SLIDER */}
            <ProjectSlider images={customThemeScreenshots} />

            {/* RIGHT - STATIC CONTENT */}
            <div
              className="
                flex
                flex-col
                justify-center
                border-t
                border-white/[0.08]
                p-8
                sm:p-10
                lg:border-l
                lg:border-t-0
                lg:p-12
              "
            >
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.17em] text-violet-400">
                Custom WordPress Themes
              </p>

              <h3 className="mt-5 text-[24px] font-semibold leading-[1.08] tracking-[-1.5px] text-zinc-100 sm:text-[24]">
                Custom theme development.
              </h3>

              <p className="mt-6 max-w-[470px] text-[16px] leading-7 text-zinc-400">
                Custom-built WordPress websites developed with flexible theme
                structures, dynamic content and responsive frontend
                implementation.
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-white/[0.09]
                      px-3
                      py-1.5
                      text-[12px]
                      text-zinc-400
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* ELEMENTOR PROJECTS */}
          <div className="mt-20">
            <div
              className="
      overflow-hidden
      rounded-[24px]
      border
      border-white/[0.09]
      bg-[#111318]
      lg:grid
      lg:grid-cols-[1.05fr_0.95fr]
    "
            >
              {/* LEFT - SCREENSHOTS */}
              <ProjectSlider images={elementorScreenshots} />

              {/* RIGHT - STATIC CONTENT */}
              <div
                className="
        flex
        flex-col
        justify-center
        border-t
        border-white/[0.08]
        p-8
        sm:p-10
        lg:border-l
        lg:border-t-0
        lg:p-12
      "
              >
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.17em] text-violet-400">
                  Elementor Pro
                </p>

                <h3 className="mt-5 text-[24px] font-semibold leading-[1.08] tracking-[-1.5px] text-zinc-100 sm:text-[24px]">
                  Responsive Elementor development.
                </h3>

                <p className="mt-6 max-w-[470px] text-[16px] leading-7 text-zinc-400">
                  Responsive WordPress websites built with Elementor Pro,
                  combining structured layouts, custom styling and flexible
                  content implementation.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "Elementor Pro",
                    "ACF",
                    "CSS / SCSS",
                    "JavaScript",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="
              rounded-full
              border
              border-white/[0.09]
              px-3
              py-1.5
              text-[12px]
              text-zinc-400
            "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* WOOCOMMERCE PROJECTS */}
          <div className="mt-20">
            <div
              className="
      overflow-hidden
      rounded-[24px]
      border
      border-white/[0.09]
      bg-[#111318]
      lg:grid
      lg:grid-cols-[1.05fr_0.95fr]
    "
            >
              {/* LEFT - SCREENSHOT SLIDER */}
              <ProjectSlider images={woocommerceScreenshots} />

              {/* RIGHT - STATIC CONTENT */}
              <div
                className="
        flex
        flex-col
        justify-center
        border-t
        border-white/[0.08]
        p-8
        sm:p-10
        lg:border-l
        lg:border-t-0
        lg:p-12
      "
              >
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.17em] text-violet-400">
                  WooCommerce Development
                </p>

                <h3 className="mt-5 text-[24px] font-semibold leading-[1.08] tracking-[-1.5px] text-zinc-100 sm:text-[24px]">
                  Ecommerce experiences
                </h3>

                <p className="mt-6 max-w-[470px] text-[16px] leading-7 text-zinc-400">
                  WooCommerce websites built around product presentation,
                  responsive shopping experiences, custom layouts and structured
                  ecommerce functionality.
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "WooCommerce",
                    "PHP",
                    "Elementor Pro",
                    "JavaScript",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="
              rounded-full
              border
              border-white/[0.09]
              px-3
              py-1.5
              text-[12px]
              text-zinc-400
            "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
