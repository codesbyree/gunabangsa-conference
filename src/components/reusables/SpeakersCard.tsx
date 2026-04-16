import { ExternalLink } from "lucide-react";

interface SpeakersCardProps {
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  topic: string;
  sessionDate: string;
  image: string;
}

export default function SpeakersCard({
  name,
  title,
  affiliation,
  bio,
  topic,
  sessionDate,
  image,
}: SpeakersCardProps) {
  return (
    <div className="group relative h-[560px] overflow-hidden rounded-xl bg-emerald-950 border border-slate-200">
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-20" />

      {image && (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Default view */}
      <div className="absolute bottom-0 left-0 p-8 z-30 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
        <h4 className="text-base font-black text-white leading-tight mb-2 tracking-tighter">
          {name}
        </h4>
        <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">
          {title}
        </p>
        <p className="text-white/40 text-xs font-medium italic">
          {affiliation}
        </p>
      </div>

      {/* Hover reveal */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] bg-white translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 p-8 flex flex-col z-20">
        <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
          <div className="flex flex-col">
            <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-1">
              Keynote Speaker
            </span>
            <h4 className="text-sm font-extrabold text-emerald-950 leading-tight">
              {name}
            </h4>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-300" />
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <p className="text-xs font-bold text-emerald-700 uppercase mb-3 tracking-tighter">
            Academic Background
          </p>
          <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4 italic">
            "{bio}"
          </p>
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 border-l-2 border-emerald-500">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Topic
              </p>
              <p className="text-xs font-bold text-slate-800 leading-tight">
                {topic}
              </p>
            </div>
            <div className="p-3 bg-slate-50 border-l-2 border-emerald-500">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Session
              </p>
              <p className="text-xs font-bold text-slate-800 leading-tight">
                {sessionDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
