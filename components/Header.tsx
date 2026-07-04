"use client";

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

  return (
    <header className="sticky top-0 z-50 border-b border-[#0d2b45]/10 bg-[#faf8f2]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-6xl items-center justify-between gap-6 px-8">
        <Link href="/" className="flex items-center gap-3">
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

        <nav className="flex items-center gap-1">
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
      </div>
    </header>
  );
}
