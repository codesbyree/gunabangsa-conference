import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";

const authorLinks = [
  { href: "/initial-submission", label: "Initial Submission Instructions" },
  { href: "/revised-submission", label: "Revised Submission Instructions" },
  { href: "/final-camera-ready", label: "Final Camera-Ready Instructions" },
  { href: "/presentation-instructions", label: "Presentation Instructions" },
  { href: "/paper-upload-faqs", label: "Paper Upload FAQs" },
];

const moreInfoLinks = [
  { href: "/partners", label: "Our Partners" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "#footer", label: "Contacts" },
];

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`hover:text-emerald-400 transition uppercase tracking-widest text-xs font-bold ${active ? "text-emerald-400" : ""}`}
    >
      {children}
    </Link>
  );
}

function DropdownMenu({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative group/dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-emerald-400 transition uppercase tracking-widest flex items-center gap-1 text-xs font-bold">
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-4 w-72 z-50"
          >
            <div className="bg-emerald-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block w-full text-left px-5 py-2.5 text-xs font-bold text-emerald-100/70 hover:bg-emerald-500 hover:text-emerald-950 transition-colors ${index !== links.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4" id="main-nav">
      <div
        className={`max-w-5xl mx-auto bg-emerald-950/90 backdrop-blur-xl border border-white/10 rounded-full h-16 flex items-center justify-between px-6 pr-4 shadow-2xl shadow-emerald-950/20 transition-all duration-300 ${scrolled ? "shadow-emerald-950/40" : ""}`}
      >
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-white italic"
          >
            H
          </motion.div>
          <span className="font-extrabold text-white tracking-tighter text-base uppercase">
            HEALTHMED-IC
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5 text-emerald-100/70">
          <NavLink href="/" active={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/venue" active={location.pathname === "/venue"}>
            Venue
          </NavLink>
          <NavLink
            href="/committee"
            active={location.pathname === "/committee"}
          >
            Committee
          </NavLink>
          <NavLink
            href="/registration"
            active={location.pathname === "/registration"}
          >
            Registrations
          </NavLink>
          <DropdownMenu title="Author Information" links={authorLinks} />
          <DropdownMenu title="More Information" links={moreInfoLinks} />
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-emerald-900 rounded-2xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
              {[
                { href: "/", label: "HOME" },
                { href: "/venue", label: "VENUE" },
                { href: "/committee", label: "COMMITTEE" },
                { href: "/registration", label: "REGISTRATIONS" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white font-bold text-sm tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 block">
                  Author Info
                </span>
                <div className="flex flex-col gap-3">
                  {authorLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-white/70 font-bold text-sm tracking-widest"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 block">
                  More Information
                </span>
                <div className="flex flex-col gap-3">
                  {moreInfoLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-white/70 font-bold text-sm tracking-widest"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
