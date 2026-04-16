import { motion } from 'framer-motion';
import { Users, Globe2, FlaskConical, MonitorDot, BookOpen, Megaphone, ClipboardList, Package, LucideIcon } from 'lucide-react';

interface CommitteeMember {
  role: string;
  name: string;
  affiliation?: string;
}

interface CommitteeSection {
  title: string;
  icon: LucideIcon;
  data: CommitteeMember[];
}

const steering: CommitteeMember[] = [
  { role: 'Chair', name: 'Dr. dr. R. Soerdjo Hadijono, SpOG(K), DTRM & B(Ch).', affiliation: '' },
  { role: 'Member', name: 'Dr. Wiwik Suryandartiwi, MM', affiliation: '' },
];

const conferenceChair: CommitteeMember[] = [
  { role: 'Conference Chair', name: 'Dr. Dian Wuri Astuti, S.Si., M.Sc., CIRR', affiliation: 'STIKES Guna Bangsa Yogyakarta' },
  { role: 'Co-Chair', name: 'Ir. Okka Adiyanto, S.T.P., M.Sc., Ph.D.', affiliation: 'STIKES Guna Bangsa Yogyakarta' },
  { role: 'Co-Chair', name: 'Gravinda Widyaswara, S.Si., M.Sc.', affiliation: 'STIKES Guna Bangsa Yogyakarta' },
  { role: 'Co-Chair', name: 'Wisnu Budi Waluyo', affiliation: 'STIKES Guna Bangsa Yogyakarta' },
  { role: 'Secretary', name: 'Dian Monalisa', affiliation: '' },
  { role: 'Treasurer', name: 'Ayu Wita Sari, S.Si., M.Sc.', affiliation: '' },
  { role: 'Treasurer', name: 'Maryudella Afrida, S.Kep., Ns., M.Kep', affiliation: '' },
];

const scientific: CommitteeMember[] = [
  { role: 'Member', name: 'Asst. Prof. Dr. Kamolrat Turner', affiliation: 'Boromarajonani' },
  { role: 'Member', name: 'Asst. Prof. Dr. Boonsurb Sosome', affiliation: 'Boromarajonani' },
  { role: 'Member', name: 'Assoc. Prof. Ts. Dr. Wan I. Ismail', affiliation: 'Universiti Teknologi Mara' },
];

const publication: CommitteeMember[] = [
  { role: 'Member', name: 'Prof. Abdul Ghofur Anshori, SH., MH', affiliation: '' },
  { role: 'Member', name: 'Aulia Rahman, S.Si., M.Biotech', affiliation: '' },
];

const pr: CommitteeMember[] = [
  { role: 'Public Relations & Partnership', name: 'Sarika Setya Putri, S.Tr.Kes (Rad), M.Eng.', affiliation: '' },
  { role: 'Registration & Secretariat', name: 'Shandy Wigya, M.Tr.Keb', affiliation: '' },
];

const itLogistics: CommitteeMember[] = [
  { role: 'IT & Documentation', name: 'Bimantoro', affiliation: '' },
  { role: 'Logistics & Event Management', name: 'Mia Dwi Agustiani, S.S.T., M.Tr.Keb', affiliation: '' },
];

const sections: CommitteeSection[] = [
  { title: 'Steering Committee', icon: Users, data: steering },
  { title: 'Conference Chair & Administration', icon: ClipboardList, data: conferenceChair },
  { title: 'Scientific / Technical Program Committee', icon: FlaskConical, data: scientific },
  { title: 'Publication & Proceedings Committee', icon: BookOpen, data: publication },
  { title: 'Public Relations, Registry & Secretariat', icon: Megaphone, data: pr },
  { title: 'IT, Documentation & Logistics', icon: MonitorDot, data: itLogistics },
];

export default function CommitteeList() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-10">
      {sections.map((section, sIdx) => {
        const Icon = section.icon;
        return (
          <section key={sIdx} className="space-y-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 border-b border-slate-200 pb-6 mb-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-base md:text-lg lg:text-xl font-black text-emerald-950 tracking-tighter uppercase">
                {section.title}
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.data.map((member, mIdx) => (
                <motion.div
                  key={mIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: mIdx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px] tracking-widest uppercase mb-3 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-colors">
                    {member.role}
                  </div>
                  <h3 className="text-sm font-bold text-emerald-950 mb-1 leading-snug">{member.name}</h3>
                  {member.affiliation && (
                    <p className="text-xs text-slate-500 font-medium">{member.affiliation}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
