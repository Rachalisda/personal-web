'use client';

import { useRouter } from 'next/navigation';

export default function NotFound({ repoName }) {
  const router = useRouter();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-3xl font-bold text-red-500 mb-4">README Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, we couldn't find a README for <span className="font-semibold">{repoName}</span>.
      </p>
      <button
        onClick={() => router.back()}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
      >
        ← Go Back
      </button>
    </div>
  );
}
