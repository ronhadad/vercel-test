"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ message: string; timestamp: string } | null>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-4xl font-bold">Vercel Test App</h1>
      <p className="text-gray-500">Response from API route:</p>
      {data ? (
        <div className="rounded-lg bg-gray-100 p-6 text-center">
          <p className="text-lg font-medium text-gray-900">{data.message}</p>
          <p className="mt-2 text-sm text-gray-500">{data.timestamp}</p>
        </div>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </main>
  );
}
