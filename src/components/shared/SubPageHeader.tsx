import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SubPageHeaderProps {
  title: string;
}

export default function SubPageHeader({ title }: SubPageHeaderProps) {
  return (
    <section className="relative bg-white pt-36 pb-0 overflow-hidden">
      {/* Dot grid decorations */}
      <div className="absolute top-20 left-[12%] opacity-20 pointer-events-none">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(12)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500" />)}
        </div>
      </div>
      <div className="absolute top-40 right-[15%] opacity-20 pointer-events-none">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center pb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 mb-4 tracking-tighter uppercase leading-tight"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 text-xs font-bold tracking-tight"
        >
          <Link to="/" className="text-slate-400 hover:text-emerald-600 transition">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-emerald-600 uppercase tracking-widest">{title}</span>
        </motion.div>
      </div>

      {/* Dark marquee bar */}
      <div className="bg-emerald-900 py-4 border-y border-emerald-900/30 overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap will-change-transform">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-16 text-emerald-400/90 font-black text-sm tracking-[0.2em] uppercase italic">
              <span>Scientific Excellence</span>
              <div className="text-emerald-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z" />
                </svg>
              </div>
              <span>Global Innovation</span>
              <div className="text-emerald-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z" />
                </svg>
              </div>
              <span>Clinical Research</span>
              <div className="text-emerald-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
