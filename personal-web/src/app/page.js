import React from 'react';
import Button from './styles/button';
import Card from './styles/card';
import Link from "next/link";
import publicRepos from '@/app/data/github-repos.json';
import Contact from './styles/contact-section';

export default function Page() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-[var(--background)]">
        <div className="container mx-auto relative min-h-[400px] px-4 py-8">
          <div className="block sm:hidden absolute inset-0 z-0">
            <div className="bg-[var(--foreground)] h-full w-full p-10 rounded-lg opacity-30" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-start gap-8">
            <div className="p-4 sm:w-1/2">
              <h1 className="text-3xl font-bold mb-4">Love Data and Reports?</h1>
              <p className="text-lg text-[var(--text-color)] mb-6 relative">
                We have what you need. More content is coming soon.
                <span className="absolute left-0 bottom-[-10px] w-[50%] h-[2px] bg-[var(--text-color)] opacity-50"></span>
              </p>
              <Button variant="primary">OK!</Button>
            </div>
            <div className="hidden sm:block sm:w-1/2 relative z-0">
              <div className="bg-[var(--foreground)] h-[400px] w-full p-10 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-[var(--background)] py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Main 3 Projects</h2>

        <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 md:space-y-0 items-stretch">
          {publicRepos.slice(0, 3).map((repo, idx) => (
            <div key={repo.id} className="w-full md:w-1/3 flex">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex flex-col h-full"
              >
                <Card
                  title={repo.name}
                  className="flex-grow"
                  topBarLight={3}
                  topBarDark={3}
                  variant={idx === 0 ? "light" : idx === 1 ? "medium" : "dark"}
                  secondDots={idx === 1}
                >
                  {repo.description || "No description provided."}
                </Card>
              </a>
            </div>
          ))}
        </div>

        <p className="p-10 text-[var(--text-color)] text-center">
          These are the top ones, but there’s more.
        </p>

        <div className="text-center">
          <Link href="/projects">
            <Button variant="secondary">Take me to More</Button>
          </Link>
        </div>
      </section>

      {/* Call To Action */}
      <Contact></Contact>
    </main>
  );
}
