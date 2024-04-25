'use client';

interface ErrorProps {
  error: Error,
}

export default function Error({error}: ErrorProps) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>{error.message}. Please try again later.</p>
    </main>
  );
}