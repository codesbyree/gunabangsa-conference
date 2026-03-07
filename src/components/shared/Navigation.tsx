import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPath?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-[#062C1B]/90 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6 shadow-2xl shadow-emerald-950/20">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-white italic group-hover:scale-110 transition-transform">H</div>
          <span className="font-extrabold text-white tracking-tighter text-xl">HEALTHMED-IC</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-tight text-emerald-100/70">
          <a 
            href="/" 
            className={`hover:text-emerald-400 transition uppercase tracking-widest ${currentPath === '/' ? 'text-emerald-400' : ''}`}
          >
            HOME
          </a>

          <a 
            href="/venue" 
            className={`hover:text-emerald-400 transition uppercase tracking-widest ${currentPath === '/venue' ? 'text-emerald-400' : ''}`}
          >
            VENUE
          </a>

          {/* Author Information Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`hover:text-emerald-400 transition uppercase tracking-widest flex items-center gap-1 ${currentPath === '/initial-submission' ? 'text-emerald-400' : ''}`}>
              Author Information <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#062C1B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2">
                  <a 
                    href="/initial-submission"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    Initial Submission Instructions
                  </a>
                  <a 
                    href="/revised-submission"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    Revised Submission Instructions
                  </a>
                  <a 
                    href="/final-camera-ready"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    Final Camera-Ready Instructions
                  </a>
                  <a 
                    href="/presentation-instructions"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    Presentation Instructions
                  </a>
                  <a 
                    href="/paper-upload-faqs"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors"
                  >
                    Paper Upload FAQs
                  </a>
                </div>
              </div>
            )}
          </div>

          <a 
            href="/committee" 
            className={`hover:text-emerald-400 transition uppercase tracking-widest ${currentPath === '/committee' ? 'text-emerald-400' : ''}`}
          >
            COMMITTEE
          </a>

          {/* More Information Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsMoreInfoOpen(true)}
            onMouseLeave={() => setIsMoreInfoOpen(false)}
          >
            <button className={`hover:text-emerald-400 transition uppercase tracking-widest flex items-center gap-1 ${['/partners', '/gallery', '/faq'].includes(currentPath) ? 'text-emerald-400' : ''}`}>
              More Information <ChevronDown className={`w-4 h-4 transition-transform ${isMoreInfoOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMoreInfoOpen && (
              <div className="absolute top-full left-0 pt-4 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#062C1B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2">
                  <a 
                    href="/partners"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    Our partners
                  </a>
                  <a 
                    href="/gallery"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    Gallery
                  </a>
                  <a 
                    href="/faq"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors border-b border-white/5"
                  >
                    FAQ
                  </a>
                  <a 
                    href="#footer"
                    className="block w-full text-left px-6 py-3 text-sm font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors"
                  >
                    Contacts
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/#pricing" className="bg-emerald-500 text-emerald-950 px-5 py-2 rounded-full hover:bg-emerald-400 transition uppercase tracking-widest">
            REGISTER
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-4">
          <div className="bg-[#062C1B] rounded-2xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            <a href="/" className="text-left text-white font-bold text-sm tracking-widest block">HOME</a>
            <a href="/venue" className="text-left text-white font-bold text-sm tracking-widest block">VENUE</a>
            <div className="border-t border-white/10 pt-4">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 block">Author Info</span>
              <div className="space-y-3">
                <a href="/initial-submission" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Initial Submission Instructions</a>
                <a href="/revised-submission" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Revised Submission Instructions</a>
                <a href="/final-camera-ready" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Final Camera-Ready Instructions</a>
                <a href="/presentation-instructions" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Presentation Instructions</a>
                <a href="/paper-upload-faqs" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Paper Upload FAQs</a>
              </div>
            </div>
            <a href="/committee" className="text-left text-white font-bold text-sm tracking-widest block">COMMITTEE</a>
            <div className="border-t border-white/10 pt-4">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 block">More Information</span>
              <div className="space-y-3">
                <a href="/partners" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Our partners</a>
                <a href="/gallery" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Gallery</a>
                <a href="/faq" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">FAQ</a>
                <a href="#footer" className="block text-left text-white/70 font-bold text-sm tracking-widest text-nowrap">Contacts</a>
              </div>
            </div>
            <a href="/#pricing" className="block bg-emerald-500 text-emerald-950 p-3 rounded-xl font-black text-center text-sm tracking-widest">REGISTER</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
