import type { Profile } from '@domain/index'

export const profile: Profile = {
  fullName: 'Machmul Pratama',
  handle: 'mahmulp',
  role: 'Technical Lead & Founder',
  location: 'Medan, North Sumatra, Indonesia',
  pronouns: 'he/him',
  tagline:
    'End-to-end builder shipping web, mobile, and ERP from spec to production.',
  shortBio:
    "Results-driven technology professional with a foundation in software engineering, mobile and web development, and cross-functional collaboration. I lead end-to-end product development with a blend of technical execution and strategic thinking, and I'm currently pursuing a Master's in Information Technology while building real systems.",
  longBio: [
    "I'm Machmul Pratama, a developer based in Medan, North Sumatra. My day-to-day work spans backend services, web frontends, Android apps, and the network plumbing that holds them together. I like building products end-to-end because the seams between layers are where most real problems live, and that's where I'm most useful.",
    'I started professionally as a Fullstack Web Engineer in 2023 at PT. Rezeki Teknologi Indonesia and Bagistudio, where I shipped and maintained dozens of client websites with Laravel and Express.js. From there I founded RaihCPNS, a digital education platform for CPNS exam preparation, and built it from system architecture through deployment — including auth, tryout simulations, scoring, and payments.',
    'I joined PT. Indowebhost Kreasi as a Full Stack Developer in October 2025, building payroll and clinic modules for SIGMA ERP at Socfindo, and was promoted to Technical Lead in May 2026. As Technical Lead I now own the full SIGMA build across every module — payroll and clinic plus everything else as the scope grew — assigning work to the developer team, reviewing implementations, and keeping the architecture coherent module to module. The stack runs on Go Fiber with Huma for typed routes, Svelte on the frontend, Redis for caching, and a mix of MS SQL Server and PostgreSQL.',
    "Outside of day-to-day product work I publish small open-source libraries — most recently a feedback SDK (`@mahmulp/feedback-sdk`) — and I've shipped systems for YPSA (Yayasan Pendidikan Shafiyyatul Amaliyyah) and Universitas Sumatera Utara covering finance, payments, and online testing.",
    "I'm also a Master's student in Information Technology (Magister Teknologi Informasi) at STMIK Jakarta STI&K. The program lets me sharpen the architecture and research side of what I already do in practice — scalable systems, security, and applied IT for education and enterprise.",
    "What I'm looking for: teams that ship, founders who care about the user as much as the stack, and management development tracks where technical depth and entrepreneurial thinking are both welcome. Also: I love a good meme. If your stand-up has a cat picture in it, we'll get along.",
  ],
  values: [
    'Own the whole loop: requirements, code, deployment, support.',
    'Boring infrastructure, sharp product. 99% uptime first, polish second.',
    'Write the smallest thing that proves the idea, then harden it.',
    "Mentor and document — if only I can run it, it isn't shipped.",
    'Treat legacy systems with respect; rewrite is a last resort, not a default.',
  ],
  skills: [
    {
      label: 'Languages',
      items: ['Go (Golang)', 'Kotlin', 'PHP', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      label: 'Backend',
      items: [
        'Go Fiber',
        'Gin',
        'Huma',
        'Laravel',
        'Livewire',
        'Express.js',
      ],
    },
    {
      label: 'Frontend',
      items: ['ReactJS', 'Svelte', 'Tailwind CSS', 'Blade'],
    },
    {
      label: 'Databases & Messaging',
      items: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Redis', 'Kafka'],
    },
    {
      label: 'Mobile',
      items: ['Android (Kotlin)', 'Jetpack Compose'],
    },
    {
      label: 'Infrastructure',
      items: [
        'Network administration',
        'Network configuration',
        'Router and server setup',
        'CI/CD',
        'Version control',
      ],
    },
    {
      label: 'Soft Skills',
      items: [
        'Problem solving',
        'Analytical thinking',
        'Teamwork',
        'Communication',
        'Leadership',
      ],
    },
  ],
  memeMode: true,
}
