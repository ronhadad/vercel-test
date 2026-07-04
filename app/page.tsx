import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { destinations } from "@/data/destinations";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-[#0d2b45]">
        <PlaceholderImage gradient="linear-gradient(135deg, #12365a 0%, #0d2b45 55%, #091d30 100%)" />
        <div className="absolute inset-0 bg-linear-to-l from-[#0d2b45]/35 via-[#0d2b45]/70 to-[#0d2b45]/92" />
        <div className="relative mx-auto w-full max-w-6xl px-8">
          <div className="max-w-xl">
            <div className="mb-5.5 flex items-center gap-2.5 text-[13px] font-semibold tracking-[5px] text-[#e8cf8c]">
              <span className="h-px w-8.5 bg-[#c2a05a]" />
              נוסעת אתכם ליוון
            </div>
            <h1 className="mb-5.5 font-serif text-[52px] font-black leading-[1.05] text-white sm:text-[66px]">
              יוון,
              <br />
              כמו שתמיד דמיינתם.
            </h1>
            <p className="mb-9 max-w-lg text-lg font-light leading-relaxed text-white/85 sm:text-xl">
              מסלולים מותאמים אישית, בתי מלון נבחרים ותמיכה מלאה בעברית - כדי
              שהיעד היחיד שתחשבו עליו יהיה הים.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/destinations"
                className="rounded-full bg-[#c2a05a] px-8 py-4 text-[16.5px] font-bold text-[#0d2b45] transition hover:bg-[#e8cf8c]"
              >
                לכל היעדים
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-[1.5px] border-white/55 px-8 py-4 text-[16.5px] font-semibold text-white transition hover:bg-white/10 hover:border-white"
              >
                בקשת פרטים ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations teaser */}
      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="mb-13 text-center">
          <div className="mb-3.5 text-[13px] font-semibold tracking-[4px] text-[#c2a05a]">
            היעדים המובילים · מסע ביוון
          </div>
          <h2 className="font-serif text-[44px] font-bold text-[#0d2b45]">
            כמה מהיעדים שלנו
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href="/destinations"
              className="group overflow-hidden rounded-2xl border border-[#0d2b45]/6 bg-white shadow-[0_6px_24px_rgba(13,43,69,0.08)] transition hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(13,43,69,0.18)]"
            >
              <div className="relative h-58 overflow-hidden bg-[#0d2b45]">
                <PlaceholderImage gradient={d.gradient} />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0d2b45]/72" />
                <div className="absolute inset-x-4.5 bottom-3.5">
                  <div className="text-[11px] font-semibold tracking-[3px] text-[#e8cf8c]">
                    {d.en}
                  </div>
                  <div className="font-serif text-[27px] font-bold leading-none text-white">
                    {d.name}
                  </div>
                </div>
              </div>
              <div className="px-5 py-4.5">
                <p className="mb-3.5 min-h-11.5 text-[15px] leading-relaxed text-[#5b6b7d]">
                  {d.blurb}
                </p>
                <span className="text-[14.5px] font-bold text-[#c2a05a]">
                  לפרטים מלאים ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#0d2b45] py-22 text-white">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-14 text-center">
            <div className="mb-3.5 text-[13px] font-semibold tracking-[4px] text-[#e8cf8c]">
              אֶלָּדָה
            </div>
            <h2 className="font-serif text-[42px] font-bold text-white">
              למה לתכנן איתנו את המסע
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "ניסיון מקומי",
                text: "אנחנו מתכננים תפרי מותאמים אישית - קצב, סטייל ותקציב.",
              },
              {
                title: "תמיכה מלאה",
                text: "צוות תמיכה בעברית לאורך כל שעות היום במהלך הטיול.",
              },
              {
                title: "מחיר הוגן",
                text: "מחירים שקופים בהתאמה אישית עם ליווי אישי ללא הפתעות.",
              },
              {
                title: "בטוח ואמין",
                text: "אתם לא מספר - אתם אורחים, ואנחנו נשמח לעזור בכל שלב.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="mb-2.5 font-serif text-[22px] text-white">
                  {item.title}
                </h3>
                <p className="text-[15px] font-light leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-8 py-24 text-center">
        <div className="mb-4 font-serif text-[80px] leading-none text-[#c2a05a]">
          &ldquo;
        </div>
        <p className="mb-7 font-serif text-[28px] font-medium leading-relaxed text-[#0d2b45] sm:text-[30px]">
          מסלול ברמה שלא ציפינו לה - מפרטי תיאום הקפדנים ועד ההמלצות המקומיות,
          פשוט התאהבנו ביוון.
        </p>
        <div className="text-[16px] font-bold text-[#0d2b45]">רותם וגיל כהן</div>
        <div className="text-[14px] font-semibold text-[#c2a05a]">
          סנטוריני ומיקונוס · 10 ימים
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#c2a05a] py-20">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h2 className="mb-4 font-serif text-[44px] font-bold text-[#0d2b45]">
            מוכנים לצאת לדרך?
          </h2>
          <p className="mb-8 text-[19px] text-[#0d2b45]/80">
            השאירו פרטים ונחזור אליכם עם הצעת מסלול מותאמת אישית - ללא
            התחייבות.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#0d2b45] px-10 py-4 text-[17px] font-bold text-[#faf8f2] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(13,43,69,0.35)]"
          >
            בקשת מסלול מותאם
          </Link>
        </div>
      </section>
    </main>
  );
}
