import { motion } from 'framer-motion';

export default function OrganizersPartners() {
  const logoPlaceholder = (size: 'lg' | 'md' | 'sm', label: string, sublabel?: string) => {
    const sizeMap = {
      lg: 'w-48 h-24',
      md: 'w-40 h-20',
      sm: 'w-32 h-16',
    };
    return (
      <div className={`${sizeMap[size]} bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 shadow-sm hover:shadow-md`}>
        <div className="text-slate-400 font-bold uppercase tracking-wider text-xs text-center">{label}</div>
        {sublabel && <div className="text-slate-300 text-[10px] text-center mt-1">{sublabel}</div>}
      </div>
    );
  };

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
          <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">Network</div>
          <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 leading-tight">
            Conference Organizers and Partners
          </h2>
        </motion.div>

        {/* Host */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-10 tracking-tight">Host</h3>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-56 h-28 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex flex-col items-center justify-center p-4 shadow-md">
                <div className="text-emerald-700 font-black uppercase tracking-wider text-sm text-center leading-tight">
                  STIKES Guna Bangsa
                </div>
                <div className="text-emerald-500 text-xs text-center mt-1 font-medium">Yogyakarta, Indonesia</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-56 h-28 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm">
                <div className="text-slate-400 font-bold uppercase tracking-wider text-xs text-center">Co-Host</div>
                <div className="text-slate-300 text-[10px] text-center mt-1">To be announced</div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporters */}
        <div className="mb-20">
          <h3 className="text-base font-bold text-center text-slate-800 mb-8 tracking-tight">Supporters</h3>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {logoPlaceholder('md', 'Supporter', 'To be announced')}
            {logoPlaceholder('md', 'Supporter', 'To be announced')}
            {logoPlaceholder('md', 'Supporter', 'To be announced')}
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h3 className="text-base font-bold text-center text-slate-800 mb-8 tracking-tight">Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {logoPlaceholder('sm', 'Sponsor')}
            {logoPlaceholder('sm', 'Sponsor')}
            {logoPlaceholder('sm', 'Sponsor')}
            {logoPlaceholder('sm', 'Sponsor')}
          </div>
        </div>
      </div>
    </section>
  );
}
