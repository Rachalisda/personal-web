'use client';

import React, { useState, useEffect } from 'react'; // ✅ import useState & useEffect

import { useForm, ValidationError } from '@formspree/react';
import constants from "@/app/Code/constants";
import ThankYouModal from '@/app/styles/thank-you-modal';

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
 
   // Watch for form submission success to open the modal
  useEffect(() => {
    if (state.succeeded) {
      setIsOpen(true);
    }
  }, [state.succeeded]);  
 
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
              📧 <a href={`mailto:${constants.email}`} className="underline hover:text-[var(--emphasis)]">{constants.email}</a>
            </p>
            <p>
              🔗 <a href={constants.github} target="_blank" className="underline hover:text-[var(--emphasis)]">GitHub</a>
            </p>
            <p>
              💼 <a href={constants.linkedin} target="_blank" className="underline hover:text-[var(--emphasis)]">LinkedIn</a>
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="p-3 rounded bg-[var(--background)] border border-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--emphasis)]"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="p-3 rounded bg-[var(--background)] border border-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--emphasis)]"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="p-3 rounded bg-[var(--background)] border border-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--emphasis)]"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className="bg-[var(--emphasis)] hover:bg-[var(--emphasis-shadow)] text-[var(--background)] px-6 py-3 rounded font-semibold transition duration-300"
          >
            {state.succeeded ? "Sent ✅" : (state.submitting ? "Sending..." : "Send Message")}
          </button>

          {state.succeeded && (
            <p className="text-green-500">Thanks! I’ll get back to you soon.</p>
          )}
          <ValidationError errors={state.errors} />
        </form>
      </div>

      <ThankYouModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
   
    </div>
  );
}
