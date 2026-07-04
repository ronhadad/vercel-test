import Link from "next/link";

const stats = [
  { value: "12+", label: "שנות ניסיון בתכנון מסעות" },
  { value: "2,400+", label: "מטיילים מרוצים" },
  { value: "100%", label: "מסלולים בהתאמה אישית" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-3xl px-8 py-24 text-center">
        <div className="mb-4 text-[13px] font-semibold tracking-[4px] text-[#c2a05a]">
          הסיפור שלנו
        </div>
        <h1 className="mb-6.5 font-serif text-[56px] font-black leading-tight text-[#0d2b45]">
          אֶלָּדָה,
          <br />
          נולדה מאהבה
        </h1>
        <p className="mx-auto max-w-2xl text-xl leading-loose font-light text-[#3d4b5c]">
          אֶלָּדָה נולדה מתוך אהבה עמוקה ליוון - האוכל, האנשים, הים. אנחנו
          מתכננים לא עוד חופשה פשוטה אלא מסע אישי שמתאים בדיוק לקצב שלכם:
          לזוגות המחפשים רומנטיקה, למשפחות המחפשות נוחות, או למי שמחפש הרפתקה
          מלאה.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-8 pb-18">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[18px] border border-[#0d2b45]/6 bg-white px-6 py-9.5 shadow-[0_6px_24px_rgba(13,43,69,0.07)]"
            >
              <div className="font-serif text-[52px] font-black leading-none text-[#c2a05a]">
                {s.value}
              </div>
              <div className="mt-2 font-semibold text-[#0d2b45]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0d2b45] py-18 text-center text-white">
        <div className="mx-auto max-w-xl px-8">
          <h2 className="mb-4 font-serif text-[38px] text-white">
            נדבר על המסע?
          </h2>
          <p className="mb-7.5 text-lg font-light text-white/80">
            ספרו לנו על המסע שאתם מדמיינים, ואנחנו נחזור עם הצעה מדויקת.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-[#c2a05a] px-8.5 py-4 text-[16.5px] font-bold text-[#0d2b45] transition hover:bg-[#e8cf8c]"
          >
            צור קשר ←
          </Link>
        </div>
      </section>
    </main>
  );
}
