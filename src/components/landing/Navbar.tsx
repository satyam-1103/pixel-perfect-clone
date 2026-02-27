import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      if(isMobile && window.scrollY > 500) {
        setShow(true);
      }else{
        setShow(false);
      }
      // setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // To handle screen resizing
    return () => {window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    }
  }, []);

  return (
    <>
      {/* Bottom Sticky CTA */}
      {show && (
        <div className="fixed bottom-0 left-0 w-full z-50 p-4  md:hidden bg-[#ABCFA8] border-t border-[#11361B]/10 shadow-xl transition-transform duration-300 ">
          <a
            className="block w-full text-center bg-[#11361B] text-white py-3 rounded-full font-bold text-lg"
            href="https://topmate.io/priyanksinghofficial/1940263/pay"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now - ₹25
          </a>
        </div>
      )}

      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 max-w-7xl mx-auto absolute top-0 left-0 right-0 z-40">
        <div className="text-xl font-bold tracking-tighter uppercase border-2 border-[#11361B] px-3 py-1 rounded-full">
          AI Agents
        </div>

        <div className="hidden md:flex gap-4">
          <span className="bg-[#11361B]/10 px-4 py-2 rounded-full text-sm font-semibold">
            Webinar
          </span>
          <span className="bg-[#11361B]/10 px-4 py-2 rounded-full text-sm font-semibold">
            Feb 10, 2026
          </span>
        </div>

        <a
          className="hidden md:inline-flex items-center gap-2 font-bold hover:underline"
          href="https://topmate.io/priyanksinghofficial/1940263/pay"
          target="_blank"
          rel="noopener noreferrer"
        >
          Secure Spot
          <ArrowUpRightIcon size={32} weight="bold" />
        </a>
      </nav>
    </>
  );
};


export default Navbar;
