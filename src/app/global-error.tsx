'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#05090D] text-white flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#F5223A] text-white font-bold"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
