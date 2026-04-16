import { motion } from 'framer-motion';
import { Users, Globe2, FlaskConical, MonitorDot, LucideIcon } from 'lucide-react';

interface CommitteeMember {
  role: string;
  name: string;
  affiliation: string;
}

interface CommitteeSection {
  title: string;
  icon: LucideIcon;
  data: CommitteeMember[];
}

const organizing: CommitteeMember[] = [
  { role: 'Person in Charge', name: 'Dr. H. Kurniawan, ST., M.Si., MM.', affiliation: 'Rector of Nusa Putra University' },
  { role: 'General Chair of Nusa Putra Global Conference', name: 'Ir. Paikun, ST., MT., IPM, ASEAN Eng.', affiliation: 'Nusa Putra University' },
  { role: 'Technical Program Committee Chairs', name: 'Dr. Ir. Iwan Setiawan, M.T., M.M., MCSA., SMIEEE, IPM, ASEAN Eng., APEC Eng.', affiliation: 'Nusa Putra University' },
  { role: 'Administrative Officer', name: 'Alfyn Abdan Nurahman, M.Pd.', affiliation: 'Nusa Putra University' },
  { role: 'Treasurer', name: 'Dr. Agus Hendriyanto, M.Pd.', affiliation: 'Nusa Putra University' },
  { role: 'Co-Chair', name: 'Prof. Dr. Kenan Aydın', affiliation: 'Istanbul Gelişim University' },
  { role: 'Member', name: 'Prof. Dr. Recai Aydın', affiliation: 'Duzce University' },
];

const international: CommitteeMember[] = [
  { role: 'Member', name: 'Dr. Samsul Pahmi, M.Pd.', affiliation: 'Nusa Putra University' },
  { role: 'Member', name: 'Muhamad Muslih, S.T., M.Kom.', affiliation: 'Nusa Putra University' },
  { role: 'Member', name: 'Assist. Prof. Ir. Anggy Pradiftha Juniftharana, S.Pd., M.T.', affiliation: 'Nusa Putra University' },
];

const scientific: CommitteeMember[] = [
  { role: 'Member', name: 'Lukman Hakim Muhaimin, M.Pd.', affiliation: 'Nusa Putra University' },
  { role: 'Member', name: 'Aryo De Wibowo Muhammad Sidik, S.T., M.T.', affiliation: 'Nusa Putra University' },
  { role: 'Member', name: 'Ali Guma', affiliation: 'Muni University, Uganda' },
  { role: 'Member', name: 'Dr. Karthik Meduri', affiliation: 'University of the Cumberlands, USA' },
  { role: 'Member', name: 'Assoc. Prof. Rusydi Umar, S.T., M.T., Ph.D.', affiliation: 'Ahmad Dahlan University, Indonesia' },
  { role: 'Member', name: 'Assoc. Prof. Dr. Murinto, S.Si., M.Kom.', affiliation: 'Ahmad Dahlan University, Indonesia' },
  { role: 'Member', name: 'Dr. Eng. Ir. Muhammad Kunta Biddinika, S.T., M. Eng.', affiliation: 'Ahmad Dahlan University, Indonesia' },
  { role: 'Member', name: 'Prof. Jerry Chun-Wei Lin', affiliation: 'Silesian University of Technology, Poland' },
  { role: 'Member', name: 'Lan Kong, Ph.D.', affiliation: 'Eastern Kentucky University, USA' },
  { role: 'Member', name: 'Ir. Herman Yuliansyah, S.T., M.Eng., Ph.D.', affiliation: 'Ahmad Dahlan University, Indonesia' },
  { role: 'Member', name: 'Naresh Kshetri, Ph.D', affiliation: 'Lindenwood University, USA' },
  { role: 'Member', name: 'Dr. Wartika, S.Kom, MT', affiliation: 'Universitas Komputer Indonesia, Indonesia' },
];

const itSupport: CommitteeMember[] = [
  { role: 'Member', name: 'Muhammad Ikhsan Thohir, M.Kom.', affiliation: 'Nusa Putra University' },
  { role: 'Member', name: 'M. Haikal Irhamna, S.Kom.', affiliation: 'Nusa Putra University' },
  { role: 'Member', name: 'Ujang Herlan', affiliation: 'Nusa Putra University' },
];

const sections: CommitteeSection[] = [
  { title: 'Organizing Committee', icon: Users, data: organizing },
  { title: 'International Advisory Committee', icon: Globe2, data: international },
  { title: 'Scientific / Technical Program Committee', icon: FlaskConical, data: scientific },
  { title: 'IT and Technical Support Committee', icon: MonitorDot, data: itSupport },
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
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 tracking-tighter uppercase">
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
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs tracking-widest uppercase mb-4 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-colors">
                    {member.role}
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950 mb-2 leading-snug">{member.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{member.affiliation}</p>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
