function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        
        <div>
          <a
            href="#home"
            className="text-[22px] font-bold tracking-[-1px] text-white"
          >
            SB<span className="text-violet-400">.</span>
          </a>

          <p className="mt-2 text-[13px] text-zinc-400">
            Web Developer
          </p>
        </div>

        <p className="text-[13px] text-zinc-400">
          © {currentYear} Sherifzade Bajrami. All rights reserved.
        </p>

        <a
          href="#home"
          className="group flex items-center gap-2 text-[13px] text-zinc-400 transition hover:text-violet-400"
        >
          Back to top
          <span className="transition duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;