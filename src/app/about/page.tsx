import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'About | Saikishore - Product Builder & Developer',
  description: 'I build products that solve real problems. Experienced in full-stack development, product strategy, and AI integration. Open to exciting opportunities.',
};

export default function AboutPage() {
  const skillCategories = [
    {
      category: 'Product Strategy',
      skills: ['Go-to-Market', 'User Research', 'Product Roadmapping', 'Competitive Analysis', 'Metrics & Analytics', 'Stakeholder Management']
    },
    {
      category: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'UI/UX Design', 'Accessibility (WCAG)']
    },
    {
      category: 'Backend & Infrastructure',
      skills: ['Firebase', 'Firestore', 'Backend APIs', 'Cloud Functions', 'Database Design', 'DevOps']
    },
    {
      category: 'AI & Emerging Tech',
      skills: ['Google Genkit', 'LLM Integration', 'Prompt Engineering', 'Generative UI', 'AI Product Thinking']
    },
  ];

  const experience = [
    {
      period: '2024 - Present',
      title: 'Founder / Product Builder',
      description: 'Building ShopWise - a full-stack price comparison platform with 50K+ users. Responsible for product strategy, technical architecture, and growth.',
      highlights: ['Full-stack development', 'Product strategy & GTM', 'Real-time data aggregation']
    },
    {
      period: '2023 - 2024',
      title: 'Senior Product Manager / Engineer',
      description: 'Led product development across multiple projects. Combined PM thinking with technical execution.',
      highlights: ['Product roadmapping', 'Team collaboration', 'Cross-functional leadership']
    },
    {
      period: '2022 - 2023',
      title: 'Full-Stack Developer',
      description: 'Built web and mobile applications. Focus on user experience and performance optimization.',
      highlights: ['React & Next.js', 'Mobile-first design', 'Performance optimization']
    },
  ];

  const featuredProjects = [
    {
      id: 'shopwise',
      title: 'ShopWise',
      description: 'E-commerce price comparison platform with real-time tracking',
      tech: ['Next.js', 'Firebase', 'Real-time DB'],
      link: '/shopwise',
      featured: true,
    },
    {
      id: 'prototypes',
      title: 'Interactive Prototypes',
      description: 'Phone comparison, BMC visualization, journey mapping',
      tech: ['React', 'Visualization', 'Design'],
      link: '/projects',
    },
    {
      id: 'campaign-ai',
      title: 'AI Campaign Generator',
      description: 'AI-powered marketing campaign generation tool',
      tech: ['Genkit', 'LLM Integration', 'Next.js'],
      link: '/campaign-onboarding',
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-16 sm:px-6">
      {/* Hero Section */}
      <section className="mb-20 space-y-6">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Hi, I'm Saikishore
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm a product builder and full-stack developer passionate about creating tools that solve real problems. I combine technical execution with strategic thinking to build products people love.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/gvssaikishore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-accent/10 transition"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://linkedin.com/in/saikishore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground hover:bg-accent/10 transition"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
          <Link href="#contact">
            <Button className="bg-primary hover:bg-primary/90">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-20 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a builder at heart. Whether it's coding, product strategy, or design, I'm driven by the question: <strong className="text-foreground">"How do I make this better for users?"</strong>
            </p>
            <p>
              I started my journey as a developer, but I discovered I loved thinking about *why* we build things as much as *how* we build them. This led me to product management, where I could combine technical knowledge with strategic thinking.
            </p>
            <p>
              Today, I wear multiple hats:
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground mb-2">👨‍💻 Developer</h3>
            <p className="text-sm text-muted-foreground">
              Full-stack development with React, Next.js, and Firebase. I care about code quality and user experience.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground mb-2">📊 Product Strategist</h3>
            <p className="text-sm text-muted-foreground">
              Market analysis, user research, and GTM planning. I build products based on real problems, not assumptions.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground mb-2">🚀 Builder</h3>
            <p className="text-sm text-muted-foreground">
              End-to-end product ownership. From problem definition to launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills & Expertise</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.category} className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Experience</h2>
        
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                  <p className="text-sm text-primary font-medium">{exp.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight) => (
                  <Badge key={highlight} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Featured Work</h2>
          <p className="text-muted-foreground">
            Here's a selection of projects I'm proud of. <Link href="/projects" className="text-primary hover:underline">View all projects →</Link>
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={project.link}>
              <div className="group h-full rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-primary/20 text-primary text-xs">Featured</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/projects">
          <Button variant="outline" className="w-full">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Current Focus & Interests */}
      <section className="mb-20 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">What I'm Focused On</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50 p-6">
            <h3 className="font-semibold text-foreground mb-2">🎯 Current Priority</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scaling ShopWise to 100K+ users and exploring new verticals beyond price comparison. Particularly interested in solving problems at the intersection of commerce and AI.
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50 p-6">
            <h3 className="font-semibold text-foreground mb-2">🧠 Actively Learning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI/ML integration in consumer products, advanced product strategy frameworks, and emerging technologies that create new product opportunities.
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50 p-6">
            <h3 className="font-semibold text-foreground mb-2">💼 Open To</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Speaking engagements, advisory roles, collaborations on product strategy or technical projects, and conversations with fellow builders.
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50 p-6">
            <h3 className="font-semibold text-foreground mb-2">📚 Sharing Knowledge</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Writing about product strategy, prototyping, building with AI, and lessons from launching products. Check out my <Link href="/posts" className="text-primary hover:underline">blog</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="mb-20 rounded-lg border border-border/40 bg-card p-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">Read My Writing</h2>
        <p className="text-muted-foreground mb-6">
          I write about product development, prototyping, strategy, and the lessons I've learned building products. 
        </p>
        <Link href="/posts">
          <Button className="bg-primary hover:bg-primary/90">
            Read Blog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Let's Connect</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm always interested in discussing product ideas, technical challenges, collaborations, or just connecting with fellow builders. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@saikishore.dev"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/saikishore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground hover:bg-accent/10 transition"
          >
            <Linkedin className="h-4 w-4" />
            Connect on LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </section>
    </main>
  );
}
