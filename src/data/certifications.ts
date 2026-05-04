export type CertCategory = "Certification" | "Achievement";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: CertCategory;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  { id: "python-ds", name: "Python For Data Science", issuer: "IBM", category: "Certification" },
  {
    id: "ai-fund",
    name: "Fundamentals of Artificial Intelligence",
    issuer: "NPTEL",
    category: "Certification",
  },
  {
    id: "mathlab-ml",
    name: "Machine Learning with MATLAB",
    issuer: "MathWorks",
    category: "Certification",
  },
  { id: "cisco-cyber", name: "CISCO Cybersecurity", issuer: "Cisco", category: "Certification" },
  {
    id: "rpa",
    name: "Data Analysis with Robotic Process",
    issuer: "UiPath",
    category: "Certification",
  },
  {
    id: "sci-python",
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    category: "Certification",
  },
  {
    id: "cad",
    name: "2D-3D CAD Modeling of Building Design",
    issuer: "AutoCAD",
    category: "Certification",
  },
  { id: "frontend", name: "Front End Development", issuer: "Meta", category: "Certification" },
  {
    id: "networking",
    name: "Network and Communications",
    issuer: "Cisco",
    category: "Certification",
  },
  { id: "hr-java", name: "Java (Basic)", issuer: "HackerRank", category: "Certification" },
  {
    id: "hr-ps",
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    category: "Certification",
  },
  { id: "iamneo", name: "Best Project Award", issuer: "IAMNeo", category: "Achievement" },
];

export const CERT_TOTAL = 12;
