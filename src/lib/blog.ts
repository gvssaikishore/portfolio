import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');
const MARKDOWN_FILE_REGEX = /\.(md|mdx)$/i;

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  draft: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function normalizeTags(tags: unknown): string[] {
  if (Array.isArray(tags)) {
    return tags.filter((tag): tag is string => typeof tag === 'string');
  }

  if (typeof tags === 'string') {
    return tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function isMarkdownFile(fileName: string): boolean {
  return MARKDOWN_FILE_REGEX.test(fileName);
}

function isDateValue(value: string): boolean {
  return !Number.isNaN(Date.parse(value));
}

function isDraftValue(value: unknown): boolean {
  return value === true;
}

function shouldIncludePost(draft: boolean): boolean {
  if (process.env.NODE_ENV === 'production') {
    return !draft;
  }

  return true;
}

function parsePost(slug: string, source: string): BlogPost {
  const { data, content } = matter(source);
  const title = typeof data.title === 'string' ? data.title : slug;
  const date = typeof data.date === 'string' && isDateValue(data.date)
    ? data.date
    : new Date(0).toISOString();
  const summary = typeof data.summary === 'string' ? data.summary : '';
  const tags = normalizeTags(data.tags);
  const draft = isDraftValue(data.draft);

  return {
    slug,
    title,
    date,
    summary,
    tags,
    draft,
    content,
  };
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIRECTORY);
    const markdownFiles = files.filter((fileName) => isMarkdownFile(fileName));
    const posts = await Promise.all(markdownFiles.map((fileName) => loadPostByFileName(fileName)));

    return posts.filter((post) => shouldIncludePost(post.draft)).map((post) => post.slug);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

async function loadPostByFileName(fileName: string): Promise<BlogPost> {
  const slug = fileName.replace(MARKDOWN_FILE_REGEX, '');
  const filePath = path.join(POSTS_DIRECTORY, fileName);
  const source = await fs.readFile(filePath, 'utf8');

  return parsePost(slug, source);
}

export async function getAllPostsMeta(): Promise<BlogPostMeta[]> {
  const fileNames = await getPostSlugs();

  const posts = await Promise.all(
    fileNames.map(async (slug) => {
      const markdownPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
      const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);

      try {
        const source = await fs.readFile(markdownPath, 'utf8');
        return parsePost(slug, source);
      } catch {
        const source = await fs.readFile(mdxPath, 'utf8');
        return parsePost(slug, source);
      }
    })
  );

  return posts
    .filter((post) => shouldIncludePost(post.draft))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map(({ content, ...meta }) => meta);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fileCandidates = [`${slug}.md`, `${slug}.mdx`];

  for (const fileName of fileCandidates) {
    try {
      const post = await loadPostByFileName(fileName);
      if (!shouldIncludePost(post.draft)) {
        return null;
      }

      return post;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        continue;
      }

      throw error;
    }
  }

  return null;
}
