import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-12 items-end mb-20"
        >
          <div className="lg:col-span-8">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">Conference Overview</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight">
              Bridging Innovation and Human Care
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-slate-500 font-medium leading-relaxed text-justify"
          >
            <p>
              We are pleased to invite you to the Healthcare Excellence and Advancements in Life Treatment & Human Medicine
              – International Conference (HEALTHMED-IC), a global forum dedicated to strengthening clinical excellence,
              accelerating medical and technological innovation, and advancing human-centered healthcare.
            </p>
            <p>
              HEALTHMED-IC brings together researchers, clinicians, biomedical engineers, pharmacists, nurses, public health
              professionals, policymakers, and industry innovators to exchange knowledge and develop actionable solutions to
              today's most pressing health challenges.
            </p>
            <p>
              With the theme "Bridging Technology and Humanity: Advancing Global Health Excellence through Innovation and
              Sustainable Medicine", HEALTHMED-IC highlights the critical intersection of medical and clinical sciences,
              biomedical engineering, health informatics and AI, pharmaceutical sciences, public health, and nursing & allied health.
            </p>
            <p>
              We warmly invite you to participate by submitting your abstracts and full papers, presenting your research,
              and engaging in high-impact discussions. HEALTHMED-IC welcomes both onsite and virtual participation.
            </p>
            <p>
              Together, let us shape the future of healthcare—where innovation advances responsibly, systems become more
              sustainable, and medicine remains grounded in humanity.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-4"
          >
            <div className="col-span-4 bg-slate-100 rounded-xl h-48" />
            <div className="col-span-2 bg-slate-100 rounded-xl h-32" />
            <div className="col-span-2 bg-slate-100 rounded-xl h-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
