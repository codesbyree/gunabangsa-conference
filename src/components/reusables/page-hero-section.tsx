type Props = {
  title: string;
};

export default function PageHeroSection({ title }: Props) {
  return (
    <section className="relative bg-[#FDFDFD] pt-40 pb-0 overflow-hidden">
      <div className="absolute top-20 left-[12%] opacity-20 pointer-events-none">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-slate-300"
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute top-40 right-[15%] opacity-20 pointer-events-none">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-slate-300"
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center pb-28 relative z-10">
        <h1 className="text-6xl md:text-7xl font-black text-[#062C1B] mb-6 tracking-tighter uppercase">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-tight">
          <a
            href="/"
            className="text-slate-400 hover:text-emerald-600 transition"
          >
            Home
          </a>
          <span className="text-slate-300">/</span>
          <span className="text-emerald-600 uppercase tracking-widest">
            {title}
          </span>
        </div>
      </div>

      {/* Optimized Header Marquee */}
      <div className="bg-[#042114] py-6 border-y border-emerald-900/30 overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap will-change-transform">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex items-center gap-16 text-emerald-400/90 font-black text-sm tracking-[0.2em] uppercase italic"
            >
              <span>Scientific Excellence</span>
              <div className="text-emerald-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z" />
                </svg>
              </div>
              <span>Global Innovation</span>
              <div className="text-emerald-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z" />
                </svg>
              </div>
              <span>Clinical Research</span>
              <div className="text-emerald-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
