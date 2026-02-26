import { InstagramLogoIcon } from "@phosphor-icons/react";
import { LinkIcon } from "@phosphor-icons/react/dist/icons/Link";
import mentorPhoto from "@/assets/mentor-photo.jpg";
const Footer = () => {
  return (
    <footer className="bg-[#11361B] text-[#ABCFA8] py-16 px-6 mt-12 rounded-t-[3rem] text-center">
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#ABCFA8] mx-auto mb-6">
<img alt="Priyank" className="w-full h-full object-cover grayscale hover:grayscale-0 transition" src={mentorPhoto}/>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Priyank Singh</h3>
<p className="opacity-60 mb-8 max-w-sm mx-auto">Helping you transition from AI user to AI builder.</p>
<div className="flex justify-center gap-6 mb-12">
<a className="text-2xl hover:text-white transition transform hover:scale-110" href="https://www.instagram.com/priyanksinghofficial/" rel="noopener" target="_blank">
<InstagramLogoIcon size={32} weight="bold" /> 
</a>
<a className="text-2xl hover:text-white transition transform hover:scale-110" href="https://topmate.io/priyanksinghofficial" rel="noopener" target="_blank">
<LinkIcon size={32} weight="bold" />
</a>
</div>
<div className="border-t border-white/10 pt-8 text-sm opacity-40">
<p>© 2025 Priyank Singh. All rights reserved.</p>
</div>
</footer>
  );
};

export default Footer;
