import type { Project } from '@domain/index'

export const projects: Project[] = [
  {
    slug: 'plantation-erp',
    title: 'Plantation ERP',
    summary:
      'Enterprise-wide ERP for a plantation (perkebunan) operation — every module, owned end-to-end as Technical Lead.',
    description:
      'A full ERP system for a plantation and harvesting operation, delivered to an enterprise client through Iweka Digital Solusi. It started with payroll and clinic modules and now covers the rest of the business as scope expanded. As Technical Lead I drive requirement gathering with stakeholders, design the architecture, assign and review work for the developer team, and own data structures, validation rules, and calculation logic across modules. The stack is built around a Go Fiber backend with Huma for typed routes and Kafka for async workflows, a Svelte frontend, Redis for caching, and a mix of MS SQL Server (for legacy parity) and PostgreSQL (for new modules).',
    role: 'Technical Lead',
    year: 2026,
    stack: [
      'Go (Fiber)',
      'Huma',
      'Svelte',
      'PostgreSQL',
      'MS SQL Server',
      'Redis',
      'Kafka',
    ],
    links: {},
    tags: ['erp', 'enterprise', 'leadership'],
    featured: true,
  },
  {
    slug: 'raihcpns',
    title: 'RaihCPNS',
    summary:
      'Web platform for CPNS exam preparation — auth, tryouts, scoring, payments.',
    description:
      'Founded and built RaihCPNS as a web-first exam-prep product. Owned the full development lifecycle including system architecture, deployment, and maintenance. Shipped the core flows: authentication, tryout simulations, scoring, and payment integration. Kept the system fast and secure under exam-day traffic.',
    role: 'Founder',
    year: 2024,
    stack: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS'],
    links: {},
    tags: ['edtech', 'product', 'web'],
    featured: true,
  },
  {
    slug: 'lolosasn-android',
    title: 'LolosASN — Android',
    summary:
      'Published Android exam-prep app for CPNS aspirants, ~2,000 active users.',
    description:
      'Native Android app shipped to the Play Store for CPNS exam preparation. Built with Kotlin and Jetpack Compose, with offline-friendly tryout flow, scoring, and a clean UI tuned for low-end devices. Shipped from spec to production and maintained through real-user feedback at ~2,000 active users.',
    role: 'Mobile Lead',
    year: 2024,
    stack: ['Kotlin', 'Jetpack Compose', 'Android', 'Retrofit'],
    links: {},
    tags: ['edtech', 'mobile', 'android', 'published'],
    featured: true,
  },
  {
    slug: 'ypsa-finance-backoffice',
    title: 'YPSA Finance Back Office',
    summary:
      'Back-office finance system for Yayasan Pendidikan Shafiyyatul Amaliyyah.',
    description:
      'Internal finance and back-office system for YPSA covering ledgers, fee collection records, reconciliation, and reporting. Modeled the domain to fit existing accounting workflows and built reporting that finance staff actually use. Laravel 13 on the server, MySQL for storage.',
    role: 'Lead developer',
    year: 2026,
    stack: ['Laravel 13', 'MySQL', 'Blade', 'Tailwind CSS'],
    links: {},
    tags: ['fintech', 'education', 'web', 'enterprise'],
    featured: true,
  },
  {
    slug: 'ypsa-front-office-payment',
    title: 'YPSA Front Office Payment System',
    summary:
      'Front-office payment intake for YPSA — fast cashier flow for school fees.',
    description:
      'Front-counter payment system for YPSA used by the cashier team. Optimized for fast keyboard-first entry, receipt printing, and end-of-day close-out. Sits in front of the back-office finance system and feeds it cleanly. Laravel 12 + MySQL.',
    role: 'Lead developer',
    year: 2025,
    stack: ['Laravel 12', 'MySQL', 'Blade', 'Tailwind CSS'],
    links: {},
    tags: ['fintech', 'education', 'web'],
    featured: false,
  },
  {
    slug: 'ypsa-test-system',
    title: 'YPSA Test System',
    summary:
      'Online test / assessment platform for YPSA students.',
    description:
      'A test-taking platform for YPSA covering authoring, scheduling, secure delivery, and scoring. Built for use across multiple grades and subjects with role-based access for teachers and administrators.',
    role: 'Lead developer',
    year: 2025,
    stack: ['Laravel 12', 'MySQL', 'Blade', 'Tailwind CSS'],
    links: {},
    tags: ['edtech', 'education', 'web'],
    featured: false,
  },
  {
    slug: 'usu-test-system',
    title: 'USU Test App',
    summary:
      'Online test / exam application for Universitas Sumatera Utara.',
    description:
      'A test and exam delivery platform for Universitas Sumatera Utara. Handles question banks, sessions, monitoring, and result export. Built on Laravel with MySQL, deployed for real campus use.',
    role: 'Lead developer',
    year: 2025,
    stack: ['Laravel 13', 'MySQL', 'Blade'],
    links: {},
    tags: ['edtech', 'education', 'web'],
    featured: false,
  },
  {
    slug: 'mahmulp-feedback-sdk',
    title: 'feedback-sdk',
    summary:
      'Drop-in JavaScript feedback SDK — embed once, collect anywhere.',
    description:
      'A small published SDK that adds a feedback widget to any web app. Framework-agnostic core with optional adapters, configurable categories, screenshot attachment, and a clean POST hook for routing submissions to any backend.',
    role: 'Author / maintainer',
    year: 2026,
    stack: ['TypeScript', 'Rollup', 'CSS'],
    links: {},
    tags: ['open-source', 'library', 'npm', 'web'],
    featured: false,
  },
]
