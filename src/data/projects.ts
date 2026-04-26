export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'e-commerce' | 'tool' | 'presentation' | 'ai' | 'prototype';
  technologies: string[];
  featured: boolean;
  thumbnail: string;
  link?: string;
  status: 'completed' | 'in-progress' | 'archived';
  year: number;
  metrics?: {
    label: string;
    value: string;
  }[];
  keyLearnings: string[];
  problemStatement: string;
  solution: string;
  features: string[];
  cta?: {
    text: string;
    link: string;
  };
}

export const projects: Project[] = [
  {
    id: 'shopwise',
    slug: 'shopwise',
    title: 'ShopWise',
    description: 'A comprehensive price comparison platform that helps users find the best deals across online retailers. Built with Next.js, React, and Firebase, ShopWise demonstrates full-stack product development with real-time data aggregation, price tracking, and user-friendly interface design.',
    shortDescription: 'E-commerce price comparison platform helping users find the best deals across retailers.',
    category: 'e-commerce',
    technologies: ['Next.js', 'React', 'Firebase', 'Firestore', 'TailwindCSS', 'TypeScript'],
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop',
    link: '/shopwise',
    status: 'completed',
    year: 2024,
    metrics: [
      { label: 'Retailers', value: '50+' },
      { label: 'Products Tracked', value: '10K+' },
      { label: 'Price Updates', value: 'Real-time' },
    ],
    keyLearnings: [
      'Designing scalable e-commerce backends with Firestore',
      'Real-time data synchronization patterns',
      'Product discovery and comparison UX best practices',
      'Firebase hosting and deployment optimization',
    ],
    problemStatement: 'Users struggle to compare prices across multiple e-commerce platforms, spending time manually checking different websites to find the best deals.',
    solution: 'Built an intelligent aggregation platform that scrapes and indexes prices from major retailers, providing instant price comparisons and deal recommendations.',
    features: [
      'Real-time price tracking across 50+ retailers',
      'Intelligent price comparison and sorting',
      'Price history tracking and trend analysis',
      'Deal notifications and price alerts',
      'Mobile-responsive design',
      'Firebase backend with Firestore database',
      'Automated price scraping and updates',
    ],
    cta: { text: 'View ShopWise', link: '/shopwise' },
  },
  {
    id: 'phone-comparison',
    slug: 'phone-comparison',
    title: 'Phone Comparison Tool',
    description: 'An interactive prototype for comparing smartphones side-by-side. Features a responsive mobile mockup component that showcases product comparison interfaces with vendor pricing, specifications, and availability.',
    shortDescription: 'Interactive tool for comparing smartphone specs and pricing across vendors.',
    category: 'tool',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=600&h=400&fit=crop',
    link: '/prototype',
    status: 'completed',
    year: 2024,
    metrics: [
      { label: 'Phones', value: '100+' },
      { label: 'Vendors', value: '5' },
      { label: 'Response Time', value: '<100ms' },
    ],
    keyLearnings: [
      'Building responsive component systems for mobile devices',
      'Data structure optimization for comparison features',
      'Mobile-first design principles',
      'Component reusability and composition patterns',
    ],
    problemStatement: 'Consumers waste time visiting multiple retailer websites to compare phone specifications and prices.',
    solution: 'Created an intuitive side-by-side comparison interface that displays phones with their specs, prices, and availability in a single view.',
    features: [
      'Side-by-side phone comparison',
      'Filterable specifications and features',
      'Price comparison across vendors',
      'Mobile device mockup visualization',
      'Responsive design for all screen sizes',
      'Search and filter functionality',
      'Quick purchase links to retailers',
    ],
    cta: { text: 'Try Comparison Tool', link: '/prototype' },
  },
  {
    id: 'microlearn-gtm',
    slug: 'microlearn-gtm',
    title: 'Microlearn: GTM Strategy',
    description: 'An interactive presentation on Go-To-Market (GTM) strategies for mobile learning products. Demonstrates structured product strategy thinking, market research, and launch planning through an engaging carousel-based presentation interface.',
    shortDescription: 'Interactive GTM strategy presentation for mobile learning products.',
    category: 'presentation',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    link: '/microlearn',
    status: 'completed',
    year: 2024,
    metrics: [
      { label: 'Slides', value: '12+' },
      { label: 'Strategy Components', value: '6' },
      { label: 'Interactive Elements', value: '8' },
    ],
    keyLearnings: [
      'Structuring product strategy presentations',
      'Market analysis and competitive positioning',
      'GTM channel selection and prioritization',
      'Creating engaging interactive presentations',
    ],
    problemStatement: 'Complex GTM strategies need to be communicated clearly to stakeholders and investors.',
    solution: 'Built an interactive presentation that breaks down GTM strategy into digestible slides with clear visuals, data, and messaging.',
    features: [
      'Carousel-based navigation',
      'Market analysis and TAM calculations',
      'Competitive positioning matrix',
      'Channel strategy breakdown',
      'Customer acquisition cost analysis',
      'Revenue projections and metrics',
      'Interactive slide transitions',
    ],
    cta: { text: 'View Strategy', link: '/microlearn' },
  },
  {
    id: 'business-model',
    slug: 'business-model',
    title: 'Business Model Canvas',
    description: 'A comprehensive Business Model Canvas (BMC) for the ShopWise platform. Showcases strategic thinking across all nine BMC dimensions including value propositions, revenue streams, key partnerships, and cost structure.',
    shortDescription: 'Strategic Business Model Canvas for ShopWise platform.',
    category: 'presentation',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    link: '/bmc',
    status: 'completed',
    year: 2024,
    keyLearnings: [
      'Structuring business models for scalability',
      'Revenue stream identification and diversification',
      'Key partnership and resource optimization',
      'Cost structure analysis and unit economics',
    ],
    problemStatement: 'Complex business models need visual representation for stakeholder alignment.',
    solution: 'Created an interactive BMC visualization that clearly displays all nine components and their relationships.',
    features: [
      'Nine BMC component visualization',
      'Value propositions breakdown',
      'Customer segments analysis',
      'Revenue streams and pricing models',
      'Key partnerships and resources',
      'Cost structure and margins',
      'Interactive hover information',
      'Mobile responsive layout',
    ],
    cta: { text: 'View BMC', link: '/bmc' },
  },
  {
    id: 'journey-map',
    slug: 'journey-map',
    title: 'Customer Journey Map',
    description: 'An interactive visualization of the customer journey through the ShopWise platform. Maps key touchpoints, emotions, pain points, and opportunities across the entire user lifecycle from awareness to advocacy.',
    shortDescription: 'Interactive customer journey visualization with emotional mapping.',
    category: 'presentation',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Recharts'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    link: '/journey-map',
    status: 'completed',
    year: 2024,
    metrics: [
      { label: 'Journey Stages', value: '5' },
      { label: 'Touchpoints', value: '15+' },
      { label: 'Pain Points Identified', value: '12' },
    ],
    keyLearnings: [
      'User research and data collection methods',
      'Emotional journey mapping and empathy building',
      'Pain point identification and prioritization',
      'Opportunity discovery from journey insights',
    ],
    problemStatement: 'Understanding the complete user journey across all touchpoints is essential for product optimization.',
    solution: 'Built an interactive journey map that visualizes the user experience from initial awareness through long-term advocacy.',
    features: [
      'Five-stage customer journey visualization',
      'Emotional peaks and valleys graph',
      'Touchpoint mapping and interaction tracking',
      'Pain points and opportunities callouts',
      'Goals and expectations alignment',
      'Interactive stage exploration',
      'Responsive design for presentations',
    ],
    cta: { text: 'Explore Journey', link: '/journey-map' },
  },
  {
    id: 'ai-campaign',
    slug: 'ai-campaign',
    title: 'AI Campaign Generator',
    description: 'A creative AI-powered tool that generates marketing campaigns on-demand. Demonstrates AI integration, prompt engineering, and generative UI patterns using Genkit and other AI frameworks.',
    shortDescription: 'AI-powered tool for generating marketing campaigns with instant results.',
    category: 'ai',
    technologies: ['Next.js', 'React', 'Google Genkit', 'TailwindCSS', 'TypeScript', 'Firebase'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1677442d019cecf8d6b73e3d47c7c0cdc9c59c01?w=600&h=400&fit=crop',
    link: '/campaign-onboarding',
    status: 'completed',
    year: 2024,
    metrics: [
      { label: 'AI Model', value: 'Genkit' },
      { label: 'Generation Time', value: '~3s' },
      { label: 'Campaign Types', value: '8+' },
    ],
    keyLearnings: [
      'AI/ML integration in product interfaces',
      'Prompt engineering for consistent output quality',
      'Generative UI patterns and state management',
      'Async operation handling in React',
      'AI API rate limiting and cost optimization',
    ],
    problemStatement: 'Creating marketing campaigns is time-consuming and requires significant creative effort and expertise.',
    solution: 'Integrated AI capabilities to generate custom marketing campaigns in seconds, allowing teams to experiment and iterate quickly.',
    features: [
      'AI-powered campaign generation',
      'Multiple campaign type templates',
      'Customizable brand voice and tone',
      'Real-time generation progress feedback',
      'Campaign copy and creative assets',
      'Easy export and sharing',
      'Wizard-based onboarding',
    ],
    cta: { text: 'Generate Campaign', link: '/campaign-onboarding' },
  },
  {
    id: 'dark-theme',
    slug: 'dark-theme',
    title: 'Phone Comparison (Dark Theme)',
    description: 'An alternative dark-themed version of the phone comparison tool. Demonstrates design flexibility, theme switching, and accessibility considerations for dark mode implementations.',
    shortDescription: 'Phone comparison tool with dark theme variant and accessibility features.',
    category: 'prototype',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'CSS-in-JS'],
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    link: '/prototype_dark',
    status: 'completed',
    year: 2024,
    keyLearnings: [
      'Dark mode implementation strategies',
      'Color contrast and accessibility in dark themes',
      'Theme switching patterns and persistence',
      'CSS custom properties for theme management',
      'Testing dark mode across browser and OS',
    ],
    problemStatement: 'Users need dark mode options for comfortable viewing in low-light environments.',
    solution: 'Implemented a fully functional dark theme variant with proper color contrast and accessibility standards.',
    features: [
      'Complete dark theme styling',
      'WCAG AA color contrast compliance',
      'Seamless theme switching',
      'Persistent theme preference',
      'OS-level dark mode detection',
      'All phone comparison features in dark mode',
      'Optimized for eye comfort',
    ],
    cta: { text: 'View Dark Theme', link: '/prototype_dark' },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured).slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category);
}

export function searchProjects(query: string): Project[] {
  const q = query.toLowerCase();
  return projects.filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some(t => t.toLowerCase().includes(q))
  );
}
