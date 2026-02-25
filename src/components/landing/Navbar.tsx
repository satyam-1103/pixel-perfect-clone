const Navbar = () => {
  return (
    <nav className="w-full py-5 px-6 md:px-10 flex items-center justify-between">
      <div className="font-extrabold text-sm tracking-wider uppercase border-2 border-foreground rounded-md px-3 py-1.5">
        AI AGENTS
      </div>

      <div className="hidden md:flex items-center gap-3">
        <span className="text-sm font-medium border border-foreground/30 rounded-full px-4 py-1.5">
          Webinar
        </span>
        <span className="text-sm font-medium border border-foreground/30 rounded-full px-4 py-1.5">
          Feb 10, 2026
        </span>
      </div>

      <a
        href="#event-details"
        className="text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity"
      >
        Secure Spot
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;
