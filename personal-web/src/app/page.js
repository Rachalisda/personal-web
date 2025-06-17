import React from 'react';
import Button from './styles/button';
import Card from './styles/card';
import Link from "next/link";
import publicRepos from '@/app/data/github-repos.json';
import Contact from './styles/contact-section';
import navLinks from '@/app/data/links.json';
import Image from 'next/image';

const aboutLink = navLinks.find(link => link.label === 'About')?.href || '/about';

export default function Page() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[500px]">

        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Base background layer */}
          <div className="absolute inset-0 bg-[var(--background)]" />

          {/* Top white wedge (scaled down) */}
          <div
            className="absolute top-0 left-0 w-full h-[80px] bg-white z-10"
            style={{
              clipPath: 'polygon(0 100%, 100% 60%, 100% 0%, 0% 0%)',
            }}
          />

          {/* Mid foreground wedge */}
          <div
            className="absolute bottom-0 left-0 w-full h-[100px] bg-[var(--foreground)] z-0"
            style={{
              clipPath: 'polygon(0 40%, 100% 60%, 100% 100%, 0% 100%)',
            }}
          />

          {/* Back layer (darker tone) */}
          <div
            className="absolute bottom-0 left-0 w-full h-[100px] bg-[color-mix(in srgb, var(--foreground) 80%, black 20%)] z-[-1]"
            style={{
              clipPath: 'polygon(0 30%, 100% 20%, 100% 100%, 0% 100%)',
            }}
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex h-full">
          {/* Left side — content */}
          <div className="w-1/2 bg-[var(--background)] bg-opacity-95 p-10 flex flex-col justify-center">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold mb-4">Love Data and Reports?</h1>
              <p className="text-lg text-[var(--text-color)] mb-6 relative">
                We have what you need. More content is coming soon.
                <span className="absolute left-0 bottom-[-10px] w-[50%] h-[2px] bg-[var(--text-color)] opacity-50" />
              </p>
              <Link href={aboutLink}>
                <Button variant="primary">Learn About Me</Button>
              </Link>
            </div>
          </div>

          {/* Right side — blank */}
          <div className="w-1/2 hidden sm:block" />
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-[var(--background)] py-12 px-4">
        <h1 className="text-2xl font-semibold text-center mb-8">Main 3 Projects</h1>

        <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 md:space-y-0 items-stretch">
          {publicRepos.slice(0, 3).map((repo, idx) => (
            <div key={repo.id} className="w-full md:w-1/3 flex">
              <Link
                href={`/projects/${repo.name}`}
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
              </Link>
            </div>
          ))}
        </div>

        <p className="p-10 text-[var(--text-color)] text-center">
          These are the top ones, but there’s more.
        </p>

        <div className="text-center">
          <Link href="/projects">
            <Button variant="secondary">See More Projects</Button>
          </Link>
        </div>
      </section>

      {/* Call To Action */}
      <Contact />
    </main>
  );
}
