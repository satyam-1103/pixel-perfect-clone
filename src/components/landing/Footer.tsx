const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-10 py-10 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-extrabold text-lg">Priyank Singh</p>
          <p className="text-sm text-muted-foreground">
            Helping you transition from AI user to AI builder.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 Priyank Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
