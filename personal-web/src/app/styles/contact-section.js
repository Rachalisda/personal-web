import Link from 'next/link';
import Button from '@/app/styles/button';

export default function Contact() {
  return (
   
    <section className="text-center py-10 border-t border-[var(--foreground)]">

      <h1 className="text-2xl font-bold mb-4">Let’s Work Together</h1>
      <p className="text-md mb-6">
        Got a project or idea? I’d love to hear it and bring it to life with data and design.
      </p>
      <Link href="/contact">
            <Button variant="primary">Contact Me</Button>
      </Link>
    </section>
  );
}
