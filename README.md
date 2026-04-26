# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Blog Content Structure

This project now includes a simple Markdown blog setup:

- Blog index page: `/posts`
- Blog post page: `/posts/[slug]`
- Content folder: `posts/`
- Search and pagination on the posts page

Create a new file inside `posts/` with `.md` or `.mdx` extension.

Use this frontmatter format:

```md
---
title: "Your Post Title"
date: "2026-04-26"
summary: "One sentence summary"
tags:
	- writing
	- notes
draft: false
---

Your Markdown content starts here.
```

Slug rules:

- `posts/my-first-post.md` becomes `/posts/my-first-post/`

Draft behavior:

- Set `draft: true` to hide a post from production builds
- Draft posts are visible during local development

Starter examples are available in the `posts/` folder.
