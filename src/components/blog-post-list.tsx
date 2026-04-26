'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog';

const POSTS_PER_PAGE = 5;

type BlogPostListProps = {
  posts: BlogPostMeta[];
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

export default function BlogPostList({ posts }: BlogPostListProps) {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      return posts;
    }

    return posts.filter((post) => {
      const searchable = `${post.title} ${post.summary} ${post.tags.join(' ')}`.toLowerCase();
      return searchable.includes(trimmed);
    });
  }, [posts, query]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  function handleSearch(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(1, page - 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  }

  return (
    <section>
      <div className="mb-6 rounded-lg border border-border bg-card p-4 text-card-foreground">
        <label className="text-sm font-medium" htmlFor="posts-search">
          Search posts
        </label>
        <input
          id="posts-search"
          className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          type="search"
          value={query}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Search by title, summary, or tag"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-lg border border-border bg-card p-6 text-card-foreground">
          No posts match your search.
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {paginatedPosts.map((post) => (
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
          </div>

          <div className="mt-8 flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 text-card-foreground">
            <button
              type="button"
              className="rounded-md border border-input px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
              disabled={safePage <= 1}
              onClick={goToPreviousPage}
            >
              Previous
            </button>
            <p className="text-sm text-muted-foreground">
              Page {safePage} of {totalPages}
            </p>
            <button
              type="button"
              className="rounded-md border border-input px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
              disabled={safePage >= totalPages}
              onClick={goToNextPage}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}
