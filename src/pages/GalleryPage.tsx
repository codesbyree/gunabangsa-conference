import { motion } from 'framer-motion';
import SubPageHeader from '../components/shared/SubPageHeader';

export default function GalleryPage() {
  return (
    <>
      <SubPageHeader title="Gallery" />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 text-center text-slate-600 max-w-2xl mx-auto">
          <p className="leading-relaxed text-lg font-medium">
            Explore moments from our previous conferences and get a glimpse of the engaging sessions, networking events, and beautiful venues.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i - 1) * 0.07 }}
              whileHover={{ y: -8 }}
              className="aspect-video bg-slate-50 border border-slate-100 rounded-2xl p-2 shadow-xl shadow-emerald-950/5 overflow-hidden flex items-center justify-center cursor-pointer"
            >
              <p className="text-slate-400 font-bold uppercase tracking-widest text-center text-xs">Gallery Image {i}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
