export type CertCategory = 'Certification' | 'Achievement';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: CertCategory;
  color: string; // accent color
}

export const certifications: Certification[] = [
  {
    id: 'mathlab-ml',
    name: 'Machine Learning with MATLAB',
    issuer: 'MathWorks',
    year: '2024',
    category: 'Certification',
    color: '#e84040',
  },
  {
    id: 'cisco-cyber',
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    year: '2023',
    category: 'Certification',
    color: '#1ba0d7',
  },
  {
    id: 'hackerrank-ps',
    name: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    year: '2023',
    category: 'Certification',
    color: '#00ea64',
  },
  {
    id: 'iamneo-best',
    name: 'Best Project Award',
    issuer: 'IAMNeo',
    year: '2024',
    category: 'Achievement',
    color: '#f59e0b',
  },
  {
    id: 'acceler-ai',
    name: 'Acceler-AI Hackathon',
    issuer: 'Regional AI Hackathon',
    year: '2025',
    category: 'Achievement',
    color: '#a855f7',
  },
];

export const CERT_TOTAL = 12;
