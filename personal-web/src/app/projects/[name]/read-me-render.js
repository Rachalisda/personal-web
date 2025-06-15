import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import NotFound from './../../styles/readme-not-found';
import BackButton from '@/app/styles/back-button';

async function fetchReadme(name) {
  const url = `https://raw.githubusercontent.com/Rachalisda/${name}/main/README.md`;
  const res = await fetch(url);
  if (!res.ok) return null;
  return await res.text();
}

// ✅ Only accepts `name` — not params
async function renderReadmePage(name) {
  const readme = await fetchReadme(name);

  if (!readme) {
    return <NotFound repoName={name} />;
  }

  return (
    <div className="prose dark:prose-invert mx-auto p-8">
      <BackButton />
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
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
        }}
      >
        {readme}
      </ReactMarkdown>
    </div>
  );
}

// ✅ Unwrap params.name *before* passing down
export default async function ReadmeRenderer({ params }) {
  const name = params?.name;
  return await renderReadmePage(name);
}
