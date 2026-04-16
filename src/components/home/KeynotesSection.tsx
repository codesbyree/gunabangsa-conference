import { motion } from 'framer-motion';
import { SPEAKERS } from '../../data/constants';
import SpeakersCard from '../reusables/SpeakersCard';

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
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-6">Distinguished Keynotes</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>
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
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
