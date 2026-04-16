import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroCountdown from './HeroCountdown';

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center bg-emerald-950 py-20 lg:py-30 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Submissions Now Open
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-10 tracking-tighter max-w-5xl mx-auto"
        >
          Healthcare Excellence and Advancements in Life Treatment & Human Medicine – International Conference{' '}
          <span className="text-emerald-500">(HEALTHMED-IC)</span>
        </motion.h1>

        {/* Date and Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 mb-16"
        >
          <div className="flex flex-col items-center md:items-start">
            <span className="text-emerald-500/50 text-[10px] uppercase font-black tracking-widest mb-1">Date</span>
            <span className="text-white font-bold text-lg italic">Nov 5—7, 2026</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center md:items-start">
            <span className="text-emerald-500/50 text-[10px] uppercase font-black tracking-widest mb-1">Venue</span>
            <span className="text-white font-bold text-lg italic">İstanbul Gelişim Üniversitesi Tower</span>
          </div>
        </motion.div>

        <HeroCountdown />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/initial-submission"
            className="px-10 py-5 bg-emerald-500 text-emerald-950 font-black text-sm uppercase tracking-widest rounded-md hover:bg-emerald-400 transition shadow-2xl shadow-emerald-500/20 active:scale-95"
          >
            Submit Your Abstract
          </Link>
          <button className="px-10 py-5 border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-md hover:bg-white/5 transition active:scale-95">
            Download Guidelines
          </button>
        </motion.div>
      </div>
    </section>
  );
}
