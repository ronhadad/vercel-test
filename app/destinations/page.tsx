import DestinationsGrid from "@/components/DestinationsGrid";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main>
      <section className="bg-[#0d2b45] py-20 text-white">
        <div className="mx-auto max-w-6xl px-8 text-center">
          <div className="mb-3.5 text-[13px] font-semibold tracking-[4px] text-[#e8cf8c]">
            היעדים שלנו
          </div>
          <h1 className="mb-4 font-serif text-[56px] font-black text-white">
            הכירו פנים פנים את יוון
          </h1>
          <p className="mx-auto max-w-xl text-lg font-light text-white/80">
            בחרו יעד לפרטים מלאים, נקודות עניין מומלצות והמלצות לתכנון המסע.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-8 py-22">
        <DestinationsGrid destinations={destinations} />
      </section>
    </main>
  );
}
