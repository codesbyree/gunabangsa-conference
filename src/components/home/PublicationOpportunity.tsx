import { motion } from 'framer-motion';

export default function PublicationOpportunity() {
  return (
    <section id="publication-opportunity" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-end mb-20"
        >
          <div className="lg:col-span-8">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">Information</div>
            <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 leading-tight">Publication Opportunity</h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-slate-500 font-medium leading-relaxed text-justify space-y-6"
            >
              <p>
                As part of our commitment to enhancing the quality and visibility of scholarly work, this conference
                collaborates with the ETLTC Conference Series for proceedings publication. Selected articles that have
                undergone peer review and fall within the scope of the ETLTC Conference Series will be published in their
                proceedings.
              </p>
              <p>
                The ETLTC Conference Series has established partnerships with Engineering Proceedings (MDPI) and AIP
                Publishing, both indexed by Scopus, offering a broad opportunity for researchers to publish their work in
                reputable international outlets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 font-medium leading-relaxed text-justify space-y-6"
            >
              <p>
                Since not all research fields can be accommodated under the ETLTC Conference Series, the organizing
                committee is currently establishing contracts with additional publishers, including Scopus-indexed
                proceedings and reputable journals, in accordance with the relevance of specific research fields.
              </p>
              <p>
                Detailed information regarding the publication aims and the list of official publication outlets will be
                announced on the website once the contracts with the respective publishers have been finalized.
              </p>
            </motion.div>
          </div>

          <div className="w-full h-60 relative">
            <img
              src="/assets/images/publications.png"
              alt="Publication outlets"
              className="w-full h-full object-contain absolute mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
