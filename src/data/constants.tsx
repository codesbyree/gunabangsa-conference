import { 
  Stethoscope, Cpu, Database, Pill, Globe, Leaf, Users, Brain 
} from 'lucide-react';

export const SCOPES = [
  {
    id: 1,
    title: "Medical and Clinical Sciences",
    icon: <Stethoscope className="w-6 h-6" />,
    items: [
      "Internal medicine, surgery, pediatrics, obstetrics & gynecology",
      "Clinical case studies & clinical trials",
      "Diagnostics and therapeutic advancements",
      "Evidence-based medical practice",
      "Emergency & critical care medicine"
    ]
  },
  {
    id: 2,
    title: "Biomedical Engineering and Medical Technology",
    icon: <Cpu className="w-6 h-6" />,
    items: [
      "Biomedical devices and instrumentation",
      "Medical imaging (MRI, CT, ultrasound, X-ray, optical imaging)",
      "Biomechanics & biomaterials",
      "Rehabilitation engineering",
      "Wearable health monitoring devices",
      "Biomedical signal & image processing"
    ]
  },
  {
    id: 3,
    title: "Health Informatics and AI in Medicine",
    icon: <Database className="w-6 h-6" />,
    items: [
      "AI for diagnostics and early disease detection",
      "Machine learning in clinical decision support",
      "Electronic medical records (EMR) & health information systems",
      "Telemedicine & remote patient monitoring",
      "Medical data analytics and big data in health"
    ]
  },
  {
    id: 4,
    title: "Pharmaceutical Sciences and Clinical Pharmacy",
    icon: <Pill className="w-6 h-6" />,
    items: [
      "Drug discovery & development",
      "Pharmacology & toxicology",
      "Pharmacokinetics and pharmacodynamics",
      "Pharmaceutical technology",
      "Herbal & traditional medicine evaluation"
    ]
  },
  {
    id: 5,
    title: "Public Health & Epidemiology",
    icon: <Globe className="w-6 h-6" />,
    items: [
      "Disease surveillance & outbreak analysis",
      "Environmental and occupational health",
      "Epidemiological modeling",
      "Health promotion & disease prevention",
      "Community health and global health challenges",
      "Nutrition science and public wellness"
    ]
  },
  {
    id: 6,
    title: "Environmental Health and Sustainable Health Systems",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      "Climate change and health impact",
      "Water, air, and soil quality and health",
      "Waste management in healthcare facilities",
      "Sustainable medical practices",
      "Disaster medicine & health emergency management"
    ]
  },
  {
    id: 7,
    title: "Nursing, Midwifery, and Allied Health Sciences",
    icon: <Users className="w-6 h-6" />,
    items: [
      "Nursing practice and innovation",
      "Midwifery practice & maternal health",
      "Physical therapy, occupational therapy, speech therapy",
      "Clinical education and training"
    ]
  },
  {
    id: 8,
    title: "Mental Health and Behavioral Sciences",
    icon: <Brain className="w-6 h-6" />,
    items: [
      "Mental health disorders and therapy",
      "Psychology of health and illness",
      "Stress, resilience, and well-being",
      "Counseling strategies in healthcare"
    ]
  }
];

export const SPEAKERS = [
  {
    id: 1,
    name: "To be announced",
    title: "Position Title",
    affiliation: "University or Organization",
    bio: "Detailed biography and background information will be updated here soon.",
    topic: 'Machine Learning in Medical Field',
    sessionDate: 'July 3rd, 2026 (Arena 1)'
  },
  {
    id: 2,
    name: "To be announced",
    title: "Position Title",
    affiliation: "University or Organization",
    bio: "Detailed biography and background information will be updated here soon.",
    topic: 'Machine Learning in Medical Field',
    sessionDate: 'July 3rd, 2026 (Arena 1)'
  },
  {
    id: 3,
    name: "To be announced",
    title: "Position Title",
    affiliation: "University or Organization",
    bio: "Detailed biography and background information will be updated here soon.",
    topic: 'Machine Learning in Medical Field',
    sessionDate: 'July 3rd, 2026 (Arena 1)'
  }
];

