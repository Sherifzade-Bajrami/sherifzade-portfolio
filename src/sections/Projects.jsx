import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/[0.08] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* LEFT LABEL */}
        <div>
          <p className="whitespace-nowrap pt-2 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">03</span> / Selected Work
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="mb-16">
            <h2 className="max-w-[900px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
              A selection of work built with{" "}
              <span className="font-serif font-normal italic text-violet-400">
                purpose, clarity and detail.
              </span>
            </h2>

            <p className="mt-8 max-w-[720px] text-[17px] leading-8 text-zinc-400">
              Projects across frontend development, WordPress, ecommerce and
              modern web technologies, with a focus on usability,
              maintainability and polished implementation.
            </p>
          </div>

          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
