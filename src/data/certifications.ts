export type CertCategory = "Certification" | "Achievement";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: CertCategory;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "python-ds",
    name: "Python For Data Science",
    issuer: "IBM",
    category: "Certification",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/d244d5876627414eac172d87dfae3e77",
  },
  {
    id: "ai-fund",
    name: "Fundamentals of Artificial Intelligence",
    issuer: "NPTEL",
    category: "Certification",
    credentialUrl:
      "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc23-ge40",
  },
  {
    id: "mathlab-ml",
    name: "Machine Learning with MATLAB",
    issuer: "MathWorks",
    category: "Certification",
    // No public credential URL provided by MathWorks
  },
  {
    id: "cisco-cyber",
    name: "CISCO Cybersecurity",
    issuer: "Cisco",
    category: "Certification",
    credentialUrl:
      "https://www.credly.com/badges/9de98c70-ea4b-4f1e-acf6-64b986cc39bb/linked_in_profile",
  },
  {
    id: "rpa",
    name: "Robotic Process Automation",
    issuer: "Automation Anywhere",
    category: "Certification",
    credentialUrl:
      "https://upskill.automationanywhere.com/learn/course/introducing-robotic-process-automation-rpa/course-content/introducing-robotic-process-automation-rpa?client=academia",
  },
  {
    id: "celonis-rpa",
    name: "Process Automation Bootcamp",
    issuer: "Celonis",
    category: "Certification",
    credentialUrl:
      "https://www.credly.com/badges/a34cb6cd-4cef-4ff6-a4cf-e40764520cfd/linked_in_profile",
  },
  {
    id: "sci-python",
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    category: "Certification",
    credentialUrl:
      "https://freecodecamp.org/certification/AkshaiyaSakthivel/scientific-computing-with-python-v7",
  },
  {
    id: "data-analysis-python",
    name: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    category: "Certification",
    credentialUrl:
      "https://freecodecamp.org/certification/AkshaiyaSakthivel/data-analysis-with-python-v7",
  },
  {
    id: "cad",
    name: "2D-3D CAD Modeling of Building Design",
    issuer: "Bentley",
    category: "Certification",
    credentialUrl: "https://education.bentley.com/Profile/MyDashboard#certificates",
  },
  {
    id: "frontend",
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    category: "Certification",
    credentialUrl:
      "https://freecodecamp.org/certification/AkshaiyaSakthivel/front-end-development-libraries",
  },
  {
    id: "networking",
    name: "Network and Communications",
    issuer: "Saylor Academy",
    category: "Certification",
    credentialUrl:
      "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1692549225/1135109618AS.pdf",
  },
  {
    id: "saylor-os",
    name: "Operating Systems",
    issuer: "Saylor Academy",
    category: "Certification",
    credentialUrl:
      "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1685943918/1929108716A7",
  },
  {
    id: "hr-java",
    name: "Java (Basic)",
    issuer: "HackerRank",
    category: "Certification",
    credentialUrl: "https://www.hackerrank.com/certificates/2ea2685dc651",
  },
  {
    id: "hr-basic-ps",
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    category: "Certification",
    credentialUrl: "https://www.hackerrank.com/certificates/3871a88cd16b",
  },
  {
    id: "hr-ps",
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    category: "Certification",
    credentialUrl: "https://www.hackerrank.com/certificates/4443e5cdb374",
  },
  { id: "iamneo", name: "Best Project Award", issuer: "IAMNeo", category: "Achievement" },
];

export const CERT_TOTAL = 16;
