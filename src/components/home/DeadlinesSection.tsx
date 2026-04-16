import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { DEADLINES } from '../../data/constants';

export default function DeadlinesSection() {
  return (
    <section id="deadlines" className="py-24 bg-emerald-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <Calendar className="w-96 h-96 text-white" />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Timeline</div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-4">Submission Deadlines</h2>
        </motion.div>
        <div className="space-y-4">
          {DEADLINES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 border border-white/10 rounded-lg group hover:border-emerald-500 transition-colors"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-md text-emerald-400 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.event}</h4>
                  {item.description && <p className="text-gray-400 text-sm mt-1 mb-2">{item.description}</p>}
                  <p className="text-emerald-500/50 text-xs font-bold uppercase tracking-widest">{item.date}</p>
                </div>
              </div>
              <div
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-center w-fit ${
                  item.status === 'Open' ? 'bg-emerald-500 text-emerald-950' : 'bg-white/10 text-white/40'
                }`}
              >
                {item.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
