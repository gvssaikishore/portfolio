import type { Metadata } from 'next';
import { getAllPostsMeta } from '@/lib/blog';
import BlogPostList from '@/components/blog-post-list';

export const metadata: Metadata = {
  title: 'Blog | ShopWise',
  description: 'Notes, learnings, and updates.',
};

export default async function PostsPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-16 sm:px-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Blog</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Write posts in the <code>posts/</code> folder using Markdown.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Use <code>draft: true</code> in frontmatter to keep a post hidden in production.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
          No posts yet. Add your first Markdown file inside <code>posts/</code>.
        </div>
      ) : (
        <BlogPostList posts={posts} />
      )}
    </main>
  );
}