export const DEADLINES = [
  { event: "Paper Submission Deadline", description: "Submit your full papers via our online submission system.", date: "July 15, 2026", status: "Open" },
  { event: "Notification of Acceptance", description: "Authors will be notified of the review outcome.", date: "September 15, 2026", status: "Upcoming" },
  { event: "Early Bird Registration Deadline", description: "Take advantage of discounted registration fees.", date: "September 30, 2026", status: "Upcoming" },
  { event: "Final Camera-Ready Paper Submission", description: "Submit your final, revised papers formatted according to author guidelines.", date: "October 15, 2026", status: "Upcoming" },
  { event: "Regular Registration Deadline", description: "Final deadline for all presenters and participants.", date: "October 30, 2026", status: "Upcoming" },
  { event: "Conference Day", description: "Join us for three days of insightful presentations, discussions, and networking.", date: "November 5-7, 2026", status: "Event" }
];

export const REGULAR_PRICING = [
  {
    title: "Online Participation",
    columns: 4,
    tiers: [
      {
        name: "Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 75 / IDR 1.250.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 100 / IDR 1.750.000" }
      },
      {
        name: "Student Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 50 / IDR 850.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 75 / IDR 1.250.000" }
      },
      {
        name: "Participant",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 50 / IDR 850.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 75 / IDR 1.250.000" }
      },
      {
        name: "Student Participant",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 30 / IDR 500.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 50 / IDR 850.000" }
      }
    ]
  },
  {
    title: "Onsite Participation (Istanbul, Turkiye)",
    columns: 4,
    tiers: [
      {
        name: "Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 125 / IDR 2.250.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 175 / IDR 3.000.000" }
      },
      {
        name: "Student Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 100 / IDR 1.750.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 125 / IDR 2.250.000" }
      },
      {
        name: "Participant",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 100 / IDR 1.750.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 125 / IDR 2.250.000" }
      },
      {
        name: "Student Participant",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 75 / IDR 1.250.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 100 / IDR 1.750.000" }
      }
    ]
  },
  {
    title: "Publication Fee",
    columns: 1,
    tiers: [
      {
        name: "Journal",
        description: "At Cost (depending on publisher)"
      }
    ]
  }
];

export const COMBINED_PRICING = [
  {
    title: "Online Participation",
    columns: 2,
    tiers: [
      {
        name: "Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 450 / IDR 7.500.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 475 / IDR 7.850.000" }
      },
      {
        name: "Student Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 425 / IDR 7.050.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 450 / IDR 7.500.000" }
      },
    ]
  },
  {
    title: "Onsite Participation (Istanbul, Turkiye)",
    columns: 2,
    tiers: [
      {
        name: "Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 500 / IDR 8.250.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 525 / IDR 8.750.000" }
      },
      {
        name: "Student Presenter",
        subtitle: "(1 Presenter)",
        earlyBird: { date: "until Sep 30, 2026", price: "USD 475 / IDR 7.850.000" },
        regular: { date: "Oct 1–30, 2026", price: "USD 500 / IDR 8.250.000" }
      },
    ]
  }
];

export const NPU_PRICING = [
  {
    title: "",
    columns: 2,
    tiers: [
      {
        name: "Participant",
        subtitle: "",
        regular: { date: "", price: "IDR 250.000" },
      },
      {
        name: "Presenter and Publication",
        subtitle: "(1 Presenter)",
        regular: { date: "", price: "IDR 4.000.000" },
      },
    ]
  },
];

export const SCHEDULE = [
  { time: "08:00 - 09:00", activity: "Registration & Morning Refreshments", type: "General" },
  { time: "09:00 - 09:30", activity: "Inaugural Ceremony & Opening Address", type: "Ceremony" },
  { time: "09:30 - 10:30", activity: "Keynote: AI in Modern Clinical Decision Making", type: "Keynote" },
  { time: "10:30 - 11:00", activity: "Networking Coffee Break & Poster Session", type: "Networking" },
  { time: "11:00 - 13:00", activity: "Parallel Track A: Biomedical Engineering Advancements", type: "Scientific" },
  { time: "13:00 - 14:00", activity: "Networking Lunch", type: "General" },
  { time: "14:00 - 16:00", activity: "Parallel Track B: Pharmaceutical Innovation & Clinical Trials", type: "Scientific" },
  { time: "16:00 - 16:30", activity: "Afternoon Tea & Innovation Showcases", type: "Networking" },
  { time: "16:30 - 18:00", activity: "Panel Discussion: The Future of Global Health Ethics", type: "Scientific" },
];
