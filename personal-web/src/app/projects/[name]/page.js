import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export async function generateStaticParams() {
  const repos = require('@/app/data/github-repos.json');
  return repos.map(r => ({ name: r.name }));
}

export default async function ProjectPage({ params }) {
  const { name } = params;
  const url = `https://raw.githubusercontent.com/Rachalisda/${name}/main/README.md`;
  const res = await fetch(url);
  if (!res.ok) return <p>README not found for {name}.</p>;
  const markdown = await res.text();

  return (
    <div className="prose dark:prose-invert mx-auto p-8">
      <Link href="/projects" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Projects
      </Link>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
        img: ({ src, alt }) => {
          const path = src.startsWith('http')
            ? src
            : `https://raw.githubusercontent.com/Rachalisda/${name}/main/${src}`;
          return <img src={path} alt={alt} className="rounded-lg" />;
        },
        a: ({ href, children }) => (
          <Link href={href} className="text-blue-600 hover:underline">
            {children}
          </Link>
        ),
      }}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
