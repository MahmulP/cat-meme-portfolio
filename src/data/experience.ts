import type {
  CertificationEntry,
  ExperienceEntry,
  TrainingEntry,
} from '@domain/index'

export const experience: ExperienceEntry[] = [
  {
    company: 'PT. Indowebhost Kreasi',
    role: 'Technical Lead',
    start: '2026-05',
    end: 'Present',
    location: 'Medan, North Sumatra, Indonesia',
    summary:
      'Promoted from Full Stack Developer to Technical Lead in May 2026. Own the SIGMA ERP build for Socfindo across all modules — payroll and clinic plus everything else as scope expanded. Drive requirement gathering with stakeholders, design modular and scalable architecture, assign and review work for the developer team, and own core data structures, validation rules, and calculation logic across modules.',
    note: 'Contractually employed under PT. Indowebhost Kreasi; client-facing work delivered under the Iweka Digital Solusi brand.',
  },
  {
    company: 'PT. Indowebhost Kreasi',
    role: 'Full Stack Developer',
    start: '2025-10',
    end: '2026-05',
    location: 'Medan, North Sumatra, Indonesia',
    summary:
      'Built the payroll and clinic modules of SIGMA ERP from the ground up. Conducted in-depth requirement gathering with stakeholders, collaborated cross-functionally on modular and scalable design, and implemented core functionalities including data structures, validation rules, and calculation logic. Analyzed gaps in the legacy system and proposed process improvements that produced more efficient data flow and less manual handling.',
  },
  {
    company: 'RaihCPNS',
    role: 'Founder',
    start: '2024-03',
    end: 'Present',
    location: 'Indonesia',
    summary:
      'Founded and built RaihCPNS, a digital education platform for CPNS exam preparation. Led the full development lifecycle with Laravel and Livewire — architecture, deployment, maintenance — and shipped core features including auth, tryout simulations, scoring, and payments. Established workflows for version control and CI/CD, and kept the system secure and performant for national-level exam traffic.',
  },
  {
    company: 'Bagistudio',
    role: 'Fullstack Web Engineer',
    start: '2023-09',
    end: '2023-12',
    location: 'Medan, Indonesia',
    summary:
      'Developed and deployed 5+ websites with Laravel and Express.js, maintained 5+ client sites at 99% uptime, and added new features that improved functionality and user experience.',
  },
  {
    company: 'PT. Rezeki Teknologi Indonesia',
    role: 'Fullstack Web Engineer',
    start: '2023-03',
    end: '2023-08',
    location: 'Medan, Indonesia',
    summary:
      'Developed and deployed 20+ websites, managed and maintained 15+ client sites at 99% uptime, resolved bugs that improved functionality and UX, and provided IT support for internal network infrastructure including troubleshooting and router/server configuration.',
  },
]

export const training: TrainingEntry[] = [
  {
    org: 'Infinite Learning',
    program: 'Web Development Mentee (MBKM)',
    start: '2023-07',
    end: '2023-12',
    location: 'Batam, Indonesia',
    summary:
      '100+ hours of React.js training with hands-on project work across multiple scales.',
  },
  {
    org: 'Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)',
    program: 'Android Learning Path',
    start: '2024-02',
    end: '2024-07',
    location: 'Indonesia',
    summary:
      'Selected from 57,000+ registrants; chosen from 500+ applicants for the Entrepreneur Track; awarded funding and mentorship through the incubation program.',
  },
]

export const certifications: CertificationEntry[] = [
  {
    title: 'Lomba Keterampilan Siswa Provinsi Sumatera Utara — Network Support',
    issuer: 'Pemprov Sumatera Utara',
    year: 2019,
  },
  {
    title: 'Internship — Computer Technician',
    issuer: 'ICT Center Padangsidimpuan',
    year: 2019,
  },
  {
    title: 'Certified Developer',
    issuer: 'Alibaba Cloud',
    year: 2023,
  },
  {
    title: 'Cloud Practitioner Essentials',
    issuer: 'Dicoding Indonesia',
    year: 2023,
  },
  {
    title: 'Best Team — Entrepreneur Track',
    issuer: 'Bangkit Capstone',
    year: 2024,
  },
  {
    title: 'Junior Mobile Programming',
    issuer: 'BNSP',
    year: 2024,
  },
  {
    title: 'Expert Android Developer',
    issuer: 'Dicoding Indonesia',
    year: 2024,
  },
  {
    title: 'Developer Certification of Android',
    issuer: 'Dev.id',
    year: 2024,
  },
]
