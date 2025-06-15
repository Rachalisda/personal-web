import Link from 'next/link';

export default function Contact() {
  return (
    <section className="text-center py-10 border-t border-[var(--foreground)]">
      <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
      <p className="text-md mb-6">
        Got a project or idea? I’d love to hear it and bring it to life with data and design.
      </p>
      <Link href="/contact"
       
          className="
            inline-block
            bg-[var(--emphasis)]
            text-[var(--background)]
            px-6 py-3
            rounded-full
            hover:bg-[var(--emphasis-shadow)]
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--emphasis)]
            transition
          "
          >
          Contact Me
        
      </Link>
    </section>
  );
}
