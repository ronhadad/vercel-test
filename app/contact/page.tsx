import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div className="pt-2">
            <div className="mb-4 text-[13px] font-semibold tracking-[4px] text-[#c2a05a]">
              בקשת מחיר
            </div>
            <h1 className="mb-5 font-serif text-[50px] font-black leading-tight text-[#0d2b45]">
              בואו נתכנן
              <br />
              את המסע שלכם
            </h1>
            <p className="mb-8.5 text-lg font-light leading-relaxed text-[#3d4b5c]">
              השאירו את הפרטים ונחזור אליכם עם הצעת מסלול מותאמת אישית - ללא
              עמלת תיווך ובלי התחייבות.
            </p>
            <div className="flex flex-col gap-4.5">
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#0d2b45] text-[#e8cf8c]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-[#0d2b45]">טלפון</div>
                  <div dir="ltr" className="text-right text-[#5b6b7d]">
                    03-720-8890
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#0d2b45] text-[#e8cf8c]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 4h16v16H4zM4 6l8 6 8-6" />
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-[#0d2b45]">אימייל</div>
                  <div dir="ltr" className="text-right text-[#5b6b7d]">
                    hello@ellada.co.il
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#0d2b45] text-[#e8cf8c]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <div className="font-bold text-[#0d2b45]">משרד</div>
                  <div className="text-[#5b6b7d]">רח&apos; ירדן 14, תל אביב</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-[#0d2b45]/6 bg-white p-9.5 shadow-[0_14px_44px_rgba(13,43,69,0.12)]">
            <Suspense
              fallback={
                <div className="py-20 text-center text-[#94a3b0]">טוען…</div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
