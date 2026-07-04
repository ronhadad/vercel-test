"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactRequest } from "@/app/contact/actions";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  destination: string;
  dates: string;
  tripType: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledDest = searchParams.get("dest") ?? "";

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    destination: prefilledDest,
    dates: "",
    tripType: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sentName, setSentName] = useState("");

  function setField<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!form.fullName.trim()) e.fullName = "נא להזין שם מלא";
    else if (form.fullName.trim().length < 2) e.fullName = "השם קצר מדי";

    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) e.phone = "נא להזין מספר טלפון";
    else if (digits.length < 9 || digits.length > 11)
      e.phone = "מספר הטלפון אינו תקין";

    if (!form.email.trim()) e.email = "נא להזין כתובת אימייל";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "כתובת האימייל אינה תקינה";

    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitting(true);
    try {
      await submitContactRequest(form);
      setSentName(form.fullName.trim().split(" ")[0]);
      setSubmitted(true);
    } catch {
      setErrors({ fullName: "משהו השתבש - נסו שוב בעוד רגע" });
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setSentName("");
    setErrors({});
    setForm({
      fullName: "",
      phone: "",
      email: "",
      destination: "",
      dates: "",
      tripType: "",
    });
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-6.5 flex h-23 w-23 items-center justify-center rounded-full bg-[#0d2b45]">
          <svg
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e8cf8c"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mb-3.5 font-serif text-[34px] text-[#0d2b45]">
          הבקשה נשלחה!
        </h2>
        <p className="mb-7.5 text-[17px] leading-relaxed text-[#5b6b7d]">
          תודה {sentName} 🎉
          <br />
          נחזור עם פרטים על המסלול המדויק שלכם עם הצעת מסלול מותאמת.
        </p>
        <button
          onClick={resetForm}
          className="rounded-full border-[1.5px] border-[#0d2b45] px-7 py-3 text-[15px] font-semibold text-[#0d2b45] transition hover:bg-[#0d2b45] hover:text-white"
        >
          שליחת בקשה נוספת
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4.5">
        <div>
          <label className="mb-1.5 block text-[14.5px] font-semibold text-[#0d2b45]">
            שם מלא <span className="text-[#c2a05a]">*</span>
          </label>
          <input
            value={form.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            placeholder="השם המלא שלכם"
            className="w-full rounded-[11px] border-[1.5px] border-[#dfe4ea] px-4 py-3.5 text-base text-[#17263a] outline-none transition focus:border-[#c2a05a]"
          />
          {errors.fullName && (
            <div className="mt-1.5 text-[13.5px] text-[#c0392b]">
              {errors.fullName}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[14.5px] font-semibold text-[#0d2b45]">
              טלפון <span className="text-[#c2a05a]">*</span>
            </label>
            <input
              value={form.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="050-0000000"
              dir="ltr"
              className="w-full rounded-[11px] border-[1.5px] border-[#dfe4ea] px-4 py-3.5 text-right text-base text-[#17263a] outline-none transition focus:border-[#c2a05a]"
            />
            {errors.phone && (
              <div className="mt-1.5 text-[13.5px] text-[#c0392b]">
                {errors.phone}
              </div>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-[14.5px] font-semibold text-[#0d2b45]">
              אימייל <span className="text-[#c2a05a]">*</span>
            </label>
            <input
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder="name@email.com"
              dir="ltr"
              className="w-full rounded-[11px] border-[1.5px] border-[#dfe4ea] px-4 py-3.5 text-right text-base text-[#17263a] outline-none transition focus:border-[#c2a05a]"
            />
            {errors.email && (
              <div className="mt-1.5 text-[13.5px] text-[#c0392b]">
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[14.5px] font-semibold text-[#0d2b45]">
              יעד מבוקש
            </label>
            <select
              value={form.destination}
              onChange={(e) => setField("destination", e.target.value)}
              className="w-full cursor-pointer rounded-[11px] border-[1.5px] border-[#dfe4ea] bg-white px-4 py-3.5 text-base text-[#17263a] outline-none transition focus:border-[#c2a05a]"
            >
              <option value="">בחרו יעד…</option>
              <option value="אתונה">אתונה</option>
              <option value="סנטוריני">סנטוריני</option>
              <option value="מיקונוס">מיקונוס</option>
              <option value="רודוס">רודוס</option>
              <option value="עדיין לא יודעים">עדיין לא יודעים</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-[14.5px] font-semibold text-[#0d2b45]">
              סוג הנסיעה
            </label>
            <select
              value={form.tripType}
              onChange={(e) => setField("tripType", e.target.value)}
              className="w-full cursor-pointer rounded-[11px] border-[1.5px] border-[#dfe4ea] bg-white px-4 py-3.5 text-base text-[#17263a] outline-none transition focus:border-[#c2a05a]"
            >
              <option value="">בחרו…</option>
              <option value="זוגי">זוגי / רומנטי</option>
              <option value="משפחתי">משפחתי</option>
              <option value="חברים">חברים / קבוצתי</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[14.5px] font-semibold text-[#0d2b45]">
            תאריכים משוערים
          </label>
          <input
            value={form.dates}
            onChange={(e) => setField("dates", e.target.value)}
            placeholder="לדוגמה: אמצע ספטמבר, שבוע"
            className="w-full rounded-[11px] border-[1.5px] border-[#dfe4ea] px-4 py-3.5 text-base text-[#17263a] outline-none transition focus:border-[#c2a05a]"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-1.5 w-full rounded-xl bg-[#0d2b45] py-4 text-[17px] font-bold text-[#faf8f2] transition hover:bg-[#c2a05a] hover:text-[#0d2b45] disabled:opacity-60"
        >
          {submitting ? "שולח…" : "שליחת בקשת מחיר"}
        </button>
        <p className="mt-0.5 text-center text-[13px] text-[#94a3b0]">
          בשליחת הטופס אתם מאשרים שנציג שלנו יצור עמכם קשר לגבי הבקשה.
        </p>
      </div>
    </form>
  );
}
