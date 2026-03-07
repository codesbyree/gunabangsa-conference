import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('November 5, 2026 09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#04160E] py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Submissions Now Open
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-[1.2] mb-10 tracking-tighter max-w-5xl mx-auto">
          Healthcare Excellence and Advancements in Life Treatment & Human Medicine – International Conference <span className="text-emerald-500">(HEALTHMED-IC)</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 mb-16">
          <div className="flex flex-col items-center md:items-start">
             <span className="text-emerald-500/50 text-[10px] uppercase font-black tracking-widest mb-1">Date</span>
             <span className="text-white font-bold text-lg italic">Nov 5—7, 2026</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center md:items-start">
             <span className="text-emerald-500/50 text-[10px] uppercase font-black tracking-widest mb-1">Venue</span>
             <span className="text-white font-bold text-lg italic">İstanbul Gelişim Üniversitesi Tower</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-20">
          {[
            { val: timeLeft.days, label: 'D' },
            { val: timeLeft.hours, label: 'H' },
            { val: timeLeft.minutes, label: 'M' },
            { val: timeLeft.seconds, label: 'S' }
          ].map((t, i) => (
            <React.Fragment key={i}>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-black text-white">{String(t.val).padStart(2, '0')}</div>
                <div className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase">{t.label}</div>
              </div>
              {i < 3 && <div className="text-3xl md:text-5xl font-light text-white/20 mt-[-20px]">:</div>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/initial-submission" className="px-10 py-5 bg-emerald-500 text-emerald-950 font-black text-sm uppercase tracking-widest rounded-md hover:bg-emerald-400 transition shadow-2xl shadow-emerald-500/20 active:scale-95">Submit Your Abstract</a>
          <button className="px-10 py-5 border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-md hover:bg-white/5 transition active:scale-95">Download Guidelines</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
