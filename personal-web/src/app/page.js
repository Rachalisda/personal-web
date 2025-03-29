import React from 'react';
import Button from './styles/button';


export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="text-center p-8 bg-[var(--foreground)] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[var(--text-color)] mb-4">
          Welcome to My Website!
        </h1>
        <p className="text-lg text-[var(--text-color)] mb-8">
          Website is coming soon
        </p>
        <Button variant="primary">OK!</Button>
      </div>
    </div>
  );
}
