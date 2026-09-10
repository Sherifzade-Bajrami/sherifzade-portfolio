function SectionHeader({ number, title }) {
  return (
    <div className="mb-12 flex items-center gap-5">
      <span className="font-mono text-xs text-violet-400">
        {number}
      </span>

      <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
        {title}
      </h2>

      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

export default SectionHeader;