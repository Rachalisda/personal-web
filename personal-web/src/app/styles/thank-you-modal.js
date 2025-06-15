// components/ThankYouModal.jsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // ✅ correct import
import Button from '@/app/styles/button';

export default function ThankYouModal({ isOpen, onClose }) {
  const router = useRouter(); // initialize router
  
  if (!isOpen) return null;
 
  const handleBack = () => {
    onClose();
    router.push('/'); // navigate to home
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 bg-[var(--foreground)] p-8 rounded-xl shadow-lg text-center max-w-xs">
        <h2 className="text-2xl font-bold mb-4">Thanks!</h2>
        <Button
        variant='primary'
          onClick={handleBack}
          className="mt-4 bg-[var(--emphasis)] hover:bg-[var(--emphasis-shadow)] text-[var(--background)] px-6 py-2 rounded font-semibold"
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}
