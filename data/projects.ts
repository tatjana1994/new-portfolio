import { Project } from '@/components/portfolio/SelectedProjects';

export const projects: Project[] = [
  {
    name: 'Herz',
    category: 'Corporate / CMS-driven website',
    description:
      'Worked on a structured frontend experience for a brand-focused website with dynamic content sections, responsive layouts, and a reusable component approach.',
    stack: 'Next.js · TypeScript · Tailwind CSS · GraphQL',
    image: '/HERZ.svg',
    liveUrl: 'https://www.herz.rs/',
    caseStudy: {
      overview:
        'Herz is a CMS-driven corporate website built using a headless architecture with WordPress as the content source. The goal was to create a scalable, flexible frontend while allowing easy content management from the CMS.',
      role: 'I was responsible for building the frontend from scratch and integrating it with a headless WordPress CMS. I worked on structuring dynamic sections, handling content via GraphQL, and ensuring the UI remained consistent and maintainable.',
      challenge:
        'The main challenge was designing a flexible frontend structure that could support different types of CMS-driven content while keeping the layout visually consistent and easy to maintain.',
      solution:
        'I implemented a reusable component-based system and connected it to the CMS using GraphQL. Each section was designed to be dynamic and adaptable, allowing content changes without breaking layout or design consistency.',
      outcome:
        'The result was a clean, scalable, and CMS-driven frontend that allows easy content updates while maintaining strong performance, consistency, and a polished user experience.',
    },
  },
  {
    name: 'Exclusive Med Supply',
    category: 'E-commerce / presentation platform',
    description:
      'Contributed to a production-ready frontend with a strong focus on layout structure, reusable patterns, and a scalable setup for content-driven pages.',
    stack: 'Next.js · TypeScript · Tailwind CSS · WordPress · GraphQL',
    image: '/EMS.svg',
    liveUrl: 'https://www.exclusivemedsupply.com/',
    caseStudy: {
      overview:
        'Exclusive Med Supply is an e-commerce platform built using a headless architecture, with WordPress/WooCommerce as the backend and a custom Next.js frontend. The goal was to deliver a fast, scalable storefront with a strong focus on performance and usability.',
      role: 'I built the frontend from scratch and integrated it with a headless WordPress/WooCommerce backend. I worked on product listing pages, dynamic data fetching, UI components, and overall structure of the storefront.',
      challenge:
        'The main challenge was handling dynamic product data and ensuring the storefront remained fast and responsive, while also supporting flexible content and scalable architecture.',
      solution:
        'I implemented optimized data fetching, reusable UI components, and structured the frontend in a way that supports scalability. I focused on performance optimization, clean state handling, and responsive layouts across all devices.',
      outcome:
        'The result was a production-ready e-commerce frontend with improved performance, scalable structure, and a smooth user experience that supports business needs and future growth.',
    },
  },
  {
    name: 'Union',
    category: 'Corporate / presentation website',
    description:
      'Built clean UI sections and responsive page layouts with a focus on consistency, maintainability, and clear content presentation across devices.',
    stack: 'Next.js · Tailwind CSS · GraphQL',
    image: '/Union.svg',
    liveUrl: 'https://www.unionfintech.com/',
    caseStudy: {
      overview:
        'Union is a corporate presentation website built using a headless CMS approach, with WordPress as the backend and a custom frontend built in Next.js.',
      role: 'I was responsible for developing the frontend and integrating it with the headless CMS. I implemented UI sections, handled dynamic content, and ensured responsiveness across devices.',
      challenge:
        'The challenge was maintaining visual consistency while working with CMS-driven content that could change frequently, while also keeping the codebase clean and maintainable.',
      solution:
        'I created reusable components and structured layouts that adapt to different types of content. The frontend was designed to be flexible, scalable, and easy to extend.',
      outcome:
        'The final result was a stable, responsive, and maintainable frontend that supports dynamic content and provides a clean and professional user experience.',
    },
  },
];
