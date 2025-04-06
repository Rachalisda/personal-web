'use client';
import React from 'react';

export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-color)] flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-[var(--emphasis)]">
          Get in Touch
        </h1>
  
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-5xl bg-[var(--foreground)] p-10 rounded-xl shadow-lg">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold">Let’s work together!</h2>
            <p>
              Whether you have a question, a project idea, or just want to say hi —
              feel free to reach out. I’m always open to new opportunities and collaborations.
            </p>
  
            <div className="space-y-2">
              <p>
                📧 <a href="mailto:your.email@example.com" className="underline hover:text-[var(--emphasis)]">your.email@example.com</a>
              </p>
              <p>
                🔗 <a href="https://github.com/yourusername" target="_blank" className="underline hover:text-[var(--emphasis)]">GitHub</a>
              </p>
              <p>
                💼 <a href="https://linkedin.com/in/yourusername" target="_blank" className="underline hover:text-[var(--emphasis)]">LinkedIn</a>
              </p>
            </div>
          </div>
  
          {/* Right Section (Form) */}
          <form className="flex-1 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="p-3 rounded bg-[var(--background)] border border-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--emphasis)]"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="p-3 rounded bg-[var(--background)] border border-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--emphasis)]"
                required
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="p-3 rounded bg-[var(--background)] border border-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--emphasis)]"
                required
              />
            </div>
  
            <button
              type="submit"
              className="bg-[var(--emphasis)] hover:bg-[var(--emphasis-shadow)] text-[var(--background)] px-6 py-3 rounded font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  