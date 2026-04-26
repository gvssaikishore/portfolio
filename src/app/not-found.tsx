import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Page Not Found | Portfolio',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-200px)] w-full max-w-2xl items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-8xl font-extrabold text-primary">404</h1>
          <p className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Page not found
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, the page you are looking for does not exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Go Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View Projects
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/about" className="text-sm hover:text-primary transition">
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/posts" className="text-sm hover:text-primary transition">
              Blog
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/shopwise" className="text-sm hover:text-primary transition">
              ShopWise
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/about#contact" className="text-sm hover:text-primary transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
