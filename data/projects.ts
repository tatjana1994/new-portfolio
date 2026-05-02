export type Project = {
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  role: string;
  impact: string[];
  tech: string[];
  features: string[];
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Usluge Blizu',
    slug: 'usluge-blizu',
    category: 'Marketplace platform',
    year: '2026',
    description:
      'Lokalni marketplace za usluge sa oglasima, kategorijama, pretragom, SEO stranicama i modernim listing UI-jem.',
    longDescription:
      'Usluge Blizu je marketplace platforma napravljena u Next.js-u i Supabase-u. Fokus projekta je bio na brzom korisničkom iskustvu, jasnoj navigaciji kroz kategorije, optimizovanim listing stranicama i SEO metadata logici za svaki oglas.',
    role: 'Full frontend implementation, UI architecture, Supabase integration, SEO setup.',
    impact: [
      'Dinamički listing sistem sa kategorijama i gradovima',
      'SEO metadata za pojedinačne oglase',
      'Responsive kartice, filteri i carousel sekcije',
      'Čista arhitektura pogodna za skaliranje',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'SEO'],
    liveUrl: 'https://usluge-blizu.vercel.app/',
    githubUrl: 'https://github.com/tatjana1994/usluge-blizu',
    features: [
      'Listings',
      'Search',
      'Filters',
      'Dynamic metadata',
      'Responsive UI',
    ],
    accent: 'from-amber-300 via-orange-200 to-rose-200',
  },
  {
    title: 'Client Flow',
    slug: 'client-flow',
    category: 'SaaS dashboard',
    year: '2026',
    description:
      'Dashboard aplikacija za projekte, taskove, tim, fakture, analitiku i poruke — fokusirana na čist SaaS UI.',
    longDescription:
      'Client Flow je portfolio SaaS dashboard projekat koji prikazuje organizaciju projekata, timova, zadataka, faktura, analitike i komunikacije. Fokus je bio na premium dashboard estetici i reusable komponentama.',
    role: 'Frontend architecture, dashboard layout, reusable UI components, responsive navigation.',
    impact: [
      'Kompletan dashboard layout',
      'Sidebar navigacija i page struktura',
      'Reusable kartice i sekcije',
      'Profesionalan SaaS portfolio izgled',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    liveUrl: 'https://client-flow-flame.vercel.app/',
    githubUrl: 'https://github.com/tatjana1994/clientFlow',
    features: [
      'Dashboard',
      'Projects',
      'Tasks',
      'Invoices',
      'Analytics',
      'Messages',
    ],
    accent: 'from-sky-200 via-indigo-200 to-violet-200',
  },
  {
    title: 'Berrea',
    slug: 'berrea',
    category: 'E-commerce website',
    year: '2026',
    description:
      'E-commerce iskustvo sa WordPress/WooCommerce podacima, kategorijama, proizvodima, korpom i custom filterima.',
    longDescription:
      'Berrea je e-commerce projekat sa dinamičkim proizvodima iz WordPress/WooCommerce sistema preko WPGraphQL-a. Implementirani su proizvodi, kategorije, filteri, sortiranje, cart sidebar i responzivan shop layout.',
    role: 'Frontend implementation, WPGraphQL integration, product UI, cart experience.',
    impact: [
      'Dinamički proizvodi iz WooCommerce-a',
      'Custom shop layout sa filterima',
      'Cart sidebar i product cards',
      'Povezivanje WordPress podataka sa Next.js frontendom',
    ],
    liveUrl: 'https://berrea.vercel.app/',
    githubUrl: 'https://github.com/tatjana1994/berrea',
    tech: ['Next.js', 'WordPress', 'WooCommerce', 'WPGraphQL', 'Tailwind CSS'],
    features: ['Products', 'Categories', 'Cart sidebar', 'Filters', 'Sorting'],
    accent: 'from-emerald-200 via-teal-100 to-lime-200',
  },
  {
    title: 'Voyin',
    slug: 'voyin',
    category: 'Client website',
    year: '2026',
    description:
      'Premium cybersecurity website sa Headless WordPress arhitekturom, ACF sekcijama, SEO podešavanjima i dinamičkim sadržajem.',
    longDescription:
      'Voyin je klijentski website za cybersecurity/risk advisory brend. Projekat koristi Next.js, Headless WordPress, ACF i WPGraphQL. Fokus je bio na premium vizuelnom identitetu, dinamičkim sekcijama i produkcionom SEO setup-u.',
    role: 'Frontend development, dynamic sections, metadata setup, WordPress integration.',
    impact: [
      'Headless WordPress + Next.js setup',
      'Dinamičke ACF sekcije',
      'SEO metadata i OG slike',
      'Production-ready responsive frontend',
    ],
    liveUrl: 'https://www.voyin.ca/',
    githubUrl: 'https://github.com/tatjana1994/voyinca',
    tech: ['Next.js', 'Headless WordPress', 'ACF', 'WPGraphQL', 'SEO'],
    features: [
      'Dynamic pages',
      'CMS sections',
      'SEO',
      'OG images',
      'Responsive UI',
    ],
    accent: 'from-zinc-200 via-stone-100 to-amber-100',
  },
  {
    title: 'Glowuj',
    slug: 'glowuj',
    category: 'AI style analysis app',
    year: '2026',
    description:
      'AI aplikacija za analizu stila, boja i oblika tela sa upload flow-om, rezultatima i premium UI iskustvom.',
    longDescription:
      'Glowuj je AI style analysis aplikacija koja kombinuje upload fotografija, preferencije korisnika, OpenAI analizu i personalizovane rezultate. Fokus projekta je bio na čistom flow-u, jasnim rezultatima i premium vizuelnom identitetu.',
    role: 'Product idea, frontend implementation, Supabase flow, AI result UI.',
    liveUrl: 'https://glowuj.vercel.app/',
    githubUrl: 'https://github.com/tatjana1994/glowuj',
    impact: [
      'Multi-step upload flow',
      'Rezultati za boje, stil i body shape',
      'Supabase storage/database koncept',
      'Premium result cards i UX',
    ],
    tech: ['Next.js', 'Supabase', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Image upload',
      'AI analysis',
      'Result cards',
      'Preferences',
      'Stripe-ready',
    ],
    accent: 'from-rose-200 via-pink-100 to-orange-100',
  },
];
