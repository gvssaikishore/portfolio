"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const projectLinks = [
    { label: 'ShopWise', href: '/shopwise', description: 'Price comparison platform' },
    { label: 'Phone Comparison', href: '/prototype', description: 'Mobile device comparison' },
    { label: 'Dark Theme', href: '/prototype_dark', description: 'Alternative theme' },
    { label: 'Microlearn', href: '/microlearn', description: 'GTM strategy presentation' },
  ];

  const contentLinks = [
    { label: 'Blog', href: '/posts', description: 'Articles and insights' },
    { label: 'Business Model', href: '/bmc', description: 'ShopWise BMC' },
    { label: 'Journey Map', href: '/journey-map', description: 'Customer journey' },
    { label: 'Campaign Generator', href: '/campaign-onboarding', description: 'AI-powered tool' },
  ];

  const contactLinks = [
    { label: 'Microlearn LP1', href: '/microlearn/landing_page_1', description: 'Mikrolearn landing' },
    { label: 'Microlearn LP2', href: '/microlearn/landing_page_2', description: 'Alternate landing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 flex-shrink-0 mr-8"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SK</span>
            </div>
            <span className="font-bold hidden sm:inline-block text-foreground">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Projects Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1"
                >
                  Projects
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {projectLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="flex flex-col cursor-pointer">
                      <span className="font-medium">{link.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Content Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1"
                >
                  Content
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {contentLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="flex flex-col cursor-pointer">
                      <span className="font-medium">{link.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* About Link */}
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>

            {/* Extras Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1"
                >
                  More
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {contactLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="flex flex-col cursor-pointer">
                      <span className="font-medium">{link.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <div className="ml-4 border-l border-border/40 pl-4">
              <Link href="/about#contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/50 backdrop-blur">
            <div className="space-y-2 px-4 py-4">
              <div>
                <p className="px-2 py-2 text-sm font-semibold text-muted-foreground">
                  Projects
                </p>
                {projectLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-accent/10 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <p className="px-2 py-2 text-sm font-semibold text-muted-foreground">
                  Content
                </p>
                {contentLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-accent/10 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div>
                <p className="px-2 py-2 text-sm font-semibold text-muted-foreground">
                  More
                </p>
                {contactLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg hover:bg-accent/10 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border/40 pt-4 mt-4">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full mb-2">
                    About
                  </Button>
                </Link>
                <Link href="/about#contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
