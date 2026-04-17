import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socials = [FaYoutube, FaFacebook, FaXTwitter];

  return (
    <footer className="bg-emerald-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="font-serif font-bold text-4xl mb-2">KeenKeeper</h2>
        <p className="text-emerald-200 text-sm max-w-md mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-emerald-300 text-xs font-medium uppercase tracking-widest mb-3">
          Social Links
        </p>
        <div className="flex justify-center gap-3 mb-10">
          {socials.map((Icon, i) => (
            <a>
              key={i}
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            
              <Icon className="text-white text-sm" />
            </a>
          ))}
        </div>
        <div className="border-t border-emerald-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-emerald-400 text-xs">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;