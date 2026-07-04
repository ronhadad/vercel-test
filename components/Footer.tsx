import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#08192a] py-14 text-white/75">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-8 sm:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span
              className="h-8.5 w-8.5 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 32% 30%, #e8cf8c, #c2a05a 60%, #9d7d3a)",
              }}
            />
            <span className="font-serif text-xl font-black text-white">
              אֶלָּדָה
            </span>
          </div>
          <p className="max-w-xs text-[15px] font-light leading-relaxed">
            סוכנות הנסיעות המתמחה ביוון - אתונה, האיים והחוויה המושלמת, מתוכננת
            עד הפרט האחרון.
          </p>
        </div>

        <div>
          <div className="mb-3.5 text-[15px] font-semibold text-[#e8cf8c]">
            ניווט
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <Link href="/">בית</Link>
            <Link href="/destinations">יעדים</Link>
            <Link href="/about">אודות</Link>
            <Link href="/contact">צור קשר</Link>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[15px] font-semibold text-[#e8cf8c]">
            צור קשר
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span dir="ltr" className="text-right">
              03-720-8890
            </span>
            <span dir="ltr" className="text-right">
              hello@ellada.co.il
            </span>
            <span>רח&apos; ירדן 14, תל אביב</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-9 max-w-6xl border-t border-white/10 px-8 pt-5 text-[13px] text-white/50">
        © 2026 אֶלָּדָה נסיעות. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
