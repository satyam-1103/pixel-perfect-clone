const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-10 py-10 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-extrabold text-sm tracking-wider uppercase border-2 border-foreground rounded-md px-3 py-1.5">
          AI AGENTS
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
