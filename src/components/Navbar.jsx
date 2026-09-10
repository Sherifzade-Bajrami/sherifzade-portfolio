function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090b0e]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[88px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="text-[24px] font-bold tracking-[-1px] text-white"
        >
          SB<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#about"
            className="text-sm text-zinc-400 transition hover:text-violet-400"
          >
            About
          </a>

          <a
            href="#expertise"
            className="text-sm text-zinc-400 transition hover:text-violet-400"
          >
            Expertise
          </a>

          <a
            href="#projects"
            className="text-sm text-zinc-400 transition hover:text-violet-400"
          >
            Work
          </a>

          <a
            href="#experience"
            className="text-sm text-zinc-400 transition hover:text-violet-400"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-400 transition hover:text-violet-400"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
