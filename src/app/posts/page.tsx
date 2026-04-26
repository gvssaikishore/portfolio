import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | ShopWise',
  description: 'Notes, learnings, and updates.',
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

export default async function PostsPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Blog</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Write posts in the <code>posts/</code> folder using Markdown.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
          No posts yet. Add your first Markdown file inside <code>posts/</code>.
        </div>
      ) : (
        <section className="space-y-5">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-border bg-card p-6 text-card-foreground">
              <p className="text-sm text-muted-foreground">{formatDate(post.date)}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                <Link className="hover:underline" href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              {post.summary ? <p className="mt-3 text-base text-muted-foreground">{post.summary}</p> : null}
              {post.tags.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
