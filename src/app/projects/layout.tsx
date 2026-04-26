import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Saikishore',
  description: 'Showcase of projects, prototypes, and products built by Saikishore. From price comparison platforms to AI-powered tools and interactive visualizations.',
  keywords: ['projects', 'portfolio', 'case studies', 'prototypes', 'product development'],
  openGraph: {
    title: 'Projects | Saikishore',
    description: 'Showcase of projects, prototypes, and products built by Saikishore.',
    type: 'website',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
