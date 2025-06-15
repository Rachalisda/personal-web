'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimateAllHeadings() {
  const pathname = usePathname(); // triggers re-run on route change

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          } else {
            entry.target.classList.remove('opacity-100');
            entry.target.classList.add('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const headings = document.querySelectorAll('h1');
    headings.forEach(h1 => {
      h1.classList.add(
        'opacity-0',
        'transition-opacity',
        'duration-700'
      );
      observer.observe(h1);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
