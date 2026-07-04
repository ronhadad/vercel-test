import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-6 py-20 sm:px-12">
      <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="text-5xl">{destination.emoji}</span>
        <h1 className="text-4xl font-bold text-blue-900">
          {destination.name}
        </h1>
        <p className="text-lg text-blue-700/80">{destination.tagline}</p>
        <p className="mt-2 text-blue-950/70">{destination.intro}</p>
      </div>

      <section className="w-full max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          אטרקציות מומלצות
        </h2>
        <div className="flex flex-col gap-4">
          {destination.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-xl border border-blue-100 bg-white p-5 text-blue-950 shadow-sm"
            >
              <h3 className="font-bold">{h.title}</h3>
              <p className="mt-1 text-sm text-blue-700/70">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          טיפים לטיול
        </h2>
        <ul className="list-inside list-disc space-y-2 text-blue-950/80">
          {destination.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <Link href="/" className="text-sm font-medium text-blue-600">
        → חזרה לכל היעדים
      </Link>
    </main>
  );
}
