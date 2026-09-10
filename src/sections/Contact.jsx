const contactLinks = [
  {
    label: "EMAIL",
    title: "sherifzadeb@gmail.com",
    href: "mailto:sherifzadeb@gmail.com",
  },
  {
    label: "LINKEDIN",
    title: "Connect with me",
    href: "#",
  },
  {
    label: "GITHUB",
    title: "Sherifzade-Bajrami",
    href: "https://github.com/Sherifzade-Bajrami",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.08] px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-10">
        
        {/* LEFT LABEL */}
        <div>
          <p className="whitespace-nowrap pt-2 font-mono text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            <span className="text-violet-400">05</span> / Contact
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="max-w-[900px] text-[42px] font-semibold leading-[1.08] tracking-[-2px] text-zinc-100 sm:text-[52px] lg:text-[58px]">
            Have a project, opportunity or idea?{" "}
            <span className="font-serif font-normal italic text-violet-400">
              Let's talk.
            </span>
          </h2>

          <p className="mt-8 max-w-[720px] text-[17px] leading-8 text-zinc-400">
            I'm open to web development opportunities, collaborations and
            interesting digital projects. Feel free to reach out and I'll get
            back to you as soon as possible.
          </p>

          {/* MAIN EMAIL CTA */}
          <div className="mt-14 border-y border-white/[0.08]">
            <a
              href="mailto:sherifzadeb@gmail.com"
              className="group flex items-center justify-between gap-6 py-8"
            >
              <div>
                <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.16em] text-violet-400">
                  Get in touch
                </p>

                <p className="mt-3 text-[28px] font-semibold tracking-[-1px] text-zinc-100 sm:text-[34px]">
                 sherifzadeb@gmail.com
                </p>
              </div>

              <span className="text-[28px] text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                ↗
              </span>
            </a>
          </div>

          {/* CONTACT LINKS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                className="
                  group rounded-2xl
                  border border-white/[0.08]
                  bg-white/[0.02]
                  p-6
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-violet-400/30
                  hover:bg-white/[0.035]
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-violet-400">
                    {item.label}
                  </p>

                  <span className="text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
                    ↗
                  </span>
                </div>

                <p className="mt-8 text-[16px] font-medium text-zinc-300 transition duration-300 group-hover:text-white">
                  {item.title}
                </p>
              </a>
            ))}
          </div>

          {/* AVAILABILITY */}
          <div className="mt-12 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.08)]" />

            <p className="text-[14px] text-zinc-500">
              Available for new opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;