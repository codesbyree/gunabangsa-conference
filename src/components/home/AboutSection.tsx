import { motion } from "framer-motion";

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
          className="grid lg:grid-cols-12 gap-12 items-end mb-16"
        >
          <div className="lg:col-span-8">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">
              Invitation
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 leading-tight">
              Welcome to The 1st HEALTHMED-IC
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Hosted by{" "}
              <strong className="text-emerald-700">
                STIKES Guna Bangsa Yogyakarta
              </strong>
              , Indonesia
            </p>
          </div>
        </motion.div>

        {/* Theme banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200"
        >
          <p className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Conference Theme
          </p>
          <p className="text-emerald-950 font-bold text-sm leading-snug">
            "Innovating Healthcare Excellence: Integrating Advanced Life
            Treatment and Human-Centered Medicine for a Sustainable Future"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-slate-500 font-medium leading-relaxed text-justify"
            >
              <p>
                Good morning distinguished guests, respected professors,
                researchers, healthcare professionals, and participants from
                around the world.
              </p>
              <p>
                It is with great honor and sincere pleasure that we invite you
                to attend{" "}
                <strong className="text-emerald-800">
                  The 1st HEALTHMED-IC
                </strong>{" "}
                (Healthcare Excellence and Advancements in Life Treatment &
                Human Medicine – International Conference).
              </p>
              <p>
                This prestigious international conference is designed as a
                scientific forum that brings together academics, clinicians,
                researchers, practitioners, policymakers, and students to share
                knowledge, research findings, and innovative ideas in the field
                of healthcare and human medicine.
              </p>
              <p>
                In this rapidly evolving era, healthcare faces complex global
                challenges — from emerging diseases and technological disruption
                to personalized medicine and sustainable health systems. Through
                The 1st HEALTHMED-IC, we aim to foster interdisciplinary
                collaboration, promote cutting-edge research, and encourage
                meaningful discussions that contribute to healthcare excellence
                and advancements in life treatment.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              className="space-y-5 text-slate-500 font-medium leading-relaxed text-justify"
            >
              <p>This conference will feature:</p>
              <ul className="space-y-3">
                {[
                  "Inspiring keynote speeches from internationally recognized experts",
                  "Oral and poster presentations",
                  "Panel discussions on current healthcare issues",
                  "Networking opportunities for global collaboration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We warmly welcome researchers and professionals in the fields of
                medicine, nursing, public health, pharmacy, biomedical sciences,
                clinical research, health technology, and related disciplines to
                submit their best papers and join this remarkable academic
                gathering.
              </p>
              <p>
                Your presence and contribution will not only enrich the
                scientific discourse but also strengthen international
                partnerships toward improving global health outcomes. Let us
                come together to{" "}
                <em>innovate, collaborate, and advance healthcare</em> for a
                better and healthier future.
              </p>
              <p className="font-bold text-emerald-800">
                We look forward to welcoming you to The 1st HEALTHMED-IC.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-200 rounded-lg col-span-2"></div>
            <div className="bg-slate-200 rounded-lg col-span-1"></div>
            <div className="bg-slate-200 rounded-lg col-span-1"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
