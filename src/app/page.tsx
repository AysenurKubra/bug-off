"use client";

import { useState } from "react";

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setAnswer(null);
  
    const res = await fetch("/api/solve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ errorText: errorMessage }),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      setAnswer(data.error || "Something went wrong");
      setLoading(false);
      return;
    }
  
    setAnswer(data.reply);
    setLoading(false);
  }
  

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🐞 BUG OFF - AI Error Helper</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          className="border rounded p-3 resize-none"
          rows={6}
          placeholder="Please paste your error message here..."
          value={errorMessage}
          onChange={(e) => setErrorMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Thinking..." : "Get Solution"}
        </button>
      </form>

      {answer && (
        <section className="mt-8 bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {answer}
        </section>
      )}
    </main>
  );
}
