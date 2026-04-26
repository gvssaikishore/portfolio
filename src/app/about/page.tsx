import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'About | Saikishore',
  description: 'Building products and sharing learnings.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-16 sm:px-6">
      {/* Hero Section */}
      <section className="mb-16 space-y-6">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Hi, I'm Saikishore
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Building products that solve real problems. Writing about what I learn along the way.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/gvssaikishore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-accent/10"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-accent/10"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16 space-y-6 rounded-lg border border-border bg-card p-8 text-card-foreground">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            I'm a product builder and developer focused on creating tools that make people's lives easier. 
            I enjoy exploring new technologies, experimenting with ideas, and learning from failures.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Currently, I'm working on projects that combine AI, frontend development, and product thinking. 
            I document my journey through blogs, code, and experiments.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Projects</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A selection of projects and experiments I've built.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* ShopWise Project */}
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground hover:border-primary/50 transition">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold">ShopWise</h3>
              <Link
                href="/shopwise"
                className="text-xs text-primary hover:underline"
              >
                View →
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              A price comparison platform helping users find the best deals across online retailers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                Next.js
              </span>
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                React
              </span>
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                Firebase
              </span>
            </div>
          </div>

          {/* Blog Project */}
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground hover:border-primary/50 transition">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold">Blog</h3>
              <Link
                href="/posts"
                className="text-xs text-primary hover:underline"
              >
                Read →
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Notes, learnings, and updates on building, coding, and experimenting with new ideas.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                Writing
              </span>
              <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                Learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg border border-primary/20 bg-primary/5 p-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Let's connect</h2>
        <p className="mt-2 text-muted-foreground">
          Interested in collaborating or just want to chat? Feel free to reach out.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
