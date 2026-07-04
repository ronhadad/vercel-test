import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 px-6 py-20 sm:px-12">
      <header className="flex max-w-2xl flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-bold text-blue-900">יוון לישראלים 🇬🇷</h1>
        <p className="text-lg text-blue-700/80">
          מדריך הטיולים שלכם ליוון - יעדים מומלצים, אטרקציות וטיפים שיעזרו
          לתכנן את הביקור הבא שלכם.
        </p>
      </header>

      <section className="grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white p-6 text-blue-950 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <span className="text-4xl">{d.emoji}</span>
            <h2 className="text-2xl font-bold">{d.name}</h2>
            <p className="text-sm text-blue-700/70">{d.tagline}</p>
            <span className="mt-2 text-sm font-medium text-blue-600">
              למדריך המלא ←
            </span>
          </Link>
        ))}
      </section>

      <p className="text-sm text-blue-700/60">
        בקרוב נוסיף עוד יעדים ביוון ✨
      </p>
    </main>
  );
}
