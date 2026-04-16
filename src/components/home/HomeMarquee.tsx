export default function HomeMarquee() {
  return (
    <div className="bg-[#10B981] py-4 overflow-hidden border-y border-emerald-400">
      <div className="animate-marquee flex items-center gap-16 whitespace-nowrap will-change-transform">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-16 text-emerald-950 font-black text-sm tracking-[0.2em] uppercase italic">
            <span>Scientific Research</span>
            <span className="w-2 h-2 rounded-full bg-emerald-950 inline-block" />
            <span>Biomedical Innovation</span>
            <span className="w-2 h-2 rounded-full bg-emerald-950 inline-block" />
            <span>Artificial Intelligence</span>
            <span className="w-2 h-2 rounded-full bg-emerald-950 inline-block" />
            <span>Public Wellness</span>
            <span className="w-2 h-2 rounded-full bg-emerald-950 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
