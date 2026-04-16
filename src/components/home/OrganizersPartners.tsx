import { motion } from 'framer-motion';

export default function OrganizersPartners() {
  return (
    <section id="organizers-partners" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Network</div>
          <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 leading-tight">
            Conference Organizers and Partners
          </h2>
        </motion.div>

        {/* Host & Co-Host */}
        <div className="mb-20">
          <h3 className="text-base font-bold text-center text-slate-800 mb-10 tracking-tight">Host & Co-Host</h3>
          <div className="flex flex-wrap justify-center gap-10 items-stretch">

            {/* Host */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="relative w-56 h-36 bg-white border-2 border-emerald-200 rounded-2xl shadow-lg shadow-emerald-950/5 flex items-center justify-center p-5 overflow-hidden group-hover:border-emerald-400 group-hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-emerald-50/50 group-hover:bg-emerald-50 transition-colors duration-300" />
                <img
                  src="/assets/images/stikes-gb.png"
                  alt="STIKES Guna Bangsa Yogyakarta"
                  className="relative w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Host</p>
                <p className="text-xs font-bold text-emerald-950 leading-tight">STIKES Guna Bangsa Yogyakarta</p>
                <p className="text-[10px] text-slate-400 font-medium">Indonesia</p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-16 bg-slate-200" />
                <span className="text-[9px] font-black text-slate-300 tracking-[0.3em] uppercase">×</span>
                <div className="w-px h-16 bg-slate-200" />
              </div>
            </div>

            {/* Co-Host */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="relative w-56 h-36 bg-white border-2 border-slate-200 rounded-2xl shadow-lg shadow-slate-950/5 flex items-center justify-center p-5 overflow-hidden group-hover:border-slate-300 group-hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-slate-50/50 group-hover:bg-slate-50 transition-colors duration-300" />
                <img
                  src="/assets/images/npu-log.png"
                  alt="Nusa Putra University"
                  className="relative w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Co-Host</p>
                <p className="text-xs font-bold text-emerald-950 leading-tight">Nusa Putra University</p>
                <p className="text-[10px] text-slate-400 font-medium">Sukabumi, Indonesia</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Supporters */}
        <div className="mb-16">
          <h3 className="text-base font-bold text-center text-slate-800 mb-8 tracking-tight">Supporters</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-36 h-20 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center gap-1 text-slate-300"
              >
                <span className="text-[9px] font-black uppercase tracking-widest">Supporter</span>
                <span className="text-[8px] font-medium">To be announced</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h3 className="text-base font-bold text-center text-slate-800 mb-8 tracking-tight">Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-28 h-16 bg-slate-50 border border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center gap-1 text-slate-300"
              >
                <span className="text-[9px] font-black uppercase tracking-widest">Sponsor</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
