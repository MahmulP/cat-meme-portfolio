import type { EducationEntry } from '@domain/index'

export const education: EducationEntry[] = [
  {
    school: 'STMIK Jakarta STI&K',
    degree: "Master's Degree (Magister Teknologi Informasi)",
    field: 'Information Technology',
    location: 'Jakarta, Indonesia',
    status: 'current',
    highlights: [
      'Currently pursuing — focus on applied IT, systems, and architecture',
    ],
  },
  {
    school: 'Universitas Negeri Medan (UNIMED)',
    degree: "Bachelor's Degree",
    field: 'Technology Information and Computer Education',
    location: 'Medan, North Sumatra, Indonesia',
    status: 'completed',
    highlights: [
      'GPA 3.55 / 4.00',
      'Leader of Academic Division, Himpunan Mahasiswa Padangsidimpuan UNIMED',
      'Best Team in Entrepreneur Track of Bangkit Academy; received funding from Dikti and Google',
    ],
  },
  {
    school: 'SMK Negeri 1 Padangsidimpuan',
    degree: 'High School Diploma (SMK)',
    field: 'Computer and Network Engineering',
    location: 'Padangsidimpuan, North Sumatra, Indonesia',
    status: 'completed',
    highlights: [
      'GPA 84.5 (≈ 3.0 / 4.0)',
      'Leader of Social Division, Student Government',
      'Participant, Lomba Keterampilan Siswa Provinsi Sumatera Utara 2019',
    ],
  },
]
