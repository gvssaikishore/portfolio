import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background mt-16 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-foreground mb-2">Saikishore</h3>
            <p className="text-sm text-muted-foreground">
              Building products and sharing learnings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shopwise" className="hover:text-foreground transition">
                  ShopWise
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/gvssaikishore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-border/40 hover:bg-accent/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/saikishore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-border/40 hover:bg-accent/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@saikishore.dev"
                className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-border/40 hover:bg-accent/10 transition"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40" />

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Saikishore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
