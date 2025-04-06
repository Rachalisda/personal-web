'use client';

import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Commission Calculator',
    description:
      'A dynamic Excel + dashboard tool for sales tracking, KPI metrics, and commissions, built with automation in mind.',
    tech: ['Excel', 'VBA', 'Data Viz'],
    image: '/images/commission-tool.png', // Swap with your image or leave blank
    link: '#',
  },
  {
    title: 'Big Biller KPI Dashboard',
    description:
      'Custom-built dashboard that integrates with Big Biller to track performance metrics and automate data reporting.',
    tech: ['Looker Studio', 'Big Biller API', 'ETL'],
    image: '/images/kpi-dashboard.png',
    link: '#',
  },
  {
    title: 'Personal Data Pipeline',
    description:
      'Local SQL + scripting project to automate data cleaning and transformation from API sources into visual dashboards.',
    tech: ['SQL', 'Python', 'ETL'],
    image: '/images/data-pipeline.png',
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--text-color)] min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-16 text-[var(--emphasis)]">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[var(--foreground)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {project.image && (
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[var(--background)] border border-[var(--text-color)] rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-[var(--emphasis)] text-sm font-medium underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
