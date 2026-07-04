import { rhodesTrip } from "@/data/rhodes-trip";

export default function RhodesTripPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-14 px-6 py-20 sm:px-12">
      <header className="flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="text-5xl">🏰☀️</span>
        <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl">
          {rhodesTrip.title}
        </h1>
        <p className="text-lg text-blue-700/80">{rhodesTrip.dateRange}</p>
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          {rhodesTrip.duration}
        </span>
      </header>

      <div className="relative flex w-full max-w-2xl flex-col gap-8">
        <div className="absolute right-6 top-2 bottom-2 w-px bg-blue-200 sm:right-7" />

        {rhodesTrip.days.map((day) => (
          <section key={day.dayNumber} className="relative flex gap-5">
            <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white sm:h-14 sm:w-14">
              {day.dayNumber}
            </div>

            <div className="flex-1 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-bold text-blue-950">
                  {day.title}
                </h2>
                <span className="text-sm text-blue-600">
                  {day.weekday}, {day.date}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {day.activities.map((a) => (
                  <li key={a.title} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    <div>
                      <p className="font-medium text-blue-950">{a.title}</p>
                      <p className="text-sm text-blue-700/70">
                        {a.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
                💡 <span className="font-medium">טיפ:</span> {day.tip}
              </div>
            </div>
          </section>
        ))}
      </div>

      <p className="max-w-xl text-center text-sm text-blue-700/60">
        המסלול הוא הצעה גמישה - מזג האוויר, שעות הפעילות והתחושה באותו יום
        יכולים לשנות את הסדר. כדאי לבדוק שעות פתיחה ולהזמין את שיט סימי מראש.
      </p>
    </main>
  );
}
