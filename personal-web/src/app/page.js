import React from 'react';
import Button from './styles/button';

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-top justify-left">
      <div className="text-left p-8 rounded-lg w-[500px]  h-[400px]">
        <h1 className="text-6xl font-bold text-[var(--text-color)] mb-7">
          HEY!
        </h1>
        <p className="text-lg text-[var(--text-color)] mb-25 relative">
          This is my website. You found it while its in the works. More content is coming soon.
          {/* Underline element */}
          <span className="absolute left-0 bottom-[-45px] w-[50%] h-[2px] bg-[var(--text-color)] opacity-50"></span>
          </p>
        <Button variant="primary">OK!</Button>
      </div>
      
      {/* Hero Section */}
      <div className="bg-[var(--foreground)]  h-[400px] mr-60 ml-60 p-10 rounded-lg shadow-lg flex-1 min-h-[300px]">
        {/* Additional content goes here */}
      </div>
    </div>
  );
}
