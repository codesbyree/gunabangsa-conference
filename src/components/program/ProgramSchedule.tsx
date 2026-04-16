import { motion } from 'framer-motion';
import { SCHEDULE } from '../../data/constants';
import { Calendar, ArrowRight, FileText } from 'lucide-react';

const typeColors: Record<string, string> = {
  Keynote: 'bg-emerald-500 text-emerald-950',
  Scientific: 'bg-slate-900 text-white',
};

export default function ProgramSchedule() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-emerald-950 p-6 text-white flex justify-between items-center">
          <div className="font-bold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            Day 01 — Nov 5, 2026
          </div>
          <div className="text-xs font-black uppercase tracking-widest text-emerald-400/60">Main Auditorium</div>
        </div>
        <div className="divide-y divide-slate-50">
          {SCHEDULE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group flex flex-col md:flex-row md:items-center p-8 hover:bg-emerald-50/30 transition-colors"
            >
              <div className="w-40 shrink-0 mb-2 md:mb-0">
                <span className="text-sm font-bold text-emerald-600 font-mono tracking-tighter">{item.time}</span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-extrabold text-emerald-950 leading-tight group-hover:text-emerald-800 transition-colors">
                  {item.activity}
                </h4>
                <div className="mt-2 flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${typeColors[item.type] || 'bg-slate-100 text-slate-500'}`}>
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-8 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-emerald-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-950">Detailed Abstract eBook?</h4>
            <p className="text-sm text-slate-500 font-medium">Download the full program schedule in PDF.</p>
          </div>
        </div>
        <button className="bg-emerald-950 text-white px-8 py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition active:scale-95">
          Download PDF
        </button>
      </div>
    </div>
  );
}
