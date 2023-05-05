import { Feed } from 'feed';
import { mkdir, writeFile } from 'fs/promises';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ReactDOMServer from 'react-dom/server';

import { Article, getAllArticles } from './getAllArticles';

interface Author {
  name: string;
  email: string;
}

// FIXME - Change this Author + Other RSS Feed info to be correct when known
export async function generateRssFeed(): Promise<void> {
  const articles: Article[] = await getAllArticles();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const author: Author = {
    name: 'Trevor Campbell',
    email: 'spencer@planetaria.tech',
  };

  const feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl as string,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  });

  for (const article of articles) {
    const url = `${siteUrl}/articles/${article.slug}`;
    const html = ReactDOMServer.renderToStaticMarkup(
      <MemoryRouterProvider>
        <article.component isRssFeed />
      </MemoryRouterProvider>
    );

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    });
  }

  await mkdir('./public/rss', { recursive: true });
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ]);
}
