const EventDetails = () => {
  return (
    <section id="event-details" className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-12">Event Details</h2>

        <div className="card-glass rounded-3xl shadow-sm border border-white/30 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Date</h3>
              <p className="text-xl font-bold">February 10, 2026</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Time</h3>
              <p className="text-xl font-bold">7:00 PM (IST)</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Format</h3>
              <p className="text-xl font-bold">Live Webinar + Q&A</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-4xl md:text-5xl font-black">₹25</span>
              <span className="text-muted-foreground ml-2 text-sm">One-time investment</span>
            </div>
            <a
              href="#"
              className="cta-button inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-full px-8 py-4 text-base"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
