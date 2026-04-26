import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/projects" className="hover:text-foreground transition">
          Projects
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{project.title}</span>
      </div>

      {/* Hero Section */}
      <section className="mb-12 space-y-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Badge className="capitalize">{project.category}</Badge>
            <span className="text-muted-foreground">{project.year}</span>
            <span className="text-muted-foreground">
              <span className="font-medium">{project.technologies.length}</span> Technologies
            </span>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="relative h-96 w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Key Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="mt-2 text-2xl font-bold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Main Content */}
      <div className="space-y-12">
        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Problem</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.problemStatement}
          </p>
        </section>

        {/* Solution */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Solution</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.solution}
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Key Learnings */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Key Learnings</h2>
          <div className="space-y-3 rounded-lg border border-border bg-card p-6">
            {project.keyLearnings.map((learning, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                <p className="text-muted-foreground">{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        {project.cta && (
          <section className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to explore?</h2>
            <Link href={project.cta.link}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {project.cta.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-16 border-t border-border/40 pt-12">
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Projects</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`}>
                  <div className="group rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                      {relatedProject.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {relatedProject.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Projects */}
        <div className="flex items-center justify-between">
          <Link href="/projects">
            <Button variant="outline">← Back to Projects</Button>
          </Link>
          <Link href="/about#contact">
            <Button className="bg-primary hover:bg-primary/90">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
