import glob from 'fast-glob';
import * as path from 'path';

// Check the actual interface needs...
export interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  component?: any;
}

async function importArticle(articleFilename: string): Promise<Article> {
  const { meta, default: component } = await import(
    `src/pages/articles/${articleFilename}`
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort(
    (a, z) => new Date(z.date).getTime() - new Date(a.date).getTime()
  );
}
