'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project } from '@/data/projects';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'tool', label: 'Tools' },
  { id: 'presentation', label: 'Presentations' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'prototype', label: 'Prototypes' },
] as const;

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | Project['category']>('all');

  const filteredProjects = useMemo(() => {
    let result = projects;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-16 sm:px-6">
      {/* Header */}
      <section className="mb-12 space-y-6">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            Projects & Work
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
            A collection of products, prototypes, and experiments I've built. Each project represents growth, learning, and a deep dive into problem-solving.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search projects by name, description, or technology..."
            className="pl-10 h-11"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <div className="mb-8 text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={project.link || `/projects/${project.slug}`}>
              <div className="group h-full rounded-lg border border-border bg-card overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                {/* Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col h-[calc(100%-160px)] p-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4 space-y-3 border-t border-border/40 pt-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Status and Year */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="capitalize">{project.status}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground mb-4">
            No projects found matching your search.
          </p>
          <Button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            variant="outline"
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <section className="mt-20 rounded-lg border border-border bg-card p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Interested in working together?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        <Link href="/about#contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get in Touch
          </Button>
        </Link>
      </section>
    </main>
  );
}
