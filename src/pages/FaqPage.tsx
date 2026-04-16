import { motion } from 'framer-motion';
import SubPageHeader from '../components/shared/SubPageHeader';

const faqs = [
  {
    q: 'When and where will the conference take place?',
    a: 'The HEALTHMED-IC 2026 conference will be held at our designated venue. Please check the Venue page for specific details regarding location, dates, and travel information.',
  },
  {
    q: 'How can I submit my paper?',
    a: 'You can submit your paper through our online submission system. Detailed guidelines and formatting templates are available under the "Author Information" dropdown in the main navigation menu.',
  },
  {
    q: 'Are virtual presentation options available?',
    a: 'We are currently evaluating hybrid options to accommodate attendees who cannot travel. More information regarding virtual participation will be announced closer to the event date.',
  },
  {
    q: 'What is included in the registration fee?',
    a: 'The full registration fee includes access to all conference sessions, keynote presentations, networking events, conference materials, and scheduled meals/refreshments during the conference days.',
  },
];

export default function FaqPage() {
  return (
    <>
      <SubPageHeader title="Frequently Asked Questions" />
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-xl shadow-emerald-950/5"
          >
            <h3 className="text-xl font-bold text-emerald-950 mb-3 tracking-tight">{faq.q}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
          </motion.div>
        ))}
      </section>
    </>
  );
}
