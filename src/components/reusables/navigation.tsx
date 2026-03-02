import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-[#062C1B]/90 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6 shadow-2xl shadow-emerald-950/20">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-white italic group-hover:scale-110 transition-transform">
            H
          </div>
          <span className="font-extrabold text-white tracking-tighter text-xl">
            HEALTHMED-IC
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-tight text-emerald-100/70">
          <a
            href="/"
            className={`hover:text-emerald-400 transition uppercase tracking-widest`}
          >
            Home
          </a>

          <a
            href="/program"
            className={`hover:text-emerald-400 transition uppercase tracking-widest`}
          >
            PROGRAM
          </a>

          <a
            href="/venue"
            className={`hover:text-emerald-400 transition uppercase tracking-widest`}
          >
            Venue
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
}
