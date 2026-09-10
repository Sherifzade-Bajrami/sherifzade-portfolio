function Navbar() {
  return (
    <header className="border-b border-white/5">
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
            className="text-base text-zinc-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-base text-zinc-400 transition hover:text-white"
          >
            Expertise
          </a>

          <a
            href="#projects"
            className="text-base text-zinc-400 transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#contact"
            className="text-base text-zinc-400 transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;