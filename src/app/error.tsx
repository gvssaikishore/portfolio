'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-200px)] w-full max-w-2xl items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-8xl font-extrabold text-primary">500</h1>
          <p className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Something went wrong
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            An unexpected error occurred while processing your request. Our team has been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => reset()} className="bg-primary hover:bg-primary/90">
            Try Again
          </Button>
          <Link href="/">
            <Button size="lg" variant="outline">
              Go Home
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-xs text-muted-foreground mb-4">
            Error ID: {error.digest}
          </p>
          <p className="text-sm text-muted-foreground mb-4">Need help?</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about#contact" className="text-sm hover:text-primary transition">
              Contact Support
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/posts" className="text-sm hover:text-primary transition">
              Read Blog
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/projects" className="text-sm hover:text-primary transition">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
