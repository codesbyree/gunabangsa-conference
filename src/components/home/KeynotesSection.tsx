import { motion } from "framer-motion";
import { SPEAKERS, KEYNOTE_SPEAKERS } from "../../data/constants";
import SpeakersCard from "../reusables/SpeakersCard";

export default function KeynotesSection() {
  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 mb-4">
            Speakers
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Keynote Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500 text-emerald-950 text-xs font-black uppercase tracking-widest">
              Keynote Speakers
            </span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEYNOTE_SPEAKERS.map((speaker, idx) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpeakersCard
                  name={speaker.name}
                  title={speaker.title}
                  affiliation={speaker.affiliation}
                  bio={speaker.bio}
                  topic={speaker.topic}
                  sessionDate={speaker.sessionDate}
                  image={speaker.image}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Invited Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest">
              Invited Speakers
            </span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKERS.map((speaker, idx) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpeakersCard
                  name={speaker.name}
                  title={speaker.title}
                  affiliation={speaker.affiliation}
                  bio={speaker.bio}
                  topic={speaker.topic}
                  sessionDate={speaker.sessionDate}
                  image={speaker.image}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
