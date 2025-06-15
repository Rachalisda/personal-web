'use client';

import React from 'react';
import publicRepos from '@/app/data/github-repos.json';

// Utility to clean up repo names like "personal-web" → "Personal Web"
function formatTitle(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function ProjectsPage() {
  return (
    <main className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">My GitHub Repos</h1>

      {publicRepos.length === 0 ? (
        <p>Loading or no repos found...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicRepos.map((repo) => (
            <div key={repo.id} className="bg-gray-800 p-4 rounded-md shadow-md">
              <h2 className="text-lg font-semibold mb-2">{formatTitle(repo.name)}</h2>
              <p className="text-sm mb-2">{repo.description || 'No description provided.'}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-2">
                {repo.language && (
                  <span className="bg-gray-700 border border-gray-500 rounded-full px-3 py-1">
                    {repo.language}
                  </span>
                )}
                <span className="bg-gray-700 border border-gray-500 rounded-full px-3 py-1">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
