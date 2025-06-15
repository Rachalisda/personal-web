// src/app/projects/[name]/page.js

export { default } from './read-me-render';

export const dynamicParams = true;

export async function generateStaticParams() {
  const repos = require('@/app/data/github-repos.json');
  return repos.map(r => ({ name: r.name }));
}
