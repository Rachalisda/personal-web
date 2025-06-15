import React from 'react';
import Image from 'next/image';
import constants from "@/app/Code/constants";
import Contact from '@/app/styles/contact-section';

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text-color)] min-h-screen px-8 py-16 flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
         
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Hey, I’m {constants.firstname}</h1>
          <p className="text-lg max-w-xl">
            I specialize in building automation tools, clean dashboards, and data pipelines that make decision-making easier. My goal is to make data both beautiful and functional.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {['Python', 'SQL', 'Looker Studio', 'Excel', 'Power BI', 'JavaScript'].map(skill => (
            <span
              key={skill}
              className="bg-[var(--foreground)] px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
        <ul className="space-y-6">
          <li>
            <h3 className="font-semibold">🎓 Studied {constants.degree}</h3>
            <p className="text-sm">Started my foundation in problem-solving and data logic.</p>
          </li>
          <li>
            <h3 className="font-semibold">💼 First Role in [Industry]</h3>
            <p className="text-sm">Built reports and discovered how much I enjoy data automation.</p>
          </li>
          <li>
            <h3 className="font-semibold">🚀 Pivot to Analytics & Automation</h3>
            <p className="text-sm">Now I design workflows, dashboards, and pipelines that save hours of time.</p>
          </li>
        </ul>
      </section>

      <Contact></Contact>
     
    </main>
  );
}
