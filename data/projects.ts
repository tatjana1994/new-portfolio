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
      'A modern local services marketplace focused on speed, clarity and conversion-driven UI.',
    longDescription:
      'Usluge Blizu is a marketplace platform built with Next.js and Supabase, designed to deliver a fast and intuitive user experience. The focus was on clean navigation, scalable listing architecture and SEO-optimized pages for each service. The result is a highly responsive platform that feels simple to use while handling complex data structures behind the scenes.',
    role: 'Full frontend implementation, UI architecture, Supabase integration and SEO setup.',
    impact: [
      'Built a dynamic listing system with categories and location-based filtering',
      'Implemented SEO metadata for individual listings',
      'Designed responsive UI with filters, cards and structured layouts',
      'Created scalable frontend architecture ready for growth',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'SEO'],
    liveUrl: 'https://uslugeblizu.tatjanadevrnja.com/',
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
      'A clean, modern SaaS dashboard designed to manage projects, teams and workflows with a premium UI.',
    longDescription:
      'Client Flow is a SaaS-style dashboard application focused on organizing projects, teams, tasks, invoices and communication in one place. The main goal was to create a polished and scalable UI system that feels intuitive and structured, while maintaining a strong visual identity. The project showcases reusable components, dashboard architecture and modern SaaS design patterns.',
    role: 'Frontend architecture, dashboard layout, reusable UI components and responsive navigation.',
    impact: [
      'Designed and built a complete dashboard layout',
      'Implemented sidebar navigation and structured page system',
      'Created reusable UI components for scalability',
      'Delivered a professional SaaS-style user experience',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    liveUrl: 'https://clientflow.tatjanadevrnja.com/',
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
      'A modern e-commerce experience powered by WordPress and WPGraphQL, focused on performance and clean UI.',
    longDescription:
      'Berrea is a fully dynamic e-commerce frontend built with Next.js and powered by WordPress/WooCommerce via WPGraphQL. The project focuses on delivering a smooth shopping experience with clean product presentation, filtering, sorting and cart interactions. Special attention was given to performance, data handling and scalable frontend architecture.',
    role: 'Frontend implementation, WPGraphQL integration, product UI and cart experience.',
    impact: [
      'Connected WooCommerce backend with Next.js frontend',
      'Built custom shop layout with filtering and sorting',
      'Implemented cart sidebar and product interaction flows',
      'Optimized rendering for better performance and UX',
    ],
    tech: ['Next.js', 'WordPress', 'WooCommerce', 'WPGraphQL', 'Tailwind CSS'],
    liveUrl: 'https://berrea.tatjanadevrnja.com/',
    githubUrl: 'https://github.com/tatjana1994/berrea',
    features: ['Products', 'Categories', 'Cart sidebar', 'Filters', 'Sorting'],
    accent: 'from-emerald-200 via-teal-100 to-lime-200',
  },
  {
    title: 'Voyin',
    slug: 'voyin',
    category: 'Client website',
    year: '2026',
    description:
      'A premium cybersecurity website built with a headless architecture and strong focus on performance and SEO.',
    longDescription:
      'Voyin is a client project built using Next.js and Headless WordPress with ACF and WPGraphQL. The goal was to create a high-end, trustworthy digital presence with dynamic content sections and strong SEO foundations. The result is a production-ready website with a refined UI and flexible CMS structure.',
    role: 'Frontend development, dynamic sections, metadata setup and WordPress integration.',
    impact: [
      'Built a headless WordPress + Next.js architecture',
      'Implemented dynamic ACF-driven sections',
      'Configured SEO metadata and Open Graph setup',
      'Delivered a responsive, production-ready UI',
    ],
    tech: ['Next.js', 'Headless WordPress', 'ACF', 'WPGraphQL', 'SEO'],
    liveUrl: 'https://www.voyin.ca/',
    githubUrl: 'https://github.com/tatjana1994/voyinca',
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
      'An AI-powered style analysis application focused on personalized results and premium user experience.',
    longDescription:
      'Glowuj is an AI-driven application that analyzes user style, colors and body shape through image upload and preference-based inputs. The focus was on building a smooth multi-step flow and delivering clear, personalized results with a premium interface. The project combines modern frontend architecture with AI-driven features.',
    role: 'Product concept, frontend implementation, Supabase flow and AI results UI.',
    impact: [
      'Designed a multi-step user flow for analysis',
      'Built personalized results for style and color insights',
      'Structured Supabase storage and data handling',
      'Delivered premium UI for result presentation',
    ],
    tech: ['Next.js', 'Supabase', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://glowuj.tatjanadevrnja.com/',
    githubUrl: 'https://github.com/tatjana1994/glowuj',
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
