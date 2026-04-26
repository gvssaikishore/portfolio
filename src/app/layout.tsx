import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Feedback from '@/components/feedback';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/context/theme-context';

export const metadata: Metadata = {
  title: {
    default: 'Saikishore - Product Builder & Developer',
    template: '%s | Saikishore',
  },
  description: 'Full-stack product builder and developer. Building ShopWise and other innovative products. Experienced in React, Next.js, Firebase, and AI integration.',
  keywords: ['product developer', 'product manager', 'full-stack', 'react', 'next.js', 'firebase', 'AI'],
  authors: [{ name: 'Saikishore' }],
  creator: 'Saikishore',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saikishore.dev',
    title: 'Saikishore - Product Builder & Developer',
    description: 'Full-stack product builder and developer. Building innovative products that solve real problems.',
    siteName: 'Saikishore Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saikishore - Product Builder & Developer',
    description: 'Full-stack product builder and developer. Building innovative products that solve real problems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YB0H9M7D2B"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YB0H9M7D2B');
            `,
          }} />
          {/* Google Ads */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3861959107227469" crossOrigin="anonymous"></script>
      </head>
      <body className="bg-background text-foreground transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <Feedback />
        </ThemeProvider>
      </body>
    </html>
  );
}
