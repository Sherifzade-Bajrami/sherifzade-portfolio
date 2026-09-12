import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090b0e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* LOGO */}
        <a
          href="#top"
          onClick={closeMenu}
          className="text-[22px] font-semibold tracking-[-1px] text-white"
        >
          SB<span className="text-violet-400">.</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-zinc-400 transition duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] text-white transition hover:border-violet-400/50 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <div className="flex w-[18px] flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-full bg-white transition duration-300 ${
                menuOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-full bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-full bg-white transition duration-300 ${
                menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#090b0e] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1240px] flex-col px-5 py-5 sm:px-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/[0.06] py-4 text-[17px] font-medium text-zinc-300 transition hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv/Sherifzade-Bajrami-CV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3.5 text-[15px] font-semibold text-zinc-950"
          >
            View CV ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;