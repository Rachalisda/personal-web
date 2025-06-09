import React from 'react';
import Button from './styles/button';
import Card from './styles/card';

export default function Page() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-[var(--background)]">
        <div className="container mx-auto flex flex-col md:flex-row items-start min-h-[400px] gap-8 px-4 py-8">
          {/* Main Content */}
          <div className="relative z-10 p-4 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">Love Data and Reports?</h1>
            <p className="text-lg text-[var(--text-color)] mb-6 relative">
              We have what you need. More content is coming soon.
              <span className="absolute left-0 bottom-[-10px] w-[50%] h-[2px] bg-[var(--text-color)] opacity-50"></span>
            </p>
            <Button variant="primary">OK!</Button>
          </div>

          {/* Hero Visual / Decorative Box */}
          <div className="relative z-0 md:w-1/2">
            <div className="bg-[var(--foreground)] h-[400px] w-full p-10 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-[var(--background)] py-12 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Main 3 Projects</h2>
        <div className="container mx-auto flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="w-full md:w-1/3 flex justify-center">
              <Card
                title={idx === 1 ? "Analysis" : "Project"}
                topBarLight={3}
                topBarDark={3}
                variant={idx === 2 ? "dark" : "light"}
                secondDots={false}
                footer={
                  <div className="bg-[var(--foreground)] flex-1 h-24 rounded" />
                }
              >
                Then I’m gonna analyze something else.
              </Card>
            </div>
          ))}
        </div>

        <p className="p-10 text-[var(--text-color)] text-center">
          These are the top ones, but there’s more.
        </p>

        <div className="text-center">
          <Button variant="secondary">Take me to More</Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-[var(--foreground)] px-4">
        <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-md mb-6">
          Got a project or idea? I’d love to hear it and bring it to life with data and design.
        </p>
        <Button variant="primary">Contact Me</Button>
      </section>
    </main>
  );
}
