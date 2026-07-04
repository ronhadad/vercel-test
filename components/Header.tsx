"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "בית" },
  { href: "/destinations", label: "יעדים" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0d2b45]/10 bg-[#faf8f2]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-6xl items-center justify-between gap-6 px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="h-10 w-10 flex-none rounded-full shadow-[0_4px_14px_rgba(194,160,90,0.4)]"
            style={{
              background:
                "radial-gradient(circle at 32% 30%, #e8cf8c, #c2a05a 60%, #9d7d3a)",
            }}
          />
          <span className="leading-none">
            <span className="block font-serif text-[23px] font-black tracking-wide text-[#0d2b45]">
              אֶלָּדָה
            </span>
            <span className="block text-[10px] font-semibold tracking-[4px] text-[#c2a05a]">
              ELLADA · GREECE
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-[15.5px] font-semibold text-[#17263a]"
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute inset-x-3.5 bottom-0.5 h-0.5 rounded-full bg-[#c2a05a]" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mr-2.5 rounded-full bg-[#0d2b45] px-5.5 py-2.5 text-[15px] font-semibold text-[#faf8f2] transition hover:bg-[#c2a05a] hover:text-[#0d2b45]"
          >
            בקשת מחיר
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="פתיחת תפריט"
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-[#0d2b45] md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="border-t border-[#0d2b45]/10 bg-[#faf8f2] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-3 text-[16px] font-semibold ${
                  pathname === link.href
                    ? "bg-[#0d2b45]/6 text-[#0d2b45]"
                    : "text-[#17263a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
