import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';

type PostPageProps = {
  params: {
    slug: string;
  };
};

function formatDate(dateValue: string): string {
  const parsed = Date.parse(dateValue);

  if (Number.isNaN(parsed)) {
    return dateValue;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(parsed));
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post not found | ShopWise',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6">
      <p>
        <Link className="text-sm text-muted-foreground hover:underline" href="/posts">
          Back to posts
        </Link>
      </p>

      <article className="mt-6 rounded-lg border border-border bg-card p-6 text-card-foreground sm:p-8">
        <header className="border-b border-border pb-5">
          <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{post.title}</h1>
          {post.summary ? <p className="mt-3 text-base text-muted-foreground">{post.summary}</p> : null}
        </header>

        <div className="blog-content mt-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
