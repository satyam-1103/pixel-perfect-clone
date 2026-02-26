import { CalendarBlankIcon, ClockIcon, VideoCameraIcon } from "@phosphor-icons/react";
import { LightningIcon } from "@phosphor-icons/react/dist/icons/Lightning";

const EventDetails = () => {
  return (
    <section className="py-12 px-6 bg-[#ABCFA8]" id="event-details">
<div className="max-w-4xl mx-auto bg-[#11361B] text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center">

<div className="absolute top-0 left-0 w-64 h-64 bg-green-500 blur-[100px] opacity-20"></div>
<h2 className="text-3xl md:text-5xl font-bold mb-12 relative z-10">Event Details</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4 text-green-300">
<CalendarBlankIcon size={32} weight="bold" />
</div>
<h3 className="text-xl font-bold">Date</h3>
<p className="opacity-70">February 10, 2026</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4 text-green-300">
<ClockIcon size={32} weight="bold" />
</div>
<h3 className="text-xl font-bold">Time</h3>
<p className="opacity-70">7:00 PM (IST)</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4 text-green-300">
<VideoCameraIcon size={32} weight="bold" />
</div>
<h3 className="text-xl font-bold">Format</h3>
<p className="opacity-70">Live Webinar + Q&amp;A</p>
</div>
</div>
<div className="mt-12 pt-12 border-t border-white/10 relative z-10">
<div className="text-5xl font-black text-white mb-2">₹25</div>
<p className="text-sm opacity-60 mb-6 uppercase tracking-widest">One-time investment</p>
<a className=" inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-bold bg-white text-[#11361B] hover:bg-green-300" href="https://topmate.io/priyanksinghofficial/1940263/pay" target="_blank">
                    Book Now
                    <LightningIcon size={32} weight="bold" />
</a>
</div>
</div>
</section>
  );
};

export default EventDetails;
