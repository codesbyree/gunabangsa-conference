import {
  BrainIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CpuIcon,
  DatabaseIcon,
  GlobeIcon,
  LeafIcon,
  PillIcon,
  StethoscopeIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

const scopes = [
  {
    id: 1,
    title: "Medical and Clinical Sciences",
    icon: <StethoscopeIcon className="w-6 h-6" />,
    items: [
      "Internal medicine, surgery, pediatrics, obstetrics & gynecology",
      "Clinical case studies & clinical trials",
      "Diagnostics and therapeutic advancements",
      "Evidence-based medical practice",
      "Emergency & critical care medicine",
    ],
  },
  {
    id: 2,
    title: "Biomedical Engineering and Medical Technology",
    icon: <CpuIcon className="w-6 h-6" />,
    items: [
      "Biomedical devices and instrumentation",
      "Medical imaging (MRI, CT, ultrasound, X-ray, optical imaging)",
      "Biomechanics & biomaterials",
      "Rehabilitation engineering",
      "Wearable health monitoring devices",
      "Biomedical signal & image processing",
    ],
  },
  {
    id: 3,
    title: "Health Informatics and Artificial Intelligence in Medicine",
    icon: <DatabaseIcon className="w-6 h-6" />,
    items: [
      "AI for diagnostics and early disease detection",
      "Machine learning in clinical decision support",
      "Electronic medical records (EMR) & health information systems",
      "Telemedicine & remote patient monitoring",
      "Medical data analytics and big data in health",
    ],
  },
  {
    id: 4,
    title: "Pharmaceutical Sciences and Clinical Pharmacy",
    icon: <PillIcon className="w-6 h-6" />,
    items: [
      "Drug discovery & development",
      "Pharmacology & toxicology",
      "Pharmacokinetics and pharmacodynamics",
      "Pharmaceutical technology",
      "Herbal & traditional medicine evaluation",
    ],
  },
  {
    id: 5,
    title: "Public Health & Epidemiology",
    icon: <GlobeIcon className="w-6 h-6" />,
    items: [
      "Disease surveillance & outbreak analysis",
      "Environmental and occupational health",
      "Epidemiological modeling",
      "Health promotion & disease prevention",
      "Community health and global health challenges",
      "Nutrition science and public wellness",
    ],
  },
  {
    id: 6,
    title: "Environmental Health and Sustainable Health Systems",
    icon: <LeafIcon className="w-6 h-6" />,
    items: [
      "Climate change and health impact",
      "Water, air, and soil quality and health",
      "Waste management in healthcare facilities",
      "Sustainable medical practices",
      "Disaster medicine & health emergency management",
    ],
  },
  {
    id: 7,
    title: "Nursing, Midwifery, and Allied Health Sciences",
    icon: <UsersIcon className="w-6 h-6" />,
    items: [
      "Nursing practice and innovation",
      "Midwifery practice & maternal health",
      "Physical therapy, occupational therapy, speech therapy",
      "Clinical education and training",
    ],
  },
  {
    id: 8,
    title: "Mental Health and Behavioral Sciences",
    icon: <BrainIcon className="w-6 h-6" />,
    items: [
      "Mental health disorders and therapy",
      "Psychology of health and illness",
      "Stress, resilience, and well-being",
      "Counseling strategies in healthcare",
    ],
  },
];

export default function HomeScopeSection() {
  const [activeScope, setActiveScope] = useState<number | null>(null);

  return (
    <section id="scopes" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">
              Our Focus
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C1B] leading-tight">
              Comprehensive Research Tracks
            </h2>
          </div>
          <div className="lg:col-span-4 text-slate-500 text-sm font-medium leading-relaxed">
            We cover the full spectrum of modern health sciences, from
            foundational clinical practice to the cutting-edge of biomedical
            engineering.
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
          {scopes.map((scope) => (
            <div
              key={scope.id}
              className={`group p-8 border-r border-b border-slate-100 transition-all duration-300 relative overflow-hidden cursor-pointer ${activeScope === scope.id ? "bg-[#062C1B]" : "hover:bg-slate-50"}`}
              onClick={() =>
                setActiveScope(activeScope === scope.id ? null : scope.id)
              }
            >
              <div
                className={`mb-6 transition-colors ${activeScope === scope.id ? "text-emerald-400" : "text-emerald-600"}`}
              >
                {scope.icon}
              </div>
              <h3
                className={`text-lg font-extrabold mb-4 leading-snug transition-colors ${activeScope === scope.id ? "text-white" : "text-[#062C1B]"}`}
              >
                {scope.title}
              </h3>
              <div
                className={`overflow-hidden transition-all duration-500 ${activeScope === scope.id ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <ul className="space-y-3 mt-4">
                  {scope.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-xs font-medium text-emerald-100/60"
                    >
                      <CheckCircle2Icon className="w-3 h-3 mr-2 mt-0.5 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`mt-6 inline-flex items-center text-[10px] font-black uppercase tracking-widest ${activeScope === scope.id ? "text-emerald-400" : "text-emerald-600"}`}
              >
                {activeScope === scope.id ? "Collapse" : "Learn More"}
                <ChevronDownIcon
                  className={`ml-2 w-3 h-3 transition-transform ${activeScope === scope.id ? "rotate-180" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
