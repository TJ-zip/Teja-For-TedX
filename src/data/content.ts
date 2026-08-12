export const person = {
  name: "Suvan Teja Pantina",
  role: "Candidate — Vice-Chairperson",
  org: "TEDxJaiHindCollege",
  tagline:
    "Operations, Hospitality, Public Relations and Security — run as one system, not four silos.",
  email: "tejasuvan_business@protonmail.com",
  phone: "9619818547",
  location: "Mumbai, India 400076",
  linkedin: "linkedin.com/in/suvan-teja-pantina-9979b63ab",
  instagram: "instagram.com/suvan.pantina",
};

export const summary = {
  heading: "Why I am standing",
  body: [
    "I am applying for Vice-Chairperson of TEDxJaiHindCollege with responsibility for four departments: Logistics, Hospitality, Public Relations and Security.",
    "I am not proposing these departments from the outside. I have already held the ground in each of them, at Jai Hind College, across TEDxJHC 2026, ECSH 2026 and Talaash 2025.",
    "A BBA foundation and the McKinsey Forward programme gave me the language to set a vision. Serving as an Organising Committee member gave me the credibility to have it followed. That combination is what lets me brief HoDs and OCs clearly and hold a plan together on event day.",
  ],
};

export type Department = {
  id: string;
  name: string;
  claim: string;
  evidence: string[];
};

export const departments: Department[] = [
  {
    id: "logistics",
    name: "Logistics",
    claim: "Ground-level operations, learnt on the floor and not from a deck.",
    evidence: [
      'Awarded "Most Wanted Operations OC" — TEDxJHC 2026.',
      "Executed as an Organising Committee member, so plans are written from the point of view of the person who has to run them.",
      "Learnt the logistics function at a root level from Faalisha Mistry, TEDxJHC Logistics 2025–26.",
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    claim: "Speaker care at a standard that does not need a second attempt.",
    evidence: [
      "Point of Contact for Mr. Niranjan Hiranandani.",
      "Point of Contact for Dr. Varda Sardana.",
      "Learnt the hospitality function at a root level from Vielka Nair, TEDxJHC Hospitality 2025–26.",
    ],
  },
  {
    id: "pr",
    name: "Public Relations",
    claim: "Outreach that has already been judged and recognised.",
    evidence: [
      'Awarded "Best PR Organizer" — ECSH 2026.',
      "Handled outreach alongside on-ground responsibility, so PR commitments were made against what operations could actually deliver.",
    ],
  },
  {
    id: "security",
    name: "Security",
    claim: "Full on-ground and auditorium security, held end to end.",
    evidence: [
      "Managed security at Talaash 2025.",
      "Entrusted with entire on-ground security and auditorium security across TEDxJHC 2026, ECSH 2026 and Talaash 2025 — all held at Jai Hind College.",
    ],
  },
];

export const mentors = [
  { name: "Deeyp Chheda", role: "Vice-Chairperson, TEDxJHC 2025–26" },
  { name: "Krishna Tandon", role: "Vice-Chairperson, TEDxJHC 2024–25" },
  { name: "Vielka Nair", role: "Hospitality, TEDxJHC 2025–26" },
  { name: "Faalisha Mistry", role: "Logistics, TEDxJHC 2025–26" },
];

export type Experience = {
  org: string;
  title: string;
  place: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    org: "Worldwide Media (The Times Group)",
    title: "Sales & Marketing Intern",
    place: "Mumbai",
    period: "06/2026 – 09/2026",
    bullets: [
      "Sales and marketing intern at Worldwide Media, a Times Group company, the group behind the ET Now media channels.",
      "Working on commercial and marketing activity inside a large media organisation — directly relevant to sponsor conversations and outreach for TEDx.",
    ],
  },
  {
    org: "McKinsey And Co.",
    title: "Student — McKinsey Forward",
    place: "Mumbai",
    period: "04/2025 – 11/2025",
    bullets: [
      "Developed transferable workplace skills in problem-solving, communication and adaptability.",
      "Attended live webinars with McKinsey experts to enhance professional skills.",
    ],
  },
  {
    org: "KET's Vaze College",
    title: "Selection Officer",
    place: "Mumbai",
    period: "06/2023 – 03/2025",
    bullets: [
      "Selected top performing athletes for volleyball and table tennis, contributing to team success.",
      "Acquired knowledge on competitive strategies from seasoned athletes like Pravin Tambe, enhancing training effectiveness.",
    ],
  },
];

export const education = [
  {
    course: "BBA",
    school: "Jai Hind College",
    place: "Churchgate, Mumbai",
    period: "Expected 04/2028",
  },
  {
    course: "Junior College",
    school: "KET's Vaze College",
    place: "Mulund, Mumbai",
    period: "03/2025",
  },
];

export const skills = [
  "Microsoft Excel",
  "Power BI",
  "Powerpoint",
  "AI Agent",
  "Data visualization",
];

export const languages = [
  { name: "English", level: "Proficient (C2)", value: 100 },
  { name: "Hindi", level: "Advanced (C1)", value: 85 },
  { name: "Telugu", level: "Native", value: 100 },
  { name: "Marathi", level: "Upper Intermediate (B2)", value: 65 },
];

export const certifications = [
  "Certified JobReady — Wadhwani Foundation",
  "Certificate of Completion — McKinsey Forward",
  "Certified in Excel & Power BI — Jatan Shah",
];

export const accomplishments = [
  "Most Wanted Operations OC — TEDxJHC 2026",
  "Best PR Organizer — ECSH 2026",
  "Top Performer Award — MH-CET 2025",
  "Best Team Work Award — Game Changer 2024",
  "Debate Competition Winner — Mirai' 26, SIES",
  "Best Presentation — Blaze' 26, HR College",
];
